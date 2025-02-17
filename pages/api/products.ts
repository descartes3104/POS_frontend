import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

  const { code } = req.query;
  if (Array.isArray(code)) {
    return res.status(400).json({ error: 'Invalid product code' });
  }
  try {
    const response = await fetch(`http://localhost:8000/api/products/${code}`);

    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText || 'Failed to fetch product' });
    }

    const product = await response.json();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}