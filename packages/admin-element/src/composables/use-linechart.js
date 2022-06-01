import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
} from "echarts/components";
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";

export function useLinechart(container, options) {
  // 注册必须的组件
  echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LegendComponent,
    ToolboxComponent,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
  ]);

  let myChart = null;
  onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(document.getElementById(container));

    // 指定图表的配置项和数据
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(options);
  });
  onUnmounted(() => {
    myChart.dispose();
  });
}
