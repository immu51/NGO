import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi'
import { useDarkMode } from '../hooks/useDarkMode'
import DonateButton from './DonateButton'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/campaigns', label: 'Campaigns' },
  { to: '/events', label: 'Events' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isDark, toggleDark] = useDarkMode()
  const location = useLocation()

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <nav className="glass mx-4 mt-4 rounded-2xl px-6 py-4 md:mx-8 md:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold tracking-tight gradient-text">
              Hope Foundation
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm font-medium transition-colors hover:text-teal-400 ${
                    location.pathname === to ? 'text-teal-400' : 'text-slate-300'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleDark}
                className="rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Toggle theme"
              >
                {isDark ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
              </button>
              <div className="hidden md:block">
                <DonateButton size="sm" />
              </div>
              <button
                onClick={() => setOpen(!open)}
                className="rounded-lg p-2 text-slate-400 md:hidden"
                aria-label="Menu"
              >
                {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden md:hidden"
              >
                <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
                  {navLinks.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={() => setOpen(false)}
                      className={`py-2 text-sm font-medium ${
                        location.pathname === to ? 'text-teal-400' : 'text-slate-300'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                  <DonateButton size="sm" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  )
}
