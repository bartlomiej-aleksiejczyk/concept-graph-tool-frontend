// Topbar.js
import React from "react";

function MainTopbar() {
  return (
    <div className="flex h-16 w-full items-center justify-between bg-white px-6 shadow-md">
      <div className="flex items-center">
        <span className="text-lg font-semibold text-gray-800">
          Dark Sidebar with Grouped Menu
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <button
          aria-label="Search"
          className="text-gray-600 focus:text-gray-900 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button
          aria-label="Notifications"
          className="text-gray-600 focus:text-gray-900 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6 6 0 00-12 0v3a2.032 2.032 0 01-.595 1.595L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        <img
          className="h-10 w-10 rounded-full"
          src="path_to_your_profile_image"
          alt="Your Profile"
        />
      </div>
    </div>
  );
}

export default MainTopbar;
