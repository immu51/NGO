import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import EventCard from '../components/EventCard'
import { events } from '../data/mockData'

export default function Events() {
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
            overline="Events"
            title="Join us at upcoming events"
            subtitle="Runs, workshops, galas, and community gatherings."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
