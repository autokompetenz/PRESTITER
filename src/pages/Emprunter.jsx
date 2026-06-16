import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import LoanSimulator from '../components/LoanSimulator'
import FloatingDecorations from '../components/FloatingDecorations'
import { sendEmails } from '../lib/email'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
const itemSlide = { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }

const loanTypeNames = {
  personnel: 'Prêt personnel', urgence: 'Prêt d\'urgence', etudiant: 'Prêt étudiant',
  professionnel: 'Prêt professionnel', travaux: 'Prêt travaux',
  consolidation: 'Prêt de consolidation', ptz: 'PTZ Solidaire (0%)', p2p: 'Prêt P2P',
}

export default function Emprunter() {
  const { search } = useLocation()
  const preselectedType = new URLSearchParams(search).get('type')

  return (
    <>
      <PageHero title="Emprunter" lead="Faites votre demande de micro-prêt en quelques minutes. Simple, rapide, sans inscription.">
        {preselectedType && loanTypeNames[preselectedType] && (
          <span className="badge" style={{ marginTop: 12, fontSize: 12, padding: '6px 16px' }}>
            {loanTypeNames[preselectedType]}
          </span>
        )}
      </PageHero>

      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <div className="row g-5" style={{ alignItems: 'flex-start' }}>
            <motion.div className="col-lg-7" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              <div className="section-eyebrow">Simulateur</div>
              <h2 className="section-header" style={{ textAlign: 'left', fontSize: 'clamp(26px,3vw,36px)' }}>Calculez votre mensualité</h2>
              <p className="lead mb-4">Utilisez notre simulateur pour estimer votre mensualité et le coût total de votre prêt.</p>
              <motion.div style={{ maxWidth: 440 }} whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
                <LoanSimulator />
              </motion.div>
            </motion.div>
            <motion.div className="col-lg-5" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              <motion.div className="form-wrapper" whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
                <h3>Conditions d'éligibilité</h3>
                <ul className="list-checked" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Être majeur (18 ans minimum)',
                    'Posséder un compte courant avec IBAN',
                    'Avoir une capacité de remboursement démontrée',
                    'Posséder une carte bancaire valide',
                  ].map((c, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08, duration: 0.3 }} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', fontSize: 14, color: 'var(--text-2)', borderBottom: '1px solid var(--border)' }}>
                      <motion.span style={{ color: 'var(--blue)', fontWeight: 700 }} whileHover={{ scale: 1.3, color: 'var(--green)' }}>✓</motion.span> {c}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="form-wrapper mt-4" whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
                <h3>Documents à préparer</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { doc: 'Pièce d\'identité', desc: 'CNI ou passeport en cours de validité' },
                    { doc: 'IBAN / RIB', desc: 'Pour recevoir les fonds' },
                    { doc: 'Carte bancaire', desc: 'Pour les remboursements automatiques' },
                  ].map((d, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
                      <motion.span style={{ fontSize: 18 }} whileHover={{ scale: 1.2, rotate: [0, -15, 15, 0] }}>{['🪪', '🏦', '💳'][i]}</motion.span>
                      <div><div style={{ fontWeight: 700, fontSize: 14 }}>{d.doc}</div><div style={{ fontSize: 13, color: 'var(--text-3)' }}>{d.desc}</div></div>
                    </motion.li>
                  ))}
                </ul>
                <p className="small text-muted mt-3" style={{ margin: 0 }}>Tout se fait en ligne, aucun document papier à envoyer.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="formulaire" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingDecorations />
        <div className="container">
          <motion.div className="section-title" {...fadeUp}>
            <div className="section-eyebrow">Demande</div>
            <h2 className="section-header">Faire ma demande de prêt</h2>
            <p className="section-sub">Remplissez le formulaire ci-dessous. Vous recevrez une confirmation par email immédiatement.</p>
          </motion.div>
          <motion.div style={{ maxWidth: 700, margin: '0 auto' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <MultiStepForm preselectedType={preselectedType} />
          </motion.div>
        </div>
      </section>
    </>
  )
}

const stepVariants = {
  enter: { opacity: 0, x: 30, scale: 0.97 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -30, scale: 0.97 },
}

function MultiStepForm({ preselectedType }) {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    montant: 5000, duree: 6, motif: preselectedType && loanTypeNames[preselectedType] ? loanTypeNames[preselectedType] : '',
    nom: '', prenom: '', naissance: '', email: '', telephone: '', adresse: '', situation: '',
    iban: '', titulaire: '',
    recto: null, verso: null,
    acceptCgu: false, acceptCertif: false,
  })

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }))
  const next = () => { setDirection(1); setStep(s => Math.min(s + 1, 5)); setError('') }
  const prev = () => { setDirection(-1); setStep(s => Math.max(s - 1, 1)); setError('') }
  const canNext = () => {
    if (step === 1) return form.montant && form.duree
    if (step === 2) return form.nom && form.prenom && form.naissance && form.email && form.telephone && form.adresse && form.situation
    if (step === 3) return form.iban && form.titulaire
    if (step === 4) return form.recto && form.verso
    if (step === 5) return form.acceptCgu && form.acceptCertif
    return false
  }

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canNext() || sending) return
    setSending(true)
    setError('')
    try {
      await sendEmails({
        type: 'demande de prêt',
        adminData: {
          montant: `${form.montant} €`,
          duree: `${form.duree} mois`,
          motif: form.motif || 'Non spécifié',
          nom: form.nom,
          prenom: form.prenom,
          naissance: form.naissance,
          email: form.email,
          telephone: form.telephone,
          adresse: form.adresse,
          situation: form.situation,
          iban: form.iban,
          titulaire: form.titulaire,
          message: `Nouvelle demande de prêt de ${form.prenom} ${form.nom} — ${form.montant}€ sur ${form.duree} mois`,
        },
        clientData: {
          to_name: form.prenom,
          to_email: form.email,
          type_demande: 'prêt',
          montant: `${form.montant} €`,
          duree: `${form.duree} mois`,
          dossier: `#FP-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 99999)).padStart(5, '0')}`,
          message: `Votre demande de prêt de ${form.montant}€ sur ${form.duree} mois a bien été reçue.`,
        },
      })
      navigate('/confirmation')
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.')
    } finally {
      setSending(false)
    }
  }

  const steps = ['Projet', 'Identité', 'Banque', 'Pièce d\'identité', 'Récapitulatif']

  return (
    <div className="form-wrapper">
      <div className="progress-bar">
        {steps.map((s, i) => (
          <div key={i} className={`progress-step${step === i + 1 ? ' active' : ''}${step > i + 1 ? ' completed' : ''}`}>
            <div className="progress-circle">{step > i + 1 ? null : i + 1}</div>
            <div className="progress-label">{s}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ minHeight: 320 }}>
        <AnimatePresence mode="wait" custom={direction}>
          {step === 1 && (
          <motion.div className="form-step" key="step1" custom={direction} variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <h3>Votre projet</h3>
            <div className="form-group">
              <label>Montant souhaité</label>
              <input type="range" className="simulator-range" min={100} max={3000000} step={1000} value={form.montant}
                onChange={e => update('montant', Number(e.target.value))} />
              <div style={{ textAlign: 'right', fontWeight: 800, color: 'var(--blue)', fontSize: 18, marginTop: 4 }}>{Number(form.montant).toLocaleString('fr-FR')} €</div>
            </div>
            <div className="form-group">
              <label>Durée souhaitée</label>
              <input type="range" className="simulator-range" min={3} max={10} step={1} value={form.duree}
                onChange={e => update('duree', Number(e.target.value))} />
              <div style={{ textAlign: 'right', fontWeight: 800, color: 'var(--blue)', fontSize: 18, marginTop: 4 }}>{form.duree} mois</div>
            </div>
            <div className="form-group">
              <label>Motif du prêt (facultatif)</label>
              <select className="form-control" value={form.motif} onChange={e => update('motif', e.target.value)}>
                <option value="">Sélectionnez un motif</option>
                <option>Dépense imprévue</option>
                <option>Réparation auto/moto</option>
                <option>Frais médicaux</option>
                <option>Équipement électronique</option>
                <option>Voyage</option>
                <option>Autre</option>
              </select>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div className="form-step" key="step2" custom={direction} variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <h3>Vos informations personnelles</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Nom</label>
                <input className="form-control" placeholder="Rossi" value={form.nom} onChange={e => update('nom', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Prénom</label>
                <input className="form-control" placeholder="Mario" value={form.prenom} onChange={e => update('prenom', e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Date de naissance</label>
                <input type="date" className="form-control" value={form.naissance} onChange={e => update('naissance', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Situation professionnelle</label>
                <select className="form-control" value={form.situation} onChange={e => update('situation', e.target.value)}>
                  <option value="">Sélectionnez</option>
                  <option>CDI</option><option>CDD</option><option>Freelance</option>
                  <option>Indépendant</option><option>Intérimaire</option>
                  <option>Étudiant</option><option>Retraité</option>
                  <option>Allocataire RSA</option><option>Sans emploi</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="mario@example.com" value={form.email} onChange={e => update('email', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Téléphone</label>
              <input type="tel" className="form-control" placeholder="+39 123 456 7890" value={form.telephone} onChange={e => update('telephone', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Adresse postale</label>
              <input className="form-control" placeholder="Via della Spiga, 24, 20121 Milano" value={form.adresse} onChange={e => update('adresse', e.target.value)} />
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div className="form-step" key="step3" custom={direction} variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <h3>Vos informations bancaires</h3>
            <div className="form-group">
              <label>IBAN</label>
              <input className="form-control" placeholder="IT00 X123 4567 8901 2345 6789 012" value={form.iban} onChange={e => update('iban', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Titulaire du compte</label>
              <input className="form-control" placeholder="Mario Rossi" value={form.titulaire} onChange={e => update('titulaire', e.target.value)} />
            </div>
            <p className="small text-muted">Ces informations permettent de vous verser les fonds si votre demande est acceptée.</p>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div className="form-step" key="step4" custom={direction} variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <h3>Pièce d'identité</h3>
            <p className="small text-muted mb-4">Téléchargez le recto et le verso de votre pièce d'identité (CNI ou passeport).</p>
            <FileUpload label="Recto de la pièce d'identité" onChange={f => update('recto', f)} />
            <div style={{ height: 16 }} />
            <FileUpload label="Verso de la pièce d'identité" onChange={f => update('verso', f)} />
            <p className="small text-muted mt-3">Formats acceptés : JPG, PNG, PDF (max 5 Mo).</p>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div className="form-step" key="step5" custom={direction} variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <h3>Récapitulatif de votre demande</h3>
            <div style={{ background: 'var(--bg-card2)', borderRadius: 'var(--radius)', padding: 16, marginBottom: 20 }}>
              <div className="admin-field"><span className="admin-field-label">Montant</span><span className="admin-field-value">{form.montant} €</span></div>
              <div className="admin-field"><span className="admin-field-label">Durée</span><span className="admin-field-value">{form.duree} mois</span></div>
              <div className="admin-field"><span className="admin-field-label">Mensualité estimée</span><span className="admin-field-value">{(form.montant * 0.045 / 12 * Math.pow(1 + 0.045 / 12, form.duree) / (Math.pow(1 + 0.045 / 12, form.duree) - 1)).toFixed(2)} €</span></div>
              <div className="admin-field"><span className="admin-field-label">Nom</span><span className="admin-field-value">{form.prenom} {form.nom}</span></div>
              <div className="admin-field"><span className="admin-field-label">Email</span><span className="admin-field-value">{form.email}</span></div>
              <div className="admin-field" style={{ borderBottom: 'none' }}><span className="admin-field-label">Situation</span><span className="admin-field-value">{form.situation}</span></div>
            </div>

            <div className="form-check">
              <input type="checkbox" id="cgu" checked={form.acceptCgu} onChange={e => update('acceptCgu', e.target.checked)} />
              <label htmlFor="cgu">J'accepte les <Link to="/cgu" target="_blank">Conditions Générales d'Utilisation</Link> et la <Link to="/politique-confidentialite" target="_blank">Politique de confidentialité</Link>.</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="certif" checked={form.acceptCertif} onChange={e => update('acceptCertif', e.target.checked)} />
              <label htmlFor="certif">Je certifie que les informations fournies sont exactes.</label>
            </div>
          </motion.div>
        )}

        </AnimatePresence>

        <div className="form-actions">
          {step > 1 ? <button type="button" className="btn btn-ghost" onClick={prev}>← Retour</button> : <div />}
          {step < 5 ? (
            <button type="button" className="btn btn-primary" onClick={next} disabled={!canNext()} style={{ opacity: canNext() ? 1 : 0.5, cursor: canNext() ? 'pointer' : 'not-allowed' }}>
              Suivant →
            </button>
          ) : (
            <button type="submit" className="btn btn-primary" disabled={!canNext() || sending} style={{ opacity: canNext() ? 1 : 0.5, cursor: canNext() ? 'pointer' : 'not-allowed' }}>
              {sending ? 'Envoi en cours…' : 'Soumettre ma demande'}
            </button>
          )}
        </div>
        {error && <p style={{ marginTop: 16, fontSize: 13, color: '#C8102E', textAlign: 'center' }}>{error}</p>}
      </form>
    </div>
  )
}

function FileUpload({ label, onChange }) {
  const [file, setFile] = useState(null)
  return (
    <div className={`file-upload${file ? ' has-file' : ''}`}>
      <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={e => { const f = e.target.files[0]; setFile(f); onChange(f) }} />
      {file ? (
        <>
          <div className="file-upload-icon" style={{ color: 'var(--green)' }}>✓</div>
          <div className="file-upload-text">{file.name}</div>
          <div className="file-upload-hint">{(file.size / 1024 / 1024).toFixed(1)} Mo — Cliquez pour changer</div>
        </>
      ) : (
        <>
          <div className="file-upload-icon">📄</div>
          <div className="file-upload-text">{label}</div>
          <div className="file-upload-hint">Cliquez pour sélectionner un fichier</div>
        </>
      )}
    </div>
  )
}
