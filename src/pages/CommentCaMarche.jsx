import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

const steps = [
  { n: '01', title: 'Je remplis le formulaire en ligne', text: 'Rien de plus simple. Indiquez le montant souhaité (100€ à 600€), la durée (3 à 10 mois) et vos informations personnelles. Le formulaire est accessible depuis votre ordinateur ou votre téléphone, et ne vous prendra que 5 minutes.', details: ['Aucune inscription requise', 'Formulaire responsive et intuitif', 'Simulateur intégré pour calculer votre mensualité'] },
  { n: '02', title: 'Je reçois une confirmation par email', text: 'Dès la soumission de votre formulaire, vous recevez un email de confirmation avec votre numéro de dossier unique. Cet email récapitule les informations de votre demande et les prochaines étapes.', details: ['Email de confirmation immédiat', 'Numéro de dossier attribué', 'Récapitulatif complet de la demande'] },
  { n: '03', title: 'L\'équipe étudie mon dossier', text: 'Notre équipe analyse votre demande sous 24h ouvrées. Nous vérifions les informations fournies et votre capacité de remboursement. Si votre dossier est complet, nous vous contactons par email ou téléphone.', details: ['Analyse rapide sous 24h', 'Contact par email ou téléphone', 'Aucun justificatif complexe demandé'] },
  { n: '04', title: 'Je reçois les fonds sur mon compte', text: 'Si votre demande est acceptée, les fonds sont virés sur votre compte bancaire sous 48h. Les remboursements mensuels sont prélevés automatiquement sur votre carte bancaire.', details: ['Virement sous 48h', 'Prélèvement automatique mensuel', 'Pas de pénalité pour remboursement anticipé'] },
]

export default function CommentCaMarche() {
  return (
    <>
      <PageHero title="Comment ça marche ?" lead="Découvrez comment obtenir un prêt en 4 étapes simples, de la soumission de votre demande jusqu'au virement des fonds." />

      {steps.map((step, i) => (
        <section key={i} className={`section${i % 2 === 1 ? ' section--alt' : ''}`}>
          <div className="container">
            <motion.div className="row g-5 align-items-center" {...fadeUp}>
              <div className={`col-lg-6${i % 2 === 1 ? ' order-lg-2' : ''}`}>
                <div style={{ background: 'var(--blue-bg)', borderRadius: 'var(--radius-xl)', padding: 'clamp(32px,5vw,48px)', textAlign: 'center', fontSize: 'clamp(40px,8vw,64px)', fontWeight: 900, color: 'var(--blue)', lineHeight: 1 }}>{step.n}</div>
              </div>
              <div className={`col-lg-6${i % 2 === 1 ? ' order-lg-1' : ''}`}>
                <div className="section-eyebrow">Étape {i + 1}</div>
                <h2 className="section-header" style={{ textAlign: 'left', fontSize: 'clamp(24px,3vw,36px)' }}>{step.title}</h2>
                <p className="lead">{step.text}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0' }}>
                  {step.details.map((d, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, padding: '6px 0', fontSize: 14, color: 'var(--text-2)' }}>
                      <span style={{ color: 'var(--blue)', fontWeight: 700 }}>✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <CTASection title="Prêt à commencer ?" text="Faites votre demande dès maintenant, sans inscription." cta={{ to: '/emprunter', label: 'Faire ma demande' }} />
    </>
  )
}
