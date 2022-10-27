import { Card } from '../../response';

export default (): Card => {
  return {
    key: 'badge-example',
    timeToLiveSeconds: null,
    components: [
      {
        componentBadge: {
          badgeLabel: 'Subscribed',
          badgeColor: 'GREEN',
        },
      },
    ],
  };
};
