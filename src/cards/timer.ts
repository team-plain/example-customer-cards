import { Card } from '../models';

function formatTime(): string {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

export const timer: Card = {
  key: 'timer',
  timeToLiveSeconds: null,
  components: [
    {
      componentText: {
        text: `The time is ${formatTime()} (UTC)`,
      },
    },
  ],
};
