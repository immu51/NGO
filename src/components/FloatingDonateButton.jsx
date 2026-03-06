import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiHeart } from 'react-icons/hi'

export default function FloatingDonateButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
    >
      <Link to="/donate">
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg shadow-teal-500/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Donate Now"
        >
          <HiHeart className="h-7 w-7" />
        </motion.div>
      </Link>
    </motion.div>
  )
}
