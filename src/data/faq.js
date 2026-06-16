const faq = [
  {
    category: 'Emprunteur', questions: [
      { q: 'Combien puis-je emprunter ?', a: 'Les montants proposés vont de 100 € à 600 €, remboursables sur une durée de 3 à 10 mois.' },
      { q: 'Quel est le délai pour recevoir mon argent ?', a: 'Sous 48 heures après acceptation de votre dossier. Le virement est effectué directement sur votre compte bancaire.' },
      { q: 'Suis-je éligible si je suis en CDD / freelance / étudiant ?', a: 'Oui, nous acceptons tous les profils : CDI, CDD, freelance, indépendant, intérimaire, étudiant, allocataire RSA, retraité, sans emploi. L\'important est votre capacité de remboursement.' },
      { q: 'Comment se font les remboursements ?', a: 'Les remboursements sont prélevés automatiquement sur votre carte bancaire chaque mois, à date fixe. Vous êtes prévenu par email avant chaque prélèvement.' },
      { q: 'Que se passe-t-il en cas de retard de paiement ?', a: 'En cas de difficulté, contactez-nous immédiatement. Nous étudions toujours des solutions personnalisées (report d\'échéance, rééchelonnement) avant toute procédure. Des pénalités de retard peuvent s\'appliquer au-delà de 15 jours.' },
      { q: 'Puis-je rembourser par anticipation ?', a: 'Oui, vous pouvez rembourser à tout moment sans pénalité. Vous ne payez que les intérêts courus jusqu\'à la date de remboursement.' },
      { q: 'Dois-je créer un compte pour faire une demande ?', a: 'Non, aucune inscription n\'est nécessaire. Il vous suffit de remplir le formulaire de demande en quelques minutes.' },
      { q: 'Comment savoir si ma demande a bien été reçue ?', a: 'Vous recevrez un email de confirmation immédiatement après la soumission de votre formulaire avec votre numéro de dossier.' },
      { q: 'Puis-je modifier ma demande après l\'avoir soumise ?', a: 'Contactez-nous par email ou téléphone si vous devez modifier votre demande. Nous pouvons ajuster le montant ou la durée tant que le dossier est en cours d\'analyse.' },
      { q: 'Que faire si je perds mon emploi pendant le remboursement ?', a: 'Prévenez-nous dès que possible. Nous étudions des solutions adaptées : report d\'échéances, réduction temporaire des mensualités ou rééchelonnement de la dette.' },
      { q: 'Puis-je prolonger la durée de mon prêt ?', a: 'Oui, sous réserve d\'acceptation par notre équipe. La prolongation peut réduire vos mensualités mais augmentera le coût total des intérêts.' },
      { q: 'Comment Prestiter gagne-t-il de l\'argent ?', a: 'Prestiter perçoit une commission sur les intérêts versés par l\'emprunteur. Notre modèle est transparent : le TAEG de 4,5% inclut tous les coûts, sans frais cachés ni frais de dossier.' },
    ]
  },
  {
    category: 'Prêteur', questions: [
      { q: 'Quels sont les risques liés au prêt entre particuliers ?', a: 'Les demandes de prêts sont rigoureusement sélectionnées par la plateforme mais le risque zéro n\'existe pas. Nous recommandons de diversifier vos placements et de ne pas investir une somme que vous ne pouvez pas vous permettre de perdre.' },
      { q: 'Quel est le rendement attendu ?', a: 'Le rendement annuel est estimé jusqu\'à 3%, mais il peut varier selon les dossiers financés et les éventuels défauts de paiement.' },
      { q: 'Y a-t-il des frais pour le prêteur ?', a: 'Aucun frais de gestion, d\'inscription ou de retrait. Seuls les éventuels frais bancaires liés aux virements peuvent s\'appliquer.' },
      { q: 'Comment choisir les dossiers à financer ?', a: 'L\'équipe Prestiter présélectionne les dossiers éligibles. En tant que prêteur, vous recevez les caractéristiques de chaque prêt (montant, durée, profil) avant de décider.' },
      { q: 'Quand est-ce que je reçois mes remboursements ?', a: 'Les remboursements sont automatiques et versés chaque mois sur votre compte bancaire, sans aucune action de votre part.' },
      { q: 'Que se passe-t-il en cas de défaut de paiement de l\'emprunteur ?', a: 'En cas d\'impayé, notre équipe contacte l\'emprunteur et met en œuvre des solutions amiables. En dernier recours, une procédure de recouvrement peut être engagée. Le capital investi n\'est pas garanti.' },
      { q: 'Comment déclarer mes revenus d\'intérêts aux impôts ?', a: 'Les intérêts perçus sont considérés comme des revenus de capitaux mobiliers et soumis au prélèvement forfaitaire unique (PFU) de 30% ou au barème progressif. Nous fournissons un récapitulatif annuel pour faciliter votre déclaration.' },
      { q: 'Puis-je récupérer mon argent avant la fin du prêt ?', a: 'La cession de créance est possible sous conditions. Contactez notre équipe pour étudier les options de sortie anticipée.' },
    ]
  },
  {
    category: 'Général', questions: [
      { q: 'La plateforme est-elle réglementée ?', a: 'Prestiter SPA est enregistré à l\'ORIAS comme Intermédiaire en Financement Participatif (IFP) et soumis au contrôle de l\'ACPR. Notre numéro d\'immatriculation est en cours d\'attribution.' },
      { q: 'Mes données personnelles sont-elles protégées ?', a: 'Oui, toutes vos données sont stockées de façon sécurisée et chiffrée (SSL 256-bit). Nous ne revendons aucune information à des tiers. Conformité totale au RGPD.' },
      { q: 'Comment contacter le service client ?', a: 'Par email à contact@prestiter-spa.fr ou par téléphone au +39 02 1234 5678, du lundi au vendredi de 9h à 18h. Réponse sous 24h ouvrées par email.' },
      { q: 'Y a-t-il une assurance associée au prêt ?', a: 'L\'assurance n\'est pas obligatoire chez Prestiter. Nous recommandons néanmoins de souscrire une assurance perte d\'emploi ou incapacité auprès de votre assureur habituel.' },
      { q: 'Puis-je annuler ma demande après acceptation ?', a: 'Oui, vous disposez d\'un délai de rétractation de 14 jours à compter de la signature du contrat, conformément à la législation en vigueur.' },
      { q: 'Comment déposer une réclamation ?', a: 'Envoyez votre réclamation par email à contact@prestiter-spa.fr avec l\'objet "Réclamation". Notre équipe vous répond sous 48h ouvrées. Si le litige persiste, vous pouvez saisir le médiateur compétent.' },
      { q: 'Quels sont les horaires d\'ouverture ?', a: 'Notre équipe est disponible du lundi au vendredi de 9h à 18h (heure italienne, CET). Le formulaire de demande est accessible 24h/24, 7j/7.' },
    ]
  }
]

export default faq
