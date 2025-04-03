'use server';

import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { auth } from '@clerk/nextjs/server';
import { and, eq } from 'drizzle-orm';

export async function deleteCourseByUser(courseId: string, email: string) {
	try {
		const user = auth();
		if (!user) {
			throw new Error('User is not authenticated');
		}

		// Xóa khóa học
		const res = await db
			.delete(CourseList)
			.where(and(eq(CourseList.courseId, courseId), eq(CourseList.createdBy, email)))
			.returning({ courseId: CourseList.courseId });

		if (!res.length) {
			throw new Error('Course not found or unauthorized');
		}

		const deletedCourseId = res[0]?.courseId;

		// Xóa các chương liên quan
		await db
			.delete(Chapters)
			.where(eq(Chapters.courseId, deletedCourseId));

		return { success: true, courseId: deletedCourseId };
	} catch (error) {
		console.error(error);
		return { success: false, error: (error as Error).message };
	}
}
