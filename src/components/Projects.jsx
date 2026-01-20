import React, { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  { 
    id: 1, 
    title: 'GameHub',
    image: 'https://i.ibb.co.com/5XRYrPgJ/gamehub.jpg', // Image added here
    stack: ['React', 'Firebase'],
    desc: 'A dynamic gaming platform with community features and realtime updates.',
    live: 'https://gamehub-bb66a.web.app',
    github: 'https://github.com/yourname/gamehub-client',
    challenges: 'Realtime state syncing and performant image delivery.',
    future: 'Add matchmaking and improved social features.'
  },
  {
    id: 2,
    title: 'Book Courier Service',
    image: 'https://i.ibb.co.com/C35MwpFX/boook.jpg', // Image added here
    stack: ['Node.js', 'MongoDB', 'Express'],
    desc: 'Delivery management backend paired with a simple frontend dashboard.',
    live: 'https://book-courier-service.netlify.app',
    github: 'https://github.com/yourname/book-courier-client',
    challenges: 'Designing robust APIs and handling edge-case deliveries.',
    future: 'Add real-time tracking and admin dashboard.'
  },
  {
    id: 3,
    title: 'FinEase',
    image: 'https://i.ibb.co.com/hx75TVkX/finase.jpg', // Image added here
    stack: ['Framer Motion', 'Tailwind'],
    desc: 'Personal finance manager with simple charts and transaction tracking.',
    live: 'https://finease-client-7.netlify.app/',
    github: 'https://github.com/yourname/finease-client',
    challenges: 'Creating accessible charts and mobile-friendly input flows.',
    future: 'Add syncing with bank APIs and more analytics.'
  },
]

function Modal({ project, onClose }) {
  if (!project) return null
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <motion.div 
        initial={{ scale: 0.95 }} 
        animate={{ scale: 1 }} 
        className="bg-slate-900 rounded-xl max-w-3xl w-full p-6 glass border border-slate-800"
      >
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-2xl font-semibold">{project.title}</h4>
          <button 
            onClick={onClose} 
            className="text-slate-300 hover:text-white px-2 py-1 rounded hover:bg-slate-800"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            {/* Image shown in Modal */}
            <img src={project.image} alt={project.title} className="w-full rounded-md object-cover h-48 mb-4" />
            <div className="text-sm text-slate-400">
              <strong className="text-slate-200">Technology Stack:</strong>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-800/50 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-2 text-slate-300 space-y-4">
            <div>
              <strong className="text-slate-100">Description:</strong>
              <p className="mt-1">{project.desc}</p>
            </div>
            <div>
              <strong className="text-slate-100">Challenges Faced:</strong>
              <p className="mt-1">{project.challenges}</p>
            </div>
            <div>
              <strong className="text-slate-100">Future Improvements:</strong>
              <p className="mt-1">{project.future}</p>
            </div>
            <div className="flex gap-3 pt-2">
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition"
              >
                Live Project
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="px-4 py-2 border border-slate-700 rounded-md text-slate-200 hover:border-slate-600 transition"
              >
                GitHub (Client)
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-12">
      <h3 className="text-2xl font-semibold mb-6">Selected projects</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="p-4 rounded-xl glass hover:scale-[1.02] transition-transform border border-white/10"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="h-44 w-full bg-gray-800 rounded-lg mb-4 overflow-hidden">
              {/* Image shown in Card */}
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>

            <div className="text-xs font-bold text-purple-400 mb-1 uppercase tracking-wider">{p.stack.join(' • ')}</div>
            <div className="text-lg font-semibold mt-1">{p.title}</div>
            <p className="text-slate-300 mt-2 text-sm line-clamp-2">{p.desc}</p>

            <div className="mt-4 flex gap-3">
              <button 
                onClick={() => setSelected(p)} 
                className="px-3 py-2 bg-primary text-white rounded-md hover:opacity-90 transition"
              >
                View More / Details
              </button>
              <a 
                href={p.live} 
                target="_blank" 
                rel="noreferrer" 
                className="px-3 py-2 border border-slate-700 rounded-md text-slate-200 hover:border-slate-600 transition"
              >
                Visit
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}