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
        html: [
          '<!DOCTYPE html>',
          '<html>',
          '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>',
          '<body style="margin:0;padding:0;background-color:#f4f6f9">',
          '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9">',
          '<tr><td align="center" style="padding:40px 16px">',
          '<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06)">',
          '<tr><td style="background:linear-gradient(135deg,#1A1A2E,#16213E);padding:32px 40px;text-align:center">',
          `<img src="https://prestiter-spa.fr/assets/images/logo/actual-size/prestiter-logo.png" alt="Prestiter" style="height:36px;margin-bottom:8px" onerror="this.style.display='none'">`,
          '<p style="margin:4px 0 0;font-size:13px;color:#8A8A9A;letter-spacing:1px;text-transform:uppercase">Conferma richiesta</p>',
          '</td></tr>',
          '<tr><td style="padding:40px 40px 32px">',
          `<h1 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#1A1A2E">Ciao ${clientData.to_name},</h1>`,
          `<p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#4A4A5A">${clientData.message}</p>`,
          clientData.dossier ? `<div style="background:#f8f9fc;border-radius:8px;padding:16px 20px;margin-bottom:20px"><span style="font-size:13px;color:#8A8A9A">Numero pratica</span><br><span style="font-size:18px;font-weight:700;color:#1A1A2E;letter-spacing:1px">${clientData.dossier}</span></div>` : '',
          '<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%">',
          '<tr><td style="padding:20px 0;border-top:1px solid #e8eaed">',
          '<table role="presentation" cellpadding="0" cellspacing="0" width="100%">',
          '<tr>',
          '<td style="width:50%;padding:4px 12px 4px 0;vertical-align:top">',
          '<p style="margin:0;font-size:11px;color:#8A8A9A;text-transform:uppercase;letter-spacing:0.5px">Servizio clienti</p>',
          '<p style="margin:2px 0 0;font-size:13px;color:#1A1A2E"><a href="mailto:contact@prestiter-spa.fr" style="color:#0056B3;text-decoration:none">contact@prestiter-spa.fr</a></p>',
          '<p style="margin:0;font-size:13px;color:#1A1A2E">+39 02 1234 5678</p>',
          '</td>',
          '<td style="width:50%;padding:4px 0 4px 12px;vertical-align:top">',
          '<p style="margin:0;font-size:11px;color:#8A8A9A;text-transform:uppercase;letter-spacing:0.5px">Web</p>',
          '<p style="margin:2px 0 0;font-size:13px;color:#1A1A2E"><a href="https://prestiter-spa.fr" style="color:#0056B3;text-decoration:none">prestiter-spa.fr</a></p>',
          '</td>',
          '</tr>',
          '</table>',
          '</td></tr>',
          '</table>',
          '</td></tr>',
          '<tr><td style="background:#f8f9fc;padding:20px 40px;text-align:center;border-top:1px solid #e8eaed">',
          '<p style="margin:0;font-size:12px;color:#8A8A9A;line-height:1.6">Prestiter SPA — Via della Spiga, 24, 20121 Milano, Italia<br>Registrata presso ORIAS come Intermediario nel Finanziamento Partecipativo (IFP)</p>',
          '</td></tr>',
          '</table>',
          '<p style="margin:12px 0 0;font-size:11px;color:#8A8A9A;text-align:center">Questa è un\'email automatica, ti preghiamo di non rispondere direttamente.</p>',
          '</td></tr>',
          '</table>',
          '</body>',
          '</html>',
        ].join(''),
      }),
    ]);

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Invio fallito" });
  }
});

module.exports = app;
