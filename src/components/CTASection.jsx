import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CTASection({ title, text, cta }) {
  return (
    <section className="section cta-section">
      <div className="container">
        <motion.div className="cta-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
          {cta && <Link to={cta.to} className="btn btn-primary">{cta.label}</Link>}
        </motion.div>
      </div>
    </section>
  )
}
