<template>

    <HeaderVue />

    <el-row class="p-8px flex justify-between w-100% px-16px">
        <el-col :span="1.5" class="flex flex-wrap">
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择项目" style="width: 240px" v-model="options.projectId">
                    <el-option v-for="(item, key) in projectJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-date-picker v-model="datePickerValue" type="daterange" unlink-panels range-separator="To"
                    start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" :format="'YYYY-MM-DD'" />
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择媒体渠道" v-model="options.chId" style="width: 240px">
                    <el-option v-for="(item, key) in mediaChannelJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择周期" v-model="options.cycle" style="width: 240px">
                    <el-option v-for="(item, key) in CycleJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择金额类别" style="width: 240px" v-model="options.moneytype">
                    <el-option v-for="(item, key) in MoneyType" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择平台" style="width: 240px" v-model="options.os">
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
            <el-table :data="tableData" border style="width: 100% ;height:calc(100vh - 100px - 20px - 60px);"
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
import dayjs from 'dayjs';
import projectJson from '../data/project.json'
import mediaChannelJson from '../data/mediaChannel.json'
import CycleJson from '../data/Cycle.json'
import osJson from '../data/os.json'
import MoneyType from '../data/MoneyType.json'
import HeaderVue from '../components/Header.vue'


const origin = {
    YMD: "日期",
    NEW_ACT_DUID: "新设备",
    NEW_REG_DUID: "新注册",
    NEW_CREATE_ROLE: "新创角",
    ACT_REG_RATE: "注册率",
    REG_ROLE_RATE: "创角率",
    FDAY_DUID_PAY_RATE: "新付率",
    NEW_REG_ARPU: "新ARPU",
    NEW_PAY_ARPPU: "新付ARPPU",
    FDAY_UID_PAY_NUM: "新付账号数",
    FDAY_DUID_PAY_NUM: "新付数",
    FDAY_DUID_PAY_MONEY: "新付金额",
    DUID_LANUCH: "启动设备",
    DUID_LOGIN: "登录设备",
    UID_LOGIN: "活跃账号",
    UID_LOGIN_PAY_RATE: "活跃付费率",
    UID_LOGIN_ARPU: "活跃ARPU",
    UID_PAY_ARPPU: "活跃ARPPU",
    DUID_ENTER: "设备进入",
    ALL_PAY_UID_NUM: "付费账号数",
    DAYMONEY: "充值日期新增总额",
    ALL_MONEY: "充值总额",
    ALL_PAY_DUID_NUM: "付费数",
    DUID_LOGIN_RATE: "登录率",
    DUID_ENTER_RATE: "进入率",
    ALL_PAY_TIMES_RATE: "付款率",
    RATE_RETAIN_TO_NOW: "至今留存",
    RATE_RETAIN2: "次留",
    RATE_RETAIN3: "3留",
    RATE_RETAIN7: "7留",
    RATE_PAYRETAIN_TO_NOW: "至今付费留存",
    RATE_PAYRETAIN2: "次付留",
    RATE_PAYRETAIN3: "3付留",
    RATE_PAYRETAIN7: "7付留",
    LTV_TO_NOW: "至今LTV",
    LTV1: "LTV1",
    LTV3: "LTV3",
    LTV7: "LTV7",
    ROI_TO_NOW: "至今ROI",
    ROI1: "ROI1",
    ROI3: "ROI3",
    ROI7: "ROI7",
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
    cycle: string;
    moneytype: string;
}

const getAdOverviewFunc = async (options?: IGetAdOverview) => {
    loading.value = true;
    const res = await axios({
        url: "/glo_api/_opt_overview", method: 'get', params: options
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
    sdate: "",
    edate: "",
    chId: "",
    pitId: "",
    advId: "",
    adcountry: "",
    adtype: "",
    adtarget: "",
    os: "",
    cycle: "",
    moneytype: ""
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