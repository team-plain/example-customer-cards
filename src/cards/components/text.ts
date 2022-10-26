import { Card } from '../../response';

export default (): Card => {
  return {
    key: 'text-example',
    timeToLiveSeconds: null,
    components: [
      {
        "componentText": {
          "text": "Small text",
          "textSize": "S"
        }
      },
      {
        "componentText": {
          "text": "Medium text",
          "textSize": "M"
        }
      },
      {
        "componentText": {
          "text": "Large text",
          "textSize": "L"
        }
      },
      {
        "componentText": {
          "text": "Normal text",
          "textColor": "NORMAL"
        }
      },
      {
        "componentText": {
          "text": "Muted text",
          "textColor": "MUTED"
        }
      },
      {
        "componentText": {
          "text": "Success text",
          "textColor": "SUCCESS"
        }
      },

      {
        "componentText": {
          "text": "Warning text",
          "textColor": "WARNING"
        }
      },

      {
        "componentText": {
          "text": "Error text",
          "textColor": "ERROR"
        }
      }
    ],
  };
};
