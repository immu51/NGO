import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import SectionTitle from '../components/SectionTitle'
import AnimatedCounter from '../components/AnimatedCounter'
import CampaignCard from '../components/CampaignCard'
import TestimonialCard from '../components/TestimonialCard'
import BlogCard from '../components/BlogCard'
import DonateButton from '../components/DonateButton'
import { stats, campaigns, testimonials, partners, news } from '../data/mockData'
import { about } from '../assets'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden px-6 pt-8 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0f14] via-[#0f1419] to-teal-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,184,166,0.15),transparent)]" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-teal-600/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium uppercase tracking-wider text-teal-400"
          >
            Creating Lasting Change
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Every act of{' '}
            <span className="gradient-text">kindness</span>
            <br />
            builds a better world
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          >
            We are an international NGO dedicated to education, healthcare, and community
            development. Join us in making a real impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <DonateButton size="lg" />
            <Link
              to="/volunteer"
              className="inline-flex items-center justify-center rounded-xl border border-teal-500/50 bg-teal-500/10 px-8 py-4 text-lg font-semibold text-teal-400 transition hover:bg-teal-500/20"
            >
              Become a Volunteer
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AnimatedCounter
                  end={item.value}
                  suffix={item.suffix}
                  label={item.label}
                  duration={2}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src={about.aboutStory}
                alt="NGO story"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
            <div>
              <SectionTitle
                overline="Our Story"
                title="From a small initiative to a movement"
                subtitle="Founded in 2015, Hope Foundation started with a single village project. Today we work across multiple states, touching thousands of lives through education, clean water, and healthcare."
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-500"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns */}
      <section className="bg-white/[0.02] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionTitle
            overline="Campaigns"
            title="Support our causes"
            subtitle="Your donation goes directly to projects that create measurable impact."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {campaigns.map((c, i) => (
              <CampaignCard key={c.id} campaign={c} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/campaigns"
              className="inline-flex items-center gap-2 text-teal-400 transition hover:text-teal-300"
            >
              View all campaigns
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionTitle
            overline="Testimonials"
            title="What people say about us"
            subtitle="Stories from donors, partners, and volunteers."
          />
          <div className="mt-14">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              className="!pb-12"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <TestimonialCard testimonial={t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionTitle
            overline="Partners"
            title="Trusted by organizations worldwide"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={48}
              slidesPerView={2}
              breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
              autoplay={{ delay: 2000 }}
              loop
              className="!overflow-visible"
            >
              {partners.map((p) => (
                <SwiperSlide key={p.name}>
                  <div className="flex h-16 items-center justify-center rounded-xl bg-white/5 px-6">
                    <img src={p.logo} alt={p.name} className="max-h-8 w-full object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionTitle
            overline="Latest News"
            title="Stories and updates"
            subtitle="Stay informed about our projects and impact."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-teal-400 transition hover:text-teal-300"
            >
              View all posts
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
