---
nav: 快速上手
order: 90
group:
  title: 进阶使用
  order: 2
title: 自定义节点
description:
---

## 自定义节点

ProFlow 的一个强大功能是能够添加自定义节点。在自定义节点中，您可以渲染所需的所有内容。例如，您可以定义多个源句柄和目标句柄，并呈现表单输入或图表。在本节中，我们将实现一个带有输入字段的节点，该输入字段更新应用程序另一部分中的一些文本。

## 实现自定义节点

让我们开始实现：声明一个自定义节点`TextUpdaterNode`组件，它的结构由 3 个 Handle 组件和一块内容区组成。其中一个 Handle 的位置在顶部，两个在底部。

```js
import { useCallback } from 'react';
import { Handle, Position } from '@ant-design/pro-flow';

const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="content">
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
    </>
  );
}
```

## 添加节点类型

你可以将新的节点类型添加到 prop 中传递给 FlowView。

:::warning
**在组件外部定义或缓存`nodeTypes`非常重要。** 否则 React 会在每次渲染时创建一个新的对象，这会导致性能问题和错误。
:::

```js
const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }) ,[]);

return <FlowView nodeTypes={nodeTypes}>
```

定义新节点类型后，可以在 nodes 列表中使用这个类型了。

```js
const nodes = [
  {
    id: 'n1',
    type: 'textUpdater',
    data: { value: 123 },
  },
];
```

然后你就可以得到如下的自定义节点效果。
<code src="./demos/CustomerNode.tsx"></code>

## 使用多个 Handle

当一个节点拥有多个 Handle 时，在连接时只传递节点 Id 是不够的，还需要传递特定的 HandleId。

```js
const initialEdge = [
  { id: 'edge-1', source: 'n1', sourceHandle: 'a', target: 'n2' },
  { id: 'edge-2', source: 'n1', sourceHandle: 'b', target: 'n3' },
];
```

效果如下：
<code src="./demos/multiHandle.tsx"></code>

## 添加节点交互

在自定义节点的 data 中，FlowView 还会透传 2 个属性 selectType 与 zoom。你可以通过这两个属性来给节点配置一些交互。

```js
import {
  FlowView,
  FlowViewProvider,
  Handle,
  Position,
  SelectType,
  useFlowViewer,
} from '@ant-design/pro-flow';

const edges = [
  { id: 'edge-1', source: 'n1', target: 'n2', sourceHandle: 'a' },
  { id: 'edge-2', source: 'n1', target: 'n3', sourceHandle: 'b' },
];

const CustomNode: FC<{
  data: {
    title: string,
    selectType: SelectType,
  },
}> = ({ data }) => {
  console.log(data);
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <Wrap className={data.selectType === SelectType.SELECT ? 'select' : 'default'}>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{data.title}</label>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" style={{ left: 10 }} />
    </Wrap>
  );
};

const nodeTypes = { customNode: CustomNode };

function App() {
  const flowViewer = useFlowViewer();

  return (
    <Container>
      <FlowView
        onNodeClick={(e, n) => {
          flowViewer?.selectNode(n.id, SelectType.SELECT);
        }}
        onPaneClick={() => {
          flowViewer?.selectNodes(['n1', 'n2', 'n3'], SelectType.DEFAULT);
        }}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        miniMap={false}
      />
    </Container>
  );
}
function ProApp() {
  return (
    <FlowViewProvider>
      <App />
    </FlowViewProvider>
  );
}
```

效果如下：
<code src="./demos/multiHandle.tsx"></code>