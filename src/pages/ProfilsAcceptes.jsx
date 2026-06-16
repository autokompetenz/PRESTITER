import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

const loanTypes = [
  { icon: '🎯', label: 'Prestito personale', to: '/prets/personnel', desc: 'Il più comune. Nessuna giustificazione d\'uso richiesta. Da 100€ a 3.000.000€.' },
  { icon: '⚡', label: 'Prestito urgente', to: '/prets/urgence', desc: 'Trattamento prioritario, risposta in poche ore. Fino a 50.000€.' },
  { icon: '🎓', label: 'Prestito studentesco', to: '/prets/etudiant', desc: 'Per i 18-26 anni. Condizioni agevolate, senza reddito stabile accettato.' },
  { icon: '💼', label: 'Prestito professionale', to: '/prets/professionnel', desc: 'Freelance, partite IVA, artigiani. Redditi variabili accettati.' },
  { icon: '🏠', label: 'Prestito lavori', to: '/prets/travaux', desc: 'Piccoli lavori e ristrutturazioni senza mutuo pesante.' },
  { icon: '🔄', label: 'Consolidamento debiti', to: '/prets/consolidation', desc: 'Raggruppa i tuoi piccoli debiti in un\'unica rata mensile.' },
  { icon: '❤️', label: 'PTZ Solidale (0%)', to: '/prets/ptz', desc: 'Prestito senza interessi per i profili più fragili.' },
  { icon: '🤝', label: 'Prestito P2P', to: '/prets/p2p', desc: 'Prestito diretto tra privati, protetto dalla nostra piattaforma.' },
]

const borrowerProfiles = [
  { icon: '💼', label: 'Tempo indeterminato' }, { icon: '📋', label: 'Tempo determinato' }, { icon: '💻', label: 'Freelance' },
  { icon: '🔧', label: 'Indipendente' }, { icon: '📅', label: 'Interinale' }, { icon: '🎓', label: 'Studente' },
  { icon: '👴', label: 'Pensionato' }, { icon: '🤝', label: 'Beneficiario RSA' }, { icon: '🔄', label: 'Disoccupato' },
  { icon: '🏛️', label: 'Non residente' }, { icon: '🏠', label: 'Proprietario' }, { icon: '🏢', label: 'Affittuario' },
]

export default function ProfilsAcceptes() {
  return (
    <>
      <PageHero title="Profili accettati" lead="Da Prestiter accettiamo tutti i profili. Nessuna discriminazione, nessun rifiuto sistematico." />

      <section className="section">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Profili</div>
            <h2 className="section-header">Tutti i profili sono accettati</h2>
            <p className="section-sub">Tempo indeterminato, tempo determinato, freelance, studente, pensionato, RSA, disoccupato... Nessun profilo è escluso a priori.</p>
          </motion.div>
          <motion.div className="profile-chips" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ staggerChildren: 0.04 }}>
            {borrowerProfiles.map((p, i) => (
              <motion.span key={i} className="profile-chip" variants={{ initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } }} whileHover={{ scale: 1.05, y: -2 }}>
                <span className="profile-chip-icon">{p.icon}</span>
                {p.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Idoneità</div>
            <h2 className="section-header">Tipi di prestito disponibili</h2>
            <p className="section-sub">Scegli il prestito che corrisponde alle tue esigenze tra le nostre 8 offerte.</p>
          </motion.div>
          <motion.div className="row g-5" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-40px' }} variants={{ animate: { transition: { staggerChildren: 0.05 } } }}>
            {loanTypes.map((p, i) => (
              <motion.div key={i} className="col-12 col-sm-6 col-lg-4" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <Link to={p.to} className="advantage-card tilt-card d-block h-100" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="advantage-icon" style={{ fontSize: 24 }}>{p.icon}</div>
                  <h3>{p.label}</h3>
                  <p>{p.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--blue">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Condizioni</div>
            <h2 className="section-header">Requisiti di idoneità</h2>
            <p className="section-sub">I requisiti minimi per ottenere un prestito su Prestiter.</p>
          </motion.div>
          <motion.div className="row g-4" style={{ maxWidth: 700, margin: '0 auto' }} {...fadeUp}>
            {[
              { title: 'Età minima', text: '18 anni minimo. Nessun limite massimo di età.' },
              { title: 'Residenza', text: 'Residente in Francia, Italia, Belgio o Svizzera. I non residenti sono accettati a determinate condizioni.' },
              { title: 'Conto bancario', text: 'Possedere un IBAN valido a tuo nome nella zona SEPA.' },
              { title: 'Carta bancaria', text: 'Carta bancaria valida per i prelievi automatici mensili.' },
              { title: 'Capacità di rimborso', text: 'Dimostrare di avere redditi sufficienti (lavoro, assegni, pensioni). Nessun importo minimo di reddito richiesto.' },
              { title: 'Documento d\'identità', text: 'Carta d\'identità o passaporto in corso di validità. Per i non cittadini UE, permesso di soggiorno accettato.' },
              { title: 'Nazionalità', text: 'Aperto a tutte le nazionalità. Nessuna discriminazione di origine.' },
              { title: 'Casellario giudiziario', text: 'Nessuna verifica del casellario giudiziario viene effettuata.' },
            ].map((c, i) => (
              <div key={i} className="col-md-6">
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 16 }}>
                  <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{c.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-3)', margin: 0 }}>{c.text}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection title="Corrispondi a questi requisiti?" text="Invia la tua richiesta in 5 minuti cronometrati, senza registrazione." cta={{ to: '/emprunter', label: 'Fai richiesta' }} />
    </>
  )
}
