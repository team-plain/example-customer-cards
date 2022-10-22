import { Card } from '../response';

export default (): Card => {
  return {
    key: 'useful-links',
    timeToLiveSeconds: null,
    components: [
      {
        componentLinkButton: {
          linkButtonLabel: 'View in admin',
          linkButtonUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
      },
    ],
  };
};
