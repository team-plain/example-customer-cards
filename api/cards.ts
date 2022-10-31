import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cardExamples } from '../src/example-cards';

/**
 * Endpoint: /cards
 *
 * This returns all cards. This is useful if you want to just
 * try a bunch of cards quickly in Plain and use the same URL.
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Disabled vercel's edge cache
  res.setHeader('Cache-Control', 'no-cache');

  res.status(200).json({
    cards: cardExamples.map((cardFn) => cardFn()),
  });
}
