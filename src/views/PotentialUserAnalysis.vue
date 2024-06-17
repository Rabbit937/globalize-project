<template>
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
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

import graph from '../data/graph.json'


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
    myChart.setOption(option);

})


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


const consumptionPreferenceRef = ref();

onMounted(() => {
    const myChart = echarts.init(consumptionPreferenceRef.value);


    const data = [
        {
            name: '低消费',
            children: [
                { name: '首充', value: Math.round(Math.random() * 100) },
                { name: '周卡', value: Math.round(Math.random() * 100) },
                { name: '一次性购买', value: Math.round(Math.random() * 100) },
                { name: '活动充值', value: Math.round(Math.random() * 100) },
                { name: '月卡', value: Math.round(Math.random() * 100) }
                
            ]
        },
        // {
        //     name: '中消费',
        //     children: [
        //         { name: '首充', value: Math.round(Math.random() * 100) },
        //         { name: '周卡', value: Math.round(Math.random() * 100) },
        //         { name: '一次性购买', value: Math.round(Math.random() * 100) },
        //         { name: '活动充值', value: Math.round(Math.random() * 100) },
        //         { name: '月卡', value: Math.round(Math.random() * 100) }
        //     ]
        // },
        // {
        //     name: '高消费',
        //     children: [
        //         { name: '首充', value: Math.round(Math.random() * 100) },
        //         { name: '周卡', value: Math.round(Math.random() * 100) },
        //         { name: '一次性购买', value: Math.round(Math.random() * 100) },
        //         { name: '活动充值', value: Math.round(Math.random() * 100) },
        //         { name: '月卡', value: Math.round(Math.random() * 100) }
        //     ]
        // }
    ];

    const option = {
        title: {
            // text: '游戏用户消费偏好树图'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}'
        },
        series: [{
            type: 'treemap',
            data: data,
            breadcrumb: {
                show: false
            },
            label: {
                show: true,
                formatter: '{b}'
            }
        }]
    };



    myChart.setOption(option)

})
</script>