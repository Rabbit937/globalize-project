<template>
    <HeaderVue />

    <el-row class="p-8px flex justify-between w-100% px-16px">
        <el-col :span="1.5" class="flex flex-wrap">
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择项目" style="width: 240px" v-model="options.projectId">
                    <el-option v-for="(item, key) in projectJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <!-- <el-col :span="1.5" class="mr-4 mb-10px">
                <el-date-picker v-model="datePickerValue" type="daterange" unlink-panels range-separator="To"
                    start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" />
            </el-col> -->
            <!-- <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择媒体渠道" v-model="options.chId" style="width: 240px">
                    <el-option v-for="(item, key) in mediaChannel" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col> -->
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-input placeholder="请输入预估价值(元)" v-model="options.value" style="width: 240px" />
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-input placeholder="请输入用户定向标签" v-model="options.tag" style="width: 240px" />
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
            <el-table :data="tableData" border style="width: 100% ;height:calc(100vh - 150px - 30px);"
                v-loading="loading">
                <el-table-column v-for="(value, key) in origin" :prop="key" :label="value" :width="200" align="center">
                    <template #header>
                        <div class="flex items-center justify-center" style="user-select: none;">
                            <span> {{ value }}</span>
                            <el-icon v-if="key === 'ID'" class="cursor-pointer ml-4px">
                                <el-icon @click="toggleColumn(key)">
                                    <View v-if="id_mask" />
                                    <Hide v-else />
                                </el-icon>
                            </el-icon>
                            <el-icon v-if="key === 'STRATEGY'" class="cursor-pointer ml-4px">
                                <el-icon @click="toggleColumn(key)">
                                    <View v-if="strategy_mask" />
                                    <Hide v-else />
                                </el-icon>
                            </el-icon>
                        </div>
                    </template>

                    <template #default="scope">
                        <span v-if="key === 'ID' && id_mask">{{ maskMiddleChars(scope.row[key]) }}</span>
                        <span v-else-if="key === 'STRATEGY' && strategy_mask">{{
                            maskMiddleChars(scope.row[key])
                            }}</span>
                        <span v-else>{{ scope.row[key] }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="240">
                    <template #default>
                        <el-button type="primary" @click="handleClick" :width="200" align="center">立即创建广告</el-button>
                    </template>
                </el-table-column>
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

import HeaderVue from '../components/Header.vue'

import projectJson from '../data/project.json'
import osJson from '../data/os.json'

const origin = {
    ID: "策略回调",
    AGE: "年龄",
    XINGBIE: "性别",
    NET: "网络",
    DEVICE_PRICE: "设备价格",
    TIME: "投放时间段",
    STRATEGY: "用户定向",
    VALUE: "预估价值(元)",
    PRICE: "出价(元)",
    // BTN: "立即创建广告",
}

const id_mask = ref(true)
const strategy_mask = ref(true)

const toggleColumn = (key: string) => {
    console.log(key)

    if (key === 'ID') {
        id_mask.value = !id_mask.value;
    }

    if (key === 'STRATEGY') {
        strategy_mask.value = !strategy_mask.value;
    }
}


const maskMiddleChars = (text: string) => {
    if (text.length <= 8) {
        return text;
    }

    const maskLength = text.length - 4;
    const frontChars = text.slice(0, 2);
    const backChars = text.slice(-2);

    return frontChars + '*'.repeat(maskLength) + backChars;
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
    value: string;
    tag: string
}

const getAdOverviewFunc = async (options?: IGetAdOverview) => {
    loading.value = true;
    const res = await axios({
        url: "/glo_api/_strategy", method: 'get', params: options
    })

    if (res.status === 200) {
        if (res.data.state === 1) {
            tableData.value = res.data.data;
            total.value = res.data.total;
            loading.value = false;
        }
    }
}


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
    value: "",
    tag: ""
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


const handleClick = () => {
    window.open('https://xmp.jiheconnect.com/overview', '_blank');
};


</script>