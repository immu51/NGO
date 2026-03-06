import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { campaigns } from '../data/mockData'
import { gallery } from '../assets'
import ProgressBar from '../components/ProgressBar'
import DonateButton from '../components/DonateButton'

export default function CampaignDetail() {
  const { id } = useParams()
  const campaign = campaigns.find((c) => c.id === Number(id))

  if (!campaign) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-6">
        <p className="text-slate-400">Campaign not found.</p>
        <Link to="/campaigns" className="mt-4 text-teal-400 hover:underline">
          Back to campaigns
        </Link>
      </div>
    )
  }

  const { title, description, image, raised, goal, progress } = campaign
  const formattedRaised = (raised / 100000).toFixed(1)
  const formattedGoal = (goal / 100000).toFixed(1)

  const galleryImages = [image, gallery.gallery2, gallery.gallery3]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/campaigns"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-teal-400"
          >
            ← Back to campaigns
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={image}
              alt={title}
              className="aspect-[21/9] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-10"
          >
            <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">{description}</p>

            <div className="mt-10 rounded-2xl glass p-8">
              <h3 className="text-lg font-semibold text-white">Donation progress</h3>
              <ProgressBar progress={progress} showLabel />
              <p className="mt-2 text-slate-400">
                <span className="font-semibold text-teal-400">₹{formattedRaised}L</span> raised
                of ₹{formattedGoal}L goal
              </p>
              <div className="mt-6">
                <DonateButton size="lg" />
              </div>
            </div>

            <h3 className="mt-12 text-xl font-semibold text-white">Gallery</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="overflow-hidden rounded-xl"
                >
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="aspect-video w-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
