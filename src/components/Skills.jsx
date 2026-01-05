import React from 'react'
import { motion } from 'framer-motion'

const frontend = [
  { name: 'JavaScript (ES6+)', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Framer Motion', icon: '✨' },
  { name: 'HTML & CSS', icon: '📐' },
]

const backend = [
  { name: 'Node.js', icon: '🟩' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'CORS', icon: '🔐' },
]

const tools = [
  { name: 'GitHub', icon: '🐙' },
  { name: 'Vercel', icon: '⬆️' },
  { name: 'Netlify', icon: '🌐' },
  { name: 'Figma', icon: '🎛️' },
]

function Card({ title, items, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/40 to-slate-900/20 border border-slate-800 shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-lg">{title}</h4>
        <div className="text-2xl">{title === 'Frontend' ? '🖥️' : title === 'Backend' ? '🗄️' : '🧰'}</div>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((it) => (
          <div key={it.name} className="flex items-center gap-2 px-3 py-1 bg-slate-800/40 rounded-full text-sm text-slate-100 shadow-inner">
            <span className="text-base">{it.icon}</span>
            <span>{it.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Frontend" items={frontend} delay={0} />
        <Card title="Backend" items={backend} delay={0.08} />
        <Card title="Tools" items={tools} delay={0.16} />
      </div>
    </section>
  )
}
