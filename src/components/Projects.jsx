import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'OnWay',
    image: '/onway.png',
    fallbackBg: 'from-blue-700/40 via-cyan-700/30 to-teal-700/20',
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
    tag: 'Full Stack',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/25',
    desc: 'A real-time ride-sharing & transport platform with live tracking, instant chat, and full booking management.',
    challenges: 'Coordinating real-time Socket.io across three separate servers (chat, socket, backend) while keeping client state consistent and latency low.',
    future: 'Push notifications, driver ratings, admin analytics dashboard, and payment gateway integration.',
    live: 'https://onway-5g8a.onrender.com/',
    github: 'https://github.com/Zarif207/OnWay',
    featured: true,
    emoji: '🚗',
  },
  {
    id: 2,
    title: 'GameHub',
    image: 'https://i.ibb.co.com/5XRYrPgJ/gamehub.jpg',
    fallbackBg: 'from-purple-700/40 via-indigo-700/30 to-violet-700/20',
    stack: ['React', 'Firebase'],
    tag: 'Frontend',
    tagColor: 'text-purple-400 bg-purple-400/10 border-purple-400/25',
    desc: 'A dynamic gaming platform with community features and real-time updates powered by Firebase.',
    challenges: 'Realtime state syncing and performant image delivery at scale.',
    future: 'Add matchmaking and improved social features.',
    live: 'https://gamehub-bb66a.web.app',
    github: 'https://github.com/Xubaear/gamehub-client',
    emoji: '🎮',
  },
  {
    id: 3,
    title: 'Book Courier Service',
    image: 'https://i.ibb.co.com/C35MwpFX/boook.jpg',
    fallbackBg: 'from-amber-700/40 via-orange-700/30 to-yellow-700/20',
    stack: ['Node.js', 'MongoDB', 'Express', 'React'],
    tag: 'Full Stack',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/25',
    desc: 'Delivery management backend paired with a clean frontend dashboard for tracking book shipments.',
    challenges: 'Designing robust REST APIs and handling complex delivery edge cases.',
    future: 'Real-time tracking and admin analytics dashboard.',
    live: 'https://book-courier-service.netlify.app',
    github: 'https://github.com/Xubaear/book-courier-client',
    emoji: '📦',
  },
  {
    id: 4,
    title: 'FinEase',
    image: 'https://i.ibb.co.com/hx75TVkX/finase.jpg',
    fallbackBg: 'from-emerald-700/40 via-teal-700/30 to-green-700/20',
    stack: ['React', 'Framer Motion', 'Tailwind CSS'],
    tag: 'Frontend',
    tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
    desc: 'Personal finance manager with animated charts and smooth transaction tracking.',
    challenges: 'Creating accessible charts and mobile-friendly input flows.',
    future: 'Bank API syncing and deeper analytics views.',
    live: 'https://finease-client-7.netlify.app/',
    github: 'https://github.com/Xubaear/finease-client',
    emoji: '💰',
  },
]

function ExternalIcon({ size = 'w-4 h-4' }) {
  return (
    <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GithubIcon({ size = 'w-4 h-4' }) {
  return (
    <svg className={size} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

/* ── Gradient fallback card image ── */
function ProjectImageFallback({ project }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${project.fallbackBg} flex items-center justify-center`}>
      <div className="text-6xl opacity-30">{project.emoji}</div>
    </div>
  )
}

/* ── Modal ── */
function Modal({ project, onClose }) {
  if (!project) return null
  const [imgError, setImgError] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(5,10,25,0.85)', backdropFilter: 'blur(8px)' }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        className="relative glass rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
        style={{ boxShadow: '0 25px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.07)' }}
      >
        {/* Hero image */}
        <div className="relative h-56 overflow-hidden">
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <ProjectImageFallback project={project} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 border border-white/10 text-white text-sm transition backdrop-blur-sm"
          >
            ✕
          </button>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] font-bold uppercase tracking-wider">
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h4 className="text-2xl font-black">{project.title}</h4>
            <span className={`tech-badge border ${project.tagColor} mt-1`}>{project.tag}</span>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>

          {/* Details grid */}
          <div className="grid sm:grid-cols-3 gap-3 mb-5 text-sm">
            <div className="sm:col-span-3 rounded-xl p-4 border border-white/6" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1.5 font-semibold">About</div>
              <p className="text-slate-300 leading-relaxed">{project.desc}</p>
            </div>
            <div className="sm:col-span-1 rounded-xl p-4 border border-white/6" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1.5 font-semibold">Challenges</div>
              <p className="text-slate-400 text-xs leading-relaxed">{project.challenges}</p>
            </div>
            <div className="sm:col-span-2 rounded-xl p-4 border border-white/6" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1.5 font-semibold">Future Plans</div>
              <p className="text-slate-400 text-xs leading-relaxed">{project.future}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-4 border-t border-white/6">
            <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary flex-1">
              <ExternalIcon /> Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline flex-1">
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Project Card ── */
function ProjectCard({ p, i, onSelect }) {
  const [imgError, setImgError] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className={`glass rounded-2xl overflow-hidden flex flex-col group cursor-pointer ${
        p.featured
          ? 'ring-1 ring-cyan-400/25 shadow-xl shadow-cyan-500/10'
          : 'hover:border-indigo-400/20'
      }`}
      style={{ transition: 'border-color 0.3s, box-shadow 0.3s' }}
    >
      {/* Image area */}
      <div className="relative h-48 overflow-hidden">
        {!imgError ? (
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <ProjectImageFallback project={p} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent opacity-80" />

        {p.featured && (
          <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
            ⭐ Featured
          </div>
        )}
        <span className={`absolute top-3 right-3 tech-badge border ${p.tagColor} text-[10px]`}>{p.tag}</span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {p.stack.slice(0, 4).map((t) => (
            <span key={t} className="tech-badge text-[10px]">{t}</span>
          ))}
          {p.stack.length > 4 && <span className="tech-badge text-[10px]">+{p.stack.length - 4}</span>}
        </div>

        <h4 className="text-lg font-bold mb-1.5 group-hover:gradient-text transition-all">{p.title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">{p.desc}</p>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto">
          <button
            onClick={() => onSelect(p)}
            className="btn-primary flex-1 py-2 text-sm"
          >
            Details
          </button>
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-outline py-2 px-3 text-sm flex items-center gap-1.5"
            title="Live Demo"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            Live
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-outline py-2 px-3 text-sm flex items-center gap-1.5"
            title="GitHub"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-10"
      >
        <h3 className="section-heading mb-0">Projects</h3>
        <span className="text-sm text-slate-600 font-mono">{projects.length} projects</span>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} onSelect={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}