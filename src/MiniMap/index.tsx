import { ExpandOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';
import { MiniMap as FlowMiniMap, useReactFlow, useViewport } from 'reactflow';
import { MiniMapPosition } from '..';

const useStyles = createStyles(({ css }, props: { x: number; y: number }) => {
  const { x, y } = props;
  return {
    container: css`
      position: absolute;
      bottom: ${y}px;
      right: ${10 + x}px;
      z-index: 100;
      transition: right 0.2s ease;
      width: 200px;
      height: 260px;
      box-sizing: border-box;
    `,

    visible: css`
      display: none;
    `,

    controlAction: css`
      height: 80px;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    `,

    measureMap: css`
      border-radius: 4px;
      height: 180px;
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0 !important;
      position: relative !important;
    `,
  };
});

interface MiniMapProps {
  visible?: boolean;
  className?: string;
  position?: MiniMapPosition;
}

const MiniMap: React.FC<Partial<MiniMapProps>> = (props) => {
  const { visible = true, className = '', position = { x: 0, y: 0 } } = props;
  const reactFlow = useReactFlow();
  const { zoom } = useViewport();
  const { styles, cx } = useStyles(position);

  const handleZoomIn = () => {
    reactFlow.zoomIn();
  };
  const handleZoomOut = () => {
    reactFlow.zoomOut();
  };
  const handleZoomFit = () => {
    reactFlow.fitView();
  };

  const handleZoomTo = () => {
    if (zoom === 1) {
      reactFlow.zoomTo(0.5);
    } else {
      reactFlow.zoomTo(1);
    }
  };

  return (
    <div className={cx(styles.container, !visible && styles.visible, className)}>
      <div className={styles.controlAction}>
        <Space>
          <Button icon={<MinusOutlined />} onClick={handleZoomOut} />
          <Tooltip title={zoom === 1 ? '缩放为 2:1' : '缩放为 1:1'}>
            <Button onClick={handleZoomTo}>{Math.round(zoom * 100)}%</Button>
          </Tooltip>
          <Button icon={<PlusOutlined />} onClick={handleZoomIn} />
          <Tooltip title={'自适应画布'}>
            <Button icon={<ExpandOutlined />} onClick={handleZoomFit} />
          </Tooltip>
        </Space>
      </div>
      <FlowMiniMap
        className={styles.measureMap}
        onNodeClick={(_, data) => {
          const bound = {
            ...data.position,
            height: data.height!,
            width: data.width!,
          };
          reactFlow.fitBounds(bound, { padding: 0.5 });
        }}
      />
    </div>
  );
};

export default MiniMap;