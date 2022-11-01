import { Card } from '../response';

export default (): Card => {
  return {
    key: 'subscription-status',
    timeToLiveSeconds: null,
    components: [
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: 'Plan',
                textColor: 'MUTED',
                textSize: 'M',
              },
            },
          ],
          rowAsideContent: [
            {
              componentBadge: {
                badgeLabel: 'Starter',
                badgeColor: 'YELLOW',
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
              componentText: {
                text: 'Expires',
                textColor: 'MUTED',
                textSize: 'M',
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: '07 Jan, 2023',
                textColor: 'MUTED',
                textSize: 'M',
              },
            },
          ],
        },
      },
    ],
  };
};
