import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="text-center space-y-5 col-span-2 border-r-2 border-blue-400">
        <Link href="/" className="block text-2xl font-semibold">
          Dev-Story
        </Link>
        <h2 className="bg-amber-500 py-5 px-2 text-2xl text-white font-bold mb-5">
          My Dashboard
        </h2>
        <nav className="flex flex-col gap-3 mx-3">
          <Link
            className="btn bg-gray-300 text-blue-600 text-xl py-5"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="btn bg-gray-300 text-blue-600 text-xl py-5"
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="btn bg-gray-300 text-blue-600 text-xl py-5"
            href={"/dashboard/settings"}
          >
            Settings
          </Link>
        </nav>
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
