import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { projects } from "../data/projects.js";
import { GlassCard } from "../components/ui.jsx";
import { motion } from "framer-motion";


function ProgressBar({ value = 0 }) {
  const v = Math.max(0, Math.min(100, Number(value) || 0));
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-xs text-mutetext">
        <span>Progress</span>
        <span className="text-pink-200">{v}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-pink-500/60"
          style={{ width: `${v}%` }}
        />
      </div>
    </div>
  );
}

export default function CaseStudy() {
  const { id } = useParams();
  const p = projects.find((x) => x.id === id);

  if (!p) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="py-16">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-mutetext">
              Case study not found.{" "}
              <Link className="text-pink-300 hover:text-text" to="/projects">Go back</Link>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="py-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm text-mutetext">
                  <Link className="hover:text-text" to="/projects">Projects</Link>
                  <span className="mx-2 opacity-40">/</span>
                  <span className="text-text">{p.title}</span>
                </div>
                <h1 className="mt-3 text-3xl font-semibold">{p.title}</h1>
                <p className="mt-2 text-sm text-mutetext">{p.tagline}</p>
                {p.status && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext">
                    <span>Status:</span>
                    <span className="text-text">{p.status}</span>
                    {typeof p.progress === "number" && (
                      <span className="text-pink-200">• {p.progress}%</span>
                    )}
                  </div>
                )}

                {p.status?.toLowerCase().includes("progress") && typeof p.progress === "number" && (
                  <ProgressBar value={p.progress} />
                )}
              </div>

              <div className="flex gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext">
                  {p.category}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext">
                  {p.year}
                </span>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {p.metrics?.length > 0 && p.metrics.map((m) => (
                <GlassCard key={m.label} className="p-5">
                  <div className="text-xs uppercase tracking-wide text-mutetext/80">
                    {m.label}
                  </div>
                  <div className="mt-2 text-xl md:text-2xl font-semibold text-pink-200 leading-snug">
                    {m.value}
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <GlassCard className="p-6">
                <h2 className="text-lg font-semibold">Problem</h2>
                <p className="mt-3 text-sm leading-relaxed text-mutetext">{p.problem}</p>
              </GlassCard>

              <GlassCard className="p-6">
                <h2 className="text-lg font-semibold">Solution</h2>
                <p className="mt-3 text-sm leading-relaxed text-mutetext">{p.solution}</p>
              </GlassCard>
            </div>

            <div className="mt-8">
              <GlassCard className="p-6">
                <h2 className="text-lg font-semibold">Architecture</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.architecture.map((a) => (
                    <span key={a} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext">
                      {a}
                    </span>
                  ))}
                </div>

                <h3 className="mt-6 text-sm font-semibold text-text">Highlights</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-mutetext">
                  {p.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </GlassCard>
            </div>
            {p.links && (
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">Project Links</h3>
                <p className="mt-2 text-sm text-mutetext">
                  View the live demo or explore the source code.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-pink-400/20 bg-pink-500/10 px-5 py-2.5 text-sm font-medium text-pink-200 hover:bg-pink-500/15 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-mutetext hover:bg-white/10 hover:text-text transition"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            )}
            <div className="mt-10">
              <Link
                to="/projects"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-mutetext hover:bg-white/10"
              >
                ← Back to Projects
              </Link>
            </div>
          </div>

        </motion.div>
      </main>
      <Footer />
    </div>
  );
}