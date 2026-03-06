import { motion } from 'framer-motion'

export default function SectionTitle({ overline, title, subtitle, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-center ${className}`}
    >
      {overline && (
        <span className="text-sm font-medium uppercase tracking-wider text-teal-400">
          {overline}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">{subtitle}</p>
      )}
    </motion.div>
  )
}
