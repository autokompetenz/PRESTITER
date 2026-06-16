import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

export default function PolitiqueConfidentialite() {
  return (
    <>
      <PageHero title="Informativa sulla privacy" />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div {...fadeUp}>
            <h2>1. Raccolta dei dati</h2>
            <p>Raccogliamo i dati personali che ci fornisci durante la richiesta di prestito: nome, cognome, email, telefono, indirizzo, data di nascita, situazione professionale, IBAN e documento d'identità.</p>

            <h2 style={{ marginTop: 32 }}>2. Utilizzo dei dati</h2>
            <p>I tuoi dati sono utilizzati esclusivamente per:<br />- Gestire la tua richiesta di prestito<br />- Contattarti riguardo alla tua pratica<br />- Adempiere ai nostri obblighi legali e regolamentari</p>

            <h2 style={{ marginTop: 32 }}>3. Condivisione dei dati</h2>
            <p>I tuoi dati personali non vengono mai rivenduti a terzi. Vengono trasmessi solo al team Prestiter per il trattamento della tua richiesta e, se del caso, ai finanziatori nell'ambito dell'incontro tra le parti.</p>

            <h2 style={{ marginTop: 32 }}>4. Sicurezza dei dati</h2>
            <p>Adottiamo tutte le misure tecniche e organizzative necessarie per garantire la sicurezza e la riservatezza dei tuoi dati: crittografia SSL, archiviazione sicura, accesso limitato.</p>

            <h2 style={{ marginTop: 32 }}>5. Durata di conservazione</h2>
            <p>I tuoi dati sono conservati per il periodo necessario al trattamento della tua richiesta, poi archiviati in conformità con gli obblighi legali (5 anni).</p>

            <h2 style={{ marginTop: 32 }}>6. I tuoi diritti</h2>
            <p>In conformità con il RGPD, hai i seguenti diritti:<br />- Diritto di accesso ai tuoi dati<br />- Diritto di rettifica<br />- Diritto alla cancellazione<br />- Diritto alla limitazione del trattamento<br />- Diritto alla portabilità dei dati</p>
            <p>Per esercitare i tuoi diritti, contattaci a: contatto@prestiteritalia.it.</p>

            <h2 style={{ marginTop: 32 }}>7. Cookie</h2>
            <p>Il nostro sito utilizza solo cookie tecnici necessari al funzionamento della piattaforma. Nessun cookie pubblicitario o di tracciamento viene utilizzato.</p>

            <p className="text-muted" style={{ marginTop: 32 }}>Ultimo aggiornamento: giugno 2026.</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
