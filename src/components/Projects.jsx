import React from 'react'
import { motion } from 'framer-motion'


const projects = [
  { 
    id: 1, 
    title: 'GameHub',
    desc: 'A dynamic gaming platform with React & Firebase.', 
    tags: 'React • Firebase',
    image: 'https://i.ibb.co.com/5XRYrPgJ/gamehub.jpg',
    link: 'https://gamehub-bb66a.web.app' 
  },
  { 
    id: 2, 
    title: 'Book Courier Service', 
    desc: 'Backend service for delivery system.', 
    tags: 'Node.js • MongoDB',
    image: 'https://i.ibb.co.com/C35MwpFX/boook.jpg',
    link: 'https://book-courier-service.netlify.app' 
  },
  { 
    id: 3, 
    title: 'FinEase', 
    desc: 'FineEase is a simple and intuitive personal finance management web application', 
    tags: 'Framer Motion • Tailwind',
    image: 'https://i.ibb.co.com/hx75TVkX/finase.jpg',
    link: 'https://finease-client-7.netlify.app/' 
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h3 className="text-2xl font-semibold mb-6">Selected projects</h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.link}
            target="_blank" 
            className="block p-4 rounded-xl glass hover:scale-[1.02] transition-transform border border-white/10"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >

            <div className="h-48 w-full bg-gray-800 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full  hover:scale-110 transition-duration-500" 
                />
            </div>

            <div className="text-xs font-bold text-purple-400 mb-1 uppercase tracking-wider">
                {p.tags}
            </div>
            
            <div className="text-lg font-semibold mt-1">{p.title}</div>
            <p className="text-slate-300 mt-2 text-sm">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}