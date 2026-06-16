import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

export default function MentionsLegales() {
  return (
    <>
      <PageHero title="Note legali" />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div {...fadeUp}>
            <h2>Editore della piattaforma</h2>
            <p><strong>Prestiter SPA</strong><br />Società per azioni semplificata<br />Via della Spiga, 24 — 20121 Milano, Italia</p>
            <p>Email: contact@prestiter-spa.fr<br />Telefono: +39 02 1234 5678</p>

            <h2 style={{ marginTop: 32 }}>Status legale</h2>
            <p>Prestiter SPA è registrata presso l'ORIAS (Organismo per il Registro degli Intermediari Assicurativi) come Intermediario nel Finanziamento Partecipativo (IFP) con numero in fase di attribuzione.</p>
            <p>Autorità di vigilanza: ACPR — 4 Place de Budapest, CS 92459, 75436 Paris Cedex 09.</p>

            <h2 style={{ marginTop: 32 }}>Direttore della pubblicazione</h2>
            <p>Sig. [Nome del dirigente], Presidente di Prestiter SPA.</p>

            <h2 style={{ marginTop: 32 }}>Hosting</h2>
            <p>Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>

            <h2 style={{ marginTop: 32 }}>Proprietà intellettuale</h2>
            <p>Tutto il contenuto della piattaforma (testi, grafiche, loghi, icone) è di proprietà esclusiva di Prestiter SPA. Ogni riproduzione o utilizzo non autorizzato è vietato.</p>

            <h2 style={{ marginTop: 32 }}>Credito</h2>
            <p className="text-muted">Un credito ti impegna e deve essere rimborsato. Verifica le tue capacità di rimborso prima di impegnarti.</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
