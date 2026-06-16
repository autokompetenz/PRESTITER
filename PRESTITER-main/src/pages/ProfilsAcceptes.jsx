import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

const loanTypes = [
  { icon: '🎯', label: 'Prêt personnel', to: '/prets/personnel', desc: 'Le plus courant. Aucune justification d\'utilisation requise. De 100€ à 3 000 000€.' },
  { icon: '⚡', label: 'Prêt d\'urgence', to: '/prets/urgence', desc: 'Traitement prioritaire, réponse sous quelques heures. Jusqu\'à 50 000€.' },
  { icon: '🎓', label: 'Prêt étudiant', to: '/prets/etudiant', desc: 'Pour les 18-26 ans. Conditions assouplies, sans revenus stables accepté.' },
  { icon: '💼', label: 'Prêt professionnel', to: '/prets/professionnel', desc: 'Freelances, auto-entrepreneurs, artisans. Revenus variables acceptés.' },
  { icon: '🏠', label: 'Prêt travaux', to: '/prets/travaux', desc: 'Petits travaux et aménagement sans crédit immobilier lourd.' },
  { icon: '🔄', label: 'Consolidation dettes', to: '/prets/consolidation', desc: 'Regroupez vos petites dettes en une seule mensualité.' },
  { icon: '❤️', label: 'PTZ Solidaire (0%)', to: '/prets/ptz', desc: 'Prêt sans intérêts pour les profils les plus fragiles.' },
  { icon: '🤝', label: 'Prêt P2P', to: '/prets/p2p', desc: 'Prêt direct entre particuliers, sécurisé par notre plateforme.' },
]

const borrowerProfiles = [
  { icon: '💼', label: 'CDI' }, { icon: '📋', label: 'CDD' }, { icon: '💻', label: 'Freelance' },
  { icon: '🔧', label: 'Indépendant' }, { icon: '📅', label: 'Intérimaire' }, { icon: '🎓', label: 'Étudiant' },
  { icon: '👴', label: 'Retraité' }, { icon: '🤝', label: 'Allocataire RSA' }, { icon: '🔄', label: 'Sans emploi' },
  { icon: '🏛️', label: 'Non-résident' }, { icon: '🏠', label: 'Propriétaire' }, { icon: '🏢', label: 'Locataire' },
]

export default function ProfilsAcceptes() {
  return (
    <>
      <PageHero title="Profils acceptés" lead="Chez Prestiter, nous acceptons tous les profils. Pas de discrimination, pas de rejet systématique." />

      <section className="section">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Profils</div>
            <h2 className="section-header">Tous les profils sont acceptés</h2>
            <p className="section-sub">CDI, CDD, freelance, étudiant, retraité, RSA, sans emploi... Aucun profil n'est exclu a priori.</p>
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
            <div className="section-eyebrow">Éligibilité</div>
            <h2 className="section-header">Types de prêts disponibles</h2>
            <p className="section-sub">Choisissez le prêt qui correspond à votre besoin parmi nos 8 offres.</p>
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
            <div className="section-eyebrow">Conditions</div>
            <h2 className="section-header">Conditions d'éligibilité</h2>
            <p className="section-sub">Les conditions minimales pour emprunter sur Prestiter.</p>
          </motion.div>
          <motion.div className="row g-4" style={{ maxWidth: 700, margin: '0 auto' }} {...fadeUp}>
            {[
              { title: 'Âge minimum', text: '18 ans minimum. Pas de limite d\'âge maximum.' },
              { title: 'Résidence', text: 'Résident France, Italie, Belgique ou Suisse. Les non-résidents sont acceptés sous conditions.' },
              { title: 'Compte bancaire', text: 'Posséder un IBAN valide à votre nom dans la zone SEPA.' },
              { title: 'Carte bancaire', text: 'Carte bancaire valide pour les prélèvements automatiques mensuels.' },
              { title: 'Capacité de remboursement', text: 'Justifier de revenus suffisants (travail, allocations, pensions). Pas de montant minimum de revenus exigé.' },
              { title: 'Pièce d\'identité', text: 'CNI ou passeport en cours de validité. Pour les non-ressortissants UE, titre de séjour accepté.' },
              { title: 'Nationalité', text: 'Ouvert à toutes les nationalités. Aucune discrimination d\'origine.' },
              { title: 'Casier judiciaire', text: 'Aucune vérification de casier judiciaire n\'est effectuée.' },
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

      <CTASection title="Vous correspondez à ces critères ?" text="Faites votre demande en 5 minutes chrono, sans inscription." cta={{ to: '/emprunter', label: 'Faire ma demande' }} />
    </>
  )
}
