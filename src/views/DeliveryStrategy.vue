<template>
    <div>
        <el-table :data="paginatedData" style="width: 100%;height: 800px;" border>
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
        <el-pagination v-model:current-page="currentPage" :page-size="pageSize" :total="total"
            layout="prev, pager, next" @current-change="handlePageChange" />
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

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

const handleClick = (row: TableRow) => {
    console.log('操作按钮点击', row);
};
</script>