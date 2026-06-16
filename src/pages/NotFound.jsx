import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <h1>404</h1>
          <p>La pagina che stai cercando non esiste.</p>
          <Link to="/" className="btn btn-primary">Torna alla home</Link>
        </motion.div>
      </div>
    </div>
  )
}
