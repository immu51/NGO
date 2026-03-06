import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiCalendar, HiLocationMarker } from 'react-icons/hi'
import CountdownTimer from './CountdownTimer'

export default function EventCard({ event, index = 0 }) {
  const { id, title, date, time, location, image, slug } = event

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-teal-500/30"
    >
      <Link to={`/events/${slug || id}`}>
        <div className="relative aspect-[2/1] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="flex items-center gap-1">
                <HiCalendar className="h-4 w-4" />
                {new Date(date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}{' '}
                · {time}
              </span>
              <span className="flex items-center gap-1">
                <HiLocationMarker className="h-4 w-4" />
                {location}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <CountdownTimer targetDate={date} />
        <Link
          to={`/events/${slug || id}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-teal-600 px-4 py-3 font-medium text-white transition hover:bg-teal-500"
        >
          Register
        </Link>
      </div>
    </motion.article>
  )
}
