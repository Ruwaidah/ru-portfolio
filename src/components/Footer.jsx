import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="pb-10">
      <div className="h-px w-full bg-white/10" />
      <div className="mt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="text-sm text-mutetext">
          © {new Date().getFullYear()} Ruwaidah Afakhri — Full-Stack Developer
        </div>
        <div className="flex gap-5 text-sm text-mutetext">
          <Link className="hover:text-text" to="/about">About</Link>
          <Link className="hover:text-text" to="/projects">Projects</Link>
          <Link className="hover:text-text" to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}