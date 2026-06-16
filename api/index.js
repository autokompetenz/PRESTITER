const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: (process.env.SMTP_PORT || '465') === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const FROM = process.env.SMTP_FROM || process.env.SMTP_USER;
const TO = process.env.NOTIFY_EMAIL || process.env.SMTP_USER;

function buildHtml(fields) {
  const rows = Object.entries(fields).map(([k, v]) =>
    `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#555;white-space:nowrap">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${v}</td></tr>`
  ).join('');
  return `<table style="width:100%;max-width:560px;font-family:sans-serif;border-collapse:collapse">${rows}</table>`;
}

app.post('/api/send', async (req, res) => {
  const { type, adminData, clientData } = req.body;

  try {
    await Promise.all([
      transporter.sendMail({
        from: `"Prestiter" <${FROM}>`,
        to: TO,
        subject: `[Prestiter] Nuova ${type} — ${adminData.prenom || ''} ${adminData.nom || ''}`.trim(),
        html: buildHtml(adminData),
      }),
      transporter.sendMail({
        from: `"Prestiter" <${FROM}>`,
        to: clientData.to_email,
        subject: `Conferma della tua ${type} — Prestiter`,
        html: (function() {
          const dossierHtml = clientData.dossier
            ? '<tr><td style="padding:0 0 16px"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f8f9fc;border-radius:10px"><tr><td style="padding:18px 24px"><table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td style="width:50%;vertical-align:middle"><p style="margin:0;font-size:11px;color:#8A8A9A;text-transform:uppercase;letter-spacing:0.5px">Numero pratica</p><p style="margin:2px 0 0;font-size:20px;font-weight:800;color:#1A1A2E;letter-spacing:1px">' + clientData.dossier + '</p></td><td style="width:50%;text-align:right;vertical-align:middle"><span style="display:inline-block;padding:6px 14px;border-radius:20px;font-size:11px;font-weight:700;color:#0056B3;background:rgba(0,86,179,0.08);text-transform:uppercase;letter-spacing:0.5px">In fase di analisi</span></td></tr></table></td></tr></table></td></tr>'
            : '';
          return [
            '<!DOCTYPE html>',
            '<html>',
            '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>',
            '<body style="margin:0;padding:0;background-color:#f0f2f5">',
            '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f2f5">',
            '<tr><td align="center" style="padding:40px 16px">',
            '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">',
            '<tr><td style="background:linear-gradient(135deg,#0f0f1a,#1a1a3e);padding:36px 40px 28px;text-align:center">',
            '<table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td style="text-align:center">',
            '<div style="display:inline-block;width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.1);margin-bottom:12px;line-height:56px;font-size:24px">✓</div>',
            '<h1 style="margin:0 0 4px;font-size:24px;font-weight:800;color:#ffffff;letter-spacing:-0.3px">Richiesta ricevuta!</h1>',
            '<p style="margin:0;font-size:15px;color:rgba(255,255,255,0.6);font-weight:400">Grazie per aver scelto Prestiter</p>',
            '</td></tr></table>',
            '</td></tr>',
            '<tr><td style="padding:36px 40px 0">',
            '<table role="presentation" cellpadding="0" cellspacing="0" width="100%">',
            '<tr><td>',
            '<table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td style="padding-bottom:20px;border-bottom:2px solid #f0f2f5">',
            '<table role="presentation" cellpadding="0" cellspacing="0"><tr>',
            '<td style="width:44px;height:44px;border-radius:12px;background:#eef3fc;text-align:center;vertical-align:middle;font-size:20px;line-height:44px">👋</td>',
            '<td style="padding-left:14px;vertical-align:middle"><p style="margin:0;font-size:16px;font-weight:700;color:#1A1A2E">Ciao ' + clientData.to_name + ',</p><p style="margin:2px 0 0;font-size:14px;color:#6B6B80">la tua richiesta è stata registrata con successo.</p></td>',
            '</tr></table>',
            '</td></tr></table>',
            '<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:20px">',
            '<tr><td style="padding-bottom:16px"><p style="margin:0;font-size:15px;line-height:1.7;color:#4A4A5A">' + clientData.message + '</p></td></tr>',
            dossierHtml,
            clientData.montant && clientData.duree
              ? '<tr><td style="padding:0 0 16px"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #e8eaed;border-radius:10px"><tr><td style="padding:4px 20px"><table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td style="padding:12px 0;border-bottom:1px solid #f0f2f5"><table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td style="font-size:13px;color:#8A8A9A">Importo richiesto</td><td style="text-align:right;font-size:15px;font-weight:700;color:#1A1A2E">' + clientData.montant + '</td></tr></table></td></tr><tr><td style="padding:12px 0;border-bottom:1px solid #f0f2f5"><table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td style="font-size:13px;color:#8A8A9A">Durata</td><td style="text-align:right;font-size:15px;font-weight:700;color:#1A1A2E">' + clientData.duree + '</td></tr></table></td></tr><tr><td style="padding:12px 0"><table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td style="font-size:13px;color:#8A8A9A">TAEG fisso</td><td style="text-align:right;font-size:15px;font-weight:700;color:#1A1A2E">4,5%</td></tr></table></td></tr></table></td></tr></table></td></tr>'
              : '',
            '<tr><td style="padding:8px 0 0"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f8f9fc;border-radius:10px"><tr><td style="padding:20px 24px">',
            '<p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#1A1A2E">Prossimi passi</p>',
            '<table role="presentation" cellpadding="0" cellspacing="0" width="100%">',
            '<tr><td style="padding:4px 0;vertical-align:top;width:24px"><span style="display:inline-block;width:20px;height:20px;border-radius:50%;background:#0056B3;color:#fff;font-size:11px;font-weight:700;text-align:center;line-height:20px">1</span></td><td style="padding:4px 0 4px 10px;font-size:13px;color:#4A4A5A;line-height:1.5">Il nostro team analizzerà la tua richiesta</td></tr>',
            '<tr><td style="padding:4px 0;vertical-align:top;width:24px"><span style="display:inline-block;width:20px;height:20px;border-radius:50%;background:#0056B3;color:#fff;font-size:11px;font-weight:700;text-align:center;line-height:20px">2</span></td><td style="padding:4px 0 4px 10px;font-size:13px;color:#4A4A5A;line-height:1.5">Riceverai una risposta entro 24 ore lavorative</td></tr>',
            '<tr><td style="padding:4px 0;vertical-align:top;width:24px"><span style="display:inline-block;width:20px;height:20px;border-radius:50%;background:#0056B3;color:#fff;font-size:11px;font-weight:700;text-align:center;line-height:20px">3</span></td><td style="padding:4px 0 4px 10px;font-size:13px;color:#4A4A5A;line-height:1.5">Se approvata, riceverai i fondi in 48 ore</td></tr>',
            '</table>',
            '</td></tr></table></td></tr>',
            clientData.type_demande === 'prestito'
              ? '<tr><td style="padding:16px 0 0"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:rgba(0,86,179,0.04);border:1px solid rgba(0,86,179,0.12);border-radius:10px"><tr><td style="padding:16px 20px"><table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td style="width:32px;vertical-align:top;font-size:18px;line-height:1.4">📌</td><td style="padding-left:10px;font-size:13px;color:#4A4A5A;line-height:1.5">Tieni a portata di mano il tuo documento d\'identità e il codice IBAN. Potrebbero servirti per i prossimi passaggi.</td></tr></table></td></tr></table></td></tr>'
              : '',
            '</table>',
            '</td></tr>',
            '</table>',
            '</td></tr>',
            '<tr><td style="padding:32px 40px 0"><table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td style="border-top:1px solid #e8eaed;padding:24px 0 0"><table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr>',
            '<td style="width:50%;padding-right:12px;vertical-align:top">',
            '<p style="margin:0 0 6px;font-size:11px;color:#8A8A9A;text-transform:uppercase;letter-spacing:0.5px;font-weight:600">Contatto</p>',
            '<p style="margin:0;font-size:13px;color:#1A1A2E"><a href="mailto:contatto@prestiteritalia.it" style="color:#0056B3;text-decoration:none">contatto@prestiteritalia.it</a></p>',
            '<p style="margin:2px 0 0;font-size:13px;color:#1A1A2E">Risposta entro 24h</p>',
            '</td>',
            '<td style="width:50%;padding-left:12px;vertical-align:top">',
            '<p style="margin:0 0 6px;font-size:11px;color:#8A8A9A;text-transform:uppercase;letter-spacing:0.5px;font-weight:600">Sede legale</p>',
            '<p style="margin:0;font-size:13px;color:#1A1A2E;line-height:1.5">Via della Spiga, 24<br>20121 Milano, Italia</p>',
            '</td>',
            '</tr></table></td></tr></table></td></tr>',
            '<tr><td style="padding:24px 40px 32px"><table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td style="background:#f8f9fc;border-radius:10px;padding:16px 20px;text-align:center">',
            '<p style="margin:0;font-size:12px;color:#8A8A9A;line-height:1.6">Prestiter SPA — Registrata ORIAS (IFP)<br>Questa è un\'email automatica, ti preghiamo di non rispondere.</p><p style="margin:8px 0 0;font-size:11px;color:#B0B0C0;line-height:1.5">Un credito ti impegna e deve essere rimborsato. Verifica la tua capacità di rimborso prima di impegnarti. TAEG fisso 4,5%. Nessuna spesa di istruttoria. Nessuna penale per rimborso anticipato.</p>',
            '</td></tr></table></td></tr>',
            '</table>',
            '<table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td style="padding:16px 0 0;text-align:center">',
            '<p style="margin:0;font-size:11px;color:#B0B0C0"><a href="https://prestiter-spa.fr" style="color:#8A8A9A;text-decoration:none">prestiter-spa.fr</a> &nbsp;·&nbsp; <a href="https://prestiter-spa.fr/cgu" style="color:#8A8A9A;text-decoration:none">Termini e condizioni</a></p>',
            '</td></tr></table>',
            '</td></tr>',
            '</table>',
            '</body>',
            '</html>',
          ].join('');
        })(),
      }),
    ]);

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Invio fallito" });
  }
});

module.exports = app;
