import React, { useState } from 'react'
import img from '../../src/assets/i.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <img src={img} className="h-12 w-12 rounded-md" alt="logo" />
        <div>
          <h1 className="text-xl font-semibold">Md Zubaear Hasan</h1>
          <div className="text-sm text-slate-400">Frontend Developer</div>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-sm text-slate-300">
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="p-2 rounded-md bg-slate-800/40 hover:bg-slate-800/60"
        >
          <svg className="w-6 h-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      <div className={`absolute left-4 right-4 top-20 z-40 md:hidden transition-all ${open ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-95'}`}>
        <div className="mx-auto max-w-lg bg-gradient-to-br from-slate-900/80 to-slate-900/60 border border-slate-800 rounded-xl p-4 glass">
          <ul className="flex flex-col gap-3 text-slate-200">
            <li><a href="#projects" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-slate-800/40">Projects</a></li>
            <li><a href="#about" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-slate-800/40">About</a></li>
            <li><a href="#skills" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-slate-800/40">Skills</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-slate-800/40">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
