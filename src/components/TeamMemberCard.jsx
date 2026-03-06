import { motion } from 'framer-motion'

export default function TeamMemberCard({ member, index = 0 }) {
  const { name, role, image } = member

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group text-center"
    >
      <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{name}</h3>
      <p className="mt-1 text-sm text-teal-400">{role}</p>
    </motion.div>
  )
}
