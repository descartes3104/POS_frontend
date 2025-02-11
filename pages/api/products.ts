import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

  const { code } = req.query;

  try {
    const response = await fetch(`http://localhost:8000/products/${code}`);

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch product' });
    }

    const product = await response.json();

    if (!product) return res.status(404).json({ error: 'Product not found' });

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
