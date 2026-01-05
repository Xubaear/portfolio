import React from 'react'

const skills = [
  'JavaScript (ES6+)',
  'React',
  'Tailwind CSS',
  'Framer Motion',
  'HTML & CSS',
  'Accessibility',
]

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h3 className="text-2xl font-semibold mb-4">Skills & Technologies</h3>
      <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
        {skills.map((s) => (
          <div key={s} className="px-4 py-2 bg-slate-900/30 rounded-md text-slate-200">
            {s}
          </div>
        ))}
      </div>
    </section>
  )
}
