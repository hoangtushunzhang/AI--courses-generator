"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const AddCourse = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between gap-5">
      <div>
        <h2 className="text-3xl">
          Hello, <span className="font-bold">{user?.fullName}</span>
        </h2>
        <p className="text-sm">
          {" "}
          Create new courses with AI, share with your friends{" "}
        </p>
      </div>

      <Link href={"/create-course"}>
        <Button className="bg-myPrimary hover:myPrimary/80">
          + Create AI Course
        </Button>
      </Link>
    </div>
  );
};

export default AddCourse;
