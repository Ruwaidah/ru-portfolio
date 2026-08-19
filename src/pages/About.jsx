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
            <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
              <GlassCard className="p-6 h-full">
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

              <GlassCard className="p-6 h-full">
                <h2 className="text-lg font-semibold">Tech stack</h2>
                <p className="mt-2 text-sm text-mutetext">
                  Core tools I use to build and deliver full-stack applications.
                </p>

                <div className="mt-5 space-y-5">
                  {/* Frontend */}
                  <div className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                    <div className="w-full">
                      <div className="text-xs font-semibold text-text/90">Frontend</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {["JavaScript", "HTML", "CSS", "Tailwind"].map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext hover:bg-white/10 hover:text-text transition"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                    <div className="w-full">
                      <div className="text-xs font-semibold text-text/90">Backend</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {["Node.js", "Express", "Knex", "Socket.io"].map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext hover:bg-white/10 hover:text-text transition"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Database & Tools */}
                  <div className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                    <div className="w-full">
                      <div className="text-xs font-semibold text-text/90">Database & Tools</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {["PostgreSQL", "Git", "Cloudinary", "Python"].map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext hover:bg-white/10 hover:text-text transition"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6 h-full">
                <h2 className="text-lg font-semibold">IT & Technical Support</h2>
                <p className="mt-2 text-sm text-mutetext">
                  Strong fundamentals in troubleshooting, networking basics, operating systems, and customer support.
                </p>

                <div className="mt-5 space-y-3 text-sm text-mutetext">
                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                    Troubleshooting: identify root cause, isolate issues, document fixes
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                    Networking basics: TCP/IP, DNS, HTTP/HTTPS, ports
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                    OS + tools: Windows/macOS basics, command line, system checks
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                    Customer-focused support: clear communication and follow-up
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href="/certificates/TechnicalSupportFundamentals.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-pink-400/20 bg-pink-500/10 px-3 py-2 text-xs text-pink-200 hover:bg-pink-500/15 transition"
                  >
                    View Google Certificate
                  </a>
                </div>
              </GlassCard>
            </div>

            {/* Certifications + Experience */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <GlassCard className="p-6">
                <h2 className="text-lg font-semibold">Certifications</h2>
                <div className="mt-5 space-y-4">
                  {/* Springboard */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-text">
                          Springboard — Software Development Career Program
                        </div>
                        <div className="mt-1 text-xs text-mutetext">2024</div>
                      </div>

                      <a
                        href="/certificates/springboard-2024.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-mutetext hover:bg-white/10 hover:text-text transition"
                      >
                        View PDF
                      </a>
                    </div>
                  </div>

                  {/* Lambda School */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-text">
                          Lambda School — Full-Stack Web Development
                        </div>
                        <div className="mt-1 text-xs text-mutetext">2020</div>
                      </div>

                      <a
                        href="/certificates/lambda-2020.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-mutetext hover:bg-white/10 hover:text-text transition"
                      >
                        View PDF
                      </a>
                    </div>
                  </div>
                  {/* Google / Coursera */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-text">
                          Google (Coursera) — Technical Support Fundamentals
                        </div>
                        <div className="mt-1 text-xs text-mutetext">May 2026</div>
                      </div>
                      <a
                        href="/certificates/TechnicalSupportFundamentals.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-mutetext hover:bg-white/10 hover:text-text transition"
                      >
                        View PDF
                      </a>
                    </div>
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
                      Selected to train and onboard new Fulfillment Team Leads across stores
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/20" />
                      Served as a remodel support champion to help stores maintain fulfillment performance during remodels
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/20" />
                      Led daily operations, trained associates, and improved execution quality
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/20" />
                      Focused on speed, accuracy, and customer experience using metrics
                    </li>
                  </ul>
                </div>
              </GlassCard>
            </div>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}