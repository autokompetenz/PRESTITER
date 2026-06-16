import PretTypeLayout from './PretTypeLayout'

const data = {
  title: 'Prêt à taux 0% — PTZ Solidaire',
  eyebrow: 'PTZ Solidaire',
  hero: 'Un prêt sans aucun intérêt, réservé aux profils les plus fragiles. Vous ne remboursez que le capital.',
  badge: 'Taux 0%',
  path: '/prets/ptz',
  tauxZero: true,
  minMontant: 100, maxMontant: 50000,
  minDuree: 3, maxDuree: 6,
  cibles: ['Allocataires', 'Personnes en difficulté', 'Profils exclus du système bancaire'],
  description: 'Notre PTZ solidaire est un prêt sans intérêts, financé par des prêteurs particuliers solidaires. Réservé aux profils les plus fragiles : allocataires, personnes en difficulté financière temporaire, profils exclus du système bancaire classique. Vous ne remboursez que le capital emprunté.',
  avantages: [
    { icon: '❤️', title: 'Zéro intérêt', text: 'Vous remboursez exactement ce que vous avez emprunté. Pas un centime de plus.' },
    { icon: '🤝', title: 'Financement solidaire', text: 'Des prêteurs particuliers solidaires financent votre prêt sans rechercher de profit.' },
    { icon: '✨', title: 'Seconde chance', text: 'Conçu pour ceux que le système bancaire classique a exclus.' },
  ],
  exemple: { icon: '💪', title: 'Fatima, allocataire RSA', scenario: 'Une facture d\'électricité impayée menaçait la coupure. PTZ solidaire de 200€ sur 4 mois à 0%, remboursement de seulement 50€ par mois.', mensualite: '50,00 €' },
  conditions: [
    { title: 'Montant', text: 'De 100 € à 50 000 €' },
    { title: 'Durée', text: 'De 3 à 6 mois' },
    { title: 'TAEG', text: '0 % — aucun intérêt' },
    { title: 'Validation', text: 'Soumis à validation spéciale par l\'équipe Prestiter' },
    { title: 'Compte bancaire', text: 'Posséder un IBAN à votre nom' },
    { title: 'Pièce d\'identité', text: 'CNI ou passeport en cours de validité' },
  ],
  documents: [
    { doc: 'Pièce d\'identité', desc: 'CNI ou passeport en cours de validité' },
    { doc: 'IBAN / RIB', desc: 'Pour recevoir les fonds' },
    { doc: 'Justificatif de situation', desc: 'Attestation RSA, avis de situation ou tout document prouvant votre fragilité financière' },
  ],
  faq: [
    { q: 'Qui peut bénéficier du taux 0% ?', r: 'Les profils les plus fragiles : allocataires RSA, personnes en difficulté, exclus bancaires.' },
    { q: 'Le taux 0% est-il garanti ?', r: 'Oui, aucun intérêt, aucun frais caché. Vous remboursez le capital uniquement.' },
    { q: 'Le délai de réponse est-il plus long ?', r: 'Oui, 24 à 48h, car une validation plus stricte est nécessaire.' },
  ],
}

export default function PTZ() { return <PretTypeLayout data={data} /> }
