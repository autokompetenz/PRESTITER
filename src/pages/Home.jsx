import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LoanSimulator from '../components/LoanSimulator'
import AnimatedCounter from '../components/AnimatedCounter'
import FloatingDecorations from '../components/FloatingDecorations'
import testimonials from '../data/testimonials'
import faq from '../data/faq'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
const stagger = { whileInView: 'animate', viewport: { once: true, margin: '-40px' }, initial: 'initial', variants: { animate: { transition: { staggerChildren: 0.08 } } } }

const loanTypes = [
  { icon: '🎯', label: 'Prestito personale', to: '/prets/personnel', desc: 'Da 100€ a 3 000 000€ — Senza giustificativo', tag: 'Popolare' },
  { icon: '⚡', label: 'Prestito d\'emergenza', to: '/prets/urgence', desc: 'Da 100€ a 50 000€ — Risposta in poche ore', tag: 'Prioritario' },
  { icon: '🎓', label: 'Prestito studentesco', to: '/prets/etudiant', desc: 'Da 100€ a 50 000€ — Senza redditi stabili', tag: 'Giovani' },
  { icon: '💼', label: 'Prestito professionale', to: '/prets/professionnel', desc: 'Da 1 000€ a 3 000 000€ — Freelance & partite IVA', tag: 'Pro' },
]

const advantages = [
  { icon: '📄', title: 'Nessun giustificativo complesso', text: 'Basta con le pratiche amministrative infinite. Basta un documento d\'identità.' },
  { icon: '👥', title: 'Aperto a tutti i profili', text: 'Studenti, freelance, determinato, interinali, RSA, pensionati... Tutti accettati.' },
  { icon: '🚫', title: 'Nessuna registrazione richiesta', text: 'Nessun account da creare. Compila il modulo in 5 minuti.' },
  { icon: '📱', title: '100% mobile', text: 'Fai la tua richiesta dal telefono, ovunque tu sia.' },
  { icon: '🔒', title: 'Contratto sicuro', text: 'Piattaforma sicura, dati crittografati, contratto elettronico conforme.' },
  { icon: '⚡', title: 'Risposta in 24h', text: 'Una risposta rapida e un bonifico entro 48h dopo l\'accettazione.' },
]

const stats = [
  { icon: '🤝', end: 500, suffix: '+', label: 'Prestiti finanziati', desc: 'Dal nostro lancio' },
  { icon: '💶', end: 150000, suffix: ' €', label: 'Importo totale prestato', desc: 'Distribuito ai mutuatari' },
  { icon: '⏱️', end: 24, suffix: 'h', label: 'Tempo di risposta', desc: 'Entro 24h lavorative' },
  { icon: '⭐', end: 4.8, suffix: '/5', label: 'Soddisfazione', desc: 'Voto medio dei clienti' },
]

const useCases = [
  { icon: '🚗', title: 'Acquisto veicolo', montant: 15000, scenario: 'Sophie, 32 anni, ha bisogno di un\'auto per andare al lavoro. Prestito di 15.000€ rimborsabile in 60 mesi.', mensualite: '281,67 €' },
  { icon: '📚', title: 'Finanziamento studi', montant: 8000, scenario: 'Luca, 21 anni, studente universitario. Finanziamento delle tasse scolastiche. Prestito di 8.000€ in 36 mesi.', mensualite: '240,24 €' },
  { icon: '🏠', title: 'Ristrutturazione casa', montant: 25000, scenario: 'Maria e Paolo, giovani genitori. Ristrutturazione completa della loro casa. Prestito di 25.000€ in 84 mesi.', mensualite: '331,10 €' },
]

const profiles = [
  { icon: '🎓', label: 'Studente' }, { icon: '💼', label: 'Indeterminato' }, { icon: '📋', label: 'Determinato' },
  { icon: '💻', label: 'Freelance' }, { icon: '🔧', label: 'Indipendente' }, { icon: '📅', label: 'Interinale' },
  { icon: '🤝', label: 'RSA' }, { icon: '🔄', label: 'Disoccupato' }, { icon: '👴', label: 'Pensionato' },
  { icon: '🏛️', label: 'Non residente' }, { icon: '🏠', label: 'Proprietario' }, { icon: '🏢', label: 'Affittuario' },
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero" style={{ position: 'relative' }}>
        <FloatingDecorations />
        <div className="hero-bg"><img src="/assets/images/hero-bg-1-min.jpg" alt="" loading="lazy" /></div>
        <div className="hero-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
          <motion.div className="hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} style={{ flex: '1 1 400px' }}>
            <div className="hero-badges">
              {['Risposta 24h', 'Bonifico 48h', '100% sicuro', 'Senza registrazione'].map(b => (
                <span key={b} className="hero-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  {b}
                </span>
              ))}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >Il micro-prestito rapido e semplice <span className="shimmer-text">tra privati</span></motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >Da 100 € a 3 000 000 €, rimborsabili in 3-120 mesi. Nessun giustificativo complesso, nessuna registrazione. Una risposta in 24h.</motion.p>
            <motion.div className="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/emprunter" className="btn btn-primary">Fai richiesta</Link>
              <Link to="/comment-ca-marche" className="btn btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>Scopri di più</Link>
            </motion.div>
          </motion.div>
          <motion.div className="hero-simulator" initial={{ opacity: 0, x: 30, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            <LoanSimulator />
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESSUS ─── */}
      <section className="section section--alt" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Processo</div>
            <h2 className="section-header">Come funziona?</h2>
            <p className="section-sub">Ottieni il tuo prestito in 4 semplici passaggi, senza spostarti e senza carta.</p>
          </motion.div>
          <motion.div className="how-it-works" {...stagger}>
            {[
              { n: '1', title: 'Compilo il modulo', text: 'Meno di 5 minuti, senza registrazione. Importo, durata e informazioni personali.' },
              { n: '2', title: 'Ricevo una conferma', text: 'Una email di conferma con il tuo numero di pratica unico ti viene inviata immediatamente.' },
              { n: '3', title: 'Il team esamina la mia pratica', text: 'Analisi rapida della tua richiesta. Ti contattiamo via email o telefono entro 24h.' },
              { n: '4', title: 'Ricevo i fondi', text: 'Bonifico sul tuo conto bancario entro 48h se la richiesta è accettata.' },
            ].map((s, i) => (
              <motion.div key={i} className="step-card tilt-card" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <motion.div className="step-number" whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.4 }}>{s.n}</motion.div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TYPES DE PRÊTS ─── */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Offerte</div>
            <h2 className="section-header">Le nostre soluzioni di prestito</h2>
            <p className="section-sub">4 tipi di prestito adatti a ogni situazione. Un TAEG fisso del 4,5% in ogni caso.</p>
          </motion.div>
          <motion.div className="row g-4" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-40px' }} variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
            {loanTypes.map((l, i) => (
              <motion.div key={i} className="col-12 col-sm-6 col-lg-3" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <Link to={l.to} className="advantage-card tilt-card d-block h-100" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                  {l.tag && <span className="badge" style={{ position: 'absolute', top: 12, right: 12, fontSize: 10 }}>{l.tag}</span>}
                  <div className="advantage-icon" style={{ fontSize: 24 }}>{l.icon}</div>
                  <h3>{l.label}</h3>
                  <p style={{ flex: 1 }}>{l.desc}</p>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--blue)', marginTop: 8 }}>Vedi l'offerta →</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center mt-5" {...fadeUp}>
            <Link to="/profils-acceptes" className="btn btn-ghost">Vedi tutte le offerte (8 tipi)</Link>
          </motion.div>
        </div>
      </section>

      {/* ─── COMPARATIF BANQUE VS PRESTITER ─── */}
      <section className="section section--alt" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Confronto</div>
            <h2 className="section-header">Banca vs Prestiter</h2>
            <p className="section-sub">Perché migliaia di persone ci scelgono invece della loro banca.</p>
          </motion.div>
          <motion.div className="table-responsive" style={{ maxWidth: 800 }} {...fadeUp}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--blue)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Criterio</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700 }}>Banca tradizionale</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700, background: 'var(--blue-dark)' }}>Prestiter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { critere: 'Tempo di risposta', banque: 'Da 3 a 10 giorni', prestiter: 'Meno di 24h' },
                  { critere: 'Giustificativi', banque: '3 ultime buste paga, dichiarazione dei redditi, certificato di residenza', prestiter: 'Documento d\'identità + IBAN' },
                  { critere: 'Registrazione', banque: 'Appuntamento in agenzia, apertura conto', prestiter: 'Nessuna, modulo semplice' },
                  { critere: 'Profili accettati', banque: 'Solo indeterminato, escluso periodo di prova', prestiter: 'Tutti i profili: determinato, RSA, studente, freelance...' },
                  { critere: 'Importo minimo', banque: '1.000 € minimo', prestiter: '100 € minimo' },
                  { critere: 'Spese di pratica', banque: 'Spesso da 50 a 150 €', prestiter: '0 €' },
                  { critere: 'Rimborso anticipato', banque: 'Spese fino al 3% del capitale residuo', prestiter: '0 €, senza penali' },
                ].map((r, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-card2)', borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 14px', fontWeight: 600, color: 'var(--text)', fontSize: 12 }}>{r.critere}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'center', color: 'var(--text-3)', fontSize: 12 }}>{r.banque}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'center', color: 'var(--blue)', fontWeight: 700, fontSize: 12, background: 'var(--blue-bg)' }}>{r.prestiter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ─── AVANTAGES ─── */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Vantaggi</div>
            <h2 className="section-header">Perché scegliere Prestiter?</h2>
            <p className="section-sub">Una soluzione di finanziamento semplice, accessibile e trasparente, senza costi nascosti.</p>
          </motion.div>
          <motion.div className="advantage-grid" {...stagger}>
            {advantages.map((a, i) => (
              <motion.div key={i} className={`advantage-card tilt-card${i < 2 ? ' animate-float' : ''}`} style={{ animationDelay: `${i * 0.5}s` }} variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <motion.div className="advantage-icon" whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.15 }} transition={{ duration: 0.3 }}>{a.icon}</motion.div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── EXEMPLES CONCRETS ─── */}
      <section className="section section--alt" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Casi concreti</div>
            <h2 className="section-header">Situazioni reali, soluzioni semplici</h2>
            <p className="section-sub">Scopri come Prestiter ha aiutato centinaia di persone nella vita quotidiana.</p>
          </motion.div>
          <motion.div className="row g-4" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-40px' }} variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
            {useCases.map((c, i) => (
              <motion.div key={i} className="col-md-4" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <div className="advantage-card tilt-card h-100">
                  <div className="advantage-icon" style={{ fontSize: 24 }}>{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p style={{ fontSize: 13, marginBottom: 12 }}>{c.scenario}</p>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: 'var(--text-3)' }}>Mensilità</span>
                    <span style={{ fontSize: 18, fontWeight: 900, color: 'var(--blue)' }}>{c.mensualite}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROFILS ─── */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Accessibilità</div>
            <h2 className="section-header">Tutti i profili sono accettati</h2>
            <p className="section-sub">Indeterminato, determinato, studente, freelance, RSA, pensionato, disoccupato... Non discriminiamo.</p>
          </motion.div>
          <motion.div className="profile-chips" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ staggerChildren: 0.04 }}>
            {profiles.map((p, i) => (
              <motion.span key={i} className="profile-chip" variants={{ initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } }} whileHover={{ scale: 1.05, y: -2 }}>
                <motion.span className="profile-chip-icon" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>{p.icon}</motion.span>
                {p.label}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="text-center mt-4" {...fadeUp}>
            <p className="small text-muted" style={{ maxWidth: 500, margin: '0 auto 16px' }}>Nessuna discriminazione basata su età, situazione lavorativa o nazionalità. Ogni pratica viene valutata individualmente.</p>
            <Link to="/profils-acceptes" className="btn btn-ghost">Vedi i requisiti di idoneità</Link>
          </motion.div>
        </div>
      </section>

      {/* ─── TÉMOIGNAGES ─── */}
      <section className="section section--blue" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Testimonianze</div>
            <h2 className="section-header">Ci hanno dato fiducia</h2>
            <p className="section-sub" style={{ color: 'var(--text-2)' }}>Voto medio: 4.8/5 — Basato su oltre 500 recensioni verificate.</p>
          </motion.div>
          <motion.div className="testimonials" {...stagger}>
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div key={i} className="testimonial-card tilt-card" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <motion.div className="testimonial-stars" whileHover={{ scale: 1.1 }}>{'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}</motion.div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <motion.div className="testimonial-avatar" whileHover={{ scale: 1.15, rotate: 5 }}>{t.avatar}</motion.div>
                  <div><div className="testimonial-name">{t.name}</div><div className="testimonial-detail">{t.detail}</div></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="section section--dark" style={{ position: 'relative' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.3)' }}>Numeri</div>
            <h2 className="section-header">Prestiter in numeri</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>Il nostro impatto in numeri chiave.</p>
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
          <motion.div className="features-row" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {[
              { val: '4,5 %', lab: 'TAEG fisso', desc: 'Qualunque sia l\'importo' },
              { val: '100 %', lab: '100% online', desc: 'Dal modulo al bonifico' },
              { val: '0 €', lab: 'Spese di pratica', desc: 'Nessun costo nascosto' },
              { val: '48 h', lab: 'Bonifico', desc: 'Dopo accettazione' },
            ].map((s, i) => (
              <motion.div key={i} className="features-row-item" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="features-row-val">{s.val}</div>
                <div className="features-row-lab">{s.lab}</div>
                <div className="features-row-desc">{s.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SÉCURITÉ & RÉGULATION ─── */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Sicurezza</div>
            <h2 className="section-header">La tua sicurezza è la nostra priorità</h2>
            <p className="section-sub">Piattaforma regolamentata, dati crittografati, transazioni sicure.</p>
          </motion.div>
          <motion.div className="row g-4" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-40px' }} variants={{ animate: { transition: { staggerChildren: 0.08 } } }}>
            {[
              { icon: '🏛️', title: 'Registrato ORIAS', text: 'Prestiter SPA è registrato come Intermediario in Finanziamento Partecipativo (IFP) presso l\'ORIAS.' },
              { icon: '🔐', title: 'Crittografia SSL 256-bit', text: 'Tutti i tuoi dati sono crittografati end-to-end con un certificato SSL di livello bancario.' },
              { icon: '🔒', title: 'Conformità GDPR', text: 'I tuoi dati personali sono trattati conformemente al Regolamento Generale sulla Protezione dei Dati.' },
              { icon: '📝', title: 'Contratto elettronico', text: 'Ogni prestito è oggetto di un contratto firmato elettronicamente, con valore legale.' },
              { icon: '🏦', title: 'Conto deposito', text: 'I fondi transitano attraverso un conto sicuro. La piattaforma non detiene mai il denaro direttamente.' },
              { icon: '🛡️', title: 'Antiriciclaggio', text: 'La nostra piattaforma rispetta gli obblighi AML (Antiriciclaggio) e CFT (Contro il Finanziamento del Terrorismo).' },
            ].map((s, i) => (
              <motion.div key={i} className="col-md-4" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <div className="advantage-card tilt-card h-100">
                  <div className="advantage-icon" style={{ fontSize: 24 }}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ (EXTRAIT) ─── */}
      <section className="section section--alt" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">FAQ</div>
            <h2 className="section-header">Domande frequenti</h2>
            <p className="section-sub">Le risposte alle domande più comuni sui nostri micro-prestiti.</p>
          </motion.div>
          <motion.div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }} {...fadeUp}>
            {faq.flatMap(cat => cat.questions).slice(0, 4).map((item, i) => <FaqItem key={i} q={item.q} r={item.a} />)}
          </motion.div>
          <motion.div className="text-center mt-4" {...fadeUp}>
            <Link to="/faq" className="btn btn-ghost">Vedi tutte le domande</Link>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="section" style={{ position: 'relative' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="cta-card"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.01 }}
          >
            <h2>Pronto a fare richiesta?</h2>
            <p>Unisciti alle centinaia di mutuatari che ci hanno dato fiducia. Risposta in 24h, bonifico in 48h.</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link to="/emprunter" className="btn btn-primary">Richiedi ora</Link>
              <Link to="/comment-ca-marche" className="btn btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Come funziona</Link>
            </div>
          </motion.div>
          <motion.div className="text-center mt-4" {...fadeUp}>
            <p className="small text-muted" style={{ fontSize: 11 }}>Un credito ti impegna e deve essere rimborsato. Verifica la tua capacità di rimborso prima di impegnarti. TAEG fisso 4,5%. Prestiter SPA — Via della Spiga, 24, 20121 Milano, Italia. Registrato presso l'ORIAS.</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function FaqItem({ q, r }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9" /></svg>
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.3s' }}>
        <p className="faq-answer">{r}</p>
      </div>
    </div>
  )
}
