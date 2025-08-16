import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Toggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
      className="ap-2 rounded-full hover:bg-gray-300 dark:hover:bg-white-700 transition "
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-500" />
      ) : (
        <Sun className="w-5 h-5 text-gray-500" />
      )}
    </button>
  );
}
