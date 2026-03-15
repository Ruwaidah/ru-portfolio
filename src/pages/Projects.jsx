import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import { useMemo, useState } from "react";
import { MotionSection, MotionItem } from "../components/Motion.jsx";

function unique(arr) {
  return Array.from(new Set(arr));
}

export default function Projects() {
  const categories = useMemo(() => ["All", ...unique(projects.map((p) => p.category))], []);
  const stacks = useMemo(() => ["All", ...unique(projects.flatMap((p) => p.stack))], []);
  const years = useMemo(() => ["All", ...unique(projects.map((p) => p.year)).sort((a, b) => b - a)], []);

  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [stack, setStack] = useState("All");
  const [year, setYear] = useState("All");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return projects.filter((p) => {
      const matchQ =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.tags.join(" ").toLowerCase().includes(query) ||
        p.stack.join(" ").toLowerCase().includes(query);

      const matchCategory = category === "All" || p.category === category;
      const matchStack = stack === "All" || p.stack.includes(stack);
      const matchYear = year === "All" || p.year === year;

      return matchQ && matchCategory && matchStack && matchYear;
    });
  }, [q, category, stack, year]);


  return (
    <div className="mx-auto w-full max-w-6xl px-4 min-h-screen flex flex-col">

      <Navbar />
      <main className="flex-1">
        <MotionSection className="py-12">
          <MotionItem>
            <h1 className="text-3xl font-semibold">Projects</h1>
            {/* <p className="mt-2 text-sm text-mutetext">
              Filter by category, tech stack, or year.
            </p> */}
          </MotionItem>

          {/* Filters */}
          {/* <MotionItem className="mt-4">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-glass md:grid-cols-4">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search projects…"
                className="h-11 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-text placeholder:text-mutetext outline-none focus:ring-2 focus:ring-pink-500/30"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-11 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-text outline-none focus:ring-2 focus:ring-pink-500/30"
              >
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>

              <select
                value={stack}
                onChange={(e) => setStack(e.target.value)}
                className="h-11 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-text outline-none focus:ring-2 focus:ring-pink-500/30"
              >
                {stacks.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>

              <select
                value={year}
                onChange={(e) => setYear(e.target.value === "All" ? "All" : Number(e.target.value))}
                className="h-11 rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-text outline-none focus:ring-2 focus:ring-pink-500/30"
              >
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>

              <button
                onClick={() => {
                  setQ("");
                  setCategory("All");
                  setStack("All");
                  setYear("All");
                }}
                className="md:col-span-4 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-mutetext hover:bg-white/10"
              >
                Reset filters
              </button>
            </div>
          </MotionItem> */}

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-mutetext">
              No results. Try changing filters.
            </div>
          )}

          <div className="mt-12 h-px w-full bg-white/10" />
        </MotionSection>
      </main>
      <Footer />
    </div>
  );
}