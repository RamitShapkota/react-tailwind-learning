import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import useTheme from "../contexts/Theme";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    darkModeStatus ? darkTheme() : lightTheme();
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
        aria-label="Toggle Dark/Light Theme"
      />
      <div className="w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full relative transition-colors duration-300 peer-checked:bg-blue-500">
        {/* Slider circle */}
        <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-7 flex items-center justify-center text-yellow-400">
          {themeMode === "dark" ? <FaMoon size={14} /> : <FaSun size={14} />}
        </div>
      </div>
      <span className="ml-4 text-sm font-medium text-gray-800 dark:text-gray-200">
        {themeMode === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  );
}
