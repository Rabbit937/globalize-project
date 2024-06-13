<template>
    <el-row class="p-8px pt-20px">
        <el-col class="w-100%">
            <el-table :data="paginatedData"
                style="width:100%;min-height:300px;max-height: 800px;height: calc(100vh - 120px);" border>
                <el-table-column prop="material_id" label="素材ID"></el-table-column>
                <el-table-column prop="fistroi" label="预估首日ROI"></el-table-column>
                <el-table-column prop="area" label="区域"></el-table-column>
                <el-table-column prop="age" label="年龄"></el-table-column>
                <el-table-column prop="xingbie" label="性别"></el-table-column>
                <el-table-column prop="xueli" label="学历"></el-table-column>
                <el-table-column prop="buy" label="消费能力"></el-table-column>
                <el-table-column prop="net" label="用户网络"></el-table-column>
                <el-table-column prop="pinpai" label="设备品牌"></el-table-column>
                <el-table-column prop="price" label="设备价格"></el-table-column>
                <el-table-column prop="time" label="建议投放时间"></el-table-column>
                <el-table-column prop="ad" label="用户媒体" width="240"></el-table-column>
                <el-table-column label="操作" width="240">
                    <template #default>
                        <el-button type="primary" @click="handleClick()">立即创建广告</el-button>
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
import { ref, computed } from 'vue';
import { zhCn } from "element-plus/es/locales.mjs";

import policyData from '../data/policyData.json'


const tableData = ref(policyData); // 生成50条随机假数据
const currentPage = ref(1);
const pageSize = ref(50);
const total = computed(() => tableData.value.length);

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return tableData.value.slice(start, end);
});

const handlePageChange = (page: number) => {
    currentPage.value = page;
};

const handleSizeChange = (size: number) => {
    pageSize.value = size;
}

const handleClick = () => {
    window.open('https://xmp.mobvista.com/login', '_blank');
};
</script>