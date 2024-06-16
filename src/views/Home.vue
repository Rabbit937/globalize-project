<template>
    <el-row class="w-100% h-100% flex justify-center">
        <el-col class="w-50% flex justify-center items-center" :span="1.5" v-for="box in boxItem" :key="box.id">
            <el-card style="max-width: 480px" class="p-60px">
                <el-button link type="primary" @click="handleClickBox(box.id)">
                    {{ box.text }}
                </el-button>
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
        text: '奇门',
        path: '/recommend'
    },
    {
        id: 2,
        text: '遁甲',
        path: '/user_behavior'
    }, {
        id: 3,
        text: '火眼',
        path: '/potential_portrait'
    }, {
        id: 4,
        text: '千手',
        path: '/delivery_strategy'
    },
]


const handleClickBox = (id: number) => {
    console.log(id)

    for (const box of boxItem) {
        if (box.id === id) {
            router.push(box.path)
        }
    }
} 
</script>