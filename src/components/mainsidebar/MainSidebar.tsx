import React from "react";

const MainSidebar = () => {
  return (
    <div className="h-full min-h-screen w-64 bg-gray-800 text-white">
      <div className="p-5">
        {" "}
        {/* Logo or brand name container */}
        <h1 className="text-xl font-semibold">Hyper</h1>
      </div>
      <div className="mt-10">
        {" "}
        {/* Sections container */}
        <div className="mb-4">
          {" "}
          {/* Individual section */}
          <p className="mb-3 uppercase text-gray-400">Favorites</p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="block rounded p-2 hover:bg-gray-700">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block rounded p-2 hover:bg-gray-700">
                Bookmarks
              </a>
            </li>
            <li>
              <a href="#" className="block rounded p-2 hover:bg-gray-700">
                Reports
              </a>
            </li>
            {/* Add more items as needed */}
          </ul>
        </div>
        {/* Repeat for other sections like 'Application' */}
      </div>
    </div>
  );
};

export default MainSidebar;
