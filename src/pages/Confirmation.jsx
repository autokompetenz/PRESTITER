import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Confirmation() {
  return (
    <section className="confirmation">
      <div className="container">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <div className="confirmation-icon">✓</div>
          <h1>La tua richiesta è stata ricevuta!</h1>
          <p className="lead">Ti è stata inviata una email di conferma. Il nostro team esaminerà la tua pratica e ti contatterà entro 24 ore lavorative.</p>

          <div className="confirmation-details">
            <dl>
              <dt>Numero di pratica</dt>
              <dd>#FP-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 99999)).padStart(5, '0')}</dd>
              <dt>Data di presentazione</dt>
              <dd>{new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</dd>
              <dt>Prossimi passi</dt>
              <dd>Analisi della tua pratica da parte del nostro team entro 24h. Verrai contattato via email o telefono.</dd>
            </dl>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24, maxWidth: 500, margin: '0 auto 28px', textAlign: 'left' }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, color: 'var(--text)' }}>Nell'attesa:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Controlla la tua email (ricorda di controllare lo spam)',
                'Aggiungi contact@prestiter-spa.fr ai tuoi contatti',
                'Tieni il telefono a portata di mano',
                'Prepara il tuo documento d\'identità originale',
              ].map((s, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', fontSize: 13, color: 'var(--text-2)', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ color: 'var(--blue)', fontWeight: 700, flexShrink: 0 }}>✓</span> {s}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 12, padding: '10px 14px', background: 'rgba(200,16,46,0.06)', border: '1px solid rgba(200,16,46,0.15)', borderRadius: 'var(--radius)' }}>
              ⚠ Necessità urgente? Contattaci al <strong>+39 02 1234 5678</strong> (Lun-Ven 9:00-18:00)
            </p>
          </div>

          <div style={{ fontSize: 13, color: 'var(--text-3)', maxWidth: 500, margin: '0 auto 24px', textAlign: 'center', lineHeight: 1.6 }}>
            Se non ricevi notizie entro 48h, <Link to="/contact">contatta il nostro supporto</Link> con il tuo numero di pratica.
          </div>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/" className="btn btn-primary">Torna alla home</Link>
            <Link to="/faq" className="btn btn-ghost">Domande frequenti</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
