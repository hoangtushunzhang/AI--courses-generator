"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Generator Courses
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            AI Generator Courses is an innovative platform that leverages the power of Artificial Intelligence to help users create customized learning courses effortlessly. Whether you&apos;re a student, a teacher, or a content creator, our AI-driven system empowers you to build structured, meaningful, and professional-quality courses in seconds.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our mission is to make education more accessible, dynamic, and personalized by removing the barriers of traditional course creation. With our intuitive tools and intelligent suggestions, anyone can become an educator.
          </p>
          <div className="mt-6">
            <Link
              href="/dashboard"
              className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
            >
              Start Creating Courses
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src="/ai-course-illustration.jpg" 
            alt="AI Courses"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-gray-600">Instantly generate courses using GPT-based AI with rich structure and content.</p>
          </div>
          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Customizable</h3>
            <p className="text-gray-600">Easily edit topics, chapters, and difficulty level to fit your audience.</p>
          </div>
          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">Explore and learn from courses created by other users in our community.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
