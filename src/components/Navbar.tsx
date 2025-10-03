"use client";

import { Github, Linkedin, Mail } from "lucide-react";
//import ThemeToggle from "./ThemeToggle"
import EmailButton from "./EmailButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-mono font-bold animate-typing">jacob-middleton</h1>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/jacobmiddleton15"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover-accent"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/jacob-middleton-6667a1158/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover-accent"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <div className="w-6 h-6">
            <EmailButton icon tooltipLeft />
          </div>

          {/* TODO: Fix theme toggle
          <div className="ml-8">
            <ThemeToggle />
          </div>
          */}
        </div>
      </div>
    </nav>
  );
}