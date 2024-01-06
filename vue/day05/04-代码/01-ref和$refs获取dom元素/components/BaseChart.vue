<template>
  <div ref="chartRef" class="base-chart-box">子组件</div>
</template>

<script>
// echarts底层封装时 导出 - 按需导出
import * as echarts from 'echarts'

// 默认导入
// import axios from 'axios'
// import dayjs from 'dayjs'
// import Vue from 'vue'


// 按需导入
// * 指的是全部 
// as 重命名 
// import { fn } from 'xx \'

/*
  ref 和 $refs 
  作用: 获取dom元素 及 组件实例
  // 优势: 精确的去查找
  // 1. 给标签身上添加ref属性
  // 2. 合适的时机 （dom元素渲染完成） this.$refs.xxx

  // document :针对的是整个页面 - 包括当前组件及父组件 
  // 问题: 无法精确查找
  document.querySelector()

*/ 
export default {
  mounted() {
    console.log(echarts);
    // 基于准备好的dom，初始化echarts实例
    // console.log(document.querySelector('.base-chart-box'));
    console.log(this.$refs.chartRef);
    const myChart = echarts.init(this.$refs.chartRef)
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    })
  },
}
</script>

<style scoped>
.base-chart-box {
  width: 400px;
  height: 300px;
  border: 3px solid #000;
  border-radius: 6px;
}
</style>