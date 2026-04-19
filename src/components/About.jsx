import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: 'easeOut' } },
})

const STATS = [
  { value: '3+',  label: 'Years Coding',    icon: '⚡', color: 'text-indigo-400' },
  { value: '10+', label: 'Projects Built',  icon: '🚀', color: 'text-cyan-400'   },
  { value: '3.70',label: 'CGPA (4.0 scale)',icon: '🎓', color: 'text-emerald-400' },
]

export default function About() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp(0)}>
          <h3 className="section-heading">About me</h3>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Text */}
          <div className="md:col-span-3 space-y-4">
            <motion.p variants={fadeUp(0.1)} className="text-slate-300 leading-relaxed text-[0.95rem]">
              I started my programming journey exploring <span className="text-white font-semibold">HTML & CSS</span>,
              then rapidly moved into JavaScript and React. Since then I've shipped interfaces for products
              ranging from marketing sites to complex single-page applications.
            </motion.p>
            <motion.p variants={fadeUp(0.18)} className="text-slate-300 leading-relaxed text-[0.95rem]">
              I love the intersection of <span className="text-white font-semibold">UI craftsmanship and performance</span> —
              building interactive components, micro-animations, and thoughtful flows that feel fast,
              accessible, and genuinely delightful to use.
            </motion.p>
            <motion.p variants={fadeUp(0.26)} className="text-slate-300 leading-relaxed text-[0.95rem]">
              Outside of work I enjoy <span className="text-white font-semibold">football</span>,
              sketching UI ideas in Figma, and reading about product design — perspectives that keep
              my engineering work fresh and user-centred.
            </motion.p>

            <motion.div variants={fadeUp(0.34)} className="flex flex-wrap gap-2 pt-1">
              {['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB', 'Firebase'].map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div variants={fadeUp(0.18)} className="md:col-span-2 grid gap-3">
            {STATS.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="glass glass-hover rounded-2xl p-5 flex items-center gap-4"
              >
                <div className="text-2xl">{s.icon}</div>
                <div>
                  <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
