import { Card } from '../response';

export default (): Card => {
  return {
    key: 'link-button-example',
    timeToLiveSeconds: null,
    components: [
      {
        componentLinkButton: {
          linkButtonLabel: 'Open in Admin Portal',
          linkButtonUrl: 'https://example.com',
        },
      },
    ],
  };
};
