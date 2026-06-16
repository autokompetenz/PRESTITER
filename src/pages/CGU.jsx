import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

export default function CGU() {
  return (
    <>
      <PageHero title="Condizioni Generali di Utilizzo" />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div {...fadeUp}>
            <h2>1. Oggetto</h2>
            <p>Le presenti Condizioni Generali di Utilizzo regolano l'accesso e l'utilizzo della piattaforma Prestiter SPA, accessibile dal sito prestiter-spa.fr.</p>

            <h2 style={{ marginTop: 32 }}>2. Accettazione delle condizioni</h2>
            <p>Utilizzando la piattaforma, accetti pienamente e senza riserve le presenti CGU. Se non accetti queste condizioni, ti preghiamo di non utilizzare i nostri servizi.</p>

            <h2 style={{ marginTop: 32 }}>3. Servizi offerti</h2>
            <p>Prestiter SPA offre una piattaforma di incontro tra privati per la concessione di prestiti da 100€ a 3 000 000€, con una durata da 3 a 120 mesi.</p>

            <h2 style={{ marginTop: 32 }}>4. Responsabilità dell'utente</h2>
            <p>L'utente si impegna a fornire informazioni accurate e complete durante la richiesta di prestito. Qualsiasi informazione fraudolenta comporterà il rigetto immediato della richiesta e potrà essere oggetto di azioni legali.</p>

            <h2 style={{ marginTop: 32 }}>5. Protezione dei dati</h2>
            <p>In conformità con il RGPD, i tuoi dati personali vengono raccolti e trattati in modo sicuro. Hai il diritto di accedere, rettificare e cancellare i tuoi dati. Vedi la nostra Informativa sulla privacy.</p>

            <h2 style={{ marginTop: 32 }}>6. Proprietà intellettuale</h2>
            <p>Tutti gli elementi della piattaforma (contenuti, design, loghi) sono protetti dal diritto d'autore e dalla proprietà intellettuale.</p>

            <h2 style={{ marginTop: 32 }}>7. Diritto applicabile</h2>
            <p>Le presenti CGU sono soggette al diritto italiano. Ogni controversia è di competenza dei tribunali di Milano.</p>

            <p className="text-muted" style={{ marginTop: 32 }}>Ultimo aggiornamento: giugno 2026.</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
