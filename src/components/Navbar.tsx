"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import EmailButton from "./EmailButton";
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50
        transition-[max-height] duration-300 ease-out
        overflow-hidden
        bg-white/10
        backdrop-blur-md backdrop-saturate-150 shadow-md
        ${isMenuOpen ? "max-h-64" : "max-h-14"}
      `}
      onMouseLeave={() => setIsMenuOpen(false)}
    >

      {/* Navbar */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-xl font-bold">
          <span className="text-[var(--primary)]">❯</span>
          <span className="font-mono animate-typing">jacob-middleton</span>
        </Link>

        {/* Social links */}
        <div className="hidden sm:flex items-center space-x-6">

          <a 
            href="https://github.com/jacobmiddleton15" 
            target="_blank" 
            rel="noreferrer" 
            className="hover-accent">

            <Github className="w-6 h-6" />
          </a>

          <a 
            href="https://www.linkedin.com/in/jacobmiddleton15/" 
            target="_blank" 
            rel="noreferrer" 
            className="hover-accent">
              
            <Linkedin className="w-6 h-6" />
          </a>

          <div className="w-6 h-6">
            <EmailButton icon />
          </div>

        {/* Theme toggle */}
        <div className="hidden sm:block w-6 h-6 px-12">
          <ThemeToggle />
        </div>

        </div>

        {/* Hamburger menu button */}
        <button
          className="sm:hidden p-2 hover-accent transition-colors cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

      </nav>

      {/* Drop-down menu */}
      <div
        className={`
          sm:hidden flex flex-col items-end py-3 px-8 space-y-4
          transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >

        {/* Social links */}
        <div className="flex items-center space-x-6">

          <a 
            href="https://github.com/jacobmiddleton15" 
            target="_blank" 
            rel="noreferrer" 
            className="hover-accent flex items-center gap-2">

            <Github className="w-6 h-6" />
          </a>

          <a 
            href="https://www.linkedin.com/in/jacobmiddleton15/" 
            target="_blank" 
            rel="noreferrer" 
            className="hover-accent flex items-center gap-2">

            <Linkedin className="w-6 h-6" />
          </a>

          <div className="w-6 h-6">
            <EmailButton icon />
          </div>

        </div>

        {/* Theme toggle */}
        <ThemeToggle />

      </div>

    </div>
  );

}