import { Card } from '../../response';

export default (): Card => {
  return {
    key: 'divider-example',
    timeToLiveSeconds: null,
    components: [
      {
        "componentText": {
          "text": "Content before an XS divider"
        }
      },
      {
        "componentDivider": {
          "dividerSpacingSize": "XS"
        }
      },
      {
        "componentText": {
          "text": "Content before an S divider"
        }
      },
      {
        "componentDivider": {
          "dividerSpacingSize": "S"
        }
      },
      {
        "componentText": {
          "text": "Content before an M divider"
        }
      },
      {
        "componentDivider": {
          "dividerSpacingSize": "M"
        }
      },
      {
        "componentText": {
          "text": "Content before an L divider"
        }
      },
      {
        "componentDivider": {
          "dividerSpacingSize": "L"
        }
      },
      {
        "componentText": {
          "text": "Content before an XL divider"
        }
      },
      {
        "componentDivider": {
          "dividerSpacingSize": "XL"
        }
      },
      {
        "componentText": {
          "text": "Content after an XL divider"
        }
      }
    ],
  };
};
