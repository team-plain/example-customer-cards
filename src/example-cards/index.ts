import planDetailsCard from './planDetails';
import subscriptionStatusCard from './subscriptionStatus';
import timerCard from './timer';
import lastOrder from './lastOrder';
import badge from './badge';
import container from './container';
import copyButton from './copyButton';
import divider from './divider';
import emptyComponents from './emptyComponents';
import linkButton from './linkButton';
import nullComponents from './nullComponents';
import row from './row';
import spacer from './spacer';
import text from './text';
import { Card } from '../response';

export const cardExamples: (() => Card)[] = [
  // realistic examples
  subscriptionStatusCard,
  timerCard,
  planDetailsCard,
  lastOrder,

  // component examples
  badge,
  container,
  copyButton,
  text,
  divider,
  linkButton,
  row,
  spacer,

  // error, null examples
  nullComponents,
  emptyComponents,
];
