import { ref, onUnmounted } from "vue";
import { echartsInstance } from "./echartsApi.js";
export const useEcharts = (options, doms) => {
    const echarts = new echartsInstance(options);
    console.log(doms, '--doms')
    //初始化
    doms.value&&echarts.init(doms);
    //渲染图表
    onUnmounted(()=>{
        echarts.unmount();
    })
    return [echarts];
}