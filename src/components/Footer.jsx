import React from 'react'

export default function Footer() {
  const phone = '01977984999'
  const email = 'zubaear.hasan7@gmail.com'
  const whatsapp = '01977984999'

  return (
    <footer id="contact" className="py-8 text-center text-slate-400">
      <div className="max-w-2xl mx-auto">
        <div className="mb-4">Interested in working together?</div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`tel:${phone}`} className="px-4 py-2 bg-slate-800 text-white rounded-md">Call: {phone}</a>
          <a href={`mailto:${email}`} className="px-4 py-2 bg-primary text-white rounded-md">Email: {email}</a>
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-md">WhatsApp</a>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 text-slate-400">
          <a href="https://github.com/Xubaear" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/zubaear/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.facebook.com/zubaear.hasan" target="_blank" rel="noreferrer">Facebook</a>
        </div>
        <div className="mt-6 text-sm">© {new Date().getFullYear()} Md Zubaear Hasan</div>
      </div>
    </footer>
  )
}
