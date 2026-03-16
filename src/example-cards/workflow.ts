import { Card } from '../response';

export default (): Card => {
  return {
    key: 'workflow-card',
    timeToLiveSeconds: null,
    components: [
      {
        componentText: {
          text: 'Trigger a workflow directly from a customer card.',
          textSize: 'S',
          textColor: 'MUTED',
        },
      },
      {
        componentSpacer: {
          spacerSize: 'M',
        },
      },
      {
        componentWorkflowButton: {
          workflowButtonLabel: 'Run workflow',
          workflowButtonWorkflowIdentifier: {
            // This is a placeholder workflow ID from Plain's developer environment. You'll need to replace this with the a workflow ID from your workspace.
            workflowId: 'wf_01KKKW99MRJW6SY6C12JS0NRBR',
          },
        },
      },
    ],
  };
};
