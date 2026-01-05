import React from 'react'

export default function Footer() {
  const phone = '01977984999'
  const email = 'zubaear.hasan7@gmail.com'

  return (
    <footer id="contact" className="py-8 text-center text-slate-400">
      <div className="max-w-2xl mx-auto">
        <div className="mb-4">Interested in working together?</div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`tel:${phone}`} className="px-4 py-2 bg-slate-800 text-white rounded-md">Call: {phone}</a>
          <a href={`mailto:${email}`} className="px-4 py-2 bg-primary text-white rounded-md">Email: {email}</a>
        </div>
        <div className="mt-6 text-sm">© {new Date().getFullYear()} Your Name</div>
      </div>
    </footer>
  )
}
