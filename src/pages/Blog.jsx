import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/mockData'

export default function Blog() {
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
            overline="Blog"
            title="Stories and insights"
            subtitle="Updates from the field and thoughts on development."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
