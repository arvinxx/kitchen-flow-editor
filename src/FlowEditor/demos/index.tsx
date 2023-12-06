/**
 * compact: true
 */
import {
  FlowEditor,
  FlowEditorProvider,
  Handle,
  Position,
  useFlowEditor,
} from '@ant-design/pro-flow';
import { FC, useEffect } from 'react';
import './index.less';

const StringRender: FC = (node: any) => {
  const { handles, id } = node;

  return (
    <div className={'stringNode'}>
      <Handle
        id={typeof handles?.source === 'string' ? handles?.source : id}
        type={'target'}
        position={Position.Left}
      />
      {node.data.title}
      <Handle
        id={typeof handles?.source === 'string' ? handles?.source : id}
        type={'source'}
        position={Position.Right}
      />
    </div>
  );
};

const nodeTypes = { StringNode: StringRender };

const ProFlowDemo = () => {
  const editor = useFlowEditor();

  useEffect(() => {
    editor.addNode({
      id: 'a1',
      type: 'StringNode',
      position: { x: 0, y: 100 },
      data: {
        title: 'String Node',
        handles: {},
      },
    });
  }, [editor]);

  return (
    <div className={'container'}>
      <FlowEditor nodeTypes={nodeTypes} />
    </div>
  );
};

const FlowDemo = () => {
  return (
    <FlowEditorProvider>
      <ProFlowDemo />
    </FlowEditorProvider>
  );
};

export default FlowDemo;