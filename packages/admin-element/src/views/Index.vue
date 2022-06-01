<template>
  <el-card class="introduce">
    <!-- 订单数据 -->
    <div class="order">
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>今日订单数</span>
          </div>
        </template>
        <div class="item">999</div>
      </el-card>
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>今日日活</span>
          </div>
        </template>
        <div class="item">9999</div>
      </el-card>
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>转化率</span>
          </div>
        </template>
        <div class="item">9.9%</div>
      </el-card>
    </div>

    <!-- 订单折线图 -->
    <div id="chart"></div>
  </el-card>
</template>

<script>
export default {
  name: "Index",
};
</script>

<script setup>
import { useLinechart } from "@/composables/use-linechart";
useLinechart('chart', {
  title: {
    text: "系统折线图",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["新增注册", "付费用户", "活跃用户", "订单数", "当日总收入"],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: [
        "2021-03-11",
        "2021-03-12",
        "2021-03-13",
        "2021-03-14",
        "2021-03-15",
        "2021-03-16",
        "2021-03-17",
      ],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "新增注册",
      type: "line",
      stack: "总量",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "付费用户",
      type: "line",
      stack: "总量",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "活跃用户",
      type: "line",
      stack: "总量",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "订单数",
      type: "line",
      stack: "总量",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "当日总收入",
      type: "line",
      stack: "总量",
      label: {
        show: true,
        position: "top",
      },
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
});
</script>

<style scoped>
.introduce .order {
  display: flex;
  margin-bottom: 50px;
}
.introduce .order .order-item {
  flex: 1;
  margin-right: 20px;
}
.introduce .order .order-item:last-child {
  margin-right: 0;
}

#chart {
  min-height: 300px;
}
</style>
