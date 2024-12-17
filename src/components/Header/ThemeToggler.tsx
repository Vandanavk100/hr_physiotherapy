"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering during SSR

  return (
    <button
      aria-label="Theme Toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center space-x-2 rounded-full cursor-pointer h-9 w-auto px-4 dark:text-white md:h-14"
    >
      {theme === "dark" ? (
        <button
          className="rounded-full p-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          <FaSun className="text-lg" />
        </button>
      ) : (
        <button
          className="rounded-full p-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          <FaMoon className="text-lg" />
        </button>
      )}
    </button>
  );
};

export default ThemeToggler;
