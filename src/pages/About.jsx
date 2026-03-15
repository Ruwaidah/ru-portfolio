import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { GlassCard } from "../components/ui.jsx";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function About() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <section className="py-12">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-semibold">About</h1>
              <p className="max-w-2xl text-sm leading-relaxed text-mutetext">
                I’m a full-stack developer with a strong leadership and operations background.
                I build modern web apps with clean UI, reliable backend systems, and real-time features.
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext">
                  Open to Full-Stack Roles
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext">
                  JavaScript • Node • Postgres
                </span>
                <span className="rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs text-pink-200">
                  Top 10 market metrics (Team Lead)
                </span>
              </div>
            </div>

            {/* Cards */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <GlassCard className="p-6">
                <h2 className="text-lg font-semibold">What I build</h2>
                <p className="mt-2 text-sm text-mutetext">
                  End-to-end products—from UI to APIs to database design.
                </p>

                <ul className="mt-5 space-y-3 text-sm text-mutetext">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                    Full-stack web apps (responsive UI, auth, APIs, databases)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                    Real-time features (chat, notifications, live updates with Socket.io)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                    Media workflows (uploads + optimization with Cloudinary)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                    Clean code, debugging, performance improvements, Git workflow
                  </li>
                </ul>
              </GlassCard>

              <GlassCard className="p-6">
                <h2 className="text-lg font-semibold">Tech stack</h2>
                <p className="mt-2 text-sm text-mutetext">
                  Tools I’m comfortable using to ship real projects.
                </p>

                <div className="mt-5 space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-text/90">Frontend</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["JavaScript", "HTML", "CSS", "Tailwind"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-text/90">Backend</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["Node.js", "Express", "Knex", "Socket.io"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-text/90">Database & Other</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["PostgreSQL", "Git", "Cloudinary", "Python"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Certifications + Experience */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <GlassCard className="p-6">
                <h2 className="text-lg font-semibold">Certifications</h2>
                <div className="mt-5 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold text-text">
                      Springboard — Software Development Career Program
                    </div>
                    <div className="mt-1 text-xs text-mutetext">2024</div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold text-text">
                      Lambda School — Full-Stack Web Development
                    </div>
                    <div className="mt-1 text-xs text-mutetext">2020</div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h2 className="text-lg font-semibold">Leadership & Impact</h2>
                <p className="mt-2 text-sm text-mutetext">
                  Fulfillment Team Lead — Walmart
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-xl border border-pink-400/20 bg-pink-500/10 p-4">
                    <div className="text-sm font-semibold text-pink-200">
                      Top 10 in the market for metrics
                    </div>
                    <div className="mt-1 text-xs text-mutetext">
                      Consistently drove performance through coaching and process improvements.
                    </div>
                  </div>

                  <ul className="mt-1 space-y-3 text-sm text-mutetext">
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/20" />
                      Led daily operations, trained associates, and improved execution quality
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/20" />
                      Focused on speed, accuracy, and customer experience using metrics
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/20" />
                      Clear communication + ownership—skills I bring into software teams
                    </li>
                  </ul>
                </div>
              </GlassCard>
            </div>

            <GlassCard className="mt-6 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">What I’m looking for</h3>
                  <p className="mt-2 text-sm text-mutetext">
                    A full-stack role where I can build production features, collaborate, and keep leveling up.
                  </p>
                </div>

                <div className="mt-4 flex gap-3 md:mt-0">
                  <a
                    href="/projects"
                    className="rounded-xl border border-pink-400/20 bg-pink-500/10 px-5 py-2.5 text-sm font-medium text-pink-200 hover:bg-pink-500/15 transition"
                  >
                    View Projects
                  </a>
                  <a
                    href="/contact"
                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-mutetext hover:bg-white/10 hover:text-text transition"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </GlassCard>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}