import PretTypeLayout from './PretTypeLayout'

const data = {
  title: 'Prêt personnel Prestiter',
  eyebrow: 'Prêt personnel',
  hero: 'Le prêt personnel le plus simple du marché. Aucune justification d\'utilisation, une réponse sous 24h.',
  badge: 'Personnel',
  path: '/prets/personnel',
  minMontant: 100, maxMontant: 3000000,
  minDuree: 3, maxDuree: 10,
  cibles: ['Tout public', 'CDI', 'CDD', 'Retraités', 'Allocataires'],
  description: 'Le prêt personnel Prestiter est notre offre phare. De 100€ à 3 000 000€, sans aucun justificatif d\'utilisation. Vous empruntez pour ce que vous voulez : voyage, électroménager, fêtes, dépenses imprévues, loisirs, ou même des projets d\'envergure. Pas de questions, pas de paperasse.',
  avantages: [
    { icon: '🎯', title: 'Aucune justification', text: 'Pas besoin de dire pourquoi vous empruntez. Libre utilisation des fonds.' },
    { icon: '⚡', title: 'Réponse sous 24h', text: 'Traitement rapide de votre dossier, sans attente inutile.' },
    { icon: '📱', title: '100% en ligne', text: 'Formulaire simple, signature électronique, virement direct.' },
  ],
  exemple: { icon: '✈️', title: 'Sofia, 28 ans, a financé son voyage', scenario: 'Sofia voulait rendre visite à sa famille au Maroc sans attendre plusieurs mois d\'économies. Prêt personnel de 1 500€ sur 8 mois.', mensualite: '191,75 €' },
  conditions: [
    { title: 'Âge minimum', text: '18 ans minimum' },
    { title: 'Montant', text: 'De 100 € à 3 000 000 €' },
    { title: 'Durée', text: 'De 3 à 10 mois' },
    { title: 'Compte bancaire', text: 'Posséder un IBAN à votre nom' },
    { title: 'Carte bancaire', text: 'Pour les prélèvements automatiques' },
    { title: 'Pièce d\'identité', text: 'CNI ou passeport en cours de validité' },
  ],
  documents: [
    { doc: 'Pièce d\'identité', desc: 'CNI ou passeport en cours de validité' },
    { doc: 'IBAN / RIB', desc: 'Pour recevoir les fonds' },
    { doc: 'Carte bancaire', desc: 'Pour les prélèvements automatiques' },
  ],
  faq: [
    { q: 'Puis-je utiliser l\'argent comme je veux ?', r: 'Oui, aucune restriction. Voyage, courses, factures, loisirs — libre à vous.' },
    { q: 'Y a-t-il des frais de dossier ?', r: 'Non, aucun frais de dossier ni frais cachés. Le TAEG de 4,5% est tout compris.' },
    { q: 'Puis-je rembourser par anticipation ?', r: 'Oui, sans aucun frais de remboursement anticipé.' },
  ],
}

export default function Personnel() { return <PretTypeLayout data={data} /> }
