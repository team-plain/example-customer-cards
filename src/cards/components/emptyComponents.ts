import { Card } from '../../response';

export default (): Card => {
  return {
    key: 'empty-components',
    timeToLiveSeconds: null,
    components: [],
  };
};
