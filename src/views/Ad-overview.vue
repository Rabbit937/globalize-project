<template>
    <HeaderVue />
    <el-row class="p-8px flex justify-between w-100% px-16px">
        <el-col :span="1.5" class="flex flex-wrap">
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择项目" style="width: 240px" v-model="options.projectId" clearable>
                    <el-option v-for="(item, key) in projectJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-date-picker v-model="datePickerValue" type="daterange" unlink-panels range-separator="To"
                    start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" :format="'YYYY-MM-DD'" />
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择媒体渠道" v-model="options.chId" style="width: 240px" clearable>
                    <el-option v-for="(item, key) in mediaChannelJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择优化师" v-model="options.pitId" style="width: 240px" clearable>
                    <el-option v-for="(item, key) in OptimizedDivisionJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择投放账户" style="width: 240px" v-model="options.advId" clearable>
                    <el-option v-for="(item, key) in DeliveryAccountJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择投放主体" style="width: 240px" v-model="options.adcountry" clearable>
                    <el-option v-for="(item, key) in DeliverySubject" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择广告类型" style="width: 240px" v-model="options.adtype" clearable>
                    <el-option v-for="(item, key) in AdtypeJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择优化目标" style="width: 240px" v-model="options.adtarget" clearable>
                    <el-option v-for="(item, key) in AdtargetJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择平台" style="width: 240px" v-model="options.os" clearable>
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
import HeaderVue from '../components/Header.vue'

import projectJson from '../data/project.json'
import mediaChannelJson from '../data/mediaChannel.json'
import OptimizedDivisionJson from '../data/OptimizedDivision.json'
import DeliveryAccountJson from '../data/DeliveryAccount.json'
import DeliverySubject from '../data/DeliverySubject.json'
import AdtypeJson from '../data/Adtype.json'
import AdtargetJson from '../data/Adtarget.json'
import osJson from '../data/os.json'

const origin = {
    YMD: "日期",
    ADID: "广告ID",
    AD_COST: "广告金额",
    ACT_COST: "激活单价",
    REG_DUID_COST: "注册单价",
    ROLE_COST: "创角单价",
    PAY_DUID_COST: "付费单价",
    NEW_ACT_DUID: "新设备",
    NEW_REG_DUID: "新注册",
    NEW_CREATE_ROLE: "新创角",
    FDAY_DUID_PAY_NUM: "新付数",
    REG_DUID_PAY_NUM_NOW: "至今新付数",
    FDAY_DUID_PAYNONE_NUM_RATE: "首充数占比",
    ACT_REG_RATE: "注册率",
    REG_ROLE_RATE: "创角率",
    FDAY_DUID_PAY_RATE: "新付率",
    FDAY_DUID_PAY_ARPU: "新ARPU",
    FDAY_DUID_PAY_ARPPU: "新ARPPU",
    FDAY_DUID_PAY_MONEY: "新付费额",
    ALL_MONEY: "充值总额",
    FDAY_PAYTIMES: "首日付费次数",
    FDAY_PAYTIMES_COST: "首日付费成本",
    DAY7_PAYTIMES: "7日付费次数",
    DAY7_PAYTIMES_COST: "7日付费成本",
    FDAY_PAYTIMES_AD: "首日付费次数(策略后)",
    FDAY_PAYTIMES_AD_COST: "首日付费成本(策略后)",
    DAY7_PAYTIMES_AD: "7日付费次数(策略后)",
    DAY7_PAYTIMES_AD_COST: "7日付费成本(策略后)",
    ROI_TO_NOW: "至今ROI",
    ROI1: "ROI1",
    ROI3: "ROI3",
    ROI5: "ROI5",
    ROI7: "ROI7",
    ROI15: "ROI15",
    ROI30: "ROI30",
    roi_mul_3: "ROI3日倍数",
    roi_mul_5: "ROI5日倍数",
    roi_mul_7: "ROI7日倍数",
    roi_mul_15: "ROI15日倍数",
    roi_mul_30: "ROI30日倍数",
    RATE_RETAIN_TO_NOW: "至今留存",
    RATE_RETAIN2: "次留",
    RATE_RETAIN3: "3留",
    RATE_RETAIN5: "5留",
    RATE_RETAIN7: "7留",
    RATE_RETAIN15: "15留",
    RATE_RETAIN30: "30留",
}

const tableData = ref([]);

onMounted(() => {
    getAdOverviewFunc();
})

const datePickerValue = ref();

watchEffect(() => {

    if (datePickerValue.value) {
        const [sdate, edate] = datePickerValue.value;
        options.sdate = dayjs(sdate).format('YYYY-MM-DD');
        options.edate = dayjs(edate).format('YYYY-MM-DD');
    }

})


interface IGetAdOverview {
    edate: string;
    sdate: string;
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
        url: "/glo_api/_ad_overview", method: 'get', params: options
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
    edate: '',
    chId: "",
    pitId: "",
    advId: "",
    adcountry: "",
    adtype: "",
    adtarget: "",
    os: ""
})


const handleSearch = () => {
    getAdOverviewFunc(options)
}



</script>