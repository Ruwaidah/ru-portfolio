import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-6 pb-6">
      <div className="h-px w-full bg-white/10" />

      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-mutetext">
          © {new Date().getFullYear()} Ruwaidah Afakhri — Full-Stack Developer
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-mutetext">
          {/* Site links */}
          <Link className="md:inline-block hidden hover:text-text transition" to="/about">About</Link>
          <Link className="md:inline-block hidden hover:text-text transition" to="/projects">Projects</Link>
          <Link className="md:inline-block hidden hover:text-text transition" to="/contact">Contact</Link>

          {/* Divider */}
          <span className="hidden md:inline-block  h-4 w-px bg-white/10" />

          {/* Social links */}
          <a
            className="hover:text-text transition"
            href="https://github.com/Ruwaidah"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-text transition"
            href="https://www.linkedin.com/in/ruwaidah"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-text transition"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}