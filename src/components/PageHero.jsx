import { motion } from 'framer-motion'

export default function PageHero({ title, lead }) {
  return (
    <div className="page-hero">
      <div className="container">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>{title}</motion.h1>
        {lead && <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.5 }}>{lead}</motion.p>}
      </div>
    </div>
  )
}
