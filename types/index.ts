import { z } from "zod"

export const formSchema = z.object({
    language: z.string().min(1, {
        message: 'Please select a language',
    }),
    category: z.string().min(1, {
        message: 'Please select a category',
    }),
    topic: z.string().min(1, {
        message: 'Please enter a topic',
    }),
    description: z.string().optional(),
    level: z.string().min(1, {
        message: 'Please select a level',
    }),
    duration: z.string().min(1, {
        message: 'Please select a duration',
    }),
    video: z.string().min(1, {
        message: 'Please select a video status',
    }),
    numOfChapters: z.coerce.number().int().min(1, {
        message: 'Please select a number of chapters',
    }),

})

export type Course = {
    id: number;
    courseId: string;
    language: string;
    category: string;
    topic: string;
    level: string;
    video: string;
    courseOutputByAI: CourseoutputByAI;
    createdBy: string;
    userName: string;
    userProfileImage: string;
    publish: boolean;
    createdAt: Date;
    courseBanner: string;
}


export type CourseoutputByAI = {
    courseName: string;
    description: string;
    chapters: CourseOutputChapter[];
    category: string;
    topic: string;
    level: string;
    totalDuration: string;
    numOfChapters: number;
}

export type CourseOutputChapter = {
    chapterName: string;
    about: string;
    duration: string;
}

export type SectionOutput = {
    title: string;
    explanation: string;
    code: string;
}


export type ChapterOutputContent = {
    chapterName: string;
    sections: SectionOutput[];
}

export type ChapterOutput = {
    courseName: string;
    description: string;
    chapter: ChapterOutputContent;
}

export type Chapter = {
    id: number;
    chapterId: number;
    content: ChapterOutput;
    videoId: string;
    courseId: string;
}

