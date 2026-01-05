import React from 'react'
import { motion } from 'framer-motion'

const sample = [
  { id: 1, title: 'Project One', desc: 'A web app built with React.' },
  { id: 2, title: 'Project Two', desc: 'A performant UI with animations.' },
  { id: 3, title: 'Project Three', desc: 'Accessible, responsive design.' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h3 className="text-2xl font-semibold mb-6">Selected projects</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sample.map((p, i) => (
          <motion.a
            key={p.id}
            href="#"
            className="block p-5 rounded-xl glass hover:scale-[1.02] transition-transform"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="text-sm text-slate-300">Featured</div>
            <div className="text-lg font-semibold mt-2">{p.title}</div>
            <p className="text-slate-300 mt-2 text-sm">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
