import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function DonateButton({ size = 'md', className = '', asLink = true }) {
  const base =
    'inline-flex items-center justify-center rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-teal-500/25 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-[#0c0f14]'

  const gradient =
    'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400'

  const combined = `${base} ${gradient} ${sizeClasses[size]} ${className}`

  if (asLink) {
    return (
      <Link to="/donate">
        <motion.span
          className={`inline-block ${combined}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Donate Now
        </motion.span>
      </Link>
    )
  }

  return (
    <motion.button
      type="button"
      className={combined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Donate Now
    </motion.button>
  )
}
