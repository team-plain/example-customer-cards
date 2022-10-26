import { Card } from '../src/response';
import badge from '../src/cards/components/badge';
import container from '../src/cards/components/container';
import copyButton from '../src/cards/components/copyButton';
import text from '../src/cards/components/text';
import divider from '../src/cards/components/divider';
import linkButton from '../src/cards/components/linkButton';
import row from '../src/cards/components/row';
import spacer from '../src/cards/components/spacer';
import { VercelRequest, VercelResponse } from '@vercel/node';

const COMPONENT_EXAMPLE_CARDS: (() => Card)[] = [
  badge,
  container,
  copyButton,
  text,
  divider,
  linkButton,
  row,
  spacer,
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Disabled vercel's edge cache
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).json({
    cards: COMPONENT_EXAMPLE_CARDS.map((cardFn) => cardFn()),
  });
}
