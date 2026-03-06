import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function BlogCard({ post, index = 0 }) {
  const { id, title, excerpt, image, author, date, slug } = post

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-teal-500/20"
    >
      <Link to={`/blog/${slug || id}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white transition group-hover:text-teal-400">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-slate-400">{excerpt}</p>
          <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
            <span>{author}</span>
            <span>·</span>
            <span>{date}</span>
          </div>
          <span className="mt-3 inline-block text-sm font-medium text-teal-400">
            Read more →
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
