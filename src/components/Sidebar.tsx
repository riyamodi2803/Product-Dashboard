import { LayoutDashboard, Box, Truck, Bell, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const menuItem = (to: string, icon: any, label: string) => (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg
        ${location.pathname === to
          ? "bg-purple-100 text-purple-600 dark:bg-purple-700 dark:text-white"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}
      `}
    >
      {icon}
      {label}
    </Link>
  );

  return (
    <div className="w-64 h-screen flex flex-col justify-between
      bg-white dark:bg-[#020617]
      border-r border-gray-200 dark:border-gray-700">

      <div>
        {/* LOGO */}
        <div className="flex items-center gap-3 p-4">
          <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
            W
          </div>
          <span className="font-bold text-lg dark:text-white">BIRDBOX</span>
        </div>

        {/* MENU */}
        <div className="px-4 space-y-4">

          {menuItem("/", <LayoutDashboard size={18} />, "Dashboard")}

          <div className="text-xs text-gray-400">ORDER</div>

          {menuItem("/products", <Box size={18} />, "Product List")}
          {menuItem("/orders", <Truck size={18} />, "Order List")}

          <div className="text-xs text-gray-400">SYSTEM</div>

          <div className="flex items-center gap-3 px-4 py-2">
            <Bell size={18} />
            <span>Notifications</span>
          </div>

          {/* DARK MODE SWITCH */}
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <Moon size={18} />
              Dark Mode
            </div>

            <div
              onClick={() => setDark(!dark)}
              className={`w-10 h-5 flex items-center rounded-full cursor-pointer
                ${dark ? "bg-purple-600" : "bg-gray-300"}`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform duration-300
                  ${dark ? "translate-x-5" : "translate-x-1"}`}
              />
            </div>
          </div>

        </div>
      </div>

      {/* PROFILE */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full" />
          <div>
            <div className="font-medium dark:text-white">Mia Smith</div>
            <div className="text-xs text-gray-400">Vendor</div>
            <div className="text-sm mt-1 cursor-pointer">Log Out</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;