import type { VercelRequest, VercelResponse } from '@vercel/node';

// Cards:
import planDetailsCard from '../src/cards/planDetails';
import subscriptionStatusCard from '../src/cards/subscriptionStatus';
import timerCard from '../src/cards/timer';
import { Card, ResponseBody } from '../src/response';
import lastOrder from '../src/cards/lastOrder';

const ALL_CARDS: (() => Card)[] = [subscriptionStatusCard, timerCard, planDetailsCard, lastOrder];

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log(`Received request:`);
  console.log({
    body: req.body,
    headers: req.headers,
  });

  const response: ResponseBody = {
    cards: ALL_CARDS.map((cardFn) => cardFn()),
  };

  // Disabled vercel's edge cache
  res.setHeader('Cache-Control', 'no-cache');

  res.status(200).json(response);
}
