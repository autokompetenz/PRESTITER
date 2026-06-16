import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

export default function MentionsLegales() {
  return (
    <>
      <PageHero title="Mentions légales" />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div {...fadeUp}>
            <h2>Éditeur de la plateforme</h2>
            <p><strong>Prestiter SPA</strong><br />Société par actions simplifiée<br />Via della Spiga, 24 — 20121 Milano, Italie</p>
            <p>Email : contact@prestiter-spa.fr<br />Téléphone : +39 02 1234 5678</p>

            <h2 style={{ marginTop: 32 }}>Statut légal</h2>
            <p>Prestiter SPA est enregistré à l'ORIAS (Organisme pour le Registre des Intermédiaires en Assurance) en tant qu'Intermédiaire en Financement Participatif (IFP) sous le numéro en cours d'attribution.</p>
            <p>Autorité de tutelle : ACPR — 4 Place de Budapest, CS 92459, 75436 Paris Cedex 09.</p>

            <h2 style={{ marginTop: 32 }}>Directeur de la publication</h2>
            <p>M. [Nom du dirigeant], Président de Prestiter SPA.</p>

            <h2 style={{ marginTop: 32 }}>Hébergement</h2>
            <p>Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>

            <h2 style={{ marginTop: 32 }}>Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de la plateforme (textes, graphismes, logos, icônes) est la propriété exclusive de Prestiter SPA. Toute reproduction ou utilisation sans autorisation est interdite.</p>

            <h2 style={{ marginTop: 32 }}>Crédit</h2>
            <p className="text-muted">Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
