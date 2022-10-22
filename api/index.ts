import type { VercelRequest, VercelResponse } from '@vercel/node';
import { subscriptionStatus } from '../src/cards/subscriptionStatus';

const demoCards = [subscriptionStatus];

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log(`Request received:`);
  console.log({
    body: req.body,
    headers: req.headers,
  });

  res.status(200).json({
    cards: demoCards,
  });
}
