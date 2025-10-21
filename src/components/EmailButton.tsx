"use client";

import { Mail } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface EmailButtonProps {
    icon?: boolean;         // show icon or show the email text
    tooltipAbove?: boolean; // show tooltip above or below
}

export default function EmailButton({ icon = false, tooltipAbove = false }: EmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const [dockRight, setDockRight] = useState(false);
  const [showAbove, setShowAbove] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const email = "jacobmiddleton15@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
      updateTooltipPosition();
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  // Detect button position relative to viewport edges
  const updateTooltipPosition = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const rightEdge = window.innerWidth - rect.right;
    const bottomEdge = window.innerHeight - rect.bottom;

    setDockRight(rightEdge < 75);   // if within 75px of right edge → dock to the right edge of the viewport
    setShowAbove(tooltipAbove || bottomEdge < 60);  // if within 60px of bottom edge → show above

    setTooltipPos({
      top: showAbove ? rect.top - 32 : rect.bottom + 8, // above or below button
      left: rect.left + rect.width / 2,
    });
  };

  useEffect(() => {
    setMounted(true);
    updateTooltipPosition();
    window.addEventListener("resize", updateTooltipPosition);
    window.addEventListener("scroll", updateTooltipPosition);
    return () => {
      window.removeEventListener("resize", updateTooltipPosition);
      window.removeEventListener("scroll", updateTooltipPosition);
    };
  }, [showAbove]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleCopy}
        className="relative hover-accent cursor-pointer"
        aria-label="Copy email to clipboard"
      >
        {icon ? <Mail /> : <span>{email}</span>}
      </button>

      {mounted && copied && createPortal(
        <span
          className={`
            fixed whitespace-nowrap text-xs text-gray-200
            bg-gray-700/80 px-2 py-1 rounded shadow
            z-[9999] transition-opacity duration-300 ease-in-out
          `}
          style={{
            top: tooltipPos.top,
            left: dockRight ? undefined : tooltipPos.left,
            right: dockRight ? "8px" : undefined,
            transform: dockRight ? "none" : "translateX(-50%)",
          }}
        >
          Email copied to clipboard
        </span>,
        document.body
      )}
    </>
  );
}