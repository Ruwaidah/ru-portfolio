export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function GlassCard({ className = "", children }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "border border-white/10",
        "bg-black/30 backdrop-blur-glass",
        "shadow-glow",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(1200px 300px at 10% 0%, rgba(255,255,255,0.10), transparent 55%)",
        }}
      />
      {children}
    </div>
  );
}

export function Button({ variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-pink-500/40";
  const styles = {
    primary:
      "bg-pink-500/70 hover:bg-pink-500/80 border border-white/10 shadow-pinkglow",
    ghost:
      "bg-white/5 hover:bg-white/8 border border-white/10",
  };
  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}

export function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext">
      {children}
    </span>
  );
}