import { ref } from "vue";
export const useConfig = () => {
    const echartBasicConfig = ref({
        pie: {
            tooltip: {
                show: false,
            },
            legend: {
                bottom: "top",
                type: "scroll",
                itemWidth: 16, // 设置图例每个项的宽度
                itemHeight: 16, // 设置图例每个项的高度
                textStyle: {
                fontSize: 12,
                color: "#666666",
                rich: {
                    a: {
                    verticalAlign: "middle",
                    },
                },
                lineHeight: 16,
                padding: [0, 5, -4, 0], //★图例的图标内边距top right bottom left（重点）
                },
            },
            series: [
                {
                type: "pie",
                label: {
                    formatter: function (pram) {
                    return pram.value + "人";
                    },
                    // padding: [-8, -30],
                },
                labelLine: {
                    length: 10,
                    length2: 10,
                },
                avoidLabelOverlap: false,
                radius: "70%",
                center: ["50%", "50%"],
                data: [],
                },
            ],
            
        },
        bar: {
            tooltip: {
                show: false,
            },
            legend: {
                bottom: "top",
                type: "scroll",
                itemWidth: 16, // 设置图例每个项的宽度
                itemHeight: 16, // 设置图例每个项的高度
                textStyle: {
                fontSize: 12,
                color: "#666666",
                rich: {
                    a: {
                    verticalAlign: "middle",
                    },
                },
                lineHeight: 16,
                padding: [0, 5, -4, 0], //★图例的图标内边距top right bottom left（重点）
                },
            },
            series: [
                {
                type: "pie",
                label: {
                    formatter: function (pram) {
                    return pram.value + "人";
                    },
                    // padding: [-8, -30],
                },
                labelLine: {
                    length: 10,
                    length2: 10,
                },
                avoidLabelOverlap: false,
                radius: "70%",
                center: ["50%", "50%"],
                data: [],
                },
            ],
            
        },
    })
    return {
        echartBasicConfig
    }
}