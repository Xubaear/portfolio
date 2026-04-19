import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="section-heading">Education</h3>
      </motion.div>

      <div className="space-y-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass glass-hover rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5"
        >
          {/* Icon */}
          <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/20 flex items-center justify-center text-2xl">
            🎓
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <div className="font-bold text-lg">B.Sc. in Electrical & Electronic Engineering</div>
                <div className="text-sm text-slate-400 mt-0.5">Rajshahi Science and Technology University</div>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1">
                <span className="tech-badge text-xs">2025</span>
                <span className="text-sm font-mono text-emerald-400">CGPA 3.70 / 4.00</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
