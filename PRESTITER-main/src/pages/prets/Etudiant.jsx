import PretTypeLayout from './PretTypeLayout'

const data = {
  title: 'Prêt étudiant Prestiter',
  eyebrow: 'Prêt étudiant',
  hero: 'Étudiant, alternant, jeune actif ? Un prêt adapté à votre situation, sans revenus stables.',
  badge: 'Étudiant',
  path: '/prets/etudiant',
  minMontant: 100, maxMontant: 50000,
  minDuree: 3, maxDuree: 8,
  cibles: ['Étudiants', 'Alternants', 'Jeunes actifs 18-26 ans'],
  description: 'Les banques ne prêtent pas aux étudiants — nous si. Notre prêt étudiant de 100€ à 50 000€ est conçu pour les jeunes sans revenus fixes ou avec de faibles ressources. Mensualités légères, conditions souples, et aucune discrimination liée à votre situation.',
  avantages: [
    { icon: '🎓', title: 'Conditions assouplies', text: 'Pas de revenus stables ? Pas de problème. Nous évaluons votre situation globalement.' },
    { icon: '📚', title: 'Pour vos études et plus', text: 'Fournitures, ordinateur, logement, transport, stage à l\'étranger.' },
    { icon: '📱', title: 'Sans caution parentale', text: 'Pas besoin de garant. Vous empruntez en votre nom propre.' },
  ],
  exemple: { icon: '📚', title: 'Lucas, 21 ans, étudiant en licence', scenario: 'Besoin d\'un ordinateur portable pour ses cours et ses examens. Prêt étudiant de 800€ sur 6 mois, accepté sans justificatif de revenus.', mensualite: '136,40 €' },
  conditions: [
    { title: 'Âge', text: 'De 18 à 26 ans' },
    { title: 'Montant', text: 'De 100 € à 50 000 €' },
    { title: 'Durée', text: 'De 3 à 8 mois' },
    { title: 'Inscription', text: 'Être étudiant, alternant ou en formation' },
    { title: 'Compte bancaire', text: 'Posséder un IBAN à votre nom' },
    { title: 'Pièce d\'identité', text: 'CNI ou passeport en cours de validité' },
  ],
  documents: [
    { doc: 'Pièce d\'identité', desc: 'CNI ou passeport en cours de validité' },
    { doc: 'IBAN / RIB', desc: 'Pour recevoir les fonds' },
    { doc: 'Carte étudiante', desc: 'Ou certificat de scolarité (facultatif)' },
  ],
  faq: [
    { q: 'Puis-je emprunter sans avoir de revenus ?', r: 'Oui, nous n\'exigeons pas de revenus réguliers pour les étudiants.' },
    { q: 'Faut-il un garant ou une caution parentale ?', r: 'Non, aucun garant n\'est demandé. Vous empruntez en votre nom.' },
    { q: 'Puis-je utiliser le prêt pour un stage à l\'étranger ?', r: 'Oui, c\'est même l\'un des usages recommandés.' },
  ],
}

export default function Etudiant() { return <PretTypeLayout data={data} /> }
