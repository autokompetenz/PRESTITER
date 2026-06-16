import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import AnimatedCounter from '../components/AnimatedCounter'
import CTASection from '../components/CTASection'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

const stats = [
  { icon: '🤝', end: 500, suffix: '+', label: 'Prestiti finanziati', desc: 'Dal nostro lancio' },
  { icon: '💶', end: 150000, suffix: ' €', label: 'Importo totale erogato', desc: 'Distribuito ai mutuatari' },
  { icon: '⏱️', end: 24, suffix: 'h', label: 'Tempo di risposta', desc: 'Entro 24 ore lavorative' },
  { icon: '⭐', end: 4.8, suffix: '/5', label: 'Soddisfazione', desc: 'Voto medio dei clienti' },
]

export default function APropos() {
  return (
    <>
      <PageHero title="Chi siamo" lead="Prestiter SPA — La piattaforma di micro-prestito tra privati semplice, veloce e umana." />

      <section className="section">
        <div className="container">
          <motion.div className="row g-5 align-items-center" initial="initial" whileInView="animate" viewport={{ once: true }} variants={{ animate: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="col-lg-6" variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
              <div className="section-eyebrow">La nostra storia</div>
              <h2 className="section-header" style={{ textAlign: 'left' }}>Una piattaforma nata da una constatazione semplice</h2>
              <p className="lead">Le banche tradizionali lasciano troppe persone indietro. Tempo determinato, freelance, studenti... Profili solvibili ma esclusi da criteri obsoleti.</p>
              <p className="text-muted">Da Prestiter crediamo che tutti meritino una seconda possibilità. La nostra piattaforma mette in contatto mutuatari e investitori privati in un quadro sicuro e trasparente. Registrato presso ORIAS come Intermediario in Finanziamento Partecipativo (IFP), rispettiamo gli standard più rigorosi.</p>
              <Link to="/emprunter" className="btn btn-primary mt-3">Fai richiesta</Link>
            </motion.div>
            <motion.div className="col-lg-6" variants={{ initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
              <div style={{ background: 'var(--blue-bg)', borderRadius: 'var(--radius-xl)', padding: 'clamp(28px,4vw,48px)', textAlign: 'center' }}>
                <img src="/assets/images/prestiter-logo-blue.svg" alt="Prestiter" style={{ height: 64, margin: '0 auto 16px' }} />
                <div style={{ fontSize: 14, color: 'var(--text-2)' }}>Intermediario in Finanziamento Partecipativo</div>
                <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 4 }}>Registrato presso ORIAS</div>
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
            <div className="section-eyebrow">Numeri</div>
            <h2 className="section-header">Prestiter in numeri</h2>
            <p className="section-sub">Il nostro impatto dalla nostra creazione.</p>
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
            <div className="section-eyebrow">Valori</div>
            <h2 className="section-header">Cosa ci anima</h2>
          </motion.div>
          <motion.div className="row g-5" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-40px' }} variants={{ animate: { transition: { staggerChildren: 0.08 } } }}>
            {[
              { icon: '🤝', title: 'Accessibilità', text: 'Apriamo il credito a chi le banche ignorano, senza discriminazione di stato o situazione.' },
              { icon: '🔍', title: 'Trasparenza', text: 'Nessun costo nascosto, condizioni chiare fin dall\'inizio, un TAEG fisso dichiarato.' },
              { icon: '⚡', title: 'Rapidità', text: 'Risposta entro 24h e accredito entro 48h. Niente attese bancarie interminabili.' },
              { icon: '🔒', title: 'Sicurezza', text: 'Piattaforma crittografata, conformità GDPR, registrazione ORIAS e contratto elettronico.' },
              { icon: '💚', title: 'Solidarietà', text: 'Il nostro PTZ solidale a tasso 0% dimostra il nostro impegno verso i più fragili.' },
              { icon: '📱', title: 'Semplicità', text: '100% online, senza registrazione, senza carta. Un modulo di 5 minuti basta.' },
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

      <CTASection title="Unisciti a noi" text="Che tu sia mutuatario o investitore, fai parte dell'avventura Prestiter." cta={{ to: '/contact', label: 'Contattaci' }} />
    </>
  )
}
