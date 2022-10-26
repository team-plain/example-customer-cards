import { Card } from '../../response';

export default (): Card => {
  return {
    key: 'copy-button-example',
    timeToLiveSeconds: null,
    components: [

      {
        "componentCopyButton": {
          "copyButtonTooltipLabel": "Order ID",
          "copyButtonValue": "2a8f2dae-3580-402b-aa0a-243efae55e39"
        }
      },
    ],
  };
};
