import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ResponseBody } from '../src/response';
import { Card } from '../src/response';

// Cards:
import subscriptionStatusCard from '../src/cards/subscriptionStatus';
import usefulLinksCard from '../src/cards/usefulLinks';
import timerCard from '../src/cards/timer';

const ALL_CARDS = [subscriptionStatusCard, usefulLinksCard, timerCard];

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log(`Received request:`);
  console.log({
    body: req.body,
    headers: req.headers,
  });

  const cards: Card[] = ALL_CARDS.map((c) => c());

  const response: ResponseBody = {
    cards,
  };
  //Recommended: vercel.com/docs/concepts/functions/serverless-functions/edge-caching#recommended-cache-control
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400');

  res.status(200).json(response);
}
