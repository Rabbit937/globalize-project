<template>
    <el-row class="h-100vh">
        <el-col :span="2">
            <el-menu class="h-100%">
                <el-menu-item @click="scrollToElement(personalityPreferenceEl)">性格偏好</el-menu-item>
                <el-menu-item @click="scrollToElement(interestPreferenceEl)">趣味偏好</el-menu-item>
                <el-menu-item @click="scrollToElement(consumptionPreferenceEl)">消费偏好</el-menu-item>
                <el-menu-item @click="scrollToElement(userConsumptionValueEl)">用户消费价值</el-menu-item>
                <el-menu-item @click="scrollToElement(socialAttributeEl)">社会属性</el-menu-item>
                <el-menu-item @click="scrollToElement(mediaAttributeEl)">媒体属性</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="22" class="h-100% pt-20px">
            <el-scrollbar style="width:100%;height: calc(100vh - 20px);">
                <div ref="chartRef"
                    style="width: 100%; height:400px;background-color: #fff;border-bottom: 1px solid #dcdfe6;"
                    class="pb-10px"></div>
                <el-row class="px-16px py-8px" style="border-bottom: 1px solid #dcdfe6;">
                    <el-col>
                        <el-button @click="router.push('/delivery_strategy')">
                            生成投放策略
                        </el-button>
                    </el-col>
                </el-row>

                <el-row class="flex">
                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden"
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="personalityPreferenceEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>性格偏好</span>
                            </div>
                            <div class="p-20px text-center">
                                <img style="width: 30vw;" src=" ../assets/images/xinzuo.webp" alt="">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden"
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="interestPreferenceEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>趣味偏好</span>
                            </div>
                            <div class="p-20px">
                                <p v-for="o in 4" :key="o" class="text item">趣味偏好</p>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden "
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="consumptionPreferenceEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>消费偏好</span>
                            </div>
                            <div class="p-20px">
                                <p v-for="o in 4" :key="o" class="text item">消费偏好</p>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden"
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="userConsumptionValueEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>用户消费价值</span>
                            </div>
                            <div class="p-20px">
                                <p v-for="o in 4" :key="o" class="text item">用户消费价值</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden "
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="socialAttributeEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>社会属性</span>
                            </div>
                            <div class="p-20px">
                                <div class="w-100% h-500px" ref="socialAttributeChartsRef"></div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="1.5" class="w-48% p-20px">
                        <div class="w-100% color-[#303133] overflow-hidden "
                            style="box-shadow: 0px 0px 12px rgba(0,0,0,0.12); background-color: #fff;border: 1px solid #e4e7ed;border-radius: 4px;transition:0.3;"
                            ref="mediaAttributeEl">
                            <div class="pl-16px pt-16px font-size-16px font-bold">
                                <span>媒体属性</span>
                            </div>
                            <div class="p-20px">
                                <p v-for="o in 4" :key="o" class="text item">媒体属性</p>
                            </div>
                        </div>
                    </el-col>

                </el-row>
            </el-scrollbar>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import * as echarts from 'echarts';

const router = useRouter();

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
        updateInterval = window.setInterval(updateData, 5000);
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




const personalityPreferenceEl = ref();
const interestPreferenceEl = ref();
const consumptionPreferenceEl = ref();
const userConsumptionValueEl = ref();
const socialAttributeEl = ref();
const mediaAttributeEl = ref();

const scrollToElement = (el: HTMLElement) => {
    el.scrollIntoView({ behavior: 'smooth' });
};


const socialAttributeChartsRef = ref();

onMounted(() => {
    const myChart = echarts.init(socialAttributeChartsRef.value);

    const datas = [
        [
            { name: '自由职业者', value: 26 },
            { name: '普通职员', value: 46 },
            { name: '在校学生', value: 8 },
            { name: '政府/机关干部/公务员', value: 25 },
            { name: '老板', value: 15 },
            { name: '暂无职业', value: 38 },
            { name: '其他', value: 18 }
        ],
        [
            { name: '广东', value: 38 },
            { name: '北京', value: 23 },
            { name: '重庆', value: 22 },
            { name: '成都', value: 12 },
            { name: '武汉', value: 10 },
            { name: '福建', value: 8 },
            { name: '广西', value: 6 },
            { name: '其他', value: 4 }
        ]
    ];

    const options = {
        title: {
            text: '社会属性',
            left: 'center',
            textStyle: {
                color: '#999',
                fontWeight: 'normal',
                fontSize: 14
            },
            show: false
        },
        series: datas.map((data, idx) => {
            const top = idx * 33.3;
            return {
                type: 'pie',
                radius: [20, 60],
                top: `${top}%`,
                height: '33.33%',
                left: 'center',
                width: 400,
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                label: {
                    alignTo: 'edge',
                    formatter: '{name|{b}}\n{time|{c} %}',
                    minMargin: 5,
                    edgeDistance: 10,
                    lineHeight: 15,
                    rich: {
                        time: {
                            fontSize: 10,
                            color: '#999'
                        }
                    }
                },
                labelLine: {
                    length: 15,
                    length2: 0,
                    maxSurfaceAngle: 80
                },
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                labelLayout: (params: any) => {
                    const isLeft = params.labelRect.x < myChart.getWidth() / 2;
                    const points = params.labelLinePoints;
                    // Update the end point.
                    points[2][0] = isLeft
                        ? params.labelRect.x
                        : params.labelRect.x + params.labelRect.width;
                    return {
                        labelLinePoints: points
                    };
                },
                data: data
            };
        })
    };


    myChart.setOption(options)

})
</script>

<style scoped>
/* 样式根据需要调整 */
</style>