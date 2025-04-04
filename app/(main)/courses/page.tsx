"use client";

import React, { use, useEffect, useState } from "react";
import Sidebar from "./_components/Sidebar";
import CourseList from "./_components/CourseList";
import { Course } from "@/types";
import { getAllPublishedCoursesByCat } from "@/app/(user)/actions/getCourse";
import Loading from "@/app/_components/Loading";

const COURSES_PER_PAGE = 8;

type SearchParams = Promise<{ [key: string]: string | number | undefined }>;

const CoursesPage = (props: { searchParams: SearchParams }) => {
  const searchParams = use(props.searchParams);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);

  const currentCategory = searchParams?.category as string;
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = Math.ceil(courses.length / COURSES_PER_PAGE);

  const displayCourses = courses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  useEffect(() => {
    const getCourses = async () => {
      setLoading(true);
      const result = await getAllPublishedCoursesByCat(currentCategory);
      if (result) {
        setCourses(result as Course[]);
      }
      setLoading(false);
    };
    getCourses();
  }, [currentCategory]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="hidden md:block md:w-64 fixed inset-y-0 bg-gray-100 p-4">
        <Sidebar />
      </div>
      <div className="flex-1 md:ml-64 p-4 md:p-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">Explore More Courses</h2>
          <p>Explore more courses build with AI by all users</p>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            <h2 className="col-span-full text-center text-lg font-bold text-myPrimary">
              No courses found
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
