import { Card } from '../response';

function genRequestId() {
  return (
    Math.random().toString(36).substring(2, 15) + '-' + Math.random().toString(36).substring(2, 15)
  );
}

export default (): Card => {
  const requestId = genRequestId();
  return {
    key: 'sentry',
    timeToLiveSeconds: null,
    components: [
      {
        componentContainer: {
          containerContent: [
            {
              componentSpacer: {
                spacerSize: 'XS',
              },
            },
            {
              componentRow: {
                rowMainContent: [
                  {
                    componentBadge: {
                      badgeLabel: 'ERROR',
                      badgeColor: 'RED',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentText: {
                      text: 'prod-email-sender',
                      textColor: 'MUTED',
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
                text: '**Sentry ID**',
                textSize: 'S',
                textColor: 'MUTED',
              },
            },
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
                      text: 'BACKEND-PROD-5N3',
                      textSize: 'S',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentCopyButton: {
                      copyButtonTooltipLabel: 'Copy Sentry id',
                      copyButtonValue: 'BACKEND-PROD-5N3',
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
                text: '**Message**',
                textSize: 'S',
                textColor: 'MUTED',
              },
            },
            {
              componentSpacer: {
                spacerSize: 'XS',
              },
            },
            {
              componentText: {
                text: 'There has been an error sending user email uem_01GFNH9MEQWA5P2JJB8GSYW96D. Error code: ERR_TIMEOUT',
                textSize: 'S',
              },
            },
            {
              componentSpacer: {
                spacerSize: 'M',
              },
            },
            {
              componentText: {
                text: '**Request ID**',
                textSize: 'S',
                textColor: 'MUTED',
              },
            },
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
                      text: requestId,
                      textSize: 'S',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentCopyButton: {
                      copyButtonTooltipLabel: 'Copy request id',
                      copyButtonValue: requestId,
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
                      text: 'Unhandled',
                      textColor: 'ERROR',
                      textSize: 'S',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentText: {
                      text: 'Environment: **production**',
                      textColor: 'MUTED',
                      textSize: 'S',
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
                      linkButtonLabel: 'View Sentry',
                      linkButtonUrl: 'https://plain.com',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentLinkButton: {
                      linkButtonLabel: 'View Logs',
                      linkButtonUrl: 'https://plain.com',
                    },
                  },
                ],
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
        componentContainer: {
          containerContent: [
            {
              componentSpacer: {
                spacerSize: 'XS',
              },
            },
            {
              componentRow: {
                rowMainContent: [
                  {
                    componentBadge: {
                      badgeLabel: 'WARN',
                      badgeColor: 'YELLOW',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentText: {
                      text: 'prod-background-job',
                      textColor: 'MUTED',
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
                text: '**Sentry ID**',
                textSize: 'S',
                textColor: 'MUTED',
              },
            },
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
                      text: 'BACKEND-PROD-4J2',
                      textSize: 'S',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentCopyButton: {
                      copyButtonTooltipLabel: 'Copy Sentry id',
                      copyButtonValue: 'BACKEND-PROD-4J2',
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
                text: '**Message**',
                textSize: 'S',
                textColor: 'MUTED',
              },
            },
            {
              componentSpacer: {
                spacerSize: 'XS',
              },
            },
            {
              componentText: {
                text: `[THROTTLE] Request rate exceeded. Backing off and retrying in ${Math.floor(
                  Math.random() * 999 + 1
                )}ms.`,
                textSize: 'S',
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
                      text: 'Warning',
                      textColor: 'WARNING',
                      textSize: 'S',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentText: {
                      text: 'Environment: **production**',
                      textColor: 'MUTED',
                      textSize: 'S',
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
                      linkButtonLabel: 'View Sentry',
                      linkButtonUrl: 'https://plain.com',
                    },
                  },
                ],
                rowAsideContent: [
                  {
                    componentLinkButton: {
                      linkButtonLabel: 'View Logs',
                      linkButtonUrl: 'https://plain.com',
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
