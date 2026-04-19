import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import img from '../../src/assets/i.png'

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#060b17]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 blur-md opacity-40" />
            <img src={img} className="relative h-10 w-10 rounded-xl object-cover" alt="logo" />
          </div>
          <div>
            <h1 className="text-base font-bold leading-tight">Md Zubaear Hasan</h1>
            <div className="text-xs text-slate-400 font-mono">Frontend Developer</div>
          </div>
        </motion.div>

        {/* Desktop nav */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:block"
        >
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:w-4" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Resume.pdf"
                download
                className="btn-primary ml-2 text-sm py-2 px-4"
              >
                Resume ↓
              </a>
            </li>
          </ul>
        </motion.nav>

        {/* Mobile burger */}
        <button
          id="mobile-menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10"
        >
          <span className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <div className="mx-4 mt-2 mb-1 rounded-2xl glass p-4">
              <ul className="flex flex-col gap-1">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-xl text-slate-200 hover:text-white hover:bg-white/8 transition-all text-sm font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a href="/Resume.pdf" download className="btn-primary w-full justify-center">
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
