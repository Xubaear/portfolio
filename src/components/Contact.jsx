import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  // Replace FORM_ID with your Formspree form id to enable serverless submissions.
  const FORM_ID = 'YOUR_FORMSPREE_ID'
  const endpoint = FORM_ID === 'YOUR_FORMSPREE_ID' ? null : `https://formspree.io/f/${FORM_ID}`

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)
    if (!name || !email || !message) {
      setStatus({ ok: false, msg: 'Please fill all fields.' })
      return
    }
    setLoading(true)
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        })
        if (res.ok) {
          setStatus({ ok: true, msg: 'Message sent — thanks!' })
          setName('')
          setEmail('')
          setMessage('')
        } else {
          setStatus({ ok: false, msg: 'Submission failed. Try email.' })
        }
      } else {
        // fallback to mailto if no Formspree ID configured
        const mailto = `mailto:zubaear.hasan7@gmail.com?subject=${encodeURIComponent(
          'Portfolio contact from ' + name
        )}&body=${encodeURIComponent(message + '\n\n' + email)}`
        window.location.href = mailto
        setStatus({ ok: true, msg: 'Opened mail client.' })
      }
    } catch (err) {
      setStatus({ ok: false, msg: 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-12">
      <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
      <p className="text-slate-300 mb-6 max-w-xl">Prefer email? zubaear.hasan7@gmail.com — or use the form below.</p>

      <form onSubmit={handleSubmit} className="max-w-xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <input required className="p-3 rounded-md bg-slate-900/40" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <input required type="email" className="p-3 rounded-md bg-slate-900/40" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <textarea required className="w-full mt-4 p-3 rounded-md bg-slate-900/40" rows={6} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />

        <div className="flex items-center gap-4 mt-4">
          <button type="submit" disabled={loading} className="px-4 py-2 bg-primary text-white rounded-md">
            {loading ? 'Sending...' : 'Send message'}
          </button>
          {status && (
            <div className={`text-sm ${status.ok ? 'text-green-400' : 'text-rose-400'}`}>{status.msg}</div>
          )}
        </div>
      </form>

      <div className="mt-6 text-sm text-slate-400">Phone: 01977984999 · Email: zubaear.hasan7@gmail.com</div>
    </section>
  )
}
