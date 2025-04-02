import { updateCourseBanner } from "@/app/(user)/actions/updateCourse";
import { Button } from "@/components/ui/button";
import { Course } from "@/types";
import { useUser } from "@clerk/nextjs";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import EditCourse from "./EditCourse";

interface CourseBasicInfoProps {
  course: Course;
  edit?: boolean;
}

const CourseBasicInfo = ({ course, edit }: CourseBasicInfoProps) => {
  const { user } = useUser();
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<string>();

  const email = user?.primaryEmailAddress?.emailAddress;

  const handleStart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      router.push(`/course/${course?.courseId}/start`);
    }
  };

  useEffect(() => {
    setSelectedFile(course?.courseBanner);
  }, [course]);

  const onFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "generator");
    formData.append("folder", "shun-ai-course-generator"); // Optional: define folder in Cloudinary

    try {
      // Upload image to Cloudinary
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC__CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      const downloadUrl = data.secure_url; // Get the URL of the uploaded image

      console.log("File available at", downloadUrl);

      if (!email) return;
      await updateCourseBanner(course, email, downloadUrl);
      router.refresh();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="mt-10 border p-10 rounded-lg shadow-md bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="flex">
            <h2 className="font-bold text-3xl">
              {course?.courseOutputByAI?.courseName}
            </h2>
            {edit && <EditCourse course={course} />}
          </div>
          <p>{course?.courseOutputByAI?.description}</p>
          <h2 className="font-bold">{course?.courseOutputByAI?.category}</h2>
          {!edit && (
            <Button
              onClick={handleStart}
              className="mt-3 w-full bg-myPrimary hover:bg-myPrimary/80 text-white"
            >
              Start
            </Button>
          )}
        </div>
        <div>
          <div className="flex justify-center w-full items-center p-3 rounded-2xl bg-slate-200 h-full">
            <label htmlFor="upload-image" className="flex cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="mb-5 border-2 border-dashed rounded-lg">
                  <Image
                    src={
                      selectedFile
                        ? selectedFile
                        : course?.courseBanner
                        ? course?.courseBanner
                        : "/placeholder.png"
                    }
                    alt="Thumbnail"
                    width={300}
                    height={300}
                  />
                </div>
                {edit && (
                  <div className="flex items-center justify-center text-blue">
                    <CirclePlus className="h-10 w-10 bg-blue-600 text-white rounded-full p- mr-2" />
                    <h2 className="font-bold text-xl">
                      {selectedFile ? "Change Image" : "Upload Image"}
                    </h2>
                  </div>
                )}
              </div>
            </label>
          </div>
          <input
            type="file"
            id="upload-image"
            className="opacity-0"
            disabled={!edit}
            onChange={onFileSelected}
            placeholder="Upload Image"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseBasicInfo;
