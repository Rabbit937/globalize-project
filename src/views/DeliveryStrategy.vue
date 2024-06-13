<template>

    <el-row class="p-8px">
        <el-col>
            <div class="font-size-24px font-bold">
                <span>投放策略</span>
            </div>
        </el-col>
    </el-row>

    <el-row class="p-8px">
        <el-col class="w-100%">
            <el-table :data="paginatedData"
                style="width:100%;min-height:300px;max-height: 800px;height: calc(100vh - 120px);" border>
                <el-table-column prop="strategy" label="策略"></el-table-column>
                <el-table-column prop="material" label="素材"></el-table-column>
                <el-table-column prop="cost" label="消耗5000"></el-table-column>
                <el-table-column prop="roi" label="ROI到90%"></el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary" @click="handleClick(scope.row)">操作</el-button>
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


interface TableRow {
    strategy: string;
    material: string;
    cost: number;
    roi: string;
}

// 生成随机假数据
const generateRandomData = (count: number): TableRow[] => {
    const data: TableRow[] = [];
    for (let i = 1; i <= count; i++) {
        data.push({
            strategy: `策略${i}`,
            material: `素材${Math.floor(Math.random() * 100)}`,
            cost: Math.floor(Math.random() * 10000),
            roi: `${Math.floor(Math.random() * 100)}%`
        });
    }
    return data;
};

const tableData = ref<TableRow[]>(generateRandomData(5000)); // 生成50条随机假数据
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

const handleClick = (row: TableRow) => {
    console.log('操作按钮点击', row);
    window.open('https://xmp.mobvista.com/login', '_blank');
};
</script>