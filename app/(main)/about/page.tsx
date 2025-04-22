import React from "react";

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] p-4">
      <div className="bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] p-8 shadow-lg rounded-lg flex flex-wrap md:flex-nowrap w-full md:w-2/3">
        <div className="w-full md:w-1/3 flex items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-gray-300 pb-4 md:pb-0 pr-0 md:pr-6">
          <h2 className="text-3xl font-extrabold text-black">Contact</h2>
        </div>

        <div className="w-full md:w-2/3 pl-0 md:pl-6 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">
            Hoang&apos;TuShun
          </h1>
          <p className="text-lg text-gray-600">shunquang.contact@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
