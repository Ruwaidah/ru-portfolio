import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { GlassCard } from "../components/ui.jsx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReasonSelect from "../components/ReasonSelect.jsx";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState("Project");

  useEffect(() => {
    let t;
    if (status.type === "success" && status.msg) {
      t = setTimeout(() => setStatus({ type: "", msg: "" }), 4000);
    }
    return () => t && clearTimeout(t);
  }, [status.type, status.msg]);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      form.reset();
      setReason("Project");
      setStatus({ type: "success", msg: "Message sent. I’ll get back to you soon!" });
    } catch (err) {
      setStatus({ type: "error", msg: "Failed to send. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="py-12">
            <h1 className="text-3xl font-semibold">Contact</h1>
            <p className="mt-2 text-sm text-mutetext">
              Send a message and I’ll reply quickly.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Left info card */}
              <GlassCard className="p-6">
                <h2 className="text-lg font-semibold">Let’s build something</h2>
                <p className="mt-3 text-sm text-mutetext">
                  Whether it’s a project, a job opportunity, or just a quick question — send
                  the details and I’ll get back to you.
                </p>

                <div className="mt-6 space-y-3 text-sm text-mutetext">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    Email: ruwaidah.riyadh@email.com
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    Location: USA (Remote)
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    Availability: Open for projects
                  </div>
                </div>
              </GlassCard>

              {/* Right form card */}
              <GlassCard className="p-6">
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-mutetext">Name</label>
                    <input
                      name="from_name"
                      required
                      className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-text outline-none focus:ring-2 focus:ring-pink-500/30"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-mutetext">Email</label>
                    <input
                      name="reply_to"
                      type="email"
                      required
                      className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-text outline-none focus:ring-2 focus:ring-pink-500/30"
                      placeholder="you@email.com"
                    />
                  </div>
                  <ReasonSelect value={reason} onChange={setReason} />
                  <div>
                    <label className="text-sm text-mutetext">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-text outline-none focus:ring-2 focus:ring-pink-500/30"
                      placeholder="Tell me about your project…"
                    />
                  </div>

                  <button
                    disabled={loading}
                    className="w-full rounded-xl border border-white/10 bg-pink-500/70 px-5 py-2.5 text-sm font-medium hover:bg-pink-500/80 active:scale-[0.98] disabled:opacity-60"
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </button>

                  {status.msg && (
                    <div
                      className={`rounded-xl border px-4 py-3 text-sm backdrop-blur-glass flex items-center gap-2 ${status.type === "success"
                        ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-200"
                        : "border-rose-400/25 bg-rose-500/10 text-rose-200"
                        }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${status.type === "success" ? "bg-emerald-300" : "bg-rose-300"
                          }`}
                      />
                      {status.msg}
                    </div>
                  )}
                </form>

                <div className="mt-4 text-xs text-mutetext">
                  Your message is sent securely via EmailJS.
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}