import React from "react";

const DocsPage = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-5 text-center">Documentation</h1>
      <p className="mb-5 text-gray-700 text-center">
        Welcome to the documentation for our AI Course Generator! Here,
        you&apos;ll find all the information you need to understand how our
        platform works and how to use it effectively.
      </p>

      <section className="mb-10 bg-gray-100 p-5 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Getting Started</h2>
        <p className="mb-2 text-gray-600">
          To get started, you&apos;ll need to create an account and log in. Once
          you&apos;re logged in, you can start creating your own AI-powered
          courses.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Create an account</li>
          <li>Log in</li>
          <li>Start creating courses</li>
        </ul>
      </section>

      <section className="mb-10 bg-gray-100 p-5 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Creating a Course</h2>
        <p className="mb-2 text-gray-600">
          Creating a course is easy! Just follow these steps:
        </p>
        <ol className="list-decimal list-inside text-gray-600">
          <li>Choose a topic</li>
          <li>Select a category</li>
          <li>Set the course level</li>
          <li>Add chapters</li>
          <li>Publish your course</li>
        </ol>
      </section>

      <section className="mb-10 bg-gray-100 p-5 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">AI Features</h2>
        <p className="mb-2 text-gray-600">
          Our platform uses AI to help you generate course content, including:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Chapter outlines</li>
          <li>Content suggestions</li>
          <li>Code examples</li>
          <li>Video suggestions</li>
        </ul>
      </section>

      <section className="mb-10 bg-blue-500 text-white p-5 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="mb-2">
          If you have any questions or need assistance, please don&apos;t
          hesitate to contact us.
        </p>
      </section>
    </div>
  );
};

export default DocsPage;
