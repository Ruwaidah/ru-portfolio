import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { AnimatePresence } from "framer-motion";

function BackgroundShell({ children }) {

  <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/55 to-black/75" />
  return (
    <div className="min-h-screen text-text">
      <div className="relative overflow-hidden">

        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

        <div
          className="pointer-events-none fixed -top-40 -left-40 -z-10 h-[520px] w-[520px] rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(232,90,174,0.55), transparent 60%)",
          }}
        />
        <div
          className="pointer-events-none fixed -top-24 -right-48 -z-10 h-[600px] w-[600px] rounded-full blur-3xl opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(246,168,212,0.45), transparent 60%)",
          }}
        />
        <div
          className="pointer-events-none fixed -bottom-40 left-1/3 -z-10 h-[700px] w-[700px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 65%)",
          }}
        />

        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <BackgroundShell>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-studies/:id" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </BackgroundShell>
  );
}