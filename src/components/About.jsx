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
        <p className="text-slate-300 max-w-3xl mb-4">
          I started my programming journey exploring HTML and CSS, and quickly
          moved into JavaScript and React. Over the years I have built
          interfaces for products ranging from small marketing sites to medium
          single-page applications. I enjoy turning design ideas into
          high-quality, accessible user experiences.
        </p>

        <p className="text-slate-300 max-w-3xl mb-4">
          The type of work I enjoy most blends UI craftsmanship with
          performance. I like building interactive components, animations, and
          thoughtful flows that feel fast and intuitive. I also take pride in
          ensuring accessibility and responsive design.
        </p>

        <p className="text-slate-300 max-w-3xl">
          Outside programming I enjoy football, sketching UI ideas in Figma,
          and reading about product design. These hobbies help me stay curious
          and bring fresh perspectives to the projects I work on.
        </p>
      </motion.div>
    </section>
  )
}
