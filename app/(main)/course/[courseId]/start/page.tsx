"use client";

import { getPublishCourseByCourseId } from "@/app/(user)/actions/getCourse";
import { Chapter, Course, CourseOutputChapter } from "@/types";
import { useUser } from "@clerk/nextjs";
import React, { use, useCallback, useEffect, useState } from "react";

import ChapterListCard from "./_components/ChapterListCard";
import { getChapterById } from "@/app/(user)/actions/getChapters";
import ChapterContent from "./_components/ChapterContent";

type Params = Promise<{ courseId: string }>;

const CourseStartPage = (props: { params: Params }) => {
  const params = use(props.params);

  const { user } = useUser();

  const [course, setCourse] = useState<Course>({} as Course);
  const [chapter, setChapter] = useState<Chapter>({} as Chapter);
  const [loading, setLoading] = useState(true);
  const [selectedChapter, setSelectedChapter] = useState<CourseOutputChapter>(
    {} as CourseOutputChapter
  );

  const courseId = params?.courseId;
  const courseChapters = course?.courseOutputByAI?.chapters;

  useEffect(() => {
    const getCourse = async () => {
      setLoading(true);
      if (!courseId || !user) {
        setLoading(false);
        return;
      }
      try {
        const result = await getPublishCourseByCourseId(courseId);
        setCourse(result as Course);
      } finally {
        setLoading(false);
      }
    };
    getCourse();
  }, [courseId, user]);

  const getSelectedChapterContent = useCallback(
    async (chapterId: number) => {
      setLoading(true);
      if (!courseId || !user) {
        setLoading(false);
        return;
      }
      try {
        const result = await getChapterById(courseId, chapterId);
        setChapter(result as Chapter);
      } finally {
        setLoading(false);
      }
    },
    [courseId, user]
  );

  useEffect(() => {
    if (courseChapters?.length > 0) {
      setSelectedChapter(courseChapters[0]);
      getSelectedChapterContent(0);
    }
  }, [courseChapters, getSelectedChapterContent]);

  return (
    <div className="">
      {/* Chapter list sidebar */}
      <div className="fixed md:w-64 hidden md:block h-[600px] overflow-scroll border-r-2 shadow-sm bg-white">
        <h2 className="font-medium text-lg bg-blue-600 p-3 text-white mb-5">
          {course?.courseOutputByAI?.courseName}
        </h2>
        {courseChapters?.map((courseChapter, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedChapter(courseChapter);
              getSelectedChapterContent(index);
            }}
            className={`cursor-pointer p-3 hover:bg-blue-50 ${
              selectedChapter?.chapterName === courseChapter?.chapterName
                ? "bg-blue-200"
                : ""
            }`}
          >
            <ChapterListCard courseChapter={courseChapter} index={index} />
          </div>
        ))}
      </div>
      {/* Chapter Content */}
      <div className="md:ml-64">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <ChapterContent chapter={chapter} selectedChapter={selectedChapter} />
        )}
      </div>
    </div>
  );
};

export default CourseStartPage;
