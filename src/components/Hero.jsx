import React from 'react'
import { motion } from 'framer-motion'
import img from '../../src/assets/me.png'

export default function Hero() {
  return (
    <section className="py-12 mt-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold mb-4">Hi, I'm Md Zubaear Hasan</h2>
          <div className="text-slate-300 mb-4 max-w-xl">Frontend Developer • React & UI-focused engineer</div>
          <p className="text-slate-300 mb-6 max-w-xl">I build beautiful, accessible web experiences using React and modern CSS. I focus on performance, animation, and great UX — I enjoy turning concepts into polished, production-ready interfaces.</p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="/Resume.pdf" target="_blank" rel="noreferrer" download className="px-5 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-md hover:opacity-95">Download Resume</a>
            <a href="#contact" className="px-5 py-3 border border-slate-700 rounded-lg text-slate-200 hover:border-white">Contact me</a>

            <div className="flex items-center gap-3 ml-2 text-sm">
              <a href="https://github.com/Xubaear" target="_blank" rel="noreferrer" className="px-3 py-2 bg-slate-800/40 rounded-md">GitHub</a>
              <a href="https://www.linkedin.com/in/zubaear/" target="_blank" rel="noreferrer" className="px-3 py-2 bg-slate-800/40 rounded-md">LinkedIn</a>
              <a href="https://www.facebook.com/zubaear.hasan" target="_blank" rel="noreferrer" className="px-3 py-2 bg-slate-800/40 rounded-md">Facebook</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className=" rounded-2xl flex items-center justify-center animate-float">
            <div className="text-center -mt-40">
              

              <img src={img} className='h-[500px] w-[620px] max-w-none' alt="h-[500px] w-[620px] max-w-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
