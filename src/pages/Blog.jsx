import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
const stagger = { whileInView: 'animate', viewport: { once: true, margin: '-40px' }, initial: 'initial', variants: { animate: { transition: { staggerChildren: 0.08 } } } }

const articles = [
  { icon: '💡', cat: 'Consigli', date: '15 giugno 2026', title: '5 consigli per gestire un imprevisto finanziario', excerpt: 'Scopri come affrontare le spese impreviste senza stress.' },
  { icon: '📊', cat: 'Bilancio', date: '8 giugno 2026', title: 'Microcredito vs scoperto bancario: qual è la scelta migliore?', excerpt: 'Confronto dettagliato tra microcredito e scoperto autorizzato.' },
  { icon: '🔒', cat: 'Sicurezza', date: '1 giugno 2026', title: 'Come riconoscere un prestito tra privati affidabile?', excerpt: 'I criteri essenziali per identificare una piattaforma di fiducia.' },
  { icon: '👥', cat: 'Testimonianze', date: '25 maggio 2026', title: 'Sophie: "Grazie a Prestiter ho potuto riparare la mia auto"', excerpt: 'La storia di Sophie che ha ottenuto 300€ in 24h per una riparazione urgente.' },
  { icon: '📝', cat: 'Guida', date: '18 maggio 2026', title: 'I documenti necessari per una richiesta di prestito', excerpt: 'Tutto quello che devi preparare prima di inviare la tua richiesta.' },
  { icon: '💰', cat: 'Risparmio', date: '10 maggio 2026', title: 'Prestare tra privati: un\'alternativa al risparmio tradizionale', excerpt: 'Come il prestito tra privati può offrirti un rendimento migliore.' },
]

export default function Blog() {
  return (
    <>
      <PageHero title="Blog & Consigli" lead="Articoli e consigli per gestire meglio il tuo bilancio e comprendere il prestito tra privati." />

      <section className="section">
        <div className="container">
          <motion.div className="blog-grid" {...stagger}>
            {articles.map((a, i) => (
              <motion.div key={i} className="blog-card" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <div className="blog-card-img">{a.icon}</div>
                <div className="blog-card-body">
                  <div className="blog-card-meta"><span className="badge">{a.cat}</span> &middot; {a.date}</div>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection title="Hai un progetto?" text="Non serve un articolo, lanciati!" cta={{ to: '/emprunter', label: 'Fai richiesta' }} />
    </>
  )
}
