import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
const stagger = { whileInView: 'animate', viewport: { once: true, margin: '-40px' }, initial: 'initial', variants: { animate: { transition: { staggerChildren: 0.08 } } } }

const articles = [
  { icon: '💡', cat: 'Conseils', date: '15 juin 2026', title: '5 astuces pour gérer un imprévu financier', excerpt: 'Découvrez comment faire face aux dépenses imprévues sans stresser.' },
  { icon: '📊', cat: 'Budget', date: '8 juin 2026', title: 'Micro-crédit vs découvert bancaire : quel est le meilleur choix ?', excerpt: 'Comparatif détaillé entre le micro-crédit et le découvert autorisé.' },
  { icon: '🔒', cat: 'Sécurité', date: '1 juin 2026', title: 'Comment reconnaître un prêt entre particuliers fiable ?', excerpt: 'Les critères essentiels pour identifier une plateforme de confiance.' },
  { icon: '👥', cat: 'Témoignages', date: '25 mai 2026', title: 'Sophie : "Grâce à Prestiter, j\'ai pu réparer ma voiture"', excerpt: 'L\'histoire de Sophie qui a obtenu 300€ en 24h pour une réparation urgente.' },
  { icon: '📝', cat: 'Guide', date: '18 mai 2026', title: 'Les documents nécessaires pour une demande de prêt', excerpt: 'Tout ce qu\'il faut préparer avant de soumettre votre demande.' },
  { icon: '💰', cat: 'Épargne', date: '10 mai 2026', title: 'Prêter entre particuliers : une alternative à l\'épargne traditionnelle', excerpt: 'Comment le prêt entre particuliers peut vous offrir un meilleur rendement.' },
]

export default function Blog() {
  return (
    <>
      <PageHero title="Blog & Conseils" lead="Articles et conseils pour mieux gérer votre budget et comprendre le prêt entre particuliers." />

      <section className="section">
        <div className="container">
          <motion.div className="blog-grid" {...stagger}>
            {articles.map((a, i) => (
              <motion.div key={i} className="blog-card" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <div className="blog-card-img">{a.icon}</div>
                <div className="blog-card-body">
                  <div className="blog-card-meta"><span className="badge">{a.cat}</span> &middot; {a.date}</div>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection title="Vous avez un projet ?" text="Pas besoin d'article, lancez-vous !" cta={{ to: '/emprunter', label: 'Faire ma demande' }} />
    </>
  )
}
