import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ResponseBody } from '../src/response';
import { Card } from '../src/response';

// Cards:
import subscriptionStatusCard from '../src/cards/subscriptionStatus';
import usefulLinksCard from '../src/cards/usefulLinks';
import timerCard from '../src/cards/timer';

const ALL_CARDS: (() => Card)[] = [subscriptionStatusCard, usefulLinksCard, timerCard];

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

  res.status(200).json(JSON.stringify(response, null, 2));
}
