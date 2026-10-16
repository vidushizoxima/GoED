// Records an AI Calling request in the "AI Calling" Excel sheet (Mobile Number | Date).
// Fire-and-forget: a sheet failure is logged and never blocks the outbound call.
export function recordAiCallingLead(phoneNumber) {
  const url = import.meta.env.VITE_AICALLING_SHEET_API || import.meta.env.VITE_CONTACT_SHEET_API;
  if (!url) return;

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sheet: 'aicalling',
      number: `+91${phoneNumber}`,
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
    })
    .catch((err) => console.error('AI Calling Sheet API Error:', err));
}
