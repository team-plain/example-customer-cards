import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ResponseBody } from '../src/models';
import { subscriptionStatus } from '../src/cards/subscriptionStatus';
import { usefulLinks } from '../src/cards/usefulLinks';

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log(`Received request:`);
  console.log({
    body: req.body,
    headers: req.headers,
  });

  const response: ResponseBody = {
    cards: [subscriptionStatus, usefulLinks],
  };

  res.status(200).json(response);
}
