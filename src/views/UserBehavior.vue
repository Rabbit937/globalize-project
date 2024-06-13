<template>
    <el-row class="h-100%">
        <el-col :span="3">
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
        <el-col :span="21">
            <div ref="userBehaviorChart"
                style="width: 100%; height:400px;background-color: #fff;border-bottom: 1px solid #dcdfe6;"></div>

            <el-row class="px-16px py-8px" style="border-bottom: 1px solid #dcdfe6;">
                <el-col>
                    <el-button @click="router.push('/potential_portrait')">
                        生成画像
                    </el-button>
                </el-col>
            </el-row>

            <el-scrollbar style="width:100%;height: calc(100vh - 460px);">
                <el-row class="flex">
                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden"
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="clickAdEl">
                            <div class="p-20px">
                                <p v-for="o in 4" :key="o" class="text item">点击广告</p>
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
</script>