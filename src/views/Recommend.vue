<template>
    <el-tabs type="card" style="height: 100%" class="demo-tabs">
        <el-tab-pane label="推荐">
            <el-row class="p-16px">
                <el-col :span="1.5" class="mr-4">
                    <el-input placeholder="请输入关键词">

                    </el-input>
                </el-col>
            </el-row>
            <el-row class="p-16px">
                <el-scrollbar style="width:100%;height: 500px;max-height: 800px;min-height: 300px;">
                    <ul class="flex flex-wrap p-0px overflow-auto">
                        <li class="w-200px h-160px list-none" v-for="n in 100">
                            {{ n }}
                        </li>
                    </ul>
                </el-scrollbar>
                <el-pagination style="mt-20px" background layout="prev, pager, next" :total="100" />
            </el-row>
        </el-tab-pane>
        <el-tab-pane label=" 效果">
            <el-table :data="tableData">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
            </el-table>
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>

<style></style>