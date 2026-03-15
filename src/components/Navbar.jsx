import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navItem = ({ isActive }) =>
  `text-sm transition ${isActive ? "text-text" : "text-mutetext hover:text-text"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pt-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <span className="h-2.5 w-2.5 rotate-45 rounded-sm bg-pink-400" />
          </span>
          <div className="text-sm font-semibold tracking-wide text-text">
            Ruwaidah Alfakhri • Full-Stack
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink className={navItem} to="/projects">
            Projects
          </NavLink>
          <NavLink className={navItem} to="/about">
            About
          </NavLink>
          <NavLink className={navItem} to="/contact">
            Contact
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext hover:bg-white/10 transition"
        >
          <span className="h-2 w-2 rounded-full bg-pink-400" />
          Menu
        </button>
      </div>

      <div className="mt-6 h-px w-full bg-white/10" />

      {/* Mobile overlay + drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm border-l border-white/10 bg-black/50 backdrop-blur-glass"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              <div className="flex items-center justify-between px-5 py-4">
                <div className="text-sm font-semibold text-text">Menu</div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-mutetext hover:bg-white/10 transition"
                >
                  Close
                </button>
              </div>

              <div className="px-5 pb-6">
                <div className="h-px w-full bg-white/10" />

                <nav className="mt-5 grid gap-3">
                  <NavLink
                    to="/projects"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text hover:bg-white/10 transition"
                    onClick={() => setOpen(false)}
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text hover:bg-white/10 transition"
                    onClick={() => setOpen(false)}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text hover:bg-white/10 transition"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </NavLink>
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}