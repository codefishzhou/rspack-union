import { ref } from "vue";
import * as echarts from "echarts";

export const usePie = () => {
    const chartDom = ref();
    const renderChart = (options) => {
        const myChart = echarts.init(chartDom.value);
        myChart.setOption(options)
    }
    return {
        chartDom,
        renderChart
    }
}