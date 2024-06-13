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
        <el-col :span="22" class="h-100%">
            <el-scrollbar style="width:100%;height: calc(100vh);">
                <div ref="userBehaviorChart"
                    style="width: 100%; height:400px;background-color: #fff;border-bottom: 1px solid #dcdfe6;"></div>

                <el-row class="px-16px py-8px" style="border-bottom: 1px solid #dcdfe6;">
                    <el-col>
                        <el-button @click="router.push('/potential_portrait')">
                            生成画像
                        </el-button>
                    </el-col>
                </el-row>

                <el-row class="flex">
                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden"
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="clickAdEl">
                            <div class="p-20px">
                                <div class="w-100% h-500px" ref="clickChartsRef"></div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden"
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="downloadAndRegEl">
                            <div class="p-20px">
                                <p v-for="o in 4" :key="o" class="text item">下载注册</p>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden "
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="refModeEl">
                            <div class="p-20px">
                                <p v-for="o in 4" :key="o" class="text item">注册方式</p>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden"
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="frequentlyActiveEl">
                            <div class="p-20px">
                                <p v-for="o in 4" :key="o" class="text item">频繁活跃</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden "
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="paymentPreferenceEl">
                            <div class="p-20px">
                                <p v-for="o in 4" :key="o" class="text item">付费偏好</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden "
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="socialInteractionEl">
                            <div class="p-20px">
                                <p v-for="o in 4" :key="o" class="text item">人际社交</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="1.5" class="w-100% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden "
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="customerComplaintEl">
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
}, 2000); // 每一分钟更新一次数据



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
    // const options = {
    //     title: {
    //         text: '广告点击'
    //     },
    //     tooltip: {
    //         trigger: 'axis'
    //     },
    //     legend: {
    //         data: ['AD85928567', 'AD85924855', 'AD85924852', 'AD85924853', 'AD85924856', 'AD85924857', 'AD85924858', 'AD85924859']
    //     },
    //     grid: {
    //         left: '3%',
    //         right: '4%',
    //         bottom: '3%',
    //         containLabel: true
    //     },
    //     toolbox: {
    //         feature: {
    //             saveAsImage: {}
    //         }
    //     },
    //     xAxis: {
    //         type: 'category',
    //         boundaryGap: false,
    //         data: ['00:00', '01:15', '02:30', '03:45', '04:20', '05:00', '06:15', '07:30', '08:45', '09:30', '10:00', '11:15', '12:30', '13:45', '14:15', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    //     },
    //     yAxis: {
    //         type: 'value'
    //     },
    //     series: [
    //         {
    //             name: 'AD85928567',
    //             type: 'line',
    //             stack: 'Total',
    //             data: [6695, 4021, 5821, 5166, 8350, 3791, 8556, 7360, 1823, 7454, 9965, 8532, 7520, 8033, 3692, 4849, 1162, 7871, 9068, 8938, 9341, 8291, 3859]
    //         },
    //         {
    //             name: 'AD85924855',
    //             type: 'line',
    //             stack: 'Total',
    //             data: [1119, 4867, 7463, 6389, 4553, 1050, 1071, 5467, 7965, 2491, 1013, 3140, 3703, 3305, 3656, 1352, 7534, 7377, 1702, 5208, 9988, 1578, 3110]
    //         },
    //         {
    //             name: 'AD85924852',
    //             type: 'line',
    //             stack: 'Total',
    //             data: [6086, 6560, 9342, 5672, 9943, 7276, 3031, 9779, 3951, 6813, 8226, 7715, 6002, 3163, 5351, 3830, 6279, 9884, 1331, 2312, 7450, 7852, 9688]
    //         },
    //         {
    //             name: 'AD85924853',
    //             type: 'line',
    //             stack: 'Total',
    //             data: [3763, 6656, 5429, 1469, 2918, 5237, 4589, 8769, 1840, 4523, 6120, 7492, 8699, 7257, 7080, 1201, 6135, 8897, 5310, 3949, 4321, 7366, 2999]
    //         },
    //         {
    //             name: 'AD85924856',
    //             type: 'line',
    //             stack: 'Total',
    //             data: [7472, 9315, 9933, 4036, 1456, 6012, 7373, 1568, 7475, 3939, 1827, 8712, 9023, 4718, 5842, 4796, 9894, 7245, 9436, 2592, 4991, 3054, 9757]
    //         },
    //         {
    //             name: 'AD85924857',
    //             type: 'line',
    //             stack: 'Total',
    //             data: [8891, 8264, 7736, 5963, 3795, 1138, 2832, 3050, 3853, 5543, 3350, 5397, 1006, 7107, 3016, 9956, 5919, 8994, 2397, 9457, 4286, 2531, 9524]
    //         },
    //         {
    //             name: 'AD85924858',
    //             type: 'line',
    //             stack: 'Total',
    //             data: [3864, 6604, 6662, 9149, 8742, 7447, 2455, 6349, 2584, 9893, 9761, 1066, 6050, 8101, 2536, 5746, 5698, 9735, 2408, 2772, 7636, 3840, 1105]
    //         },
    //         {
    //             name: 'AD85924859',
    //             type: 'line',
    //             stack: 'Total',
    //             data: [8599, 1711, 9321, 1812, 3942, 2491, 9177, 5564, 4188, 6378, 1400, 8277, 3477, 7793, 9397, 9770, 8935, 4049, 9376, 9930, 6721, 5511, 3356]
    //         }
    //     ]
    // };


    myChart.setOption(clickAdJson)

})
</script>