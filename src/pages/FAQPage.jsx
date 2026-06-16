import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import faq from '../data/faq'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }

export default function FAQPage() {
  return (
    <>
      <PageHero title="Domande frequenti" lead="Tutto quello che devi sapere prima di fare la tua richiesta di prestito." />

      <section className="section">
        <div className="container">
          {faq.map((cat, ci) => (
            <motion.div key={ci} {...fadeUp} style={{ marginBottom: ci < faq.length - 1 ? 48 : 0 }}>
              <div className="section-eyebrow" style={{ marginBottom: 24 }}>{cat.category}</div>
              <div className="accordion">
                {cat.questions.map((item, qi) => (
                  <AccordionItem key={qi} question={item.q} answer={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection title="Ancora domande?" text="Contattaci, il nostro team ti risponderà entro 24h." cta={{ to: '/contact', label: 'Contattaci' }} />
    </>
  )
}

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="accordion-item">
      <div className="accordion-header">
        <button className="accordion-button" onClick={() => setOpen(!open)} aria-expanded={open}>
          {question}
        </button>
      </div>
      <div className={`accordion-collapse${open ? ' show' : ''}`}>
        <p className="accordion-body">{answer}</p>
      </div>
    </div>
  )
}
