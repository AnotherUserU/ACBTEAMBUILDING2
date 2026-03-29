export default function handler(req, res) {
  // Hanya izinkan POST
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }
 
  const { password } = req.body;
 
  // Password dibandingkan dengan Environment Variable di Vercel
  // Set di: Vercel Dashboard → Project → Settings → Environment Variables
  // Key: EDIT_PASSWORD  |  Value: passwordmu
  if (!process.env.EDIT_PASSWORD) {
    return res.status(500).json({ ok: false, message: 'Server belum dikonfigurasi.' });
  }
 
  if (password === process.env.EDIT_PASSWORD) {
    return res.status(200).json({ ok: true });
  } else {
    return res.status(401).json({ ok: false, message: 'Password salah.' });
  }
}
 