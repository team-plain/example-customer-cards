import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Card } from '../src/response';

// Cards:
import planDetailsCard from '../src/cards/planDetails';
import subscriptionStatusCard from '../src/cards/subscriptionStatus';
import timerCard from '../src/cards/timer';
import lastOrder from '../src/cards/lastOrder';

const ALL_CARDS: (() => Card)[] = [subscriptionStatusCard, timerCard, planDetailsCard, lastOrder];

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Disabled vercel's edge cache
  res.setHeader('Cache-Control', 'no-cache');

  res.status(200).json({
    cards: ALL_CARDS.map((cardFn) => cardFn()),
  });
}
