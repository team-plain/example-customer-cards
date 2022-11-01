import { DateTime } from 'luxon';
import { Card } from '../response';

export default (): Card => {
  return {
    key: 'last-order',
    timeToLiveSeconds: null,
    components: [
      {
        componentContainer: {
          containerContent: [
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
                      text: 'Order #123',
                    },
                  },
                  {
                    componentText: {
                      textSize: 'S',
                      textColor: 'MUTED',
                      text: `${DateTime.now().minus({ days: 3 }).toFormat('dd LLL yyyy')}`,
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentBadge: {
                      badgeLabel: 'Delivered',
                      badgeColor: 'GREEN',
                    },
                  },
                ],
              },
            },
            {
              componentDivider: {
                dividerSpacingSize: 'M',
              },
            },
            {
              componentText: {
                textSize: 'S',
                textColor: 'MUTED',
                text: 'Order value',
              },
            },
            {
              componentText: {
                textSize: 'M',
                textColor: 'NORMAL',
                text: '£512.00',
              },
            },
            {
              componentSpacer: {
                spacerSize: 'S',
              },
            },
            {
              componentText: {
                textSize: 'S',
                textColor: 'MUTED',
                text: 'Shipping address',
              },
            },
            {
              componentText: {
                textSize: 'M',
                textColor: 'NORMAL',
                text: '123 Example Street, Fakerton, FA6 4UX, Hertfordshire, UK',
              },
            },
            {
              componentDivider: {
                dividerSpacingSize: 'M',
              },
            },
            {
              componentLinkButton: {
                linkButtonLabel: 'Track order',
                linkButtonUrl: 'https://plain.com',
              },
            },
          ],
        },
      },
    ],
  };
};
