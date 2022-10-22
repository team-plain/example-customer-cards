import { Card } from '../response';

export default (): Card => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return {
    key: 'timer',
    timeToLiveSeconds: null,
    components: [
      {
        componentText: {
          text: `The time is ${hours}:${minutes}:${seconds} (UTC)`,
        },
      },
    ],
  };
};
