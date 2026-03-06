import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProgressBar from './ProgressBar'
import DonateButton from './DonateButton'

export default function CampaignCard({ campaign, index = 0 }) {
  const { id, title, description, image, raised, goal, progress } = campaign
  const formattedRaised = (raised / 100000).toFixed(1)
  const formattedGoal = (goal / 100000).toFixed(1)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-teal-500/30 hover:bg-white/[0.08]"
    >
      <Link to={`/campaigns/${id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <p className="mb-4 line-clamp-2 text-sm text-slate-400">{description}</p>
        <ProgressBar progress={progress} showLabel />
        <div className="mt-2 flex items-center justify-between text-sm text-slate-400">
          <span>
            <span className="font-semibold text-teal-400">₹{formattedRaised}L</span> raised of ₹
            {formattedGoal}L
          </span>
        </div>
        <div className="mt-4">
          <DonateButton size="sm" />
        </div>
      </div>
    </motion.article>
  )
}
