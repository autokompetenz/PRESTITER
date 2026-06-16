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
        subject: `[Prestiter] Nouvelle ${type} — ${adminData.prenom || ''} ${adminData.nom || ''}`.trim(),
        html: buildHtml(adminData),
      }),
      transporter.sendMail({
        from: `"Prestiter" <${FROM}>`,
        to: clientData.to_email,
        subject: `Confirmation de votre ${type} — Prestiter`,
        html: `
          <div style="max-width:560px;font-family:sans-serif;color:#1A1A2E">
            <h1 style="font-size:22px;font-weight:900;margin:0 0 8px">Bonjour ${clientData.to_name} &#128075;</h1>
            <p style="font-size:15px;line-height:1.6;margin:0 0 16px">${clientData.message}</p>
            <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
            <p style="font-size:13px;color:#8A8A9A;margin:0">L'équipe Prestiter — <a href="https://prestiter-spa.fr" style="color:#0056B3">prestiter-spa.fr</a></p>
          </div>
        `,
      }),
    ]);

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Échec de l'envoi" });
  }
});

module.exports = app;
