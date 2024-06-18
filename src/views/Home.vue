<template>
    <el-row class="w-100% h-100% flex justify-center">
        <el-col class="w-50% flex justify-center items-center" :span="1.5" v-for="box in boxItem" :key="box.id">
            <div class="w-20vw">
                <div class="text-center font-size-30px font-bold bg-[#e9c353] h-50px line-height-50px"
                    :style="{ backgroundColor: box.bg1 }" style="border-radius: 8px  8px 0px 0;">
                    <span>{{ box.title }}</span>
                </div>
                <div class="bg-[#e9d38e] p-1vw h-100px" style="border-radius: 0px  0px 8px 8px;"
                    :style="{ backgroundColor: box.bg2 }">
                    <div class="bg-[#eddec4] p-10px px-26px  cursor-pointer tracking-1px flex justify-between items-center"
                        @click="handleMenuItem(box.itemPath)" style="border-radius: 8px"
                        :style="{ backgroundColor: box.bg3 }">

                        <div>
                            <span>
                                {{ box.itemText }}
                            </span>
                        </div>
                        <div class="w-25px h-25px">
                            <img width="100%" height="100%" :src="box.icon1" alt="">
                        </div>
                    </div>
                    <div v-if="box.itemTwoText"
                        class="bg-[#eddec4] p-10px px-26px mt-8px  cursor-pointer tracking-1px flex justify-between items-center"
                        @click="handleMenuItem(box.itemTwoPath)" style="border-radius: 8px"
                        :style="{ backgroundColor: box.bg3 }">
                        <div>
                            <span>
                                {{ box.itemTwoText }}
                            </span>
                        </div>
                        <div class="w-25px h-25px">
                            <img width="100%" height="100%" :src="box.icon2" alt="">
                        </div>
                    </div>
                </div>


            </div>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import tuijian from '../assets/images/tuijian.png'
import zhuizhong from '../assets/images/zhuizhong.png'
import dunjia from '../assets/images/dunjia.png'
import fenxi from '../assets/images/fenxi.png'
import miaoshu from '../assets/images/miaoshu.png'
import baibian from '../assets/images/baibian.png'

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
        bg2: "#e9d38e",
        bg3: "#eddec4",
        icon1: tuijian,
        icon2: zhuizhong
    },
    {
        id: 2,
        title: '遁甲',
        itemText: '遁甲',
        itemPath: '/dunjia',
        bg1: "#9db4c0",
        bg2: "#c0e1e2",
        bg3: "#d9edee",
        icon1: dunjia,
    }, {
        id: 3,
        title: '火眼',
        itemText: '潜在用户分析',
        itemPath: '/potential_user_analysis',
        itemTwoText: '潜在用户描绘',
        itemTwoPath: '/strategy',
        bg1: '#e39e90',
        bg2: "#ebd2bf",
        bg3: "#f4f1e7",
        icon1: fenxi,
        icon2: miaoshu
    }, {
        id: 4,
        title: '千手',
        itemText: '百变千手',
        itemPath: 'https://xmp.jiheconnect.com/overview',
        bg1: '#ab96b3',
        bg2: "#ddc6e1",
        bg3: "#efe0f3",
        icon1: baibian,

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