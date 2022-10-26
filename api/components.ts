import { Card } from '../src/response';
import badge from '../src/cards/examples/badge';
import container from '../src/cards/examples/container';
import copyButton from '../src/cards/examples/copyButton';
import text from '../src/cards/examples/text';
import divider from '../src/cards/examples/divider';
import linkButton from '../src/cards/examples/linkButton';
import row from '../src/cards/examples/row';
import spacer from '../src/cards/examples/spacer';
import { VercelRequest, VercelResponse } from '@vercel/node';

const COMPONENT_EXAMPLE_CARDS: (() => Card)[] = [
  badge,
  container,
  copyButton,
  text,
  divider,
  linkButton,
  row,
  spacer
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Disabled vercel's edge cache
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).json({
    cards: COMPONENT_EXAMPLE_CARDS.map((cardFn) => cardFn()),
  });
}