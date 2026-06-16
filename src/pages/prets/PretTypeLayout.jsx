import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import FloatingDecorations from '../../components/FloatingDecorations'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

const otherTypes = [
  { to: '/prets/personnel', label: 'Personnel', icon: '🎯' },
  { to: '/prets/urgence', label: 'Urgence', icon: '⚡' },
  { to: '/prets/etudiant', label: 'Étudiant', icon: '🎓' },
  { to: '/prets/professionnel', label: 'Professionnel', icon: '💼' },
  { to: '/prets/travaux', label: 'Travaux', icon: '🏠' },
  { to: '/prets/consolidation', label: 'Consolidation', icon: '🔄' },
  { to: '/prets/ptz', label: 'PTZ 0%', icon: '❤️' },
  { to: '/prets/p2p', label: 'P2P', icon: '🤝' },
]

export default function PretTypeLayout({ data }) {
  const [montant, setMontant] = useState(data.minMontant || 200)
  const [duree, setDuree] = useState(data.minDuree || 3)
  const taux = data.tauxZero ? 0 : 4.5
  const interets = montant * (taux / 100) / 12 * duree
  const mensualite = (montant + interets) / duree

  return (
    <>
      <PageHero title={data.title} lead={data.hero}>
        {data.badge && <span className="badge" style={{ marginTop: 12, fontSize: 12, padding: '6px 16px' }}>{data.badge}</span>}
      </PageHero>

      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="row g-5 align-items-center" initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="col-lg-6" variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
              <div className="section-eyebrow">{data.eyebrow || 'Prêt adapté'}</div>
              <h2 className="section-header" style={{ textAlign: 'left' }}>{data.subtitle}</h2>
              <p className="lead">{data.description}</p>
              <div className="d-flex gap-3 flex-wrap mt-4 mb-3">
                {data.cibles?.map((c, i) => <span key={i} className="profile-chip" style={{ fontSize: 12 }}>{c}</span>)}
              </div>
              <div className="d-flex gap-2 flex-wrap mt-3">
                <Link to={`/emprunter?type=${data.path.replace('/prets/', '')}`} className="btn btn-primary">Faire ma demande</Link>
                <Link to="/comment-ca-marche" className="btn btn-ghost">Comment ça marche</Link>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={{ initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
              <div className="simulator-card" style={{ margin: 0 }}>
                <h3 className="simulator-title">Simulez votre prêt</h3>
                {data.badge === 'Urgence' && (
                  <div style={{ background: 'rgba(200,16,46,0.06)', border: '1px solid rgba(200,16,46,0.2)', borderRadius: 'var(--radius)', padding: '12px 16px', marginBottom: 16, fontSize: 13, color: '#C8102E', fontWeight: 600 }}>
                    ⚡ Traitement prioritaire — réponse sous quelques heures
                  </div>
                )}
                {taux === 0 && (
                  <div style={{ background: 'var(--green-bg)', border: '1px solid rgba(29,158,117,0.2)', borderRadius: 'var(--radius)', padding: '12px 16px', marginBottom: 16, fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>
                    ❤️ Prêt solidaire à taux zéro — vous ne remboursez que le capital
                  </div>
                )}
                <label className="simulator-label">Montant : <strong>{montant} €</strong></label>
                <input type="range" min={data.minMontant} max={data.maxMontant} step={50} value={montant} onChange={e => setMontant(Number(e.target.value))} className="simulator-range" />
                <label className="simulator-label">Durée : <strong>{duree} mois</strong></label>
                <input type="range" min={data.minDuree} max={data.maxDuree} step={1} value={duree} onChange={e => setDuree(Number(e.target.value))} className="simulator-range" />
                <div className="simulator-result" style={{ gridTemplateColumns: '1fr 1fr', gap: 12, padding: 16, margin: '16px 0 0' }}>
                  <div><div className="label">Mensualité</div><div className="value">{mensualite.toFixed(2)} €</div></div>
                  <div><div className="label">Total à rembourser</div><div className="value">{(montant + interets).toFixed(2)} €</div></div>
                  <div><div className="label">Dont intérêts</div><div className="value" style={taux === 0 ? { color: 'var(--green)' } : {}}>{interets.toFixed(2)} €</div></div>
                  <div><div className="label">TAEG</div><div className="value" style={taux === 0 ? { color: 'var(--green)' } : {}}>{taux === 0 ? '0 %' : '4,5 %'}</div></div>
                </div>
                {taux > 0 && (
                  <p style={{ fontSize: 11, color: 'var(--text-3)', margin: '8px 0 0', textAlign: 'center', lineHeight: 1.5 }}>
                    TAEG fixe de 4,5% — Aucun frais de dossier. Exemple : pour {montant}€ sur {duree} mois, remboursez {(montant + interets).toFixed(2)}€ par mensualités de {mensualite.toFixed(2)}€. Coût total : {interets.toFixed(2)}€ d'intérêts.
                  </p>
                )}
                <Link to={`/emprunter?type=${data.path.replace('/prets/', '')}`} className="btn btn-primary w-100" style={{ marginTop: 16, justifyContent: 'center' }}>Faire ma demande</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section section--alt" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <h2 className="section-header">Pourquoi choisir ce prêt ?</h2>
          </motion.div>
          <motion.div className="row g-4" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-40px' }} variants={{ animate: { transition: { staggerChildren: 0.08 } } }}>
            {data.avantages.map((a, i) => (
              <motion.div key={i} className="col-md-4" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <div className="advantage-card tilt-card h-100">
                  <div className="advantage-icon" style={{ fontSize: 24 }}>{a.icon}</div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {data.exemple && (
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
          <FloatingDecorations />
          <div className="container">
            <motion.div className="section-title" {...fadeUp}>
              <div className="section-eyebrow">Exemple concret</div>
              <h2 className="section-header">Un cas d'usage réel</h2>
            </motion.div>
            <motion.div className="row g-4 align-items-center" {...fadeUp}>
              <div className="col-md-6">
                <div style={{ background: 'var(--blue-bg)', borderRadius: 'var(--radius-lg)', padding: 'clamp(24px,4vw,40px)', textAlign: 'center' }}>
                  <div style={{ fontSize: 48, marginBottom: 8 }}>{data.exemple.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 800 }}>{data.exemple.title}</h3>
                </div>
              </div>
              <div className="col-md-6">
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16 }}>{data.exemple.scenario}</p>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: 'var(--text-3)' }}>Mensualité</span>
                  <span style={{ fontSize: 20, fontWeight: 900, color: 'var(--blue)' }}>{data.exemple.mensualite}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="section section--alt">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Conditions</div>
            <h2 className="section-header">Conditions et documents requis</h2>
          </motion.div>
          <div className="row g-4" style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="col-md-6">
              <motion.div {...fadeUp}>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, color: 'var(--blue)' }}>Conditions</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {data.conditions.map((c, i) => (
                    <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 14 }}>
                      <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{c.title}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-3)', margin: 0 }}>{c.text}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, color: 'var(--blue)' }}>Documents à fournir</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {(data.documents || ['Pièce d\'identité (CNI ou passeport)', 'IBAN / RIB', 'Carte bancaire pour les prélèvements']).map((d, i) => (
                    <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 14, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--blue)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 13 }}>{d.doc || d}</div>
                        {d.desc && <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>{d.desc}</div>}
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 12, lineHeight: 1.5 }}>
                  Tout se fait en ligne, aucun document papier à envoyer.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Comparer</div>
            <h2 className="section-header">Découvrez nos autres prêts</h2>
          </motion.div>
          <motion.div className="row g-3" initial="initial" whileInView="animate" viewport={{ once: true }} variants={{ animate: { transition: { staggerChildren: 0.04 } } }}>
            {otherTypes.filter(t => t.to !== data.path).map((t, i) => (
              <motion.div key={i} className="col-6 col-md-3" variants={{ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }}>
                <Link to={t.to} className="advantage-card tilt-card d-block h-100" style={{ padding: 16, textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{t.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 12 }}>{t.label}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--blue">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <h2 className="section-header">Questions fréquentes</h2>
          </motion.div>
          <motion.div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }} {...fadeUp}>
            {data.faq.map((item, i) => <FaqItem key={i} q={item.q} r={item.r} />)}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div className="text-center" {...fadeUp}>
            <h2 className="section-header" style={{ fontSize: 22 }}>Prêt à faire votre demande ?</h2>
            <p className="lead" style={{ fontSize: 15, color: 'var(--text-2)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>Réponse sous 24h. Virement sous 48h si accepté.</p>
            <Link to={`/emprunter?type=${data.path.replace('/prets/', '')}`} className="btn btn-primary btn-lg">Faire ma demande</Link>
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
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}><polyline points="6 9 12 15 18 9" /></svg>
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.3s' }}>
        <p className="faq-answer">{r}</p>
      </div>
    </div>
  )
}
