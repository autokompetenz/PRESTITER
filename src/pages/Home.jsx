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
  { icon: '🎯', label: 'Prêt personnel', to: '/prets/personnel', desc: '100€ à 3 000 000€ — Sans justificatif', tag: 'Populaire' },
  { icon: '⚡', label: 'Prêt d\'urgence', to: '/prets/urgence', desc: '100€ à 50 000€ — Réponse sous quelques heures', tag: 'Prioritaire' },
  { icon: '🎓', label: 'Prêt étudiant', to: '/prets/etudiant', desc: '100€ à 50 000€ — Sans revenus stables', tag: 'Jeunes' },
  { icon: '💼', label: 'Prêt professionnel', to: '/prets/professionnel', desc: '1 000€ à 3 000 000€ — Freelances & auto-entrepreneurs', tag: 'Pro' },
]

const advantages = [
  { icon: '📄', title: 'Pas de justificatif complexe', text: 'Fini les dossiers administratifs interminables. Une pièce d\'identité suffit.' },
  { icon: '👥', title: 'Ouvert à tous les profils', text: 'Étudiants, freelances, CDD, intérimaires, RSA, retraités... Tous acceptés.' },
  { icon: '🚫', title: 'Aucune inscription requise', text: 'Pas de compte à créer. Remplissez le formulaire en 5 minutes.' },
  { icon: '📱', title: '100% mobile', text: 'Faites votre demande depuis votre téléphone, où que vous soyez.' },
  { icon: '🔒', title: 'Contrat sécurisé', text: 'Plateforme sécurisée, données chiffrées, contrat électronique conforme.' },
  { icon: '⚡', title: 'Réponse sous 24h', text: 'Une réponse rapide et un virement sous 48h après acceptation.' },
]

const stats = [
  { icon: '🤝', end: 500, suffix: '+', label: 'Prêts financés', desc: 'Depuis notre lancement' },
  { icon: '💶', end: 150000, suffix: ' €', label: 'Montant total prêté', desc: 'Distribué aux emprunteurs' },
  { icon: '⏱️', end: 24, suffix: 'h', label: 'Délai de réponse', desc: 'Sous 24h ouvrées' },
  { icon: '⭐', end: 4.8, suffix: '/5', label: 'Satisfaction', desc: 'Note moyenne des clients' },
]

const useCases = [
  { icon: '🚗', title: 'Achat véhicule', montant: 15000, scenario: 'Sophie, 32 ans, a besoin d\'une voiture pour aller travailler. Prêt de 15 000€ remboursable sur 60 mois.', mensualite: '281,67 €' },
  { icon: '📚', title: 'Financement études', montant: 8000, scenario: 'Lucas, 21 ans, étudiant en licence. Financement de ses frais de scolarité. Prêt de 8 000€ sur 36 mois.', mensualite: '240,24 €' },
  { icon: '🏠', title: 'Rénovation maison', montant: 25000, scenario: 'Marie et Paul, jeunes parents. Rénovation complète de leur maison. Prêt de 25 000€ sur 84 mois.', mensualite: '331,10 €' },
]

const profiles = [
  { icon: '🎓', label: 'Étudiant' }, { icon: '💼', label: 'CDI' }, { icon: '📋', label: 'CDD' },
  { icon: '💻', label: 'Freelance' }, { icon: '🔧', label: 'Indépendant' }, { icon: '📅', label: 'Intérimaire' },
  { icon: '🤝', label: 'RSA' }, { icon: '🔄', label: 'Sans emploi' }, { icon: '👴', label: 'Retraité' },
  { icon: '🏛️', label: 'Non-résident' }, { icon: '🏠', label: 'Propriétaire' }, { icon: '🏢', label: 'Locataire' },
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
              {['Réponse 24h', 'Virement 48h', '100% sécurisé', 'Sans inscription'].map(b => (
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
            >Le micro-prêt rapide et simple <span className="shimmer-text">entre particuliers</span></motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >De 100 € à 3 000 000 €, remboursables sur 3 à 120 mois. Pas de justificatifs complexes, pas d'inscription. Une réponse sous 24h.</motion.p>
            <motion.div className="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/emprunter" className="btn btn-primary">Faire ma demande</Link>
              <Link to="/comment-ca-marche" className="btn btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>En savoir plus</Link>
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
            <div className="section-eyebrow">Processus</div>
            <h2 className="section-header">Comment ça marche ?</h2>
            <p className="section-sub">Obtenez votre prêt en 4 étapes simples, sans vous déplacer et sans papier.</p>
          </motion.div>
          <motion.div className="how-it-works" {...stagger}>
            {[
              { n: '1', title: 'Je remplis le formulaire', text: 'Moins de 5 minutes, sans inscription. Montant, durée et vos informations personnelles.' },
              { n: '2', title: 'Je reçois une confirmation', text: 'Un email de confirmation avec votre numéro de dossier unique vous est envoyé immédiatement.' },
              { n: '3', title: 'L\'équipe étudie mon dossier', text: 'Analyse rapide de votre demande. Nous vous contactons par email ou téléphone sous 24h.' },
              { n: '4', title: 'Je reçois les fonds', text: 'Virement sur votre compte bancaire sous 48h si votre demande est acceptée.' },
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
            <div className="section-eyebrow">Offres</div>
            <h2 className="section-header">Nos solutions de prêt</h2>
            <p className="section-sub">4 types de prêts adaptés à chaque situation. Un TAEG fixe de 4,5% quoi qu'il arrive.</p>
          </motion.div>
          <motion.div className="row g-4" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-40px' }} variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
            {loanTypes.map((l, i) => (
              <motion.div key={i} className="col-12 col-sm-6 col-lg-3" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <Link to={l.to} className="advantage-card tilt-card d-block h-100" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                  {l.tag && <span className="badge" style={{ position: 'absolute', top: 12, right: 12, fontSize: 10 }}>{l.tag}</span>}
                  <div className="advantage-icon" style={{ fontSize: 24 }}>{l.icon}</div>
                  <h3>{l.label}</h3>
                  <p style={{ flex: 1 }}>{l.desc}</p>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--blue)', marginTop: 8 }}>Voir l'offre →</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center mt-5" {...fadeUp}>
            <Link to="/profils-acceptes" className="btn btn-ghost">Voir toutes nos offres (8 types)</Link>
          </motion.div>
        </div>
      </section>

      {/* ─── COMPARATIF BANQUE VS PRESTITER ─── */}
      <section className="section section--alt" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Comparatif</div>
            <h2 className="section-header">Banque vs Prestiter</h2>
            <p className="section-sub">Pourquoi des milliers de Français nous choisissent plutôt que leur banque.</p>
          </motion.div>
          <motion.div className="table-responsive" style={{ maxWidth: 800 }} {...fadeUp}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--blue)', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Critère</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700 }}>Banque traditionnelle</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700, background: 'var(--blue-dark)' }}>Prestiter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { critere: 'Délai de réponse', banque: '3 à 10 jours', prestiter: 'Moins de 24h' },
                  { critere: 'Justificatifs', banque: '3 derniers bulletins de salaire, avis d\'imposition, justificatif de domicile', prestiter: 'Pièce d\'identité + IBAN' },
                  { critere: 'Inscription', banque: 'Rendez-vous en agence, ouverture de compte', prestiter: 'Aucune, formulaire simple' },
                  { critere: 'Profils acceptés', banque: 'CDI uniquement, période d\'essai exclue', prestiter: 'Tous les profils : CDD, RSA, étudiant, freelance...' },
                  { critere: 'Montant minimum', banque: '1 000 € minimum', prestiter: '100 € minimum' },
                  { critere: 'Frais de dossier', banque: 'Souvent 50 à 150 €', prestiter: '0 €' },
                  { critere: 'Remboursement anticipé', banque: 'Frais jusqu\'à 3% du capital restant', prestiter: '0 €, sans pénalité' },
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
            <div className="section-eyebrow">Avantages</div>
            <h2 className="section-header">Pourquoi choisir Prestiter ?</h2>
            <p className="section-sub">Une solution de financement simple, accessible et transparente, sans aucun frais caché.</p>
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
            <div className="section-eyebrow">Cas concrets</div>
            <h2 className="section-header">Des situations réelles, des solutions simples</h2>
            <p className="section-sub">Découvrez comment Prestiter a aidé des centaines de personnes dans leur vie quotidienne.</p>
          </motion.div>
          <motion.div className="row g-4" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-40px' }} variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
            {useCases.map((c, i) => (
              <motion.div key={i} className="col-md-4" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <div className="advantage-card tilt-card h-100">
                  <div className="advantage-icon" style={{ fontSize: 24 }}>{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p style={{ fontSize: 13, marginBottom: 12 }}>{c.scenario}</p>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: 'var(--text-3)' }}>Mensualité</span>
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
            <div className="section-eyebrow">Accessibilité</div>
            <h2 className="section-header">Tous les profils sont acceptés</h2>
            <p className="section-sub">CDI, CDD, étudiant, freelance, RSA, retraité, sans emploi... Nous ne discriminons pas.</p>
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
            <p className="small text-muted" style={{ maxWidth: 500, margin: '0 auto 16px' }}>Pas de discrimination liée à l'âge, la situation professionnelle ou la nationalité. Chaque dossier est étudié individuellement.</p>
            <Link to="/profils-acceptes" className="btn btn-ghost">Voir les conditions d'éligibilité</Link>
          </motion.div>
        </div>
      </section>

      {/* ─── TÉMOIGNAGES ─── */}
      <section className="section section--blue" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Témoignages</div>
            <h2 className="section-header">Ils nous ont fait confiance</h2>
            <p className="section-sub" style={{ color: 'var(--text-2)' }}>Note moyenne : 4.8/5 — Basée sur plus de 500 avis vérifiés.</p>
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
            <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.3)' }}>Chiffres</div>
            <h2 className="section-header">Prestiter en chiffres</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>Notre impact en quelques chiffres clés.</p>
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
              { val: '4,5 %', lab: 'TAEG fixe', desc: 'Quel que soit le montant' },
              { val: '100 %', lab: '100% en ligne', desc: 'Du formulaire au virement' },
              { val: '0 €', lab: 'Frais de dossier', desc: 'Aucun frais caché' },
              { val: '48 h', lab: 'Virement', desc: 'Après acceptation' },
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
            <div className="section-eyebrow">Sécurité</div>
            <h2 className="section-header">Votre sécurité est notre priorité</h2>
            <p className="section-sub">Plateforme réglementée, données chiffrées, transactions sécurisées.</p>
          </motion.div>
          <motion.div className="row g-4" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-40px' }} variants={{ animate: { transition: { staggerChildren: 0.08 } } }}>
            {[
              { icon: '🏛️', title: 'Enregistré ORIAS', text: 'Prestiter SPA est immatriculé comme Intermédiaire en Financement Participatif (IFP) auprès de l\'ORIAS.' },
              { icon: '🔐', title: 'Chiffrement SSL 256-bit', text: 'Toutes vos données sont chiffrées de bout en bout avec un certificat SSL de niveau bancaire.' },
              { icon: '🔒', title: 'Conformité RGPD', text: 'Vos données personnelles sont traitées conformément au Règlement Général sur la Protection des Données.' },
              { icon: '📝', title: 'Contrat électronique', text: 'Chaque prêt fait l\'objet d\'un contrat signé électroniquement, avec valeur légale.' },
              { icon: '🏦', title: 'Compte séquestre', text: 'Les fonds transitent par un compte sécurisé. La plateforme ne détient jamais l\'argent directement.' },
              { icon: '🛡️', title: 'Lutte anti-blanchiment', text: 'Notre plateforme respecte les obligations LCB-FT (Lutte contre le Blanchiment et le Financement du Terrorisme).' },
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
            <h2 className="section-header">Questions fréquentes</h2>
            <p className="section-sub">Les réponses aux questions les plus courantes sur nos micro-prêts.</p>
          </motion.div>
          <motion.div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }} {...fadeUp}>
            {faq.flatMap(cat => cat.questions).slice(0, 4).map((item, i) => <FaqItem key={i} q={item.q} r={item.a} />)}
          </motion.div>
          <motion.div className="text-center mt-4" {...fadeUp}>
            <Link to="/faq" className="btn btn-ghost">Voir toutes les questions</Link>
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
            <h2>Prêt à faire votre demande ?</h2>
            <p>Rejoignez les centaines d'emprunteurs qui nous ont fait confiance. Réponse sous 24h, virement sous 48h.</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link to="/emprunter" className="btn btn-primary">Emprunter maintenant</Link>
              <Link to="/comment-ca-marche" className="btn btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Comment ça marche</Link>
            </div>
          </motion.div>
          <motion.div className="text-center mt-4" {...fadeUp}>
            <p className="small text-muted" style={{ fontSize: 11 }}>Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager. TAEG fixe 4,5%. Prestiter SPA — Via della Spiga, 24, 20121 Milano, Italie. Enregistré à l'ORIAS.</p>
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
