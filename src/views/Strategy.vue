<template>
    <el-row class="p-8px flex justify-between w-100% px-16px">
        <el-col :span="1.5" class="flex flex-wrap">
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-select placeholder="请选择项目" style="width: 240px" v-model="options.projectId">
                    <el-option v-for="(value, key, index) in projectJson" :key="key" :label="value" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-input placeholder="请输入预估价值(元)" v-model="options.value" style="width: 240px" />
            </el-col>
            <el-col :span="1.5" class="mr-4 mb-10px">
                <el-input placeholder="请输入用户定向标签" v-model="options.tag" style="width: 240px" />
            </el-col>
            <el-col :span="1.5">
                <el-button @click="handleSearch">搜索</el-button>
            </el-col>
        </el-col>
    </el-row>


    <el-row class="px-16px">
        <el-col>
            <el-table :data="tableData" border style="width: 100% ;height:500px;" v-loading="loading">
                <el-table-column v-for="(value, key, index) in origin" :prop="key" :label="value" />
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
import { ref, onMounted, reactive, computed, watchEffect } from 'vue';
import { zhCn } from "element-plus/es/locales.mjs"
import projectJson from "../data/project.json"

const currentPage = ref(1);
const pageSize = ref(20);
const total = ref();

const origin = {
    ID: "策略ID",
    STRATEGY: "用户定向标签",
    VALUE: "预估价值(元)",
    PRICE: "出价(元)",
}

const tableData = ref([]);

onMounted(() => {
    getAdOverviewFunc();
})


interface IGetAdOverview {
    projectId?: string;
    value?: string;
    tag?: string;
    page?: number;
    num?: number;
}

const getAdOverviewFunc = async (options?: IGetAdOverview) => {

    console.log(options)

    loading.value = true;
    const res = await axios({
        url: "/api/glo_api/_strategy", method: 'get', params: {
            tag: options?.tag,
            projectId: options?.projectId,
            value: options?.value,
            page: options?.page,
            num: options?.num
        }
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
    value: "",
    tag: ""
})


const handleSearch = () => {
    getAdOverviewFunc(options)
}


watchEffect(() => {
    getAdOverviewFunc({
        page: currentPage.value,
        num: pageSize.value
    })
})


const handlePageChange = (page: number) => {
    currentPage.value = page;
};

const handleSizeChange = (size: number) => {
    pageSize.value = size;
}


</script>