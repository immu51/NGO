import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

export default function TestimonialCard({ testimonial }) {
  const { name, role, quote, image } = testimonial

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass flex h-full flex-col rounded-2xl p-8 transition hover:border-teal-500/20"
    >
      <FaQuoteLeft className="h-10 w-10 text-teal-500/50" />
      <blockquote className="mt-4 flex-1 text-slate-300">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-teal-500/30"
        />
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
