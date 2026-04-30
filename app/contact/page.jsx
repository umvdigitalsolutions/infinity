"use client"

import React from 'react'

export default function ContactPage() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [company, setCompany] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [status, setStatus] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message }),
      })

      const data = await res.json()
      if (!res.ok) {
        setStatus({ ok: false, msg: data?.error || 'Failed to send' })
      } else {
        setStatus({ ok: true, msg: 'Message sent — we will reply shortly.' })
        setName('')
        setEmail('')
        setCompany('')
        setMessage('')
      }
    } catch (err) {
      setStatus({ ok: false, msg: String(err) })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-heading font-bold">Contact Us</h1>
      <p className="mt-3 text-slate-300">Looking for a reliable energy or export partner? Reach out and let's start a conversation.</p>

      <div className="mt-8 max-w-xl">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <input value={name} onChange={e => setName(e.target.value)} required className="border rounded-md px-4 py-2" placeholder="Name" />
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" required className="border rounded-md px-4 py-2" placeholder="Email" />
          <input value={company} onChange={e => setCompany(e.target.value)} className="border rounded-md px-4 py-2" placeholder="Company / Country" />
          <textarea value={message} onChange={e => setMessage(e.target.value)} required className="border rounded-md px-4 py-2 h-32" placeholder="Message" />
          <div>
            <button disabled={loading} type="submit" className="bg-sky-600 disabled:opacity-60 text-white px-6 py-2 rounded-md">{loading ? 'Sending…' : 'Send Message'}</button>
          </div>
        </form>

        {status && (
          <div className={`mt-4 p-3 rounded-md ${status.ok ? 'bg-green-700 text-white' : 'bg-red-700 text-white'}`}>
            {status.msg}
          </div>
        )}
      </div>

      <section className="mt-12 text-slate-300">
        <h3 className="font-semibold">Head Office</h3>
        <p className="mt-2">Jodhpur, Rajasthan, India</p>
        <p className="mt-1">Email: info@anayinfinity.com</p>
      </section>
    </div>
  )
}
