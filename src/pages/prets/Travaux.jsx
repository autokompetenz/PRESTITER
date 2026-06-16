import PretTypeLayout from './PretTypeLayout'

const data = {
  title: 'Prêt travaux Prestiter',
  eyebrow: 'Prêt travaux',
  hero: 'Petits travaux, aménagement intérieur, rénovation — financez sans crédit immobilier lourd.',
  badge: 'Travaux',
  path: '/prets/travaux',
  minMontant: 200, maxMontant: 600,
  minDuree: 4, maxDuree: 10,
  cibles: ['Propriétaires', 'Locataires', 'Familles'],
  description: 'Peinture, plomberie, électricité, mobilier, achat de matériaux, petite rénovation — notre prêt travaux de 200€ à 600€ vous permet de financer vos petits travaux sans recourir à un crédit immobilier lourd. Un justificatif de devis peut être demandé.',
  avantages: [
    { icon: '🏠', title: 'Pour tous les petits travaux', text: 'Peinture, plomberie, électricité, petit mobilier, matériaux.' },
    { icon: '🔨', title: 'Sans crédit immo lourd', text: 'Pas besoin d\'hypothèque ni de dossier bancaire complexe.' },
    { icon: '📋', title: 'Devis accepté', text: 'Un simple devis ou facture suffit comme justificatif.' },
  ],
  exemple: { icon: '🛋️', title: 'Marie et Paul, jeunes parents', scenario: 'Rénovation de la chambre de bébé avant l\'arrivée. Prêt travaux de 400€ sur 6 mois avec présentation d\'un devis.', mensualite: '69,17 €' },
  conditions: [
    { title: 'Statut', text: 'Propriétaire ou locataire' },
    { title: 'Montant', text: 'De 200 € à 600 €' },
    { title: 'Durée', text: 'De 4 à 10 mois' },
    { title: 'Justificatif', text: 'Devis ou facture peut être demandé' },
    { title: 'Compte bancaire', text: 'Posséder un IBAN à votre nom' },
    { title: 'Pièce d\'identité', text: 'CNI ou passeport en cours de validité' },
  ],
  documents: [
    { doc: 'Pièce d\'identité', desc: 'CNI ou passeport en cours de validité' },
    { doc: 'IBAN / RIB', desc: 'Pour recevoir les fonds' },
    { doc: 'Devis ou facture', desc: 'Justificatif des travaux (si demandé)' },
  ],
  faq: [
    { q: 'Faut-il obligatoirement fournir un devis ?', r: 'Un devis peut être demandé pour les montants élevés, mais ce n\'est pas systématique.' },
    { q: 'Propriétaire et locataire sont-ils acceptés ?', r: 'Oui, les deux. Le prêt n\'est pas lié au bien.' },
    { q: 'Puis-je utiliser le prêt pour acheter du mobilier ?', r: 'Oui, l\'achat de mobilier est inclus dans les cas d\'usage acceptés.' },
  ],
}

export default function Travaux() { return <PretTypeLayout data={data} /> }
