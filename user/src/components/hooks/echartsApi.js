import { ref } from "vue";
import * as echarts from "echarts";
import merge from 'lodash/merge'

export class echartsInstance {
    constructor(options) {
        this.options = options;
        this.isMounted = false;
        this.chartDom = null;
        this.currentChart = null;
        this.data = null;
        // this.setData = this.setData.bind(this);
    }

    init(chartDom) {
        this.currentChart = echarts.init(chartDom.value);
        this.chartDom = chartDom;
        this.isMounted = true;
    }
    setOption(options) {
        const mergedOptions = merge({}, this.options, options);
        this.options = mergedOptions;
        this.currentChart.setOption(this.options);
    }
    setData(sericeData) {
        
        if(!this.isMounted){
            this.init(this.chartDom);
        }
        const options = { ...this.options };
        
        sericeData.map((item, index) => { //[data1, data2]data => series[data1, data2]
            
            options['series'][index]['data'] = item;
        });
        this.currentChart.setOption(options);
    }

    eventListener() {
        this.resize();
    }

    resize() {
        echarts.init(this.chartDom.value).resize();
    }

    unmount() {
        window.removeEventListener("resize", this.eventListener);
    }

    renderChart(data) {
        this.currentChart.setOption(this.options);
        window.addEventListener("resize", this.eventListener);
    }
}