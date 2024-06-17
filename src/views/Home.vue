<template>
    <el-row class="w-100% h-100% flex justify-center">
        <el-col class="w-50% flex justify-center items-center" :span="1.5" v-for="box in boxItem" :key="box.id">
            <el-card style="max-width: 480px" class="w-500px" shadow="hover">
                <template #header>
                    <div class="font-size-20px font-bold">
                        <span>{{ box.title }}</span>
                    </div>
                </template>

                <el-menu>
                    <el-menu-item @click="handleMenuItem(box.itemPath)">{{ box.itemText }}</el-menu-item>
                    <el-menu-item @click="handleMenuItem(box.itemTwoPath)">{{ box.itemTwoText }}</el-menu-item>
                </el-menu>


            </el-card>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();

const boxItem = [
    {
        id: 1,
        title: '奇门',
        itemText: '素材推荐',
        itemPath: '/recommend',
        itemTwoText: '广告数据追踪',
        itemTwoPath: '/ad_overview'
    },
    {
        id: 2,
        title: '遁甲',
        itemText: '遁甲',
        itemPath: '/dunjia',
        // itemTwoText: '广告数据追踪',
        // itemTwoPath: '/ad_overview'
    }, {
        id: 3,
        title: '火眼',
        itemText: '潜在用户分析',
        itemPath: '/potential_user_analysis',
        itemTwoText: '潜在用户描绘',
        itemTwoPath: '/strategy'
    }, {
        id: 4,
        title: '千手',
        itemText: '百变千手',
        itemPath: 'https://xmp.jiheconnect.com/overview',
    },
]

const handleMenuItem = (path: string | undefined) => {
    if (path) {
        if (path.startsWith("https://")) {
            handleOpenClick(path)
        } else {
            router.push(path);
        }
    }
}

const handleOpenClick = (path: string) => {
    window.open(path, '_blank');
};
</script>