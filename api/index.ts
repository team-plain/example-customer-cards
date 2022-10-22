import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Card, RequestBody, ResponseBody } from '../src/models';
import { typeguards } from '../src/typeguards';
import { subscriptionStatus } from '../src/cards/subscriptionStatus';

const demoCards = [subscriptionStatus];

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log(`Request received:`);
  console.log({
    body: req.body,
    headers: req.headers,
  });

  const body = RequestBody.safeParse(req.body);

  if (!body.success) {
    res.status(500).json({ message: 'Unexpected request body' });
    return;
  }

  const requestedKeys = body.data.keys;

  const cards: Card[] = requestedKeys
    .map((key) => demoCards.find((demoCard) => demoCard.key === key))
    .filter(typeguards.isNotUndefined);

  const response: ResponseBody = {
    cards,
  };

  res.status(200).json(response);
}
