"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

interface EmailButtonProps {
    icon?: boolean;         // show icon or show the email text
    tooltipAbove?: boolean; // show tooltip above or below
    tooltipLeft?: boolean;  // show tooltip left or center
}

export default function EmailButton({ icon = false, tooltipAbove = false, tooltipLeft = false }: EmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const email = "jacobmiddleton15@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="relative hover-accent cursor-pointer"
      aria-label="Copy email to clipboard"
    >
      {icon ? (
        <Mail />
      ) : (
        <span>{email}</span>
      )}
      {copied && (
        <span className={`absolute whitespace-nowrap 
                      text-xs text-gray-200 dark:text-gray-200 
                      bg-gray-700/80 dark:bg-gray-700/80 
                      px-2 py-1 rounded shadow
                      ${tooltipAbove ? "-top-8" : "-bottom-8"}
                      ${tooltipLeft ? "right-0" : "left-1/2 -translate-x-1/2"}`}
        >
          Email copied to clipboard
        </span>
      )}
    </button>
  );
}