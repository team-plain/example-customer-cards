import { DateTime } from 'luxon';
import { Card } from '../response';

export default (): Card => {
  return {
    key: 'latest-invoice',
    timeToLiveSeconds: null,
    components: [
      {
        componentSpacer: {
          spacerSize: 'XS',
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                textSize: 'M',
                textColor: 'NORMAL',
                text: 'Invoice #251-82',
              },
            },
            {
              componentText: {
                textSize: 'S',
                textColor: 'MUTED',
                text: `Due date: ${DateTime.utc()
                  .minus({ days: 1 })
                  .toLocaleString(DateTime.DATE_MED)}`,
              },
            },
          ],
          rowAsideContent: [
            {
              componentBadge: {
                badgeLabel: 'Past due',
                badgeColor: 'RED',
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: 'M',
        },
      },
      {
        componentText: {
          textSize: 'S',
          textColor: 'MUTED',
          text: 'Billing period',
        },
      },
      {
        componentText: {
          textSize: 'M',
          textColor: 'NORMAL',
          text: `${DateTime.utc()
            .minus({ month: 1 })
            .startOf('month')
            .toLocaleString(DateTime.DATE_MED)} – ${DateTime.utc()
            .minus({ month: 1 })
            .endOf('month')
            .toLocaleString(DateTime.DATE_MED)}`,
        },
      },
      {
        componentSpacer: {
          spacerSize: 'M',
        },
      },
      {
        componentText: {
          textSize: 'M',
          text: 'Invoice items',
          textColor: 'MUTED',
        },
      },
      {
        componentSpacer: {
          spacerSize: 'S',
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                textSize: 'M',
                textColor: 'NORMAL',
                text: '14 x Pro Licenses @ $20',
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                textSize: 'M',
                text: '$280.00',
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: 'S',
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                textSize: 'M',
                textColor: 'NORMAL',
                text: '68 x Extra Credits @ $5.25',
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                textSize: 'M',
                text: '$357.00',
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: 'S',
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                textSize: 'M',
                textColor: 'NORMAL',
                text: '**Total**',
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                textSize: 'M',
                text: '**$637.00**',
              },
            },
          ],
        },
      },

      {
        componentSpacer: {
          spacerSize: 'M',
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentLinkButton: {
                linkButtonLabel: 'View in Stripe',
                linkButtonUrl: 'https://plain.com',
              },
            },
          ],
          rowAsideContent: [
            {
              componentCopyButton: {
                copyButtonTooltipLabel: 'Copy invoice number',
                copyButtonValue: '#251-82',
              },
            },
          ],
        },
      },
    ],
  };
};
