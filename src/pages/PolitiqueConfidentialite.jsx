import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

export default function PolitiqueConfidentialite() {
  return (
    <>
      <PageHero title="Politique de confidentialité" />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div {...fadeUp}>
            <h2>1. Collecte des données</h2>
            <p>Nous collectons les données personnelles que vous nous fournissez lors de votre demande de prêt : nom, prénom, email, téléphone, adresse, date de naissance, situation professionnelle, IBAN et pièce d'identité.</p>

            <h2 style={{ marginTop: 32 }}>2. Utilisation des données</h2>
            <p>Vos données sont utilisées exclusivement pour :<br />- Traiter votre demande de prêt<br />- Vous contacter concernant votre dossier<br />- Respecter nos obligations légales et réglementaires</p>

            <h2 style={{ marginTop: 32 }}>3. Partage des données</h2>
            <p>Vos données personnelles ne sont jamais revendues à des tiers. Elles sont transmises uniquement à l'équipe Prestiter pour le traitement de votre demande et, le cas échéant, aux prêteurs dans le cadre de la mise en relation.</p>

            <h2 style={{ marginTop: 32 }}>4. Sécurité des données</h2>
            <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et la confidentialité de vos données : chiffrement SSL, stockage sécurisé, accès restreint.</p>

            <h2 style={{ marginTop: 32 }}>5. Durée de conservation</h2>
            <p>Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées conformément aux obligations légales (5 ans).</p>

            <h2 style={{ marginTop: 32 }}>6. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :<br />- Droit d'accès à vos données<br />- Droit de rectification<br />- Droit à l'effacement<br />- Droit à la limitation du traitement<br />- Droit à la portabilité des données</p>
            <p>Pour exercer vos droits, contactez-nous à : contact@prestiter-spa.fr.</p>

            <h2 style={{ marginTop: 32 }}>7. Cookies</h2>
            <p>Notre site utilise uniquement des cookies techniques nécessaires au fonctionnement de la plateforme. Aucun cookie publicitaire ou de tracking n'est utilisé.</p>

            <p className="text-muted" style={{ marginTop: 32 }}>Dernière mise à jour : juin 2026.</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
