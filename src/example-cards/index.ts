import subscriptionStatusCard from './subscriptionStatus';
import timerCard from './timer';
import lastOrder from './lastOrder';
import emptyComponents from './emptyComponents';
import nullComponents from './nullComponents';
import { Card } from '../response';
import componentLibrary from './componentLibrary';
import customerDetails from './customerDetails';
import usage from './usage';
import latestInvoice from './latestInvoice';
import sentry from './sentry';
import tutorial from './tutorial';

export const cardExamples: (() => Card)[] = [
  // realistic examples
  customerDetails,
  subscriptionStatusCard,
  lastOrder,
  usage,
  latestInvoice,
  sentry,
  timerCard,
  tutorial,

  // component examples
  componentLibrary,

  // error, null examples
  nullComponents,
  emptyComponents,
];
