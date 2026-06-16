import PretTypeLayout from './PretTypeLayout'

const data = {
  title: 'Prêt d\'urgence Prestiter',
  eyebrow: 'Prêt urgence',
  hero: 'Un besoin immédiat ? Notre prêt d\'urgence est traité en priorité — réponse sous quelques heures.',
  badge: 'Urgence',
  path: '/prets/urgence',
  minMontant: 100, maxMontant: 50000,
  minDuree: 1, maxDuree: 3,
  cibles: ['Tout public', 'Besoin immédiat'],
  description: 'Facture impayée, panne de voiture, frais médicaux, loyer en retard, coupure d\'électricité — quand l\'urgence ne peut pas attendre. Notre prêt d\'urgence de 100€ à 50 000€ est traité en priorité avec un délai de réponse de quelques heures et un virement sous 24h si accepté.',
  avantages: [
    { icon: '⚡', title: 'Traitement prioritaire', text: 'Votre dossier est traité en quelques heures, pas en jours.' },
    { icon: '💶', title: 'Virement sous 24h', text: 'Fonds disponibles sur votre compte dès le lendemain si accepté.' },
    { icon: '📄', title: 'Formulaire express', text: 'Moins de champs à remplir, moins de documents à fournir.' },
  ],
  exemple: { icon: '🚗', title: 'Thomas, 35 ans, panne de voiture', scenario: 'Plus de voiture pour aller au travail. Réparation urgente de 1 200€. Prêt urgence de 1 200€ sur 3 mois, accepté en 4h.', mensualite: '407,60 €' },
  conditions: [
    { title: 'Âge minimum', text: '18 ans minimum' },
    { title: 'Montant', text: 'De 100 € à 50 000 €' },
    { title: 'Durée', text: 'De 1 à 3 mois' },
    { title: 'Situation d\'urgence', text: 'Besoin financier immédiat et justifié' },
    { title: 'Compte bancaire', text: 'Posséder un IBAN à votre nom' },
    { title: 'Pièce d\'identité', text: 'CNI ou passeport en cours de validité' },
  ],
  documents: [
    { doc: 'Pièce d\'identité', desc: 'CNI ou passeport en cours de validité' },
    { doc: 'IBAN / RIB', desc: 'Pour recevoir les fonds' },
    { doc: 'Justificatif d\'urgence', desc: 'Facultatif mais accélère le traitement' },
  ],
  faq: [
    { q: 'Qu\'entendez-vous par "urgence" ?', r: 'Toute situation nécessitant des fonds immédiatement : facture impayée, panne, frais médicaux, loyer.' },
    { q: 'Le traitement est-il vraiment plus rapide ?', r: 'Oui, les dossiers marqués "urgence" sont traités en priorité absolue par notre équipe.' },
    { q: 'Puis-je obtenir plus de 50 000 € en urgence ?', r: 'Pour une urgence, le plafond est de 50 000€. Au-delà, orientez-vous vers notre prêt personnel.' },
  ],
}

export default function Urgence() { return <PretTypeLayout data={data} /> }
