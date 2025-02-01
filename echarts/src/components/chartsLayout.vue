<template>
  <div class="w-full h-[350px]" ref="chartDom"></div>
</template>

<script setup>
  import { nextTick, ref, inject, onMounted, computed, reactive } from "vue";
  import { useEcharts } from "./hooks/useEcharts";
  import * as echarts from "echarts";
  import { useConfig } from "./hooks/useConfig";  
  // const datas = inject('datas');
  const echartsType = inject('echartsType') || 'pie'; //图像类型
  const color = ['#FFC696', '#FF9798', '#59B4E8', '#7A8EF9']
  const chartDom = ref();
  const {echartBasicConfig} = useConfig()
  const baseConfig = echartBasicConfig.value[echartsType];
  const pieChartsInstances = ref(null)
  onMounted(()=>{
    const [pieCharts] = useEcharts(baseConfig, chartDom);
    pieChartsInstances.value = pieCharts
    pieCharts.init(chartDom)
    // pieCharts.setData([data()])
  })
  defineExpose({
    pieChartsInstances
  })
</script>

<style lang="scss" scoped></style>
