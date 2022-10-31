import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cardExamples } from '../src/example-cards';

/**
 * Example:
 * - /cards -> will return all cards
 * - /cards?cardKey=timer -> will return 1 card
 * - /cards?cardKey=timer&cardKey=last-order -> will return 2 cards
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Disabled vercel's edge cache
  res.setHeader('Cache-Control', 'no-cache');

  const cardKeyQueryParam = req.query.cardKey || [];

  const requestedCardKeys =
    typeof cardKeyQueryParam === 'string' ? [cardKeyQueryParam] : cardKeyQueryParam;

  const cards = cardExamples
    .map((cardFn) => cardFn())
    .filter((card) => {
      return requestedCardKeys.length > 0 && requestedCardKeys.includes(card.key);
    });

  res.status(200).json({
    cards,
  });
}
