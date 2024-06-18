<template>

    <HeaderVue />

    <el-row class="p-8px flex justify-between w-100% px-16px">
        <el-col :span="1.5" class="flex flex-wrap">
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select clearable placeholder="请选择项目" style="width: 240px" v-model="options.projectId">
                    <el-option v-for="(item, key) in projectJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-date-picker v-model="datePickerValue" type="daterange" unlink-panels range-separator="To"
                    start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" />
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select clearable placeholder="请选择支付渠道" v-model="options.chId" style="width: 240px">
                    <el-option v-for="(item, key) in paymentChannel" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select clearable placeholder="请选择支付习惯" v-model="options.xiguan" style="width: 240px">
                    <el-option v-for="(item, key) in paymentHabit" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select clearable placeholder="请选择周期" style="width: 240px" v-model="options.cycle">
                    <el-option v-for="(item, key) in CycleJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select clearable placeholder="请选择付费档位" style="width: 240px" v-model="options.money">
                    <el-option v-for="(item, key) in PayStallJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select clearable placeholder="请选择平台" style="width: 240px" v-model="options.os">
                    <el-option v-for="(item, key) in osJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5">
                <el-button @click="handleSearch">搜索</el-button>
            </el-col>
        </el-col>
    </el-row>


    <el-row class="px-16px">
        <el-col>
            <el-table fit :data="tableData" border style="width: 100% ;height:calc(100vh - 100px - 20px - 60px);"
                v-loading="loading">
                <el-table-column v-for="(value, key) in origin" :prop="key" :label="value" :width="200"
                    align="center" />
            </el-table>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref, onMounted, reactive, watchEffect } from 'vue';
import dayjs from 'dayjs'

import projectJson from '../data/project.json'
import paymentChannel from '../data/PaymentChannel.json'
import paymentHabit from '../data/PaymentHabit.json'
import CycleJson from '../data/Cycle.json'
import PayStallJson from '../data/PayStall.json'
import osJson from '../data/os.json'

import HeaderVue from '../components/Header.vue'

const origin = {
    YMD: "日期",
    PAY_DUID_COST: "付费单价",
    NEW_ACT_DUID: "新设备",
    NEW_REG_DUID: "新注册",
    FDAY_DUID_PAY_NUM: "新付数",
    REG_DUID_PAY_NUM_NOW: "至今新付数",
    FDAY_DUID_PAYNONE_NUM_RATE: "首充数占比",
    FDAY_DUID_PAY_RATE: "新付率",
    FDAY_DUID_PAY_ARPU: "新ARPU",
    FDAY_DUID_PAY_ARPPU: "新ARPPU",
    FDAY_DUID_PAY_MONEY: "新付费额",
    FTIME_DUID_NUM: "首次付费设备数",
    FTIME_UID_NUM: "首次付费账号数",
    FDAY_PAYTIMES: "首日付费次数",
    FDAY_PAYTIMES_COST: "首日付费成本",
    DAY7_PAYTIMES: "7日付费次数",
    DAY7_PAYTIMES_COST: "7日付费成本",
    FDAY_PAYTIMES_AD: "首日付费次数(策略后)",
    FDAY_PAYTIMES_AD_COST: "首日付费成本(策略后)",
    DAY7_PAYTIMES_AD: "7日付费次数(策略后)",
    DAY7_PAYTIMES_AD_COST: "7日付费成本(策略后)",
    ALL_ORDER_TIMES: "总下单数",
    ALL_PAY_TIMES: "总付费数",
    ALL_MONEY: "充值总额"

}

const tableData = ref([]);

onMounted(() => {
    getAdOverviewFunc();
})


interface IGetAdOverview {
    sdate: string;
    edate: string;
    chId: string;
    pitId: string;
    advId: string;
    adcountry: string;
    adtype: string;
    adtarget: string;
    os: string;

}

const getAdOverviewFunc = async (options?: IGetAdOverview) => {
    loading.value = true;
    const res = await axios({
        url: "/glo_api/_pay_overview", method: 'get', params: options
    })

    if (res.status === 200) {
        if (res.data.state === 1) {
            tableData.value = res.data.data;
            loading.value = false;
        }
    }
}



const shortcuts = [
    {
        text: '近一周',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setDate(start.getDate() - 7)
            return [start, end]
        },
    },
    {
        text: '近一个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 1)
            return [start, end]
        },
    },
    {
        text: '近三个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 3)
            return [start, end]
        },
    },
]

const loading = ref(false);

const options = reactive({
    projectId: '',
    sdate: '',
    edate: "",
    chId: "",
    pitId: "",
    advId: "",
    adcountry: "",
    adtype: "",
    adtarget: "",
    os: "",
    xiguan: "",
    cycle: "",
    money: ""
})


const handleSearch = () => {
    getAdOverviewFunc(options)
}

const datePickerValue = ref();

watchEffect(() => {

    if (datePickerValue.value) {
        const [sdate, edate] = datePickerValue.value;
        options.sdate = dayjs(sdate).format('YYYY-MM-DD');
        options.edate = dayjs(edate).format('YYYY-MM-DD');
    }

})


</script>