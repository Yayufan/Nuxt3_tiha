<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="關於我們" secoundRoute="年度重點企劃與展望"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">{{ singlePageArticle.title }}</h1>

            <div class="article-content ck-content" v-html="htmlContent">

            </div>

            <div class="aricle-attachment-box">
                <div v-for="(item, index) in articleAttachmentList" :key="item.singlePageArticleAttachmentId">
                    <a class="download-link file-link" target="_blank" :href="`${domain}/minio${item.path}`">
                        {{ item.name }}
                    </a>
                </div>
            </div>


        </section>

    </div>


</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import 'ckeditor5/ckeditor5.css';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

//SEO
useSeoMeta({
    title: '年度重點企劃與展望',
    titleTemplate: '%s | 台灣腸保健康協會',
    description: '了解本協會的年度重點企劃與未來展望。',
    ogTitle: '年度重點企劃與展望｜台灣腸保健康協會',
    ogDescription: '探索本協會的年度重點企劃，認識我們的未來發展方向。',
    keywords: '年度重點企劃, 未來展望, 腸保健康'
})

const route = useRoute();
const path = ref("roadmap")

//獲取當前domain
const domain = useRuntimeConfig().public.domain
// 附件儲存列表
const articleAttachmentList = reactive<Record<string, any>[]>([])


//預設假資料
const singlePageArticle = reactive({
    singlePageArticleId: '',
    path: '',
    title: '年度重點企劃與展望',
    announcementDate: '2024-10-08'
})
const htmlContent = ref('')

const getArticleAttachment = async () => {
    let { data: response } = await SSRrequest.get(`single-page-article-attachment/${singlePageArticle.singlePageArticleId}`)

    console.log(response.value)

    // 直接更新 articleAttachmentList
    if (response.value?.data) {
        //先清空,在抓取
        articleAttachmentList.length = 0

        Object.assign(articleAttachmentList, response.value.data)

    } else {
        articleAttachmentList.length = 0
    }
}

const getSinglePageArticle = async () => {
    let { data: response } = await SSRrequest.get(`single-page-article/show/by-path`, {
        params: {
            path
        }
    })

    // 直接更新 singlePageArticle 的值
    if (response.value?.data) {
        Object.assign(singlePageArticle, response.value.data)
        htmlContent.value = response.value.data.content
        // 確定獲取到頁面後，才去找他的檔案
        getArticleAttachment()

    }

}

await getSinglePageArticle()


</script>

<style scoped lang="scss">
.common-section {
    width: $common-section-width;
    margin: $common-section-margin;
    font-family: $common-section-font-family;

    .common-title {
        color: $main-color;
        font-weight: $common-title-font-weight;
        font-size: $common-title-font-size;
        letter-spacing: $common-title-letter-spacing;
        margin-left: 10%;
        margin-bottom: 2%;

        &::before {
            display: inline;
            content: "";
            border-left: 3px solid $main-color;
            padding-right: 10px;
        }

        @media screen and (max-width:481px) {
            margin-left: 0;
        }
    }

    .article-content {
        margin: 0 10%;
    }

    .aricle-attachment-box {
        margin: 0 10%;
        display: flex;
        flex-direction: column;
        margin-top: 3%;

        .file-link {
            margin: 10px 0;
            display: inline-block;
        }

    }

    .content-box {
        margin-left: 10%;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

        .additional-information {
            margin-left: 1.7rem;
            margin-bottom: 5rem;
            font-size: $paragraph-font-size;
            max-width: 1050px;
            line-height: 1.5;
            color: $main-content-color;

            @media screen and (max-width:481px) {
                width: 80%;
            }


        }

        .paragraph {
            margin: 3% 0;
        }

        .sub-title {
            font-size: 1.2rem;
        }

        .download-file-box {
            display: flex;
            flex-direction: column;
            margin-left: 2.5rem;

            .download-link {
                margin: 0.5rem;
                /** 這邊是為了將a標籤從flex block 狀態,改為inline block 狀態  */
                align-self: flex-start;
            }

        }
    }
}
</style>