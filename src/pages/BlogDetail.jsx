import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../data/mockData'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug || String(p.id) === slug)

  if (!post) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-6">
        <p className="text-slate-400">Post not found.</p>
        <Link to="/blog" className="mt-4 text-teal-400 hover:underline">
          Back to blog
        </Link>
      </div>
    )
  }

  const { title, excerpt, image, author, date, content } = post

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <article className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-teal-400"
          >
            ← Back to blog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">{title}</h1>
            <div className="mt-4 flex items-center gap-4 text-slate-400">
              <span>{author}</span>
              <span>·</span>
              <span>{date}</span>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src={image}
                alt={title}
                className="aspect-video w-full object-cover"
              />
            </div>
            <p className="mt-8 text-lg leading-relaxed text-slate-400">{excerpt}</p>
            <div className="prose prose-invert mt-8 max-w-none">
              <p className="text-slate-400">
                {content || 'Full article content would be loaded here. This is a placeholder for the blog post body with multiple paragraphs, images, and formatting.'}
              </p>
            </div>
          </motion.div>
        </div>
      </article>
    </motion.div>
  )
}
