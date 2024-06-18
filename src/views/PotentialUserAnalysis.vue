<template>

    <HeaderVue />

    <el-scrollbar style="height:calc(100vh - 60px);">

        <el-row class="ml-1vw mt-1vw">
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择项目" style="width: 240px" v-model="projectId">
                    <el-option v-for="(item, key) in projectJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>

            <el-col :span="1.5">
                <el-button @click="handleSearch">搜索</el-button>
            </el-col>
        </el-row>

        <el-row style="background-color: #fff;">
            <el-col :span="16">
                <div class="w-100% flex flex-wrap h-100%">
                    <div class="w-46%  color-[#303133] overflow-hidden m-1vw"
                        style="background-color: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                        ref="regModeEl">
                        <div class="pl-16px pt-16px font-size-16px font-bold">
                            <span>注册方式</span>
                        </div>
                        <div class="p-20px">
                            <div class="w-100% h-300px" ref="regModeChartsRef"></div>
                        </div>
                    </div>
                    <div class="w-46% color-[#303133] overflow-hidden m-1vw"
                        style="background-color: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                        ref="frequentlyActiveEl">
                        <div class="pl-16px pt-16px font-size-16px font-bold">
                            <span>频繁活跃</span>
                        </div>
                        <div class="p-20px">
                            <div class="w-100% h-300px" ref="frequentlyActiveRef"></div>
                        </div>
                    </div>
                    <div class="w-46% color-[#303133] overflow-hidden m-1vw"
                        style="background-color: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                        ref="socialInteractionEl">
                        <div class="pl-16px pt-16px font-size-16px font-bold">
                            <span>人际社交</span>
                        </div>
                        <div class="p-20px">
                            <div class="w-100% h-300px" ref="socialInteractionRef"></div>
                        </div>
                    </div>


                    <div class="w-46% color-[#303133] overflow-hidden m-1vw"
                        style="background-color: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                        ref="socialInteractionEl">
                        <div class="pl-16px pt-16px font-size-16px font-bold">
                            <span>消费偏好</span>
                        </div>
                        <div class="p-20px">
                            <div class="w-100% h-300px" ref="consumptionPreferenceRef"></div>
                        </div>
                    </div>

                </div>

            </el-col>
            <el-col :span="8">
                <div class="w-100% flex flex-wrap h-100% mt-1vw mr-1vw"
                    style="width:calc(100% - 1vw); height:calc(100% - 2vw);">
                    <div class="w-100% h-100% color-[#303133] overflow-hidden "
                        style="background-color: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                        ref="customerComplaintEl">
                        <div class="pl-16px pt-16px font-size-16px font-bold">
                            <span></span>
                        </div>
                        <div class="w-100% h-100%">
                            <div class="w-100% h-100%" ref="customerComplaintRef"></div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

    </el-scrollbar>

</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

import HeaderVue from '../components/Header.vue';

import graph from '../data/graph.json'
import projectJson from '../data/project.json'
import xiaofei1 from '../data/xiaofei1.json'
import xiaofei2 from '../data/xiaofei2.json'
import xiaofei3 from '../data/xiaofei3.json'
import xiaofei4 from '../data/xiaofei4.json'

import huaxiang1 from '../data/huaxiang1.json'
import huaxiang2 from '../data/huaxiang2.json'
import huaxiang3 from '../data/huaxiang3.json'
import huaxiang4 from '../data/huaxiang4.json'
import huaxiang5 from '../data/huaxiang5.json'


const projectId = ref();

const regModeChartsRef = ref();

onMounted(() => {
    const myChart = echarts.init(regModeChartsRef.value);
    const options = {
        title: {
            // text: '注册方式',
            // subtext: 'register',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'register',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: '手机号注册' },
                    { value: 735, name: 'Email' },
                    { value: 580, name: 'Facebook' },
                    { value: 439, name: 'Google' },
                    { value: 484, name: 'Apple' },
                    { value: 592, name: '微信' },
                    { value: 788, name: 'QuickReg' },
                    { value: 89, name: '官网注册' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(options)
})

const regModeChartsRefFunc = () => {
    const myChart = echarts.init(regModeChartsRef.value);

    myChart.showLoading();

    const options = {
        title: {
            // text: '注册方式',
            // subtext: 'register',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'register',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: Math.floor(1000 + Math.random() * 9000), name: '手机号注册' },
                    { value: Math.floor(1000 + Math.random() * 9000), name: 'Email' },
                    { value: Math.floor(1000 + Math.random() * 900), name: 'Facebook' },
                    { value: Math.floor(1000 + Math.random() * 900), name: 'Google' },
                    { value: Math.floor(1000 + Math.random() * 900), name: 'Apple' },
                    { value: Math.floor(1000 + Math.random() * 9000), name: '微信' },
                    { value: Math.floor(1000 + Math.random() * 900), name: 'QuickReg' },
                    { value: Math.floor(1000 + Math.random() * 9000), name: '官网注册' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart.setOption(options)


    setTimeout(() => {
        myChart.hideLoading();

    }, 1000)


}



const frequentlyActiveRef = ref();

onMounted(() => {
    const myChart = echarts.init(frequentlyActiveRef.value);
    const data = [];
    const days = ['周一', '周二', '周三', '周四', '周五'];
    const times = ['早上', '中午', '下午', '晚上', '深夜'];

    for (let i = 0; i < days.length; i++) {
        for (let j = 0; j < times.length; j++) {
            const activityLevel = Math.floor(Math.random() * 60); // 随机生成活跃度数据
            data.push([i, j, activityLevel]);
        }
    }

    const options = {
        tooltip: {
            position: 'top'
        },
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五']
        },
        yAxis: {
            type: 'category',
            data: ['早上', '中午', '下午', '晚上', '深夜']
        },
        visualMap: {
            min: 0,
            max: 60,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '5%'
        },
        series: [{
            name: '用户活跃度',
            type: 'heatmap',
            data: data,
            label: {
                show: true
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    myChart.setOption(options)

})


const frequentlyActiveRefFunc = () => {
    const myChart = echarts.init(frequentlyActiveRef.value);
    myChart.showLoading();
    const data = [];
    const days = ['周一', '周二', '周三', '周四', '周五'];
    const times = ['早上', '中午', '下午', '晚上', '深夜'];

    for (let i = 0; i < days.length; i++) {
        for (let j = 0; j < times.length; j++) {
            const activityLevel = Math.floor(Math.random() * 60); // 随机生成活跃度数据
            data.push([i, j, activityLevel]);
        }
    }

    const options = {
        tooltip: {
            position: 'top'
        },
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五']
        },
        yAxis: {
            type: 'category',
            data: ['早上', '中午', '下午', '晚上', '深夜']
        },
        visualMap: {
            min: 0,
            max: 60,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '5%'
        },
        series: [{
            name: '用户活跃度',
            type: 'heatmap',
            data: data,
            label: {
                show: true
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    myChart.setOption(options)

    setTimeout(() => {
        myChart.hideLoading();

    }, 1000)
}

// 人际社交
const socialInteractionRef = ref();

onMounted(() => {
    const myChart = echarts.init(socialInteractionRef.value);

    // 随机生成节点数据
    const players = [];
    for (let i = 1; i <= 50; i++) {
        players.push({
            name: `u${Math.floor(1000 + Math.random() * 9000)}`,
            value: Math.floor(Math.random() * 100)
        });
    }

    // 随机生成关系数据
    const links = [];
    for (let i = 0; i < 100; i++) {
        const sourceIndex = Math.floor(Math.random() * 50);
        const targetIndex = Math.floor(Math.random() * 50);
        if (sourceIndex !== targetIndex) {
            links.push({
                source: players[sourceIndex].name,
                target: players[targetIndex].name
            });
        }
    }

    // 指定图表的配置项和数据
    const options = {
        title: {
            // text: '玩家社交关系图'
        },
        tooltip: {},
        series: [
            {
                type: 'graph',
                layout: 'force',
                symbolSize: 30,
                roam: true,
                label: {
                    show: true,
                    position: 'right'
                },
                force: {
                    repulsion: 200,
                    edgeLength: [50, 100]
                },
                edgeSymbol: ['none', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    fontSize: 12
                },
                data: players,
                links: links,
                lineStyle: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0.3
                }
            }
        ]
    };

    // 使用配置项显示关系图
    myChart.setOption(options);

})


const socialInteractionRefFunc = () => {
    const myChart = echarts.init(socialInteractionRef.value);

    myChart.showLoading();

    // 随机生成节点数据
    const players = [];
    for (let i = 1; i <= 50; i++) {
        players.push({
            name: `u${Math.floor(1000 + Math.random() * 9000)}`,
            value: Math.floor(Math.random() * 100)
        });
    }

    // 随机生成关系数据
    const links = [];
    for (let i = 0; i < 100; i++) {
        const sourceIndex = Math.floor(Math.random() * 50);
        const targetIndex = Math.floor(Math.random() * 50);
        if (sourceIndex !== targetIndex) {
            links.push({
                source: players[sourceIndex].name,
                target: players[targetIndex].name
            });
        }
    }

    // 指定图表的配置项和数据
    const options = {
        title: {
            // text: '玩家社交关系图'
        },
        tooltip: {},
        series: [
            {
                type: 'graph',
                layout: 'force',
                symbolSize: 30,
                roam: true,
                label: {
                    show: true,
                    position: 'right'
                },
                force: {
                    repulsion: 200,
                    edgeLength: [50, 100]
                },
                edgeSymbol: ['none', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    fontSize: 12
                },
                data: players,
                links: links,
                lineStyle: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0.3
                }
            }
        ]
    };

    // 使用配置项显示关系图
    myChart.setOption(options);

    setTimeout(() => {
        myChart.hideLoading();
    }, 1000)
}



const customerComplaintRef = ref();

onMounted(() => {
    const myChart = echarts.init(customerComplaintRef.value);



    // 指定图表的配置项和数据
    const option = {
        tooltip: {},
        legend: [
            {
                data: graph.categories.map((a) => {
                    return a.name;
                })
            }
        ],
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                },
                labelLayout: {
                    hideOverlap: true
                },
                scaleLimit: {
                    min: 0.4,
                    max: 2
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                }
            }
        ]
    };

    // 使用配置项显示关系图
    myChart.setOption(option);

})


const customerComplaintRefFunc = () => {
    const myChart = echarts.init(customerComplaintRef.value);

    myChart.showLoading();

    const randomInt = getRandomInt(1, 5);

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    let graph: any;

    switch (randomInt) {
        case 1:
            graph = huaxiang1;
            break;
        case 2:
            graph = huaxiang2;
            break;
        case 3:
            graph = huaxiang3;
            break;
        case 4:
            graph = huaxiang4;
            break;
        case 5:
            graph = huaxiang5;
            break;
        default:
            break;
    }


    // 指定图表的配置项和数据
    const option = {
        tooltip: {},
        legend: [
            {
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                data: graph.categories.map((a: any) => {
                    return a.name;
                })
            }
        ],
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                },
                labelLayout: {
                    hideOverlap: true
                },
                scaleLimit: {
                    min: 0.4,
                    max: 2
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                }
            }
        ]
    };

    // 使用配置项显示关系图
    myChart.setOption(option);

    setTimeout(() => {
        myChart.hideLoading();
    }, 1000)
}


const consumptionPreferenceRef = ref();

onMounted(() => {
    const myChart = echarts.init(consumptionPreferenceRef.value);


    const options = {
        title: {
            // text: '消费编好'
        },
        dataset: {
            source: [
                ["score", "amount", "product"],
                [27, 44194, "\u4e00\u5927\u888b\u94bb\u77f3"],
                [23.1, 71755, "\u6bcf\u65e5\u798f\u5229"],
                [15.3, 15738, "\u60ac\u8d4f\u4ee4"],
                [10.5, 96418, "\u7a7a\u5c9b\u8d1d\u793c\u5305"],
                [13.1, 82386, "\u6d3b\u52a8"],
                [55.8, 65249, "\u7ec8\u751f\u5361"],
                [31.6, 40119, "\u4e3b\u7ebf\u6218\u4ee4"],
                [57.9, 11212, "\u7a7a\u5c9b\u8d1d\u7279\u60e0"],
                [63.6, 25575, "\u6708\u5361"],
                [24.7, 58091, "\u65b0\u624b\u5546\u5e97"],
                [55.4, 50653, "\u5feb\u901f\u4f5c\u6218\u7279\u6743"],
                [81.3, 20377, "30\u5143\u76f4\u8d2d\u793c\u5305"],
                [49.1, 31708, "6\u5143\u76f4\u8d2d\u793c\u5305"],
                [95.7, 81110, "\u6bcf\u65e5\u793c\u5305\u4e00\u952e\u8d2d\u4e70"],
                [76.1, 85352, "648\u5143\u76f4\u8d2d\u793c\u5305"],
                [44.6, 28403, "3280\u91d1\u5e01"],
                [25.9, 33323, "\u81f3\u5c0a\u7b49\u7ea7\u793c\u5305"],
                [35.1, 85796, "68\u5143\u76f4\u8d2d\u793c\u5305"],
                [45.7, 49025, "\u83b7\u5f971\u4e2a\u7eff\u8d28\u91cf\u5143\u7d20"],
                [81.8, 14752, "128\u5143\u76f4\u8d2d\u793c\u5305"]
            ]
        },
        grid: { containLabel: true },
        xAxis: { name: 'amount' },
        yAxis: { type: 'category' },
        visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 10,
            max: 100,
            text: ['高消费', '低消费'],
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ['#65B581', '#FFCE34', '#FD665F']
            }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
            }
        ]
    };


    myChart.setOption(options)

})

const consumptionPreferenceRefFunc = () => {
    const myChart = echarts.init(consumptionPreferenceRef.value);

    myChart.showLoading();

    const randomInt = getRandomInt(1, 4);

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    let source: any;

    switch (randomInt) {
        case 1:
            source = xiaofei1;
            break;
        case 2:
            source = xiaofei2;
            break;
        case 3:
            source = xiaofei3;
            break;
        case 4:
            source = xiaofei4;
            break;
        default:
            break;
    }

    const options = {
        title: {
            // text: '消费编好'
        },
        dataset: {
            source: source
        },
        grid: { containLabel: true },
        xAxis: { name: 'amount' },
        yAxis: { type: 'category' },
        visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 10,
            max: 100,
            text: ['高消费', '低消费'],
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ['#65B581', '#FFCE34', '#FD665F']
            }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
            }
        ]
    };


    myChart.setOption(options)

    setTimeout(() => {
        myChart.hideLoading();
    }, 1000)
}


const handleSearch = () => {
    regModeChartsRefFunc();
    consumptionPreferenceRefFunc();
    frequentlyActiveRefFunc();
    socialInteractionRefFunc();
    customerComplaintRefFunc();
}

const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
</script>