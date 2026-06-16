import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import AnimatedCounter from '../components/AnimatedCounter'
import CTASection from '../components/CTASection'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

const stats = [
  { icon: '🤝', end: 500, suffix: '+', label: 'Prêts financés', desc: 'Depuis notre lancement' },
  { icon: '💶', end: 150000, suffix: ' €', label: 'Montant total prêté', desc: 'Distribué aux emprunteurs' },
  { icon: '⏱️', end: 24, suffix: 'h', label: 'Délai de réponse', desc: 'Sous 24h ouvrées' },
  { icon: '⭐', end: 4.8, suffix: '/5', label: 'Satisfaction', desc: 'Note moyenne des clients' },
]

export default function APropos() {
  return (
    <>
      <PageHero title="À propos" lead="Prestiter SPA — La plateforme de micro-prêt entre particuliers simple, rapide et humaine." />

      <section className="section">
        <div className="container">
          <motion.div className="row g-5 align-items-center" initial="initial" whileInView="animate" viewport={{ once: true }} variants={{ animate: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="col-lg-6" variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
              <div className="section-eyebrow">Notre histoire</div>
              <h2 className="section-header" style={{ textAlign: 'left' }}>Une plateforme née d'un constat simple</h2>
              <p className="lead">Les banques traditionnelles laissent trop de monde de côté. CDD, freelances, étudiants... Des profils solvables mais exclus par des critères obsolètes.</p>
              <p className="text-muted">Chez Prestiter, nous croyons que tout le monde mérite une seconde chance. Notre plateforme met en relation des emprunteurs et des prêteurs particuliers dans un cadre sécurisé et transparent. Enregistré à l'ORIAS comme Intermédiaire en Financement Participatif (IFP), nous respectons les normes les plus strictes.</p>
              <Link to="/emprunter" className="btn btn-primary mt-3">Faire une demande</Link>
            </motion.div>
            <motion.div className="col-lg-6" variants={{ initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
              <div style={{ background: 'var(--blue-bg)', borderRadius: 'var(--radius-xl)', padding: 'clamp(28px,4vw,48px)', textAlign: 'center' }}>
                <img src="/assets/images/prestiter-logo-blue.svg" alt="Prestiter" style={{ height: 64, margin: '0 auto 16px' }} />
                <div style={{ fontSize: 14, color: 'var(--text-2)' }}>Intermédiaire en Financement Participatif</div>
                <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 4 }}>Enregistré à l'ORIAS</div>
                <div style={{ width: 40, height: 2, background: 'var(--blue)', margin: '16px auto' }} />
                <div style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.6 }}>Prestiter SPA — Via della Spiga, 24<br />20121 Milano, Italie</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section section--blue">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Chiffres</div>
            <h2 className="section-header">Prestiter en chiffres</h2>
            <p className="section-sub">Notre impact depuis notre création.</p>
          </motion.div>
          <motion.div className="stats-grid" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {stats.map((s, i) => (
              <motion.div key={i} className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="stat-card-icon">{s.icon}</div>
                <div className="stat-card-value"><AnimatedCounter end={s.end} suffix={s.suffix} /></div>
                <div className="stat-card-label">{s.label}</div>
                <div className="stat-card-desc">{s.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Valeurs</div>
            <h2 className="section-header">Ce qui nous anime</h2>
          </motion.div>
          <motion.div className="row g-5" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-40px' }} variants={{ animate: { transition: { staggerChildren: 0.08 } } }}>
            {[
              { icon: '🤝', title: 'Accessibilité', text: 'Nous ouvrons le crédit à ceux que les banques ignorent, sans discrimination de statut ou de situation.' },
              { icon: '🔍', title: 'Transparence', text: 'Aucun frais caché, des conditions claires dès le départ, un TAEG fixe annoncé.' },
              { icon: '⚡', title: 'Rapidité', text: 'Réponse sous 24h et virement sous 48h. Pas de délais bancaires interminables.' },
              { icon: '🔒', title: 'Sécurité', text: 'Plateforme chiffrée, conformité RGPD, enregistrement ORIAS et contrat électronique.' },
              { icon: '💚', title: 'Solidarité', text: 'Notre PTZ solidaire à taux 0% prouve notre engagement auprès des plus fragiles.' },
              { icon: '📱', title: 'Simplicité', text: '100% en ligne, sans inscription, sans papier. Un formulaire de 5 minutes suffit.' },
            ].map((v, i) => (
              <motion.div key={i} className="col-md-4" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
                <div className="advantage-card tilt-card h-100">
                  <div className="advantage-icon" style={{ fontSize: 24 }}>{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection title="Rejoignez-nous" text="Que vous soyez emprunteur ou prêteur, faites partie de l'aventure Prestiter." cta={{ to: '/contact', label: 'Nous contacter' }} />
    </>
  )
}
