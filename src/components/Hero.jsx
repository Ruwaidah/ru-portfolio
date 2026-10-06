import { Button, Pill } from "./ui.jsx";
import { Link } from "react-router-dom";
import HeroMontage from "./art/HeroMontage.jsx";

export default function Hero() {
  return (
    <section className="relative pt-10 md:pt-14">
      <div className="grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Pill>
              <span className="h-2 w-2 rounded-full bg-pink-400" />
              Full-Stack Developer
            </Pill>

            <Pill>
              <span className="h-2 w-2 rounded-full bg-white/30" />
              Applications & Data
            </Pill>
          </div>
          <h1 className="mt-6 text-[28px] font-semibold leading-tight tracking-tight md:text-[36px]">            Software Developer
            <span className="block text-pink-200 md:inline"> • Full-Stack</span>
            <span className="block text-pink-200 md:inline"> • Applications & Data</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-mutetext">
            I build reliable full-stack applications—from responsive interfaces and REST APIs to databases and deployment—with a focus on problem-solving, data, and application reliability.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/projects">
              <Button variant="primary">View Projects</Button>
            </Link>

            <Link to="/contact">
              <Button variant="ghost">Contact Me</Button>
            </Link>

            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <Button variant="ghost">Resume</Button>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs text-mutetext">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "SQL",
              "REST APIs",
              "Git",
              "Testing",
              "Troubleshooting",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {t}
              </span>
            ))}

            <span className="rounded-full border border-pink-400/25 bg-pink-500/10 px-3 py-1 text-pink-200">
              Full-Stack
            </span>

            <span className="rounded-full border border-pink-400/25 bg-pink-500/10 px-3 py-1 text-pink-200">
              Real-time
            </span>
          </div>
        </div>

        <div className="relative w-full">
          <div
            className="absolute -inset-6 rounded-[28px] opacity-60 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(232,90,174,0.55), transparent 60%)",
            }}
          />

          <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-glass">
            <HeroMontage />
          </div>
        </div>
      </div>
      <div className="mt-12 h-px w-full bg-white/10" />
    </section>
  );
}