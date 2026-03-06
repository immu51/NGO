import { motion } from 'framer-motion'

export default function ProgressBar({ progress = 0, className = '', showLabel = false }) {
  const clamped = Math.min(100, Math.max(0, progress))

  return (
    <div className={className}>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      {showLabel && (
        <p className="mt-1 text-xs text-slate-400">
          <span className="font-medium text-teal-400">{clamped}%</span> funded
        </p>
      )}
    </div>
  )
}
