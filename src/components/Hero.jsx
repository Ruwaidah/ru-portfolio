import { Button, Pill } from "./ui.jsx";
import { Link } from "react-router-dom";
import HeroMontage from "./art/HeroMontage.jsx";

export default function Hero() {
  return (
    <section className="relative pt-10 md:pt-14">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <Pill>
            <span className="h-2 w-2 rounded-full bg-pink-400" />
            Full-Stack Developer
          </Pill>

          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            I build full-stack <br className="hidden md:block" />
            apps that scale
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-mutetext">
            From frontend UI to backend logic and deployment, I create fast,
            secure, and maintainable products.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/projects">
              <Button variant="primary">View Projects</Button>
            </Link>

            <Link to="/contact">
              <Button variant="ghost">Contact Me</Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs text-mutetext">
            {[
              "React",
              "Vite",
              "Tailwind",
              "Node",
              "Express",
              "PostgreSQL",
              "Knex",
              "Socket.io",
              "Cloudinary",
              "Git/GitHub",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {t}
              </span>
            ))}

            <span className="rounded-full border border-pink-400/25 bg-pink-500/10 px-3 py-1 text-pink-200">
              JWT Auth
            </span>
            <span className="rounded-full border border-pink-400/25 bg-pink-500/10 px-3 py-1 text-pink-200">
              Real-time
            </span>
          </div>
        </div>

        <div className="relative">
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