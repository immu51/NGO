import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import TeamMemberCard from '../components/TeamMemberCard'
import { team, timeline } from '../data/mockData'
import { about } from '../assets'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionTitle
            overline="About Us"
            title="Our story, mission & team"
            subtitle="We believe in the power of community and collective action to create lasting change."
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl glass p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold text-white">Our Story</h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              Hope Foundation was born from a simple observation: too many communities lacked
              access to basic education, clean water, and healthcare. What started as a small
              initiative in one village has grown into a movement spanning multiple states. We
              work with local leaders, governments, and partners to design solutions that are
              sustainable and owned by the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-8"
            >
              <h3 className="text-xl font-semibold text-teal-400">Mission</h3>
              <p className="mt-3 text-slate-400">
                To empower underserved communities through education, healthcare, and
                sustainable development, ensuring dignity and opportunity for all.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-8"
            >
              <h3 className="text-xl font-semibold text-teal-400">Vision</h3>
              <p className="mt-3 text-slate-400">
                A world where every person has access to quality education, healthcare, and
                the opportunity to thrive, regardless of where they are born.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder message */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 rounded-2xl glass p-8 md:flex-row md:items-center md:p-12"
          >
            <img
              src={about.aboutFounder}
              alt="Founder"
              className="h-40 w-40 shrink-0 rounded-2xl object-cover"
            />
            <div>
              <p className="text-sm font-medium text-teal-400">Founder & CEO</p>
              <h3 className="mt-1 text-2xl font-bold text-white">Dr. Kavita Reddy</h3>
              <p className="mt-4 text-slate-400">
                &ldquo;We started with a belief that change is possible when communities lead.
                Every project we undertake is built on partnership, transparency, and a
                long-term commitment to the people we serve.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionTitle
            overline="Our Team"
            title="People behind the impact"
            subtitle="Dedicated professionals driving change on the ground."
          />
          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <SectionTitle
            overline="Timeline"
            title="Our journey"
          />
          <div className="mt-14 space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 border-l-2 border-teal-500/30 pl-8 pb-12 last:pb-0"
              >
                <span className="text-lg font-bold text-teal-400">{item.year}</span>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
