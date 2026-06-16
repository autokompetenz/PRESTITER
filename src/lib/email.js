export async function sendEmails({ adminData, clientData, type }) {
  const res = await fetch('/api/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, adminData, clientData }),
  })
  if (!res.ok) throw new Error("Erreur d'envoi")
}
