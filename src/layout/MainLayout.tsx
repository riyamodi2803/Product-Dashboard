import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-[#0f172a]">

        {/* PAGE CONTENT */}
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center px-6 py-3 text-sm
          bg-white dark:bg-[#0b1220]
          border-t border-gray-200 dark:border-gray-700
          text-gray-700 dark:text-gray-300">

          <div>
            ©2026 Send365. All rights reserved
            <span className="text-purple-500 ml-2">Privacy Policy</span>
            <span className="ml-2">Version 2.8.1</span>
          </div>

          <select className="border px-3 py-1 rounded-md bg-white dark:bg-gray-800 dark:text-white">
            <option>US English</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default MainLayout;