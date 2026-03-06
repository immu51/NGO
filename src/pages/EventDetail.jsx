import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { events } from '../data/mockData'
import { HiCalendar, HiLocationMarker, HiClock } from 'react-icons/hi'
import CountdownTimer from '../components/CountdownTimer'

export default function EventDetail() {
  const { slug } = useParams()
  const event = events.find((e) => e.slug === slug || String(e.id) === slug)

  if (!event) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-6">
        <p className="text-slate-400">Event not found.</p>
        <Link to="/events" className="mt-4 text-teal-400 hover:underline">
          Back to events
        </Link>
      </div>
    )
  }

  const { title, date, time, location, image } = event

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/events"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-teal-400"
          >
            ← Back to events
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
            <div className="mt-6 flex flex-wrap gap-6 text-slate-400">
              <span className="flex items-center gap-2">
                <HiCalendar className="h-5 w-5 text-teal-400" />
                {new Date(date).toLocaleDateString('en-IN', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <HiClock className="h-5 w-5 text-teal-400" />
                {time}
              </span>
              <span className="flex items-center gap-2">
                <HiLocationMarker className="h-5 w-5 text-teal-400" />
                {location}
              </span>
            </div>
            <CountdownTimer targetDate={date} />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 rounded-xl bg-teal-600 px-8 py-4 font-semibold text-white transition hover:bg-teal-500"
            >
              Register for this event
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
