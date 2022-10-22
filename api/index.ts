import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ResponseBody } from '../src/models';
import { subscriptionStatus } from '../src/cards/subscriptionStatus';
import { usefulLinks } from '../src/cards/usefulLinks';
import { timer } from '../src/cards/timer';

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log(`Received request:`);
  console.log({
    body: req.body,
    headers: req.headers,
  });

  const response: ResponseBody = {
    cards: [subscriptionStatus, usefulLinks, timer],
  };

  res.status(200).json(response);
}
