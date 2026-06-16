import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Confirmation() {
  return (
    <section className="confirmation">
      <div className="container">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <div className="confirmation-icon">✓</div>
          <h1>Votre demande a bien été reçue !</h1>
          <p className="lead">Un email de confirmation vous a été envoyé. Notre équipe va étudier votre dossier et vous contactera sous 24h ouvrées.</p>

          <div className="confirmation-details">
            <dl>
              <dt>Numéro de dossier</dt>
              <dd>#FP-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 99999)).padStart(5, '0')}</dd>
              <dt>Date de soumission</dt>
              <dd>{new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</dd>
              <dt>Prochaines étapes</dt>
              <dd>Analyse de votre dossier par notre équipe sous 24h. Vous serez contacté par email ou téléphone.</dd>
            </dl>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24, maxWidth: 500, margin: '0 auto 28px', textAlign: 'left' }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, color: 'var(--text)' }}>En attendant :</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Vérifiez vos emails (pensez à vérifier vos spams)',
                'Ajoutez contact@prestiter-spa.fr à vos contacts',
                'Gardez votre téléphone à proximité',
                'Préparez votre pièce d\'identité originale',
              ].map((s, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', fontSize: 13, color: 'var(--text-2)', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ color: 'var(--blue)', fontWeight: 700, flexShrink: 0 }}>✓</span> {s}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 12, padding: '10px 14px', background: 'rgba(200,16,46,0.06)', border: '1px solid rgba(200,16,46,0.15)', borderRadius: 'var(--radius)' }}>
              ⚠ Besoin urgent ? Contactez-nous au <strong>+39 02 1234 5678</strong> (Lun-Ven 9h-18h)
            </p>
          </div>

          <div style={{ fontSize: 13, color: 'var(--text-3)', maxWidth: 500, margin: '0 auto 24px', textAlign: 'center', lineHeight: 1.6 }}>
            Sans nouvelles sous 48h, <Link to="/contact">contactez notre support</Link> avec votre numéro de dossier.
          </div>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
            <Link to="/faq" className="btn btn-ghost">Questions fréquentes</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
