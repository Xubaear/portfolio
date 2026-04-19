import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 mt-6 border-t border-white/5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>Open to new projects</span>
        </div>

        <div className="flex items-center gap-5">
          {[
            { label: 'GitHub',   href: 'https://github.com/Xubaear' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zubaear/' },
            { label: 'Facebook', href: 'https://www.facebook.com/zubaear.hasan' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-200 transition-colors duration-200 text-xs"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="text-xs">© {year} Md Zubaear Hasan</div>
      </div>
    </footer>
  )
}
