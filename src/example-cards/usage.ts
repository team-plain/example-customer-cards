import { DateTime } from 'luxon';
import { Card } from '../response';

export default (): Card => {
  return {
    key: 'usage',
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
                      text: 'Events sent',
                    },
                  },
                  {
                    componentText: {
                      textSize: 'S',
                      textColor: 'MUTED',
                      text: `This billing period`,
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentBadge: {
                      badgeLabel: '593 of 1000',
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
              componentRow: {
                rowMainContent: [
                  {
                    componentText: {
                      textSize: 'M',
                      textColor: 'MUTED',
                      text: 'Last 24 hours',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentText: {
                      textSize: 'M',
                      textColor: 'NORMAL',
                      text: '**46**',
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
                      textColor: 'MUTED',
                      text: 'Last 7 days',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentText: {
                      textSize: 'M',
                      textColor: 'NORMAL',
                      text: '**297**',
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
              componentLinkButton: {
                linkButtonLabel: 'View usage report',
                linkButtonUrl: 'https://plain.com',
              },
            },
          ],
        },
      },
    ],
  };
};
