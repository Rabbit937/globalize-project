<template>
    <el-row class="p-8px flex justify-between w-100% px-16px">
        <el-col :span="1.5" class="flex flex-wrap">
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择项目" style="width: 240px" v-model="options.projectId">
                    <el-option v-for="(item, key) in projectJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-date-picker v-model="datePickerValue" type="daterange" unlink-panels range-separator="To"
                    start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" />
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择媒体渠道" v-model="options.chId" style="width: 240px">
                    <el-option v-for="(item, key) in mediaChannel" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>

            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择平台" v-model="options.os" style="width: 240px">
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
            <el-table :data="tableData" border style="width: 100% ;height:calc(100vh - 150px);" v-loading="loading">
                <el-table-column v-for="(value, key) in origin" :prop="key" :label="value" :width="200"
                    align="center" />
            </el-table>
            <el-config-provider :locale="zhCn">
                <el-pagination class="mt-10px" v-model:current-page="currentPage" v-model:page-size="pageSize"
                    :page-sizes="[10, 20, 50, 100]" background layout="total, sizes, prev, pager, next, jumper"
                    :total="total" @size-change="handleSizeChange" @current-change="handlePageChange" />
            </el-config-provider>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref, onMounted, reactive, watchEffect } from 'vue';
import { zhCn } from "element-plus/es/locales.mjs"
import dayjs from 'dayjs'

import projectJson from '../data/project.json'
import mediaChannel from '../data/mediaChannel.json'
import osJson from '../data/os.json'



const origin = {
    GID: "游戏ID",
    PGID: "项目ID",
    UID: "账号ID",
    DRID: "角色ID",
    DRNAME: "角色名",
    DSID: "区服ID",
    DSNAME: "区服名",
    DRLEVEL: "角色等级",
    PROPID: "活动ID",
    PROPNAME: "活动类别",
    GETWAY: "活动名称",
    MTIME: "参与时间",
}


const tableData = ref([]);
const currentPage = ref(1);
const pageSize = ref(20);
const total = ref(0);

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
    page?: number;
    num?: number;
    xuguan: string;
    cycle: string;
    money: string;
}

const getAdOverviewFunc = async (options?: IGetAdOverview) => {
    loading.value = true;
    const res = await axios({
        url: "/api/glo_api/_huodongcanyu_log", method: 'get', params: options
    })

    if (res.status === 200) {
        if (res.data.state === 1) {
            tableData.value = res.data.data;
            total.value = res.data.total;
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
    page: currentPage.value,
    num: pageSize.value,
    xuguan: "",
    cycle: "",
    money: "",
})


const datePickerValue = ref();

watchEffect(() => {

    if (datePickerValue.value) {
        const [sdate, edate] = datePickerValue.value;
        options.sdate = dayjs(sdate).format('YYYY-MM-DD');
        options.edate = dayjs(edate).format('YYYY-MM-DD');
    }

})

const handleSearch = () => {
    getAdOverviewFunc(options)
}


const handlePageChange = (page: number) => {
    options.page = page;
    getAdOverviewFunc(options)
};

const handleSizeChange = (size: number) => {
    options.num = size;
    getAdOverviewFunc(options)
}



</script>