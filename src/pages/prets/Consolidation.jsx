import PretTypeLayout from './PretTypeLayout'

const data = {
  title: 'Prêt de consolidation Prestiter',
  eyebrow: 'Consolidation',
  hero: 'Regroupez vos petites dettes en une seule mensualité plus simple à gérer.',
  badge: 'Consolidation',
  path: '/prets/consolidation',
  minMontant: 300, maxMontant: 600,
  minDuree: 6, maxDuree: 10,
  cibles: ['Personnes avec plusieurs petites dettes'],
  description: 'Plusieurs découverts, des petites dettes qui s\'accumulent ? Notre prêt de consolidation de 300€ à 600€ vous permet de tout regrouper en une seule mensualité fixe, plus facile à gérer. Respirez, on s\'occupe du reste.',
  avantages: [
    { icon: '🔄', title: 'Une seule mensualité', text: 'Fini le casse-tête des multiples échéances. Un seul prêt, une seule date.' },
    { icon: '📉', title: 'Taux unique', text: 'TAEG fixe de 4,5% sur la totalité du montant consolidé.' },
    { icon: '💆', title: 'Soulagement financier', text: 'Reprenez le contrôle de vos finances avec une solution claire.' },
  ],
  exemple: { icon: '📊', title: 'Ahmed, 42 ans, dettes multiples', scenario: 'Trois découverts bancaires et un crédit revolving à 18% chez différents organismes. Consolidation de 550€ sur 8 mois pour tout regrouper.', mensualite: '71,33 €' },
  conditions: [
    { title: 'Montant', text: 'De 300 € à 600 € (montant minimum plus élevé)' },
    { title: 'Durée', text: 'De 6 à 10 mois' },
    { title: 'Dettes à consolider', text: 'Lister les dettes à regrouper dans le formulaire' },
    { title: 'Âge minimum', text: '18 ans minimum' },
    { title: 'Compte bancaire', text: 'Posséder un IBAN à votre nom' },
    { title: 'Pièce d\'identité', text: 'CNI ou passeport en cours de validité' },
  ],
  documents: [
    { doc: 'Pièce d\'identité', desc: 'CNI ou passeport en cours de validité' },
    { doc: 'Liste des dettes', desc: 'Montant, créancier et type de chaque dette' },
    { doc: 'IBAN / RIB', desc: 'Pour recevoir les fonds et organiser les remboursements' },
  ],
  faq: [
    { q: 'Quels types de dettes puis-je consolider ?', r: 'Découverts bancaires, petits crédits conso, dettes familiales — tout type de petite dette.' },
    { q: 'Le prêt rembourse-t-il mes dettes directement ?', r: 'Les fonds vous sont versés, c\'est à vous de rembourser vos dettes. Nous vous aidons à organiser.' },
    { q: 'Puis-je consolider si je suis déjà en retard de paiement ?', r: 'Contactez-nous pour étudier votre situation. Nous trouvons une solution adaptée.' },
  ],
}

export default function Consolidation() { return <PretTypeLayout data={data} /> }
