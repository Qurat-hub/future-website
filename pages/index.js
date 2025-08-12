import React, { useState } from "react";
import { motion } from "framer-motion";

// 2025 Future-Forward Homepage
// Usage: paste this file into a React/Next.js project configured with TailwindCSS & Framer Motion.
// It's a single-file visual mockup focusing on layout, interactions, and modern patterns.

export default function Home() {
  const [theme, setTheme] = useState("auto");
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* Top nav */}
      <header className="backdrop-blur-md bg-white/5 border-b border-white/6 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18M12 3v18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">NovaStudio</h1>
              <p className="text-xs text-white/60">Design & Experience — 2025</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a className="text-sm hover:text-white/90 transition">Product</a>
            <a className="text-sm hover:text-white/90 transition">Solutions</a>
            <a className="text-sm hover:text-white/90 transition">Pricing</a>
            <a className="text-sm hover:text-white/90 transition">Resources</a>
            <button
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              className="ml-4 px-3 py-1.5 rounded-lg bg-white/6 hover:bg-white/10 text-sm"
            >
              Toggle Theme
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm shadow">Get started</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              A modern website made for <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-300">2025 — fast, human, & smart</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-slate-300 max-w-xl"
            >
              Production-ready patterns: predictive navigation, AI concierge, 3D product previews, privacy-first analytics, and PWA/AR integrations. Ship faster with a modern stack.
            </motion.p>

            <div className="mt-8 flex gap-3">
              <motion.button whileHover={{ scale: 1.02 }} className="px-5 py-3 rounded-lg bg-white/6 hover:bg-white/10">Live demo</motion.button>
              <motion.button whileHover={{ scale: 1.02 }} className="px-5 py-3 rounded-lg bg-indigo-500 text-white">Hire us</motion.button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-slate-400 max-w-md">
              <div className="rounded-lg bg-white/2 p-3">
                <div className="text-sm font-medium">Sub-1s load</div>
                <div className="text-xs mt-1">Edge rendered + RSC</div>
              </div>
              <div className="rounded-lg bg-white/2 p-3">
                <div className="text-sm font-medium">Privacy-first</div>
                <div className="text-xs mt-1">No fingerprinting, opt-in analytics</div>
              </div>
            </div>
          </div>

          {/* Visual / 3D placeholder card */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/3 border border-white/6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-slate-400">Featured</div>
                  <h3 className="text-xl font-semibold mt-2">3D Product Viewer (preview)</h3>
                </div>
                <div className="text-xs text-slate-400">beta</div>
              </div>

              <div className="mt-6 w-full h-64 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center">
                {/* In a real build this would be a Three.js canvas or <model-viewer /> */}
                <svg width="160" height="160" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0" stopColor="#8b5cf6" />
                      <stop offset="1" stopColor="#fb7185" />
                    </linearGradient>
                  </defs>
                  <rect x="10" y="10" width="180" height="120" rx="18" fill="url(#g1)" fillOpacity="0.15" />
                  <g transform="translate(30,40)">
                    <circle cx="60" cy="20" r="36" stroke="#ffffff55" strokeWidth="1" />
                    <rect x="2" y="68" width="116" height="28" rx="6" fill="#ffffff10" />
                  </g>
                </svg>
              </div>

              <div className="mt-4 flex gap-3">
                <button className="text-sm px-3 py-2 rounded-lg bg-white/6">Spin</button>
                <button className="text-sm px-3 py-2 rounded-lg bg-white/6">AR try</button>
                <button className="text-sm px-3 py-2 rounded-lg bg-white/6">Download</button>
              </div>
            </motion.div>

            {/* Floating AI concierge prompt */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 left-6 md:left-10 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 cursor-pointer"
              onClick={() => setChatOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="text-sm">Ask Nova — product recommender</div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Predictive Nav", desc: "AI-curated paths for returning users.", icon: "⚡" },
            { title: "Privacy-first", desc: "Opt-in analytics and local-first data.", icon: "🔒" },
            { title: "PWA + Offline", desc: "Works offline, installs like an app.", icon: "📱" },
          ].map((f) => (
            <motion.div key={f.title} whileHover={{ y: -6 }} className="rounded-xl p-6 bg-white/3 border border-white/6">
              <div className="text-3xl">{f.icon}</div>
              <div className="mt-4 font-semibold">{f.title}</div>
              <div className="mt-2 text-sm text-slate-300">{f.desc}</div>
            </motion.div>
          ))}
        </section>

        {/* Product Grid */}
        <section className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Popular templates</h3>
            <div className="text-sm text-slate-400">Filtered for speed & conversions</div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-2xl p-4 bg-white/4 border border-white/6">
                <div className="h-36 rounded-lg bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center"> 
                  <div className="text-xs text-slate-300">Template preview</div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Conversion Kit {i + 1}</div>
                    <div className="text-xs text-slate-400">Landing + checkout</div>
                  </div>
                  <div className="text-sm font-semibold">$199</div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-3 py-2 rounded-lg bg-white/6">Preview</button>
                  <button className="px-4 py-2 rounded-lg bg-indigo-500 text-white">Buy</button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/6 pt-8 pb-12 text-slate-400">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-semibold text-white">NovaStudio</div>
              <div className="text-xs mt-2">Design systems and sites built for growth.</div>
            </div>

            <div className="flex gap-6 text-sm">
              <div>Terms</div>
              <div>Privacy</div>
              <div>Contact</div>
            </div>
          </div>
        </footer>
      </main>

      {/* Chat / AI concierge modal */}
      {chatOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-6 pointer-events-none">
          <div className="pointer-events-auto w-full max-w-xl bg-slate-900/95 rounded-2xl border border-white/6 shadow-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center">🤖</div>
                <div>
                  <div className="font-semibold">Nova — AI concierge</div>
                  <div className="text-xs text-slate-400">Personalized suggestions · Privacy-first</div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-sm text-slate-400">Close</button>
            </div>

            <div className="mt-4">
              <div className="rounded-xl bg-white/4 p-3 text-sm text-slate-300">Hi — tell me what you want and I'll show the best option.</div>

              <div className="mt-3 flex gap-2">
                <input placeholder="e.g. I need a landing for a SaaS..." className="flex-1 rounded-lg p-3 bg-white/6 outline-none" />
                <button className="px-4 py-2 rounded-lg bg-indigo-500 text-white">Ask</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
