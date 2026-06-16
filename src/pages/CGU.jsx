import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

export default function CGU() {
  return (
    <>
      <PageHero title="Conditions Générales d'Utilisation" />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div {...fadeUp}>
            <h2>1. Objet</h2>
            <p>Les présentes Conditions Générales d'Utilisation régissent l'accès et l'utilisation de la plateforme Prestiter SPA, accessible depuis le site prestiter-spa.fr.</p>

            <h2 style={{ marginTop: 32 }}>2. Acceptation des conditions</h2>
            <p>En utilisant la plateforme, vous acceptez pleinement et sans réserve les présentes CGU. Si vous refusez ces conditions, veuillez ne pas utiliser nos services.</p>

            <h2 style={{ marginTop: 32 }}>3. Services proposés</h2>
            <p>Prestiter SPA propose une plateforme de mise en relation entre particuliers pour l'octroi de prêts allant de 100€ à 3 000 000€, sur une durée de 3 à 120 mois.</p>

            <h2 style={{ marginTop: 32 }}>4. Responsabilités de l'utilisateur</h2>
            <p>L'utilisateur s'engage à fournir des informations exactes et complètes lors de sa demande de prêt. Toute information frauduleuse entraînera le rejet immédiat de la demande et pourra faire l'objet de poursuites.</p>

            <h2 style={{ marginTop: 32 }}>5. Protection des données</h2>
            <p>Conformément au RGPD, vos données personnelles sont collectées et traitées de manière sécurisée. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Voir notre Politique de confidentialité.</p>

            <h2 style={{ marginTop: 32 }}>6. Propriété intellectuelle</h2>
            <p>Tous les éléments de la plateforme (contenu, design, logos) sont protégés par le droit d'auteur et la propriété intellectuelle.</p>

            <h2 style={{ marginTop: 32 }}>7. Droit applicable</h2>
            <p>Les présentes CGU sont soumises au droit italien. Tout litige relève de la compétence des tribunaux de Milan.</p>

            <p className="text-muted" style={{ marginTop: 32 }}>Dernière mise à jour : juin 2026.</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
