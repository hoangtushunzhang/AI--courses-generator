"use client";

import React, { use, useEffect, useState } from "react";
import Sidebar from "./_components/Sidebar";
import CourseList from "./_components/CourseList";
import { Course } from "@/types";
import { getAllPublishedCoursesByCat } from "@/app/(user)/actions/getCourse";
import Loading from "@/app/_components/Loading";
import { useDebounce } from "@/app/hooks/useDebounce";

const COURSES_PER_PAGE = 8;

type SearchParams = Promise<{ [key: string]: string | number | undefined }>;

const CoursesPage = (props: { searchParams: SearchParams }) => {
  const searchParams = use(props.searchParams);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  const currentCategory = searchParams?.category as string;
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);

  const displayCourses = filteredCourses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  useEffect(() => {
    const normalize = (text: string) => text.toLowerCase().replace(/\s+/g, "");

    if (!debouncedSearchTerm.trim()) {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter((course) =>
        normalize(course.courseOutputByAI?.courseName || "").includes(
          normalize(debouncedSearchTerm)
        )
      );
      setFilteredCourses(filtered);
    }
  }, [debouncedSearchTerm, courses]);

  useEffect(() => {
    const getCourses = async () => {
      setLoading(true);
      const result = await getAllPublishedCoursesByCat(currentCategory);
      if (result) {
        setCourses(result as Course[]);
        setFilteredCourses(result as Course[]);
      }
      setLoading(false);
    };
    getCourses();
  }, [currentCategory]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-20 md:w-64 hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 p-4 md:p-10 flex flex-col items-center md:items-start">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold">Explore More Courses</h2>
          <p>Explore more courses build with AI by all users</p>
        </div>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-64"
        />
        <div className="mt-5 min-h-screen grid">
          {loading || displayCourses?.length === undefined ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <Loading />
            </div>
          ) : displayCourses?.length > 0 ? (
            <div>
              <CourseList
                displayCourses={displayCourses}
                totalPages={totalPages}
              />
            </div>
          ) : (
            <h2 className="font-bold text-lg text-myPrimary">
              No courses found
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
