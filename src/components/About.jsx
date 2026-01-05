import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4 mt-20">About me</h3>
        <p className="text-slate-300 max-w-2xl mb-20">
          I'm a frontend developer who loves building fast, accessible web
          experiences. I specialise in React, animation, and clean UI design.
          I enjoy collaborating on products that solve real user problems.
        </p>
      </motion.div>
    </section>
  )
}
