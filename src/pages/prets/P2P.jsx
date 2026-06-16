import PretTypeLayout from './PretTypeLayout'

const data = {
  title: 'Prêt entre particuliers (P2P)',
  eyebrow: 'Prêt P2P',
  hero: 'Le modèle de base Prestiter : un particulier prête à un autre, sécurisé par notre plateforme.',
  badge: 'P2P',
  path: '/prets/p2p',
  minMontant: 100, maxMontant: 600,
  minDuree: 3, maxDuree: 10,
  cibles: ['Tout public'],
  description: 'Le prêt entre particuliers est le modèle fondateur de Prestiter. Un particulier prête directement à un autre, avec la plateforme comme intermédiaire sécurisé. Contrat signé électroniquement, taux négocié via la plateforme, virement sécurisé.',
  avantages: [
    { icon: '🤝', title: 'Prêt direct', text: 'Pas de banque, pas d\'intermédiaire coûteux. Un particulier prête à un particulier.' },
    { icon: '🔒', title: 'Plateforme sécurisée', text: 'Contrat électronique, données chiffrées, conformité ORIAS.' },
    { icon: '📝', title: 'Contrat électronique', text: 'Signé numériquement par les deux parties, valeur légale.' },
  ],
  exemple: { icon: '🤝', title: 'Julie, 29 ans, a préféré le prêt entre particuliers', scenario: 'Refusée par sa banque pour un prêt de 300€, elle s\'est tournée vers notre plateforme. Prêt P2P de 300€ sur 6 mois, financé en 48h par un prêteur solidaire.', mensualite: '51,13 €' },
  conditions: [
    { title: 'Montant', text: 'De 100 € à 600 €' },
    { title: 'Durée', text: 'De 3 à 10 mois' },
    { title: 'TAEG', text: '4,5 % fixe' },
    { title: 'Intermédiation', text: 'Prestiter SPA agit comme intermédiaire en financement participatif' },
    { title: 'Compte bancaire', text: 'Posséder un IBAN à votre nom' },
    { title: 'Pièce d\'identité', text: 'CNI ou passeport en cours de validité' },
  ],
  documents: [
    { doc: 'Pièce d\'identité', desc: 'CNI ou passeport en cours de validité' },
    { doc: 'IBAN / RIB', desc: 'Pour recevoir les fonds' },
    { doc: 'Carte bancaire', desc: 'Pour les prélèvements automatiques' },
  ],
  faq: [
    { q: 'Qui est le prêteur ?', r: 'Un particulier comme vous, qui souhaite placer son argent de façon solidaire et rémunérée.' },
    { q: 'Comment le contrat est-il signé ?', r: 'Électroniquement, via notre plateforme sécurisée. Aucun papier.' },
    { q: 'Que se passe-t-il en cas d\'impayé ?', r: 'Notre équipe assure le recouvrement amiable et trouve une solution.' },
  ],
}

export default function P2P() { return <PretTypeLayout data={data} /> }
