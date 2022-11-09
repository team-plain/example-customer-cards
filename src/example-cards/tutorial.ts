import { Card } from '../response';

export default (): Card => {
  return {
    key: 'tutorial',
    timeToLiveSeconds: null,
    components: [
      {
        componentBadge: {
          badgeLabel: 'Example',
          badgeColor: 'BLUE',
        },
      },
      {
        componentSpacer: {
          spacerSize: 'S',
        },
      },
      {
        componentText: {
          text: 'In Plain you can show any information about the customer you want here without having to sync anything.',
        },
      },
      {
        componentSpacer: {
          spacerSize: 'S',
        },
      },
      {
        componentText: {
          text: 'You can do this by building a very simple API endpoint that Plain will then query when you load this page.',
        },
      },
      {
        componentSpacer: {
          spacerSize: 'M',
        },
      },
      {
        componentLinkButton: {
          linkButtonLabel: 'Find out more',
          linkButtonUrl: 'https://docs.plain.com/adding-context/customer-cards',
        },
      },
    ],
  };
};
