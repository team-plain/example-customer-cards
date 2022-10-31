import { Card } from '../response';

export default (): Card => {
  return {
    key: 'row-example',
    timeToLiveSeconds: null,
    components: [
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: 'Membership',
              },
            },
          ],
          rowAsideContent: [
            {
              componentBadge: {
                badgeLabel: 'Premium plan',
                badgeColor: 'BLUE',
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
                text: 'Plan start date',
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: '2022-10-03 14:12 BST',
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
        componentText: {
          text: 'Address',
          textColor: 'MUTED',
          textSize: 'S',
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: '123 Example Street, Fakerton, FA6 4UX',
              },
            },
          ],
          rowAsideContent: [
            {
              componentCopyButton: {
                copyButtonTooltipLabel: 'Copy address',
                copyButtonValue: '123 Example Street, Fakerton, FA6 4UX',
              },
            },
          ],
        },
      },
    ],
  };
};
