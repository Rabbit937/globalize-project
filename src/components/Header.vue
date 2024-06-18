<template>
    <el-row>
        <el-col style="border-bottom: 1px solid #dcdfe6;" :span="4">
            <div class="w-100% h-59px flex justify-center items-center">
                <img width="120px" src="../assets/images/logo.png" alt="">
            </div>
        </el-col>
        <el-col :span="20">
            <el-menu class="font-size-28px font-bold" mode="horizontal" router style="font-size: 28px;">
                <el-menu-item index="/home">首页</el-menu-item>
                <el-sub-menu index="1">
                    <template #title>奇门</template>
                    <el-menu-item index="/recommend">素材推荐</el-menu-item>
                    <el-menu-item index="/ad_overview">广告数据追踪</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/dunjia">遁甲</el-menu-item>
                <el-sub-menu index="2">
                    <template #title>火眼</template>
                    <el-menu-item index="/potential_user_analysis">潜在用户分析</el-menu-item>
                    <el-menu-item index="/strategy">潜在用户描绘</el-menu-item>
                </el-sub-menu>
                <el-menu-item @click="handleClick">千手</el-menu-item>
            </el-menu>
        </el-col>
    </el-row>


</template>

<script lang="ts" setup>

const handleClick = () => {
    window.open('https://xmp.jiheconnect.com/overview', '_blank');
};
</script>