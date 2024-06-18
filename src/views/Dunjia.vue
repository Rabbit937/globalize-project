<template>
    <HeaderVue />

    <el-scrollbar style="height:calc(100vh - 60px);">
        <el-row class="flex justify-center" style="border-bottom: 1px solid #dcdfe6;">
            <el-col :span="3">
                <el-menu>
                    <el-sub-menu index="1">
                        <template #title>
                            <div class="flex items-center justify-center" style="user-select: none;">
                                <span>广告ID</span>
                                <el-icon class="cursor-pointer ml-4px" @click.stop="handleIconClick('advertising_id')">
                                    <Hide v-if="advertising_id_mask" />
                                    <View v-else />
                                </el-icon>
                            </div>
                        </template>
                        <el-menu-item>
                            <span v-if="advertising_id_mask">高光区域</span>
                            <span v-else>{{ maskMiddleChars('高光区域') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="advertising_id_mask">点击区域</span>
                            <span v-else>{{ maskMiddleChars('点击区域') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="advertising_id_mask">诱导卖点</span>
                            <span v-else>{{ maskMiddleChars('诱导卖点') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="advertising_id_mask">剧情公式</span>
                            <span v-else>{{ maskMiddleChars('剧情公式') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="advertising_id_mask">核心元素</span>
                            <span v-else>{{ maskMiddleChars('核心元素') }}</span>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-col>
            <el-col :span="3">
                <el-menu>
                    <el-sub-menu index="2">
                        <template #title>
                            <div class="flex items-center justify-center" style="user-select: none;">
                                <span>媒体</span>
                                <el-icon class="cursor-pointer ml-4px" @click.stop="handleIconClick('media')">
                                    <Hide v-if="media_mask" />
                                    <View v-else />
                                </el-icon>
                            </div>
                        </template>
                        <el-menu-item>
                            <span v-if="media_mask">抖音</span>
                            <span v-else>{{ maskMiddleChars('抖音') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="media_mask">快手</span>
                            <span v-else>{{ maskMiddleChars('快手') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="media_mask">微信</span>
                            <span v-else>{{ maskMiddleChars('微信') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="media_mask">新浪</span>
                            <span v-else>{{ maskMiddleChars('新浪') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="media_mask">华为</span>
                            <span v-else>{{ maskMiddleChars('华为') }}</span>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-col>


            <el-col :span="3">
                <el-menu>
                    <el-sub-menu index="3">
                        <template #title>
                            <div class="flex items-center justify-center" style="user-select: none;">
                                <span>广告位置</span>
                                <el-icon class="cursor-pointer ml-4px"
                                    @click.stop="handleIconClick('advertising_position')">
                                    <Hide v-if="advertising_position_mask" />
                                    <View v-else />
                                </el-icon>
                            </div>
                        </template>
                        <el-menu-item>
                            <span v-if="advertising_position_mask">操作习惯</span>
                            <span v-else>{{ maskMiddleChars('操作习惯') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="advertising_position_mask">视觉习惯</span>
                            <span v-else>{{ maskMiddleChars('视觉习惯') }}</span>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-col>

            <el-col :span="3">
                <el-menu>
                    <el-sub-menu index="4">
                        <template #title>
                            <div class="flex items-center justify-center" style="user-select: none;">
                                <span>注册方式</span>
                                <el-icon class="cursor-pointer ml-4px"
                                    @click.stop="handleIconClick('registration_mode')">
                                    <Hide v-if="registration_mode_mask" />
                                    <View v-else />
                                </el-icon>
                            </div>
                        </template>
                        <el-menu-item>
                            <span v-if="registration_mode_mask">邮箱</span>
                            <span v-else>{{ maskMiddleChars('邮箱') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="registration_mode_mask">电话</span>
                            <span v-else>{{ maskMiddleChars('电话') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="registration_mode_mask">facebook</span>
                            <span v-else>{{ maskMiddleChars('facebook') }}</span>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-col>

            <el-col :span="3">
                <el-menu>
                    <el-sub-menu index="5">
                        <template #title>
                            <div class="flex items-center justify-center" style="user-select: none;">
                                <span>网络</span>
                                <el-icon class="cursor-pointer ml-4px" @click.stop="handleIconClick('network')">
                                    <Hide v-if="network_mask" />
                                    <View v-else />
                                </el-icon>
                            </div>
                        </template>
                        <el-menu-item>
                            <span v-if="network_mask">IP</span>
                            <span v-else>{{ maskMiddleChars('IP') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="network_mask">联网方式</span>
                            <span v-else>{{ maskMiddleChars('联网方式') }}</span>
                        </el-menu-item>
                        <el-menu-item>
                            <span v-if="network_mask">地域</span>
                            <span v-else>{{ maskMiddleChars('地域') }}</span>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-col>

            <el-col :span="3">
                <el-menu>
                    <el-sub-menu index="6">
                        <template #title>
                            <div class="flex items-center justify-center" style="user-select: none;">
                                <span>活跃</span>
                                <el-icon class="cursor-pointer ml-4px" @click.stop="handleIconClick('active')">
                                    <Hide v-if="active_mask" />
                                    <View v-else />
                                </el-icon>
                            </div>
                        </template>
                        <el-menu-item @click="router.push('/loginlog')">
                            <span v-if="active_mask">登录时间</span>
                            <span v-else>{{ maskMiddleChars('登录时间') }}</span>
                        </el-menu-item>
                        <el-menu-item @click="router.push('/zhuxianlog')">
                            <span v-if="active_mask">主线进程</span>
                            <span v-else>{{ maskMiddleChars('主线进程') }}</span>
                        </el-menu-item>
                        <el-menu-item @click="router.push('/fubenlog')">
                            <span v-if="active_mask">副玩法进程</span>
                            <span v-else>{{ maskMiddleChars('副玩法进程') }}</span>
                        </el-menu-item>
                        <el-menu-item @click="router.push('/hexindaojulog')">
                            <span v-if="active_mask">核心道具获取</span>
                            <span v-else>{{ maskMiddleChars('核心道具获取') }}</span>
                        </el-menu-item>
                        <el-menu-item @click="router.push('/hexindhuzhichengzhanglog')">
                            <span v-if="active_mask">核心数值成长</span>
                            <span v-else>{{ maskMiddleChars('核心数值成长') }}</span>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-col>

            <el-col :span="3">
                <el-menu>
                    <el-sub-menu index="7">
                        <template #title>
                            <div class="flex items-center justify-center" style="user-select: none;">
                                <span>付费</span>
                                <el-icon class="cursor-pointer ml-4px" @click.stop="handleIconClick('pay')">
                                    <Hide v-if="pay_mask" />
                                    <View v-else />
                                </el-icon>
                            </div>
                        </template>
                        <el-menu-item @click="router.push('/paylog')">
                            <span v-if="pay_mask">支付习惯</span>
                            <span v-else>{{ maskMiddleChars('支付习惯') }}</span>
                        </el-menu-item>
                        <el-menu-item @click="router.push('/paytimelog')">
                            <span v-if="pay_mask">支付时间</span>
                            <span v-else>{{ maskMiddleChars('支付时间') }}</span>
                        </el-menu-item>
                        <el-menu-item @click="router.push('/daymoneylog')">
                            <span v-if="pay_mask">日均金额</span>
                            <span v-else>{{ maskMiddleChars('日均金额') }}</span>
                        </el-menu-item>
                        <el-menu-item @click="router.push('/monthmoneylog')">
                            <span v-if="pay_mask">月均金额</span>
                            <span v-else>{{ maskMiddleChars('月均金额') }}</span>
                        </el-menu-item>
                        <el-menu-item @click="router.push('/dangweimoneylog')">
                            <span v-if="pay_mask">档位购买习惯</span>
                            <span v-else>{{ maskMiddleChars('档位购买习惯') }}</span>
                        </el-menu-item>
                        <el-menu-item @click="router.push('/huodongcanyulog')">
                            <span v-if="pay_mask">活动推送参与</span>
                            <span v-else>{{ maskMiddleChars('活动推送参与') }}</span>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-col>
        </el-row>

        <el-row style="border-bottom: 1px solid #dcdfe6;">
            <el-col :span="1.5" class="px py w-100% flex flex-justify-between"
                style="border-bottom: 1px solid #dcdfe6;">
                <span class="font-size-20px font-700">活跃情况</span>
                <el-button @click="enterOptOverview">进入数据报表</el-button>
            </el-col>

            <el-col>
                <div class="bar w-100% h-400px" ref="barChart"></div>
            </el-col>
        </el-row>


        <el-row style="border-bottom: 1px solid #dcdfe6;">
            <el-col :span="1.5" class="px py w-100% flex flex-justify-between"
                style="border-bottom: 1px solid #dcdfe6;">
                <span class="font-size-20px font-700">付费情况</span>
                <el-button @click="enterPayOverview">进入数据报表</el-button>
            </el-col>

            <el-col>
                <div class="bar w-100% h-400px" ref="bar2Chart"></div>
            </el-col>
        </el-row>
    </el-scrollbar>

</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { useRouter } from 'vue-router';

import HeaderVue from '../components/Header.vue'

const router = useRouter();

const barChart = ref();

onMounted(() => {
    const myChart = echarts.init(barChart.value);

    const options = {
        title: {
            // text: '柱状图示例'
        },
        tooltip: {},
        legend: {
            // data: ['销量']
        },
        xAxis: {
            data: ["登录率", "主线完成率", "副本参与率", "核心道具获取进度", "核心数值成长进度"],
            axisLabel: {
                interval: 0,
                rotate: 0,
                // 鼠标悬停时改变样式
                textStyle: {
                    color: '#000',
                    fontSize: 12,
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }
            }
        },
        yAxis: {
            type: 'value',
            max: 100,
            axisLabel: {
                formatter: (value: number) => {
                    return `${value}%`;
                }
            }
        },
        series: [{
            // name: '销量',
            type: 'bar',
            barWidth: '30%', // 设置柱子的宽度
            data: [55, 50, 70, 60, 90,]
        }],
        axisPointer: {
            show: true,
            type: 'shadow',
            label: {
                show: true
            }
        }
    };


    myChart.setOption(options)

    // 添加 X 轴标签点击事件
    myChart.getZr().on('click', (params) => {
        const pointInPixel = [params.offsetX, params.offsetY];
        if (myChart.containPixel({ xAxisIndex: 0 }, pointInPixel)) {
            const xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)[0];
            const xValue = options.xAxis.data[xIndex];
            alert(`你点击了${xValue}的标签`);
        }
    });

})



const bar2Chart = ref();

onMounted(() => {
    const myChart = echarts.init(bar2Chart.value);

    const options = {
        title: {
            // text: '柱状图示例'
        },
        tooltip: {},
        legend: {
            // data: ['销量']
        },
        xAxis: {
            data: ["支付习惯", "支付时间", "日均金额", "月均金额", "档位购买习惯", "活动推送参与"],
            axisLabel: {
                interval: 0,
                rotate: 0,
                // 鼠标悬停时改变样式
                textStyle: {
                    color: '#000',
                    fontSize: 12,
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }
            }
        },
        yAxis: {},
        series: [{
            // name: '销量',
            type: 'bar',
            barWidth: '30%', // 设置柱子的宽度
            data: [500000, 2000000, 360001, 1032113, 1000001, 200000]
        }],
        axisPointer: {
            show: true,
            type: 'shadow',
            label: {
                show: true
            }
        }
    };


    myChart.setOption(options)

    // 添加 X 轴标签点击事件
    myChart.getZr().on('click', (params) => {
        const pointInPixel = [params.offsetX, params.offsetY];
        if (myChart.containPixel({ xAxisIndex: 0 }, pointInPixel)) {
            const xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)[0];
            const xValue = options.xAxis.data[xIndex];
            alert(`你点击了${xValue}的标签`);
        }
    });

})


const enterOptOverview = () => {
    router.push('/optoverview')
}

const enterPayOverview = () => {
    router.push('/payoverview')
}


const pay_mask = ref(false);
const active_mask = ref(false);
const network_mask = ref(false);
const registration_mode_mask = ref(false);
const advertising_position_mask = ref(false);
const media_mask = ref(false);
const advertising_id_mask = ref(false)

const handleIconClick = (type: string) => {

    if (type === 'pay') {
        pay_mask.value = !pay_mask.value;
    }


    if (type === 'active') {
        active_mask.value = !active_mask.value;
    }

    if (type === 'network') {
        network_mask.value = !network_mask.value;
    }

    if (type === 'registration_mode') {
        registration_mode_mask.value = !registration_mode_mask.value;
    }

    if (type === 'advertising_position') {
        advertising_position_mask.value = !advertising_position_mask.value;
    }

    if (type === 'media') {
        media_mask.value = !media_mask.value;
    }

    if (type === 'advertising_id') {
        advertising_id_mask.value = !advertising_id_mask.value;
    }
}



const maskMiddleChars = (text: string) => {
    if (text.length <= 1) {
        return text;
    }

    const maskLength = text.length - 1;
    const frontChars = text.slice(0, 1);
    // const backChars = text.slice(-1);

    return frontChars + '*'.repeat(maskLength);
}

</script>