<template>
    <el-row class="w-100% h-100% flex justify-center">
        <el-col class="w-50% flex justify-center items-center" :span="1.5" v-for="box in boxItem" :key="box.id">
            <!-- <el-card class="w-500px" shadow="hover">
                <template #header>
                    <div class="font-size-20px font-bold">
                        <span>{{ box.title }}</span>
                    </div>
                </template>
<el-menu>
    <el-menu-item @click="handleMenuItem(box.itemPath)">{{ box.itemText }}</el-menu-item>
    <el-menu-item @click="handleMenuItem(box.itemTwoPath)">{{ box.itemTwoText }}</el-menu-item>
</el-menu>
</el-card> -->
            <div class="text-center w-20vw" style="border: 1px solid #73726f;">
                <div class="font-size-20px font-bold bg-[#e9c353] h-50px line-height-50px"
                    :style="{ backgroundColor: box.bg1 }">
                    <span>{{ box.title }}</span>
                </div>


                <template v-if="box.itemTwoPath">
                    <div class="bg-[#edd28c] h-50px font-400 line-height-50px cursor-pointer"
                        style="border-top: 1px solid #73726f;border-bottom: 1px solid #73726f;"
                        :style="{ backgroundColor: box.bg2 }" @click="handleMenuItem(box.itemPath)">
                        <span>
                            {{ box.itemText }}
                        </span>
                    </div>
                    <div class="bg-[#efdec3] h-50px font-400 line-height-50px cursor-pointer"
                        :style="{ backgroundColor: box.bg3 }" @click="handleMenuItem(box.itemTwoPath)">
                        <span>
                            {{ box.itemTwoText }}
                        </span>
                    </div>
                </template>
                <template v-else>
                    <div class="bg-[#efdec3] h-100px font-400 line-height-100px cursor-pointer"
                        style="border-top: 1px solid #73726f;" :style="{ backgroundColor: box.bg2 }"
                        @click="handleMenuItem(box.itemPath)">
                        <span>
                            {{ box.itemText }}
                        </span>
                    </div>
                </template>


            </div>
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
        itemTwoPath: '/ad_overview',
        bg1: '#e9c353',
        bg2: "#edd28c",
        bg3: "#efdec3"
    },
    {
        id: 2,
        title: '遁甲',
        itemText: '遁甲',
        itemPath: '/dunjia',
        bg1: "#9ac19b",
        bg2: "#d2eddb"
    }, {
        id: 3,
        title: '火眼',
        itemText: '潜在用户分析',
        itemPath: '/potential_user_analysis',
        itemTwoText: '潜在用户描绘',
        itemTwoPath: '/strategy',
        bg1: '#e99c8f',
        bg2: "#eed2bf",
        bg3: "#f5f1e7"
    }, {
        id: 4,
        title: '千手',
        itemText: '百变千手',
        itemPath: 'https://xmp.jiheconnect.com/overview',
        bg1: "#ac96b4",
        bg2: "#dec6e2"
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