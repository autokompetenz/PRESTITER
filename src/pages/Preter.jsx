import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { sendEmails } from '../lib/email'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
const stagger = { whileInView: 'animate', viewport: { once: true, margin: '-40px' }, initial: 'initial', variants: { animate: { transition: { staggerChildren: 0.1 } } } }

export default function Preter() {
  const [invest, setInvest] = useState(5000)
  const [duree, setDuree] = useState(12)
  const rendement = 0.03
  const interetsAnnuel = invest * rendement
  const interetsMensuel = interetsAnnuel / 12
  const totalRembourse = invest + interetsAnnuel * (duree / 12)
  const mensualite = totalRembourse / duree

  return (
    <>
      <PageHero title="Prêter" lead="Faites fructifier votre épargne en finançant des projets du quotidien. Une alternative aux placements traditionnels." />

      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <motion.div className="row g-5 align-items-center" initial="initial" whileInView="animate" viewport={{ once: true }} variants={{ animate: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="col-lg-6" variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
              <div className="section-eyebrow">Investissement</div>
              <h2 className="section-header" style={{ textAlign: 'left' }}>Une nouvelle façon d'investir</h2>
              <p className="lead">Le prêt entre particuliers vous permet de générer un rendement attractif tout en aidant des personnes dans le besoin. Chaque dossier est rigoureusement sélectionné par notre équipe.</p>
              <ul className="list-checked">
                {['Rendement annuel jusqu\'à 3%', 'Dossiers sélectionnés par nos experts', 'Suivi personnalisé par l\'équipe Prestiter', 'Possibilité de diversifier sur plusieurs prêts'].map((c, i) => (
                  <li key={i}><span>✓</span> {c}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="col-lg-6" variants={{ initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
              <div className="simulator-card" style={{ margin: 0 }}>
                <h3 className="simulator-title">Simulez votre investissement</h3>
                <label className="simulator-label">Montant investi : <strong>{invest.toLocaleString('fr-FR')} €</strong></label>
                <input type="range" min={1000} max={2000000} step={1000} value={invest} onChange={e => setInvest(Number(e.target.value))} className="simulator-range" />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--text-3)', marginTop: -4 }}>
                  <span>1 000 €</span>
                  <span>2 000 000 €</span>
                </div>
                <label className="simulator-label" style={{ marginTop: 16 }}>Durée : <strong>{duree} mois</strong></label>
                <input type="range" min={6} max={60} step={6} value={duree} onChange={e => setDuree(Number(e.target.value))} className="simulator-range" />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--text-3)', marginTop: -4 }}>
                  <span>6 mois</span>
                  <span>60 mois</span>
                </div>
                <div className="simulator-result" style={{ gridTemplateColumns: '1fr 1fr', gap: 12, padding: 16, margin: '20px 0 0' }}>
                  <div><div className="label">Rendement annuel</div><div className="value">{interetsAnnuel.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</div></div>
                  <div><div className="label">Mensualité perçue</div><div className="value">{mensualite.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</div></div>
                  <div><div className="label">Total remboursé</div><div className="value">{totalRembourse.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</div></div>
                  <div><div className="label">Dont intérêts</div><div className="value" style={{ color: 'var(--green)' }}>+{interetsAnnuel.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</div></div>
                </div>
                <p style={{ fontSize: 11, color: 'var(--text-3)', margin: '8px 0 0', textAlign: 'center', lineHeight: 1.5 }}>
                  Simulation basée sur un rendement annuel de 3%. Les performances passées ne préjugent pas des performances futures.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section section--alt" id="fonctionnement">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Fonctionnement</div>
            <h2 className="section-header">Comment ça marche pour le prêteur ?</h2>
          </motion.div>
          <motion.div className="how-it-works" {...stagger}>
            {[
              { n: '1', title: 'Remplissez le formulaire', text: 'Indiquez le montant que vous souhaitez investir.' },
              { n: '2', title: 'L\'équipe vous contacte', text: 'Sous 24h pour valider votre profil et vos intentions.' },
              { n: '3', title: 'Choisissez les dossiers', text: 'Sélectionnez les emprunteurs à financer selon vos critères.' },
              { n: '4', title: 'Recevez vos remboursements', text: 'Automatiquement chaque mois sur votre compte bancaire.' },
            ].map((s, i) => (
              <motion.div key={i} className="step-card" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <div className="step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Informations clés</div>
            <h2 className="section-header">Ce qu'il faut savoir avant de prêter</h2>
            <p className="section-sub">Transparence totale sur les conditions, la fiscalité et les risques.</p>
          </motion.div>
          <motion.div className="row g-4" {...stagger}>
            {[
              { icon: '💶', title: 'Montant minimum', text: 'Investissez à partir de 1 000 €, sans plafond maximum. Diversifiez vos placements sur plusieurs emprunteurs pour réduire les risques.' },
              { icon: '💰', title: 'Frais pour le prêteur', text: 'Prestiter prélève une commission de 2% sur les intérêts perçus. Pas de frais cachés, pas de frais de dossier. Le reste vous revient intégralement.' },
              { icon: '📊', title: 'Fiscalité', text: 'Les intérêts perçus sont soumis au Prélèvement Forfaitaire Unique (PFU) de 30% (12,8% d\'impôt + 17,2% de prélèvements sociaux). Déclaration via le formulaire 2042 de votre revenu annuel.' },
              { icon: '🛡️', title: 'Garanties', text: 'Chaque prêt est sécurisé par un contrat électronique signé par les deux parties. Prestiter assure le recouvrement amiable en cas d\'impayé. Notre équipe de suivi contacte systématiquement les emprunteurs en retard.' },
              { icon: '📉', title: 'Taux de défaut historique', text: 'Notre taux de défaut (impayés non recouvrés) est inférieur à 2% sur l\'ensemble des prêts réalisés. Un fonds de réserve mutualisé est en place pour protéger les prêteurs.' },
              { icon: '🔀', title: 'Diversification recommandée', text: 'Nous recommandons de répartir votre investissement sur au moins 5 à 10 prêts différents pour réduire le risque de perte en capital.' },
            ].map((c, i) => (
              <motion.div key={i} className="col-md-6 col-lg-4" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24, height: '100%' }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', margin: 0, lineHeight: 1.6 }}>{c.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--blue">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Avertissement</div>
            <h2 className="section-header">Information importante</h2>
          </motion.div>
          <motion.div style={{ maxWidth: 700, margin: '0 auto', background: 'var(--bg-card)', border: '1px solid var(--blue-border)', borderRadius: 'var(--radius-lg)', padding: 28, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }} {...fadeUp}>
            Les demandes de prêts sont rigoureusement sélectionnées par la plateforme mais le risque zéro n'existe pas. Nous vous recommandons de diversifier vos placements sur plusieurs prêts. Un prêt entre particuliers comporte des risques de perte en capital. Prestiter SPA ne garantit pas le remboursement des prêts en cas de défaut de l'emprunteur.
          </motion.div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Avantages</div>
            <h2 className="section-header">Pourquoi investir avec Prestiter ?</h2>
          </motion.div>
          <motion.div className="row g-4" initial="initial" whileInView="animate" viewport={{ once: true, margin: '-40px' }} variants={{ animate: { transition: { staggerChildren: 0.06 } } }}>
            {[
              { icon: '📈', title: 'Rendement attractif', text: 'Jusqu\'à 3% par an, bien supérieur au livret A (0,5%).' },
              { icon: '💎', title: 'Accessible à tous', text: 'Investissez dès 100€, sans plafond maximum.' },
              { icon: '🤝', title: 'Impact solidaire', text: 'Vous aidez des personnes exclues du système bancaire.' },
              { icon: '🔒', title: 'Plateforme sécurisée', text: 'Données chiffrées, contrats électroniques, conforme ORIAS.' },
              { icon: '📱', title: 'Suivi en temps réel', text: 'Consultez vos investissements et remboursements à tout moment.' },
              { icon: '🔄', title: 'Réinvestissement possible', text: 'Les remboursements peuvent être réinvestis automatiquement.' },
            ].map((a, i) => (
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

      <section className="section">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Contact</div>
            <h2 className="section-header">Devenir prêteur</h2>
            <p className="section-sub">Laissez-nous vos coordonnées, notre équipe vous recontactera sous 24h pour vous guider.</p>
          </motion.div>
          <motion.div style={{ maxWidth: 500, margin: '0 auto' }} {...fadeUp}>
            <LenderForm />
          </motion.div>
        </div>
      </section>

      <CTASection title="Des questions sur l'investissement ?" text="Consultez notre FAQ ou contactez-nous directement." cta={{ to: '/faq', label: 'Consulter la FAQ' }} />
    </>
  )
}

function LenderForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', telephone: '', montant: '1 000 €', message: '' })

  if (sent) {
    return (
      <div className="form-wrapper text-center">
        <div style={{ fontSize: 32, marginBottom: 12 }}>✅</div>
        <h3>Merci pour votre intérêt !</h3>
        <p className="text-muted small">Un email de confirmation vous a été envoyé. Notre équipe vous contactera sous 24h.</p>
      </div>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.nom || !form.prenom || !form.email) return
    setSending(true)
    setError('')
    try {
      await sendEmails({
        type: 'demande prêteur',
        adminData: {
          nom: form.nom,
          prenom: form.prenom,
          email: form.email,
          telephone: form.telephone,
          montant: form.montant,
          message: form.message || 'Non spécifié',
        },
        clientData: {
          to_name: form.prenom,
          to_email: form.email,
          type_demande: 'prêteur',
          message: `Votre demande pour devenir prêteur a bien été reçue. Notre équipe vous contactera sous 24h.`,
        },
      })
      setSent(true)
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="form-wrapper">
      <h3>Formulaire prêteur</h3>
      <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Nom</label><input className="form-control" placeholder="Rossi" value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} /></div>
          <div className="form-group"><label>Prénom</label><input className="form-control" placeholder="Mario" value={form.prenom} onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))} /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Email</label><input type="email" className="form-control" placeholder="mario@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} /></div>
          <div className="form-group"><label>Téléphone</label><input type="tel" className="form-control" placeholder="+39 123 456 7890" value={form.telephone} onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))} /></div>
        </div>
        <div className="form-group"><label>Montant que vous souhaitez investir</label><select className="form-control" value={form.montant} onChange={e => setForm(f => ({ ...f, montant: e.target.value }))}><option>1 000 €</option><option>2 000 €</option><option>3 000 €</option><option>5 000 €</option><option>10 000 €</option><option>15 000 €</option><option>20 000 €</option><option>Autre</option></select></div>
        <div className="form-group"><label>Message (facultatif)</label><textarea className="form-control" placeholder="Vos questions éventuelles..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} /></div>
        <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }} disabled={sending}>{sending ? 'Envoi en cours…' : 'Envoyer ma demande'}</button>
        {error && <p style={{ fontSize: 13, color: '#C8102E', textAlign: 'center', margin: 0 }}>{error}</p>}
      </form>
      <p className="small text-muted mt-3" style={{ margin: '12px 0 0', fontSize: 11, lineHeight: 1.5 }}>
        En soumettant ce formulaire, vous acceptez d'être contacté par Prestiter SPA concernant vos opportunités d'investissement.
      </p>
    </div>
  )
}
