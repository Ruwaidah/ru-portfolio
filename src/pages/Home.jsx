import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import { MotionSection, MotionItem } from "../components/Motion.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  const featured = projects.slice(0, 3);
  console.log(featured)
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <Navbar />
      <Hero />
      <MotionSection className="py-12">
        <MotionItem>
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <p className="mt-2 text-sm text-mutetext">
            A showcase of my recent fullstack applications.
          </p>
        </MotionItem>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        <MotionItem className="mt-8 flex justify-center">
          <Link
            to="/projects"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-mutetext hover:bg-white/10"
          >
            View All Projects
          </Link>
        </MotionItem>

        <div className="mt-12 h-px w-full bg-white/10" />
      </MotionSection>

      <Footer />
    </div>
  );
}