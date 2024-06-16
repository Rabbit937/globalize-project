<template>
    <el-row class="p-8px flex justify-between w-100% px-16px">
        <el-col :span="1.5" class="flex flex-wrap">
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择项目" style="width: 240px" v-model="options.projectId"></el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-date-picker v-model="options['sdate/edate']" type="daterange" unlink-panels range-separator="To"
                    start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" />
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择支付渠道" v-model="options.chId" style="width: 240px"></el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择支付习惯" v-model="options.pitId" style="width: 240px"></el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择周期" style="width: 240px" v-model="options.advId"></el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择付费档位" style="width: 240px" v-model="options.advId"></el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择平台" style="width: 240px" v-model="options.os"></el-select>
            </el-col>
            <el-col :span="1.5">
                <el-button @click="handleSearch">搜索</el-button>
            </el-col>
        </el-col>
    </el-row>


    <el-row class="px-16px">
        <el-col>
            <el-table :data="tableData" border style="width: 100% ;height:500px;" v-loading="loading">
                <el-table-column v-for="(value, key, index) in origin" :prop="key" :label="value" :width="200" align="center"/>
            </el-table>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref, onMounted, reactive } from 'vue';

const origin = {
    PGIDNAME: "父游戏",
    GID: "游戏",
    OS: "平台",
    PARTNER: "媒体渠道",
    CID: "渠道号",
    REFER: "REFER",
    UNAME: "帐号",
    UID: "UID",
    DSID: "服",
    DRID: "角色ID",
    DRNAME: "角色名称",
    PAID: "收款帐号",
    PWAY: "支付方式",
    DMONEY: "CP金额",
    MONEY: "下单金额",
    EXT1: "礼包名称",
    DUID: "设备号",
    IP: "IP",
    PROVINCE: "城市",
    BOID: "银行流水号",
    UUID: "商户订单ID",
    ATIME: "下单时间",
    PTIME: "支付时间",
    RTIME: "注册时间",
    RFGID: "归属游戏",
    R_PARTNER: "归属媒体渠道",
    FRCID: "归属渠道号",
    FRREFER: "归属REFER",
}

const tableData = ref([]);

onMounted(() => {
    getAdOverviewFunc();
})


interface IGetAdOverview {
    "sdate/edate": string;
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
        url: "/api/glo_api/_pay_log", method: 'get', data: options
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
        text: 'Last week',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setDate(start.getDate() - 7)
            return [start, end]
        },
    },
    {
        text: 'Last month',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 1)
            return [start, end]
        },
    },
    {
        text: 'Last 3 months',
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
    "sdate/edate": "",
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