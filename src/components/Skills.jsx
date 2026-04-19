import React from 'react'
import { motion } from 'framer-motion'

const SKILLS = {
  Frontend: [
    { name: 'React', level: 92, icon: '⚛️' },
    { name: 'JavaScript (ES6+)', level: 90, icon: '🟨' },
    { name: 'Tailwind CSS', level: 88, icon: '🎨' },
    { name: 'Framer Motion', level: 82, icon: '✨' },
    { name: 'HTML & CSS', level: 95, icon: '📐' },
  ],
  Backend: [
    { name: 'Node.js', level: 78, icon: '🟩' },
    { name: 'Express.js', level: 76, icon: '🚂' },
    { name: 'MongoDB', level: 74, icon: '🍃' },
    { name: 'Firebase', level: 80, icon: '🔥' },
    { name: 'REST APIs', level: 82, icon: '🔌' },
  ],
  Tools: [
    { name: 'GitHub', level: 88, icon: '🐙' },
    { name: 'Vite', level: 85, icon: '⚡' },
    { name: 'Figma', level: 72, icon: '🎛️' },
    { name: 'Vercel / Netlify', level: 90, icon: '🌐' },
  ],
}

const CARD_ICONS = { Frontend: '🖥️', Backend: '🗄️', Tools: '🧰' }

const COLORS = {
  Frontend: 'from-indigo-500 to-violet-500',
  Backend: 'from-emerald-500 to-teal-500',
  Tools: 'from-amber-500 to-orange-500',
}

function SkillBar({ name, level, icon, color }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300 flex items-center gap-2">
          <span>{icon}</span>{name}
        </span>
        <span className="text-xs text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  )
}

function Card({ title, items, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.5 }}
      className="glass glass-hover rounded-2xl p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="text-2xl">{CARD_ICONS[title]}</div>
        <h4 className="font-bold text-lg">{title}</h4>
      </div>
      <div className="space-y-4">
        {items.map((it) => (
          <SkillBar key={it.name} {...it} color={COLORS[title]} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="section-heading">Skills & Technologies</h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(SKILLS).map(([title, items], i) => (
          <Card key={title} title={title} items={items} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
