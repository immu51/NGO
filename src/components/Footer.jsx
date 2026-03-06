import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const links = {
  quick: [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/campaigns', label: 'Campaigns' },
    { to: '/donate', label: 'Donate' },
    { to: '/volunteer', label: 'Volunteer' },
    { to: '/contact', label: 'Contact' },
  ],
  social: [
    { id: 'facebook', icon: FaFacebookF, href: '#' },
    { id: 'twitter', icon: FaTwitter, href: '#' },
    { id: 'instagram', icon: FaInstagram, href: '#' },
    { id: 'linkedin', icon: FaLinkedinIn, href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0d12]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="text-2xl font-bold gradient-text">
              Hope Foundation
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Creating lasting change through community-driven development, education, and healthcare.
            </p>
            <div className="mt-6 flex gap-4">
              {links.social.map(({ id, icon: Icon, href }) => (
                <a
                  key={id}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition hover:bg-teal-500/20 hover:text-teal-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {links.quick.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-slate-400 transition hover:text-teal-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <HiLocationMarker className="h-5 w-5 shrink-0 text-teal-400" />
                <span>123 Impact Street, Mumbai, MH 400001</span>
              </li>
              <li className="flex items-center gap-2">
                <HiPhone className="h-5 w-5 shrink-0 text-teal-400" />
                <a href="tel:+912212345678" className="hover:text-teal-400">+91 22 1234 5678</a>
              </li>
              <li className="flex items-center gap-2">
                <HiMail className="h-5 w-5 shrink-0 text-teal-400" />
                <a href="mailto:contact@hopefoundation.org" className="hover:text-teal-400">
                  contact@hopefoundation.org
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white">Newsletter</h4>
            <p className="mt-2 text-sm text-slate-400">
              Stay updated with our projects and impact stories.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm placeholder:text-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Hope Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
