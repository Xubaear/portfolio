import React from 'react'
import img from '../../src/assets/i.png'

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        {/* <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-extrabold">ZH</div> */}
        <img src={img} className='h-14 w-14' alt="" />
        <div>
          <h1 className="text-xl font-semibold">Md Zubaear Hasan</h1>
          <div className="text-sm text-slate-400">Frontend Developer</div>
        </div>
      </div>
      <nav>
        <ul className="flex gap-6 text-sm text-slate-300">
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
