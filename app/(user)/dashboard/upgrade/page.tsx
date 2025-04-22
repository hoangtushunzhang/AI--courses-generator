import Link from "next/link";
import React from "react";

const UpgradePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Upgrade Required
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        You need to upgrade your plan to create more courses. This feature is
        intended for users who want to unlock additional course creation
        capabilities.
      </p>
      <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-6 py-4 rounded-xl shadow-md">
        <p className="font-medium">
          Upgrade functionality is not yet available.
        </p>
        <p className="text-sm">
          This feature will be developed soon. Stay tuned!
        </p>
      </div>
      <Link
        href="/dashboard"
        className="inline-block  text-white px-5 py-2 bg-gradient-to-r  
		 from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500
		 focus:outline-none focus:ring active:bg-myPrimary sm:w-auto rounded-sm transition mt-6"
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default UpgradePage;
