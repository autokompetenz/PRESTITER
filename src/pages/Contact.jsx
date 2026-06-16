import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { sendEmails } from '../lib/email'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', telephone: '', sujet: 'Demande d\'information', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.nom || !form.prenom || !form.email || !form.message) return
    setSending(true)
    setError('')
    try {
      await sendEmails({
        type: 'contact',
        adminData: {
          nom: form.nom,
          prenom: form.prenom,
          email: form.email,
          telephone: form.telephone,
          sujet: form.sujet,
          message: form.message,
        },
        clientData: {
          to_name: form.prenom,
          to_email: form.email,
          type_demande: 'contact',
          message: `Votre message concernant "${form.sujet}" a bien été reçu. Nous vous répondrons sous 24h.`,
        },
      })
      setSent(true)
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <PageHero title="Contattaci" lead="Una domanda? Il nostro team è a tua disposizione." />

      <section className="section">
        <div className="container">
          <motion.div className="row g-5" initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div className="col-lg-7" variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
              <div className="form-wrapper">
                <h3>Inviaci un messaggio</h3>
                {sent ? (
                  <div className="text-center" style={{ padding: 24 }}>
                    <div style={{ fontSize: 32, marginBottom: 12 }}>✅</div>
                    <p style={{ fontWeight: 700 }}>Messaggio inviato!</p>
                    <p className="small text-muted">Ti è stata inviata una email di conferma. Ti risponderemo entro 24 ore lavorative.</p>
                  </div>
                ) : (
                  <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group"><label>Cognome</label><input className="form-control" placeholder="Rossi" value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} /></div>
                      <div className="form-group"><label>Nome</label><input className="form-control" placeholder="Mario" value={form.prenom} onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))} /></div>
                    </div>
                    <div className="form-row">
                      <div className="form-group"><label>Email</label><input type="email" className="form-control" placeholder="mario@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} /></div>
                      <div className="form-group"><label>Telefono</label><input type="tel" className="form-control" placeholder="+39 123 456 7890" value={form.telephone} onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))} /></div>
                    </div>
                    <div className="form-group"><label>Oggetto</label><select className="form-control" value={form.sujet} onChange={e => setForm(f => ({ ...f, sujet: e.target.value }))}><option>Richiesta di informazioni</option><option>Domanda su un prestito</option><option>Diventare investitore</option><option>Problema di rimborso</option><option>Reclamo</option><option>Altro</option></select></div>
                    <div className="form-group"><label>Messaggio</label><textarea className="form-control" placeholder="Descrivi la tua richiesta..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} /></div>
                    <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }} disabled={sending}>{sending ? 'Invio in corso…' : 'Invia messaggio'}</button>
                    {error && <p style={{ fontSize: 13, color: '#C8102E', textAlign: 'center', margin: 0 }}>{error}</p>}
                  </form>
                )}
              </div>
            </motion.div>
            <motion.div className="col-lg-5" variants={{ initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
              <div className="d-flex flex-column gap-4">
                {[
                  { icon: '📍', title: 'Indirizzo', text: 'Via della Spiga, 24\n20121 Milano, Italia' },
                  { icon: '📞', title: 'Telefono', text: '+39 02 1234 5678\nLun-Ven 9:00-18:00' },
                  { icon: '✉️', title: 'Email', text: 'contact@prestiter-spa.fr\nRisposta entro 24h' },
                ].map((item, i) => (
                  <div key={i} className="d-flex gap-3 align-items-start p-4 border rounded-4">
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--blue-bg)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 20 }}>{item.icon}</div>
                    <div>
                      <h4 style={{ fontSize: 15, marginBottom: 4 }}>{item.title}</h4>
                      <p className="text-muted mb-0" style={{ whiteSpace: 'pre-line', fontSize: 14 }}>{item.text}</p>
                    </div>
                  </div>
                ))}

                <div className="border rounded-4 p-4">
                  <h4 style={{ fontSize: 15, marginBottom: 12 }}>Seguici</h4>
                  <div className="d-flex gap-3">
                    {[
                      { icon: '💼', label: 'LinkedIn', url: '#' },
                      { icon: '🐦', label: 'X (Twitter)', url: '#' },
                      { icon: '📘', label: 'Facebook', url: '#' },
                      { icon: '📸', label: 'Instagram', url: '#' },
                    ].map((s, i) => (
                      <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                        style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--blue-bg)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 20, transition: 'transform 0.2s' }}
                        title={s.label}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                        {s.icon}
                      </a>
                    ))}
                  </div>
                  <p className="small text-muted mt-2" style={{ margin: '8px 0 0', fontSize: 12 }}>Rimani aggiornato sulle nostre novità e offerte.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">FAQ</div>
            <h2 className="section-header">Domande frequenti</h2>
            <p className="section-sub">Le risposte alle domande più comuni.</p>
          </motion.div>
          <motion.div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }} {...fadeUp}>
            {[
              { q: 'Quali sono i vostri orari di apertura?', r: 'Il nostro team è disponibile dal lunedì al venerdì, dalle 9:00 alle 18:00 (ora italiana). Il modulo di contatto è accessibile 24h/24 e rispondiamo entro 24h.' },
              { q: 'Dove siete situati?', r: 'La nostra sede è a Milano, Via della Spiga, 24. Operiamo principalmente in Italia, Francia, Belgio e Svizzera.' },
              { q: 'Posso contattarvi telefonicamente?', r: 'Sì, dal lunedì al venerdì dalle 9:00 alle 18:00 al +39 02 1234 5678. Per le richieste urgenti, privilegiate il telefono.' },
              { q: 'Come seguire la mia richiesta di prestito?', r: 'Riceverai una email di conferma immediata dopo la tua richiesta. Il nostro team ti ricontatterà entro 24h per fare il punto. Puoi anche chiamarci.' },
              { q: 'Offrite un servizio in inglese?', r: 'Yes, our team speaks English. You can contact us at contact@prestiter-spa.fr and we will reply in English within 24h.' },
            ].map((item, i) => (
              <ContactFaqItem key={i} q={item.q} r={item.r} />
            ))}
          </motion.div>
          <motion.div className="text-center mt-4" {...fadeUp}>
            <Link to="/faq" className="btn btn-ghost">Vedi tutte le domande →</Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function ContactFaqItem({ q, r }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}><polyline points="6 9 12 15 18 9" /></svg>
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.3s' }}>
        <p className="faq-answer">{r}</p>
      </div>
    </div>
  )
}
