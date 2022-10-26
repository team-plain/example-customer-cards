import { DateTime } from 'luxon';
import { Card } from '../response';

export default (): Card => {
  return {
    key: 'plan-details',
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
                      textColor: 'MUTED',
                      text: 'Plan',
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
                      textSize: 'M',
                      textColor: 'MUTED',
                      text: 'Expires',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentText: {
                      textSize: 'M',
                      textColor: 'NORMAL',
                      text: `${DateTime.now().plus({ days: 5 }).toFormat('dd LLL yyyy')}`,
                    },
                  },
                ],
              },
            },
            {
              componentDivider: {
                dividerSpacingSize: 'L',
              },
            },
            {
              componentRow: {
                rowMainContent: [
                  {
                    componentText: {
                      textSize: 'M',
                      textColor: 'MUTED',
                      text: 'ID: #84HBFU4SAF',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentCopyButton: {
                      copyButtonTooltipLabel: 'Copy the ID',
                      copyButtonValue: '#84HBFU4SAF',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  };
};
