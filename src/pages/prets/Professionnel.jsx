import PretTypeLayout from './PretTypeLayout'

const data = {
  title: 'Prêt professionnel Prestiter',
  eyebrow: 'Prêt professionnel',
  hero: 'Freelance, auto-entrepreneur, artisan ? Besoin de trésorerie rapide pour votre activité.',
  badge: 'Professionnel',
  path: '/prets/professionnel',
  minMontant: 200, maxMontant: 600,
  minDuree: 3, maxDuree: 10,
  cibles: ['Freelances', 'Auto-entrepreneurs', 'Artisans', 'Commerçants'],
  description: 'Vous êtes indépendant et les banques vous ignorent ? Notre prêt professionnel de 200€ à 600€ est fait pour vous. Revenus variables acceptés, pas de bilan comptable exigé. Achetez du matériel, financez un déplacement ou lancez votre activité.',
  avantages: [
    { icon: '💼', title: 'Revenus variables acceptés', text: 'Pas de stabilité exigée. Nous comprenons le rythme des indépendants.' },
    { icon: '📋', title: 'Pas de bilan requis', text: 'Un extrait Kbis ou une facture récente suffit. Pas de comptable.' },
    { icon: '🚀', title: 'Pour booster votre activité', text: 'Matériel, logiciel, stock, déplacement pro, lancement d\'activité.' },
  ],
  exemple: { icon: '💻', title: 'Camille, freelance en design', scenario: 'Son ordinateur a rendu l\'âme en pleine mission. Prêt pro de 500€ sur 8 mois pour un remplacement urgent.', mensualite: '64,84 €' },
  conditions: [
    { title: 'Statut', text: 'Freelance, auto-entrepreneur, artisan, commerçant, profession libérale' },
    { title: 'Montant', text: 'De 200 € à 600 €' },
    { title: 'Durée', text: 'De 3 à 10 mois' },
    { title: 'Justificatif', text: 'Extrait Kbis, numéro SIRET ou facture récente' },
    { title: 'Compte bancaire', text: 'Posséder un IBAN professionnel ou personnel' },
    { title: 'Pièce d\'identité', text: 'CNI ou passeport en cours de validité' },
  ],
  documents: [
    { doc: 'Pièce d\'identité', desc: 'CNI ou passeport en cours de validité' },
    { doc: 'Extrait Kbis ou SIRET', desc: 'Justificatif d\'activité professionnelle' },
    { doc: 'IBAN / RIB', desc: 'Pour recevoir les fonds' },
    { doc: 'Facture ou devis', desc: 'Si utilisation professionnelle spécifique' },
  ],
  faq: [
    { q: 'Puis-je emprunter si mon activité est récente ?', r: 'Oui, même une activité récente peut être acceptée.' },
    { q: 'Les professions libérales sont-elles acceptées ?', r: 'Oui, toutes les professions libérales sont acceptées.' },
    { q: 'Puis-je utiliser les fonds pour mon activité ?', r: 'Oui, le prêt est conçu pour des besoins professionnels.' },
  ],
}

export default function Professionnel() { return <PretTypeLayout data={data} /> }
