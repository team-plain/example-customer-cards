import { Card } from '../response';

export default (): Card => {
  return {
    key: 'timer',
    timeToLiveSeconds: null,
    components: [
      {
        componentText: {
          text: `${new Date().toUTCString()}`,
        },
      },
    ],
  };
};
