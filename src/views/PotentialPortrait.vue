<template>
    <div ref="chartRef" style="height: 100%; width: 100%;"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

// 初始化数据和变量
const chartRef = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

const categories = ['性格偏好', '趣味偏好', '消费偏好', '用户消费价值', '社会属性', '媒体属性'];
const maxUsers = 50; // 显示的最大用户数量
let userCount = 0; // 初始用户数量
let data: [string, number, string][] = [];

// 生成初始数据的函数
function generateInitialData(categories: string[], count: number): [string, number, string][] {
    const result: [string, number, string][] = [];
    for (let i = 1; i <= count; i++) {
        for (const category of categories) {
            result.push([i.toString(), Math.round(Math.random() * 100), category]);
        }
    }
    return result;
}

// 配置选项
const option: echarts.EChartsOption = {
    title: {
        text: '潜在画像分析图 - 实时更新',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(0,0,0,0.2)',
                width: 1,
                type: 'solid',
            },
        },
    },
    legend: {
        data: categories,
    },
    singleAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            interval: 0,
            rotate: 45,
        },
        data: [],
    },
    dataZoom: [
        {
            type: 'slider',
            show: false,
            start: 0,
            end: 100,
        },
    ],
    series: [
        {
            type: 'themeRiver',
            emphasis: {
                focus: 'series',
            },
            data: data,
        },
    ],
};

// 更新数据的函数
function updateData() {
    userCount++;

    for (const category of categories) {
        data.push([userCount.toString(), Math.round(Math.random() * 100), category]); // 添加新数据
    }

    // 更新 x 轴数据
    const xAxisData = Array.from({ length: userCount }, (_, i) => (i + 1).toString());

    if (chartInstance) {
        chartInstance.setOption({
            singleAxis: {
                data: xAxisData,
            },
            series: [
                {
                    data: data,
                },
            ],
            dataZoom: [
                {
                    startValue: userCount - maxUsers > 0 ? (userCount - maxUsers).toString() : '0',
                    endValue: userCount.toString(),
                },
            ],
        });
    }
}

// 初始生成50个数据
data = generateInitialData(categories, maxUsers);
userCount = maxUsers;

// 定时更新数据
let updateInterval: number;

onMounted(() => {
    if (chartRef.value) {
        chartInstance = echarts.init(chartRef.value);
        chartInstance.setOption(option);
        chartInstance.setOption({
            singleAxis: {
                data: Array.from({ length: userCount }, (_, i) => (i + 1).toString()),
            },
            series: [
                {
                    data: data,
                },
            ],
        });

        // 每秒钟更新一次数据
        updateInterval = window.setInterval(updateData, 1000);
    }
});

onBeforeUnmount(() => {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
    if (chartInstance) {
        chartInstance.dispose();
    }
});
</script>

<style scoped>
/* 样式根据需要调整 */
</style>