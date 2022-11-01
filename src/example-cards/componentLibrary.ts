import { Card } from '../response';

type NonNullComponent = Exclude<Card['components'], null>;
function component(
  name: string,
  components: NonNullComponent,
  first: boolean = false
): NonNullComponent {
  return [
    ...(!first
      ? [
          {
            componentSpacer: {
              spacerSize: 'XL' as const,
            },
          },
        ]
      : []),
    {
      componentText: {
        text: `**Component ${name} example:**`,
        textSize: 'M',
      },
    },
    {
      componentDivider: {
        dividerSpacingSize: 'S',
      },
    },
    ...components,
  ];
}

const COMPONENTS: Record<string, NonNullComponent> = {
  badge: [
    {
      componentBadge: {
        badgeLabel: 'Subscribed',
        badgeColor: 'GREEN',
      },
    },
  ],
  container: [
    {
      componentContainer: {
        containerContent: [
          {
            componentText: {
              text: 'Container content',
            },
          },
        ],
      },
    },
  ],
  'copy button': [
    {
      componentCopyButton: {
        copyButtonTooltipLabel: 'Order ID',
        copyButtonValue: '2a8f2dae-3580-402b-aa0a-243efae55e39',
      },
    },
  ],

  divider: [
    {
      componentText: {
        text: 'Content before an XS divider',
      },
    },
    {
      componentDivider: {
        dividerSpacingSize: 'XS',
      },
    },
    {
      componentText: {
        text: 'Content before an S divider',
      },
    },
    {
      componentDivider: {
        dividerSpacingSize: 'S',
      },
    },
    {
      componentText: {
        text: 'Content before an M divider',
      },
    },
    {
      componentDivider: {
        dividerSpacingSize: 'M',
      },
    },
    {
      componentText: {
        text: 'Content before an L divider',
      },
    },
    {
      componentDivider: {
        dividerSpacingSize: 'L',
      },
    },
    {
      componentText: {
        text: 'Content before an XL divider',
      },
    },
    {
      componentDivider: {
        dividerSpacingSize: 'XL',
      },
    },
    {
      componentText: {
        text: 'Content after an XL divider',
      },
    },
  ],
  'link button': [
    {
      componentLinkButton: {
        linkButtonLabel: 'Open in Admin Portal',
        linkButtonUrl: 'https://example.com',
      },
    },
  ],
  row: [
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
  spacer: [
    {
      componentText: {
        text: 'Content before an XS spacer',
      },
    },
    {
      componentSpacer: {
        spacerSize: 'XS',
      },
    },
    {
      componentText: {
        text: 'Content before an S spacer',
      },
    },
    {
      componentSpacer: {
        spacerSize: 'S',
      },
    },
    {
      componentText: {
        text: 'Content before an M spacer',
      },
    },
    {
      componentSpacer: {
        spacerSize: 'M',
      },
    },
    {
      componentText: {
        text: 'Content before an L spacer',
      },
    },
    {
      componentSpacer: {
        spacerSize: 'L',
      },
    },
    {
      componentText: {
        text: 'Content before an XL spacer',
      },
    },
    {
      componentSpacer: {
        spacerSize: 'XL',
      },
    },
    {
      componentText: {
        text: 'Content after an XL spacer',
      },
    },
  ],
  text: [
    {
      componentText: {
        text: 'Small text',
        textSize: 'S',
      },
    },
    {
      componentText: {
        text: 'Medium text',
        textSize: 'M',
      },
    },
    {
      componentText: {
        text: 'Large text',
        textSize: 'L',
      },
    },
    {
      componentText: {
        text: 'Normal text',
        textColor: 'NORMAL',
      },
    },
    {
      componentText: {
        text: 'Muted text',
        textColor: 'MUTED',
      },
    },
    {
      componentText: {
        text: 'Success text',
        textColor: 'SUCCESS',
      },
    },

    {
      componentText: {
        text: 'Warning text',
        textColor: 'WARNING',
      },
    },

    {
      componentText: {
        text: 'Error text',
        textColor: 'ERROR',
      },
    },
  ],
};

export default (): Card => {
  return {
    key: 'component-library',
    timeToLiveSeconds: null,
    components: Object.entries(COMPONENTS).flatMap(([key, value], idx) =>
      component(key, value, idx === 0)
    ),
  };
};
