

<template>
    <el-row class="h-100%">
        <el-col :span="2">
            <el-menu class="h-100%">
                <el-menu-item @click="scrollToElement(clickAdEl)">点击广告</el-menu-item>
                <el-menu-item @click="scrollToElement(downloadAndRegEl)">下载注册</el-menu-item>
                <el-menu-item @click="scrollToElement(refModeEl)">注册方式</el-menu-item>
                <el-menu-item @click="scrollToElement(frequentlyActiveEl)">频繁活跃</el-menu-item>
                <el-menu-item @click="scrollToElement(paymentPreferenceEl)">付费偏好</el-menu-item>
                <el-menu-item @click="scrollToElement(socialInteractionEl)">人际社交</el-menu-item>
                <el-menu-item @click="scrollToElement(customerComplaintEl)">客诉交互</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="22" class="h-100% pt-20px">
            <el-scrollbar style="width:100%;height: calc(100vh - 20px);">
                <div ref="userBehaviorChart"
                    style="width: 100%; height:400px;background-color: #fff;border-bottom: 1px solid #dcdfe6;"></div>

                <el-row class="px-16px py-8px" style="border-bottom: 1px solid #dcdfe6;">
                    <el-col>
                        <el-button @click="router.push('/potential_portrait')">
                            生成用户画像
                        </el-button>
                    </el-col>
                </el-row>

                <el-row class="flex">
                    <el-col :span="1.5" class="w-48% p-20px">

                        <div class="w-100% color-[#303133] overflow-hidden"
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="clickAdEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>点击广告</span>
                            </div>
                            <div class="p-20px">
                                <div class="w-100% h-500px" ref="clickChartsRef"></div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden"
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="downloadAndRegEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>下载注册</span>
                            </div>
                            <div class="p-20px">
                                <div class="w-100% h-500px" ref="downloadAndRegChartsRef"></div>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden "
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="regModeEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>注册方式</span>
                            </div>
                            <div class="p-20px">
                                <div class="w-100% h-500px" ref="regModeChartsRef"></div>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden"
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="frequentlyActiveEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>频繁活跃</span>
                            </div>
                            <div class="p-20px">
                                <div class="w-100% h-500px" ref="frequentlyActiveRef"></div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden "
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="paymentPreferenceEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>付费偏好</span>
                            </div>
                            <div class="p-20px">
                                <div class="w-100% h-500px" ref="paymentPreferenceRef"></div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden "
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="socialInteractionEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>人际社交</span>
                            </div>
                            <div class="p-20px">
                                <div class="w-100% h-500px" ref="socialInteractionRef"></div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="1.5" class="w-100% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden "
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="customerComplaintEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>客诉交互</span>
                            </div>
                            <div class="w-100%">
                                <img class="w-100%" src="../assets/images/kesu.jpg" alt="">
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-scrollbar>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { shallowRef, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import * as echarts from 'echarts';

import clickAdJson from '../data/clickAd.json'

const router = useRouter();

const userBehaviorChart = shallowRef()

// 用户数据示例
const userData = [
    { name: '用户A', data: [80, 70, 90, 85, 75, 60, 65] },
    { name: '用户B', data: [60, 80, 70, 75, 85, 70, 80] },
    { name: '用户C', data: [70, 60, 80, 90, 85, 75, 60] },
    { name: '用户D', data: [90, 85, 75, 60, 70, 80, 90] },
    { name: '用户E', data: [75, 90, 85, 80, 70, 60, 75] },
    { name: '用户F', data: [65, 75, 60, 70, 80, 90, 85] },
    { name: '用户G', data: [80, 85, 75, 60, 65, 70, 80] },
    { name: '用户H', data: [70, 75, 60, 65, 80, 85, 90] },
    { name: '用户I', data: [60, 65, 70, 75, 80, 85, 90] },
    { name: '用户J', data: [85, 80, 75, 70, 65, 60, 85] }
];


const option = {
    title: {
        text: '用户行为分析平行坐标图'
    },
    tooltip: {
        trigger: 'item'
    },
    parallelAxis: [
        { dim: 0, name: '点击广告', max: 100 },
        { dim: 1, name: '下载注册', max: 100 },
        { dim: 2, name: '注册方式', max: 100 },
        { dim: 3, name: '频繁活跃', max: 100 },
        { dim: 4, name: '付费偏好', max: 100 },
        { dim: 5, name: '人际社交', max: 100 },
        { dim: 6, name: '客诉交互', max: 100 }
    ],
    parallel: {
        left: '5%',
        right: '18%',
        bottom: '10%',
        top: '20%'
    },
    series: userData.map(user => ({
        name: user.name,
        type: 'parallel',
        data: [user.data],
        lineStyle: {
            width: 2
        }
    }))
};


// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let myChart: any;

onMounted(() => {
    myChart = echarts.init(userBehaviorChart.value);
    myChart.showLoading();
    myChart.setOption(option)
    myChart.hideLoading();
})


// 定时更新数据
setInterval(() => {
    // 模拟数据更新
    for (const user of userData) {
        user.data = user.data.map(() => Math.round(Math.random() * 100));
    }

    // 更新图表数据
    myChart.setOption({
        series: userData.map(user => ({
            name: user.name,
            type: 'parallel',
            data: [user.data],
            lineStyle: {
                width: 2
            }
        }))
    });
}, 5000); // 每一分钟更新一次数据



const clickAdEl = ref();
const downloadAndRegEl = ref();
const refModeEl = ref();
const frequentlyActiveEl = ref();
const paymentPreferenceEl = ref();
const socialInteractionEl = ref();
const customerComplaintEl = ref();

const scrollToElement = (el: HTMLElement) => {
    el.scrollIntoView({ behavior: 'smooth' });
};


const clickChartsRef = ref();

onMounted(() => {
    const myChart = echarts.init(clickChartsRef.value);
    myChart.setOption(clickAdJson)
})


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

const downloadAndRegChartsRef = ref();


onMounted(() => {
    const myChart = echarts.init(downloadAndRegChartsRef.value);


    const options = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['下载', '注册']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ['2024/01', '2024/02', '2024/03', '2024/04', '2024/05', '2024/06']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [

            {
                name: '下载',
                type: 'bar',
                label: {
                    show: true,
                    position: "insideBottom",
                    distance: 15,
                    align: "left",
                    verticalAlign: "middle",
                    rotate: 90,
                    formatter: '{c}  {name|{a}}',
                    fontSize: 16,
                    rich: {
                        name: {}
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: [394, 434, 583, 337, 552, 362]
            },
            {
                name: '注册',
                type: 'bar',
                label: {
                    show: true,
                    position: "insideBottom",
                    distance: 15,
                    align: "left",
                    verticalAlign: "middle",
                    rotate: 90,
                    formatter: '{c}  {name|{a}}',
                    fontSize: 16,
                    rich: {
                        name: {}
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: [370, 412, 490, 310, 482, 288]
            },

        ]
    };
    myChart.setOption(options)
})


const frequentlyActiveRef = ref();

onMounted(() => {
    const myChart = echarts.init(frequentlyActiveRef.value);


    // 配置图表的数据
    // const data = [
    //     [0, 0, 10], [0, 1, 20], [0, 2, 30], [0, 3, 40], [0, 4, 50],
    //     [1, 0, 15], [1, 1, 25], [1, 2, 35], [1, 3, 45], [1, 4, 55],
    //     // 添加更多数据...
    // ];


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
            bottom: '15%'
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

const paymentPreferenceRef = ref();

onMounted(() => {
    const myChart = echarts.init(paymentPreferenceRef.value);

    const options = {// 配置雷达图的数据
        title: {
            // text: '游戏付费偏好维度分析'
        },
        tooltip: {},
        radar: {
            indicator: [
                { name: '游戏类型偏好' },
                { name: '付费频率' },
                { name: '付费金额' },
                { name: '付费项目' },
                { name: '付费渠道' },
                { name: '付费动机' },
                { name: '付费时段' },
                { name: '付费历史' }
            ]
        },
        series: [{
            type: 'radar',
            data: [
                {
                    value: [80, 70, 60, 50, 40, 30, 20, 10],
                    name: '玩家A'
                },
                {
                    value: [60, 50, 40, 30, 20, 10, 70, 80],
                    name: '玩家B'
                }
            ]
        }]
    }

    myChart.setOption(options)
})


// 人际社交
const socialInteractionRef = ref();

onMounted(() => {
    const myChart = echarts.init(socialInteractionRef.value);

    // 随机生成节点数据
    const players = [];
    for (let i = 1; i <= 50; i++) {
        players.push({
            name: `玩家${i}`,
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
    const option = {
        title: {
            text: '玩家社交关系图'
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
    myChart.setOption(option);

})

</script>