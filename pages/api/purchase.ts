import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const purchaseData = req.body;

  const response = await fetch(`http://localhost:8000/purchase`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(purchaseData),
  });

  const result = await response.json();
  return res.status(response.ok ? 200 : 400).json(result);
}
