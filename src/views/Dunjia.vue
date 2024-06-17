<template>
    <el-row class="flex justify-center" style="border-bottom: 1px solid #dcdfe6;">
        <el-col :span="3">
            <el-menu>
                <el-sub-menu>
                    <template #title>
                        <span>广告ID</span>
                    </template>
                    <el-menu-item>
                        <span>高光区域</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>点击区域</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>诱导卖点</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>剧情公式</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>核心元素</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>
        <el-col :span="3">
            <el-menu>
                <el-sub-menu>
                    <template #title>
                        <span>媒体</span>
                    </template>
                    <el-menu-item>
                        <span>抖音</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>快手</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>微信</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>新浪</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>华为</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>


        <el-col :span="3">
            <el-menu>
                <el-sub-menu>
                    <template #title>
                        <span>广告位置</span>
                    </template>
                    <el-menu-item>
                        <span>操作习惯</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>视觉习惯</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>

        <el-col :span="3">
            <el-menu>
                <el-sub-menu>
                    <template #title>
                        <span>注册方式</span>
                    </template>
                    <el-menu-item>
                        <span>邮箱</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>电话</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>facebook</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>

        <el-col :span="3">
            <el-menu>
                <el-sub-menu>
                    <template #title>
                        <span>网络</span>
                    </template>
                    <el-menu-item>
                        <span>IP</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>联网方式</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>地域</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>

        <el-col :span="3">
            <el-menu>
                <el-sub-menu>
                    <template #title>
                        <span>活跃</span>
                    </template>
                    <el-menu-item @click="router.push('/loginlog')">
                        <span>登录时间</span>
                    </el-menu-item>
                    <el-menu-item @click="router.push('/zhuxianlog')">
                        <span>主线进程</span>
                    </el-menu-item>
                    <el-menu-item @click="router.push('/fubenlog')">
                        <span>副玩法进程</span>
                    </el-menu-item>
                    <el-menu-item @click="router.push('/hexindaojulog')">
                        <span>核心道具获取</span>
                    </el-menu-item>
                    <el-menu-item @click="router.push('/hexindhuzhichengzhanglog')">
                        <span>核心数值成长</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>

        <el-col :span="3">
            <el-menu>
                <el-sub-menu>
                    <template #title>
                        <span>付费</span>
                    </template>
                    <el-menu-item @click="router.push('/paylog')">
                        <span>支付习惯</span>
                    </el-menu-item>
                    <el-menu-item @click="router.push('/paytimelog')">
                        <span>支付时间</span>
                    </el-menu-item>
                    <el-menu-item @click="router.push('/daymoneylog')">
                        <span>日均金额</span>
                    </el-menu-item>
                    <el-menu-item @click="router.push('/monthmoneylog')">
                        <span>月均金额</span>
                    </el-menu-item>
                    <el-menu-item @click="router.push('/dangweimoneylog')">
                        <span>档位购买习惯</span>
                    </el-menu-item>
                    <el-menu-item @click="router.push('/huodongcanyulog')">
                        <span>活动推送参与</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>
    </el-row>

    <el-row style="border-bottom: 1px solid #dcdfe6;">
        <el-col :span="1.5" class="px py w-100% flex flex-justify-between" style="border-bottom: 1px solid #dcdfe6;">
            <span class="font-size-20px font-700">活跃情况</span>
            <el-button @click="enterOptOverview">进入数据报表</el-button>
        </el-col>

        <el-col>
            <div class="bar w-100% h-400px" ref="barChart"></div>
        </el-col>
    </el-row>


    <el-row style="border-bottom: 1px solid #dcdfe6;">
        <el-col :span="1.5" class="px py w-100% flex flex-justify-between" style="border-bottom: 1px solid #dcdfe6;">
            <span class="font-size-20px font-700">付费情况</span>
            <el-button @click="enterPayOverview">进入数据报表</el-button>
        </el-col>

        <el-col>
            <div class="bar w-100% h-400px" ref="bar2Chart"></div>
        </el-col>
    </el-row>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { useRouter } from 'vue-router';

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
        yAxis: {},
        series: [{
            // name: '销量',
            type: 'bar',
            barWidth: '30%', // 设置柱子的宽度
            data: [50000, 200000, 360000, 100000, 100000, 200000]
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

const enterPayLog = () => {
    router.push('/paylog')
}


const enterLoginLog = () => {
    router.push('/loginlog')

}



</script>