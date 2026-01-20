import React from 'react'

export default function Education() {
  return (
    <section id="education" className="py-12">
      <h3 className="text-2xl font-semibold mb-4">Education</h3>
      <div className="space-y-4 max-w-3xl text-slate-300">
        <div className="p-4 rounded-xl glass">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">B.Sc. in EEE</div>
              <div className="text-sm text-slate-400">Rajshahi Science and Technology University — 2025</div>
            </div>
            <div className="text-sm text-slate-400">CGPA: 3.70</div>
          </div>
          {/*<div className="mt-2 text-sm">Relevant coursework: Data Structures, Web Development, Databases, Algorithms.</div>*/}
        </div>

        
      </div>
    </section>
  )
}
