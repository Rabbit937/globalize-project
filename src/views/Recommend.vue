<template>
    <HeaderVue />
    <el-row class="p-8px flex justify-between">
        <el-col :span="1.5" class="flex">
            <el-col :span="1.5" class="mr-4">
                <el-select placeholder="请选择项目" style="width: 240px" v-model="projectId">
                    <el-option v-for="(item, key) in projectJson" :key="key" :label="item" :value="key" />
                </el-select>
            </el-col>
            <el-col :span="1.5" class="mr-4">
                <el-button ref="buttonRef" v-click-outside="onClickOutside">推荐偏好</el-button>
                <el-popover ref="popoverRef" :virtual-ref="buttonRef" trigger="click" virtual-triggering :width="1200">
                    <div class="popober flex h-300px">
                        <el-table ref="multipleTableRef" :data="ActivePaymentDimension" style="width: 50%;height:100%;"
                            @selection-change="handleSelectionChange" border>
                            <el-table-column type="selection" />
                            <el-table-column prop="key" label="编号" width="200" />
                            <el-table-column prop="value" label="偏好" />
                        </el-table>

                        <el-table ref="multipleTableRef" :data="AdvertisingDisplayDimensionData"
                            @selection-change="handleSelectionChange2" style="width: 50%;height:100%;" border>
                            <el-table-column type="selection" />
                            <el-table-column prop="key" label="编号" width="200" />
                            <el-table-column prop="value" label="偏好" />
                        </el-table>
                    </div>
                </el-popover>
            </el-col>
            <el-col :span="1.5">
                <el-button @click="handleSearch">搜索</el-button>
            </el-col>
        </el-col>
        <el-col :span="1.5" class="pr-100px">
            <el-button @click="handleMore">更多</el-button>
        </el-col>
    </el-row>
    <el-row class="p-8px">
        <el-scrollbar style="width:100%;min-height:300px;max-height: 800px;height: calc(100vh - 120px - 50px);">
            <ul class="flex flex-wrap p-0px overflow-auto" v-loading="loading">
                <li class="w-260px list-none mr-12px mb-12px" v-for="(video, index) in tableData" :key="index">
                    <div
                        class="card w-100% border border-gray-300 rounded-lg overflow-hidden  font-sans border-style-solid">
                        <div class="video-container relative  w-100% h-300px">
                            <video ref="videoElRef" style="background-color: black;" width="100%" height="100%"
                                :src="video.videoUrl" :poster="video.thumbnailConverUrl" alt="video" class="w-full"
                                controls />
                            <div class="header w-100% absolute  flex top-0 items-center justify-between">
                                <span class="tag bg-red-500 text-white px-2 py-1 rounded-md"
                                    style="border-radius:0.375rem 0 0.375rem 0;"><span
                                        class="font-size-12px font-bold">投放天数</span>
                                    <span class="font-bold pt-2 pl-1">{{ video.findCnt }}d</span></span>
                                <span class="duration text-sm text-white pr-1">00:{{ video.videoTimeSpan
                                    }}</span>
                            </div>

                            <div class="play-button absolute top-50% left-50% flex items-center justify-center"
                                style="transform: translate(-50%,-50%);">
                                <!-- <button ref="buttonElRef"
                                    class="w-12 h-12 bg-black bg-opacity-50 text-white rounded-full"
                                    @click="playVideo(videoElRef, buttonElRef, index)">▶</button> -->
                            </div>
                        </div>
                        <div class="content font-size-12px color-[#565f81]">
                            <div class="p-2 font-600 overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer">
                                标题 <span class="font-bold">{{ video.title }}</span>
                            </div>
                            <div class="p-2 font-600 overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer">
                                描述 <span>{{ video.describe }}</span>
                            </div>

                            <div class="flex p-2" style="border-top: 1px solid #d1d5db">
                                <div style="flex: 1;" class="text-center">
                                    <div>
                                        <span>生命周期(天)</span>
                                    </div>

                                    <div class="py-0.5">
                                        <span>{{ video.videoTimeSpan }}</span>
                                    </div>

                                    <div>
                                        <span> {{ dayjs(video.firstTime).format('YY-MM-DD') }} - {{
                                            dayjs(video.lastTime).format('YY-MM-DD') }}</span>
                                    </div>
                                </div>
                                <div style="flex: 1;" class="text-center">
                                    <div>
                                        <span>创意发现量</span>
                                    </div>

                                    <div class="py-0.5">
                                        <span>{{ video.findCntSum }}万</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </el-scrollbar>
        <el-config-provider :locale="zhCn">
            <el-pagination class="mt-10px" v-model:current-page="currentPage" v-model:page-size="pageSize"
                :page-sizes="[10, 20, 50, 100]" background layout="total, sizes, prev, pager, next, jumper"
                :total="total" @size-change="handleSizeChange" @current-change="handlePageChange" />
        </el-config-provider>
    </el-row>
</template>


<script lang="ts" setup>
import { ref, unref, onMounted } from 'vue'
import HeaderVue from '../components/Header.vue'
import dayjs from 'dayjs'
import { zhCn } from "element-plus/es/locales.mjs";
import ActivePaymentDimension from '../data/ActivePaymentDimension.json'
import AdvertisingDisplayDimensionData from '../data/AdvertisingDisplayDimensionData.json'
import projectJson from '../data/project.json'
import axios from 'axios'


import { ClickOutside as vClickOutside } from 'element-plus'

const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
    unref(popoverRef).popperRef?.delayHide?.()
}


const videoElRef = ref<HTMLVideoElement[]>();
/* const buttonElRef = ref<HTMLButtonElement[]>();

const playVideo = (videoElRef: HTMLVideoElement[] | undefined, buttonElRef: HTMLButtonElement[] | undefined, index: number) => {

    console.log(index);



    if (videoElRef && buttonElRef) {
        const video = videoElRef[index]
        const button = buttonElRef[index];
        if (video) {

            for (const videoEl of videoElRef) {
                videoEl.pause();
            }

            for (const button of buttonElRef) {
                button.style.display = 'block'
            }

            button.style.display = 'none'
            video.play();
        }
    } else {
        console.error('没有video对象')
    }
} */

const loading = ref(false)

const projectId = ref();

interface IVideosProps {
    projectId: string;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    filter1: any[];
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    filter2: any[];
    page?: number;
    num?: number;
}

const currentPage = ref(1);
const pageSize = ref(20);
const total = ref();
const tableData = ref();

const getVideosFunc = async (options?: IVideosProps) => {
    loading.value = true;

    // https://manage.jiheconnect.com/glo_api/_qimenvideos?filter1=&filter2=&projectId=
    const res = await axios({
        method: 'get',
        url: '/glo_api/_qimenvideos',
        params: options
    })


    console.log(res);

    if (res.status === 200) {
        if (res.data.state === 1) {
            tableData.value = res.data.data;
            total.value = res.data.total;
            loading.value = false;
        }
    }

}


onMounted(() => {
    getVideosFunc();
})




const handlePageChange = (page: number) => {
    currentPage.value = page;
    getVideosFunc({
        projectId: projectId.value,
        filter1: multipleSelection.value,
        filter2: multipleSelection2.value,
        page: currentPage.value,
        num: pageSize.value
    })

};

const handleSizeChange = (size: number) => {
    pageSize.value = size;
    getVideosFunc({
        projectId: projectId.value,
        filter1: multipleSelection.value,
        filter2: multipleSelection2.value,
        page: currentPage.value,
        num: pageSize.value
    })
}

const multipleSelection = ref([])
const multipleSelection2 = ref([])

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const handleSelectionChange = (val: any) => {
    multipleSelection.value = val;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const handleSelectionChange2 = (val: any) => {
    multipleSelection2.value = val;
}

const handleSearch = () => {
    getVideosFunc({
        projectId: projectId.value,
        filter1: multipleSelection.value,
        filter2: multipleSelection2.value,
        page: currentPage.value,
        num: pageSize.value
    })
}

const handleMore = () => {
    window.open('http://cas.jiheconnect.com/', '_blank');
}

</script>