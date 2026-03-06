import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            overline="Contact"
            title="Get in touch"
            subtitle="We'd love to hear from you. Send a message or visit us."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">Send a message</h3>
                {submitted ? (
                  <p className="mt-4 text-slate-400">
                    Thank you! We&apos;ll get back to you soon.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                    <textarea
                      required
                      rows={4}
                      placeholder="Message"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                    <motion.button
                      type="submit"
                      className="w-full rounded-xl bg-teal-600 py-3 font-medium text-white transition hover:bg-teal-500"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      Send message
                    </motion.button>
                  </form>
                )}
              </div>

              <div className="rounded-2xl glass p-6">
                <h3 className="text-lg font-semibold text-white">Contact info</h3>
                <ul className="mt-4 space-y-4 text-slate-400">
                  <li className="flex items-center gap-3">
                    <HiLocationMarker className="h-5 w-5 shrink-0 text-teal-400" />
                    123 Impact Street, Mumbai, MH 400001
                  </li>
                  <li className="flex items-center gap-3">
                    <HiPhone className="h-5 w-5 shrink-0 text-teal-400" />
                    <a href="tel:+912212345678" className="hover:text-teal-400">
                      +91 22 1234 5678
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiMail className="h-5 w-5 shrink-0 text-teal-400" />
                    <a href="mailto:contact@hopefoundation.org" className="hover:text-teal-400">
                      contact@hopefoundation.org
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="overflow-hidden rounded-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.356989130399!2d72.82621431490068!3d19.055987987105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                title="Office location"
                className="h-[400px] w-full rounded-2xl border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
