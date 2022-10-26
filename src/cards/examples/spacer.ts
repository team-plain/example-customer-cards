import { Card } from '../../response';

export default (): Card => {
  return {
    key: 'spacer-example',
    timeToLiveSeconds: null,
    components: [
      {
        "componentText": {
          "text": "Content before an XS spacer"
        }
      },
      {
        "componentSpacer": {
          "spacerSize": "XS"
        }
      },
      {
        "componentText": {
          "text": "Content before an S spacer"
        }
      },
      {
        "componentSpacer": {
          "spacerSize": "S"
        }
      },
      {
        "componentText": {
          "text": "Content before an M spacer"
        }
      },
      {
        "componentSpacer": {
          "spacerSize": "M"
        }
      },
      {
        "componentText": {
          "text": "Content before an L spacer"
        }
      },
      {
        "componentSpacer": {
          "spacerSize": "L"
        }
      },
      {
        "componentText": {
          "text": "Content before an XL spacer"
        }
      },
      {
        "componentSpacer": {
          "spacerSize": "XL"
        }
      },
      {
        "componentText": {
          "text": "Content after an XL spacer"
        }
      }
    ],
  };
};
