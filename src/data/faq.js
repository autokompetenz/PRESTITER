const faq = [
  {
    category: 'Richiedente', questions: [
      { q: 'Quanto posso prendere in prestito?', a: 'Gli importi proposti vanno da 100 \u20AC a 3.000.000 \u20AC, rimborsabili in un periodo da 3 a 120 mesi.' },
      { q: 'Quanto tempo ci vuole per ricevere i miei soldi?', a: 'Entro 48 ore dall\'accettazione della tua pratica. Il bonifico viene effettuato direttamente sul tuo conto bancario.' },
      { q: 'Sono idoneo se ho un contratto a tempo determinato / sono freelance / studente?', a: 'S\u00EC, accettiamo tutti i profili: tempo indeterminato, tempo determinato, freelance, libero professionista, interinale, studente, percettore di RSA, pensionato, disoccupato. L\'importante \u00E8 la tua capacit\u00E0 di rimborso.' },
      { q: 'Come avvengono i rimborsi?', a: 'I rimborsi vengono prelevati automaticamente dalla tua carta bancaria ogni mese, a data fissa. Ricevi una notifica via email prima di ogni prelievo.' },
      { q: 'Cosa succede in caso di ritardo nel pagamento?', a: 'In caso di difficolt\u00E0, contattaci immediatamente. Esaminiamo sempre soluzioni personalizzate (rinvio della scadenza, riprogrammazione) prima di qualsiasi procedura. Possono essere applicate penali per ritardi oltre i 15 giorni.' },
      { q: 'Posso rimborsare anticipatamente?', a: 'S\u00EC, puoi rimborsare in qualsiasi momento senza penali. Paghi solo gli interessi maturati fino alla data di rimborso.' },
      { q: 'Devo creare un account per fare una richiesta?', a: 'No, non \u00E8 necessaria alcuna registrazione. Ti basta compilare il modulo di richiesta in pochi minuti.' },
      { q: 'Come faccio a sapere se la mia richiesta \u00E8 stata ricevuta?', a: 'Riceverai un\'email di conferma immediatamente dopo l\'invio del tuo modulo con il numero della tua pratica.' },
      { q: 'Posso modificare la mia richiesta dopo averla inviata?', a: 'Contattaci via email o telefono se devi modificare la tua richiesta. Possiamo adeguare l\'importo o la durata finch\u00E9 la pratica \u00E8 in fase di analisi.' },
      { q: 'Cosa fare se perdo il lavoro durante il rimborso?', a: 'Avvisaci il prima possibile. Esaminiamo soluzioni adeguate: rinvio delle scadenze, riduzione temporanea delle rate mensili o riprogrammazione del debito.' },
      { q: 'Posso prolungare la durata del mio prestito?', a: 'S\u00EC, previa accettazione da parte del nostro team. Il prolungamento pu\u00F2 ridurre le rate mensili ma aumenter\u00E0 il costo totale degli interessi.' },
      { q: 'Come guadagna Prestiter?', a: 'Prestiter riceve una commissione sugli interessi pagati dal richiedente. Il nostro modello \u00E8 trasparente: il TAEG del 4,5% include tutti i costi, senza spese nascoste n\u00E9 spese di pratica.' },
    ]
  },
  {
    category: 'Investitore', questions: [
      { q: 'Quali sono i rischi legati al prestito tra privati?', a: 'Le richieste di prestito sono rigorosamente selezionate dalla piattaforma ma il rischio zero non esiste. Raccomandiamo di diversificare i tuoi investimenti e di non investire una somma che non puoi permetterti di perdere.' },
      { q: 'Qual \u00E8 il rendimento atteso?', a: 'Il rendimento annuo \u00E8 stimato fino al 3%, ma pu\u00F2 variare in base alle pratiche finanziate e agli eventuali inadempimenti.' },
      { q: 'Ci sono spese per l\'investitore?', a: 'Nessuna spesa di gestione, iscrizione o prelievo. Solo eventuali spese bancarie relative ai bonifici possono essere applicate.' },
      { q: 'Come scegliere le pratiche da finanziare?', a: 'Il team di Prestiter preseleziona le pratiche idonee. Come investitore, ricevi le caratteristiche di ogni prestito (importo, durata, profilo) prima di decidere.' },
      { q: 'Quando ricevo i miei rimborsi?', a: 'I rimborsi sono automatici e vengono versati ogni mese sul tuo conto bancario, senza alcuna azione da parte tua.' },
      { q: 'Cosa succede in caso di inadempimento del richiedente?', a: 'In caso di mancato pagamento, il nostro team contatta il richiedente e attua soluzioni amichevoli. Come ultima risorsa, pu\u00F2 essere avviata una procedura di recupero. Il capitale investito non \u00E8 garantito.' },
      { q: 'Come dichiarare i miei redditi da interessi al fisco?', a: 'Gli interessi percepiti sono considerati redditi da capitale mobiliare e soggetti all\'imposta forfettaria unica (PFU) del 30% o alla scala progressiva. Forniamo un riepilogo annuale per facilitare la tua dichiarazione.' },
      { q: 'Posso recuperare i miei soldi prima della fine del prestito?', a: 'La cessione del credito \u00E8 possibile a determinate condizioni. Contatta il nostro team per esaminare le opzioni di uscita anticipata.' },
    ]
  },
  {
    category: 'Generale', questions: [
      { q: 'La piattaforma \u00E8 regolamentata?', a: 'Prestiter SPA \u00E8 registrata presso l\'ORIAS come Intermediario nel Finanziamento Partecipativo (IFP) e soggetta al controllo dell\'ACPR. Il nostro numero di registrazione \u00E8 in fase di attribuzione.' },
      { q: 'I miei dati personali sono protetti?', a: 'S\u00EC, tutti i tuoi dati sono conservati in modo sicuro e crittografato (SSL 256-bit). Non rivendiamo alcuna informazione a terzi. Piena conformit\u00E0 al RGPD.' },
      { q: 'Come contattare il servizio clienti?', a: 'Via email a contatto@prestiteritalia.it. Risposta entro 24 ore lavorative.' },
      { q: 'C\'\u00E8 un\'assicurazione associata al prestito?', a: 'L\'assicurazione non \u00E8 obbligatoria presso Prestiter. Raccomandiamo comunque di stipulare un\'assicurazione contro la perdita del lavoro o l\'invalidit\u00E0 presso il tuo assicuratore abituale.' },
      { q: 'Posso annullare la mia richiesta dopo l\'accettazione?', a: 'S\u00EC, hai diritto a un periodo di recesso di 14 giorni dalla firma del contratto, in conformit\u00E0 con la legislazione vigente.' },
      { q: 'Come presentare un reclamo?', a: 'Invia il tuo reclamo via email a contatto@prestiteritalia.it con oggetto "Reclamo". Il nostro team ti risponde entro 48 ore lavorative. Se la controversia persiste, puoi contattare il mediatore competente.' },
      { q: 'Quali sono gli orari di apertura?', a: 'Il nostro team \u00E8 disponibile dal luned\u00EC al venerd\u00EC dalle 9:00 alle 18:00 (ora italiana, CET). Il modulo di richiesta \u00E8 accessibile 24 ore su 24, 7 giorni su 7.' },
    ]
  }
]

export default faq
