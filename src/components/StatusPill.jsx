export default function StatusPill({ status = "Completed", progress }) {
    const s = String(status).toLowerCase();

    const base =
        "absolute left-4 top-4 z-10 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-glass";

    if (s.includes("progress")) {
        return (
            <div className={`${base} border-pink-400/35 bg-black/55 text-pink-200`}>
                In progress
            </div>
        );
    }

    if (s.includes("planned")) {
        return (
            <div className={`${base} border-white/15 bg-black/45 text-white/80`}>
                Planned
            </div>
        );
    }

    return (
        <div className={`${base} border-emerald-400/30 bg-black/55 text-emerald-200`}>
            Completed
        </div>
    );
}