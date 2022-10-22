import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ResponseBody } from '../src/models';
import { subscriptionStatus } from '../src/cards/subscriptionStatus';
import { adminLinks } from '../src/cards/adminLinks';

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log(`Request received:`);
  console.log({
    body: req.body,
    headers: req.headers,
  });

  const response: ResponseBody = {
    cards: [subscriptionStatus, adminLinks],
  };

  res.status(200).json(response);
}
