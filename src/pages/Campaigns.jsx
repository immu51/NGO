import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import CampaignCard from '../components/CampaignCard'
import { campaigns } from '../data/mockData'

export default function Campaigns() {
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
            overline="Campaigns"
            title="Support a cause"
            subtitle="Choose a campaign and make a direct impact. 100% of your donation goes to the project."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((c, i) => (
              <CampaignCard key={c.id} campaign={c} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
