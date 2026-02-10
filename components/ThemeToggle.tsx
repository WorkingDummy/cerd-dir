"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  // useEffect ensures this only runs on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 w-9 h-9" />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-slate-200 dark:bg-slate-800 transition-all hover:ring-2 ring-blue-400"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};