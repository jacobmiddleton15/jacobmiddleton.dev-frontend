import EmailButton from "./EmailButton";

export default function Footer() {
  return (
    <footer className="bg-green-950 dark:bg-green-950 text-gray-200 dark:text-gray-200 py-2 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        
        {/* Left side: Links + Contact */}
        <div className="flex flex-row gap-12">
          
          {/* Links section */}
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6 text-sm font-bold">
            <a
              href="https://github.com/jacobmiddleton15"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-accent"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-middleton-6667a1158/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-accent"
            >
              LinkedIn
            </a>
          </div>

          {/* Contact section */}
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6 text-sm font-bold">
            <EmailButton tooltipAbove />
            <a href="tel:9036029492" className="hover-accent">
              (903) 602-9492
            </a>
          </div>

        </div>

        {/* Right side: Copyright */}
        <div className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} Jacob Middleton
        </div>
      </div>
    </footer>
  );
}
