import { GlassCard, Button } from "./ui.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StatusPill from "./StatusPill.jsx";

function Screenshot({ src, alt, status, progress }) {
  const isInProgress = String(status).toLowerCase().includes("progress");
  const v = Math.max(0, Math.min(100, Number(progress ?? 0)));

  return (
    <div className="relative h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
      {/* Status pill */}
      <StatusPill status={status} progress={progress} />

      {/* Progress badge */}
      {isInProgress && (
        <div className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-glass">
          {v}%
        </div>
      )}

      {/* Image */}
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <>
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(600px 180px at 20% 0%, rgba(232,90,174,0.25), transparent 55%), radial-gradient(500px 200px at 90% 30%, rgba(255,255,255,0.10), transparent 55%)",
            }}
          />
          <div className="absolute left-4 top-4 h-3 w-14 rounded-full bg-white/10" />
          <div className="absolute left-4 top-10 h-2 w-28 rounded-full bg-white/10" />
          <div className="absolute left-4 top-16 h-2 w-20 rounded-full bg-white/10" />
          <div className="absolute right-4 top-8 h-24 w-36 rounded-lg border border-white/10 bg-white/5" />
          <div className="absolute bottom-4 left-4 right-4 h-10 rounded-lg border border-white/10 bg-white/5" />
        </>
      )}

      {/* progress bar*/}
      {isInProgress && (
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <div className="h-1.5 w-full rounded-full bg-black/50">
            <div
              className="h-1.5 rounded-full bg-pink-500/80"
              style={{ width: `${v}%` }}
            />
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
    </div>
  );
}

export default function ProjectCard({ p }) {
  const hasLinks = Boolean(p.links?.live || p.links?.github);

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
      <GlassCard className="p-5 h-full flex flex-col">
        <Screenshot src={p.image} alt={p.title} status={p.status} progress={p.progress} />

        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-mutetext">{p.tagline}</p>
          </div>

          <span className="shrink-0 max-w-[190px] truncate rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext">
            {p.category}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <Link to={`/case-studies/${p.id}`} className="block">
            <Button variant="primary" className="w-full">
              View Case Study
            </Button>
          </Link>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href={p.links?.live || "#"}
              target="_blank"
              rel="noreferrer"
              className={`rounded-xl border px-4 py-2 text-center text-sm transition ${p.links?.live
                ? "border-pink-400/20 bg-pink-500/10 text-pink-200 hover:bg-pink-500/15"
                : "pointer-events-none border-white/10 bg-white/5 text-mutetext opacity-40"
                }`}
            >
              Live Demo
            </a>

            <a
              href={p.links?.github || "#"}
              target="_blank"
              rel="noreferrer"
              className={`rounded-xl border px-4 py-2 text-center text-sm transition ${p.links?.github
                ? "border-white/10 bg-white/5 text-mutetext hover:bg-white/10 hover:text-text"
                : "pointer-events-none border-white/10 bg-white/5 text-mutetext opacity-40"
                }`}
            >
              GitHub
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}