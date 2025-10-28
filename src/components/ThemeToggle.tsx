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
      className="relative transition-transform duration-300 hover:scale-110"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
        
        {theme === "light" ? (
          <>
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.yellow.500)_0%,transparent_70%)] blur-sm scale-125"></div>
            <Sun className="text-yellow-500 fill-current" /> 
          </>
        ) : (
          <>
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.gray.300)_0%,transparent_70%)] blur-sm scale-125"></div>
            <Moon className="text-gray-300 fill-current" />
          </>
        )}

    </button>
  );
}
