"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // avoid hydration mismatch

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >

      <span className="hover-accent">
        {theme === "light" ? (
          <Sun /> // className="text-yellow-500"
        ) : (
          <Moon /> // className="text-gray-300" 
        )}
      </span>
    </button>
  );
}
