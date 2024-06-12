<template>
    <div ref="userBehaviorChart" style="width: 100%; height:500px;background-color: #fff"></div>
</template>

<script setup lang="ts">
import { shallowRef, onMounted } from 'vue';
import * as echarts from 'echarts';

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
        { dim: 5, name: '人机社交', max: 100 },
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
}, 2000); // 每一分钟更新一次数据

</script>