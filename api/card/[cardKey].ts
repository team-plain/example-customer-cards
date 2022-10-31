import { VercelRequest, VercelResponse } from '@vercel/node';
import { cardExamples } from '../../src/example-cards';

/**
 * Endpoint: /card/:cardKey:/
 *
 * This returns a single card with the provided cardKey. This is
 * a simple example API to demo and try customer cards.
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Disabled vercel's edge cache
  res.setHeader('Cache-Control', 'no-cache');

  const { cardKey } = req.query;

  if (typeof cardKey !== 'string') {
    res.status(403).json({
      error: 'invalid card key',
    });
  }

  res.status(200).json({
    cards: cardExamples
      .filter((cardFn) => {
        const card = cardFn();
        return card.key === cardKey;
      })
      .map((cardFn) => cardFn()),
  });
}
