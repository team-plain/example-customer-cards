import { Card } from '../response';

export default (): Card => {
  return {
    key: 'container-example',
    timeToLiveSeconds: null,
    components: [
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
  };
};
