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
                <el-select placeholder="请选择媒体渠道" v-model="options.chId" style="width: 240px"></el-select>
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
    ID: "登录ID",
    PID: "媒体渠道",
    GID: "游戏",
    PGID: "项目",
    REFER: "广告编号",
    OS: "平台",
    DUID: "设备号",
    VERSION: "游戏版本",
    SDKVER: "SDK版本",
    UID: "账号ID",
    UNAME: '账号',
    IP: "登录IP",
    PROVINCE: "登录省份",
    CITY: "登录城市",
    RTIME: "注册时间",
    YMD: "注册日期",
    ATIME: "登录时间"

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
        url: "/api/glo_api/_login_log", method: 'get', data: options
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