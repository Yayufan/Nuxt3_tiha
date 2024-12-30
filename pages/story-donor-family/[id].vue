<!--  -->
<template>

    <section class="article-section">

        <Breadcrumbs2 firstRoute="器捐生命故事 - 捐贈者家屬篇" :secoundRoute="article.title"></Breadcrumbs2>

        <div class="title-box">
            <div class="title">{{ article.title }}</div>
            <div class="announcementDate">{{ article.announcementDate }}</div>
        </div>

        <div class="article-content ck-content" v-html="htmlContent">

        </div>
    </section>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import 'ckeditor5/ckeditor5.css';
import Breadcrumbs2 from '@/components/layout/Breadcrumbs2.vue'

const route = useRoute();

//預設假資料
const article = reactive({
    type: '一般公告',
    title: '靜態展示-113年中秋休診公告',
    announcementDate: '2024-10-08'
})
const htmlContent = ref('')

const getArticle = async () => {
    let { data: response } = await SSRrequest.get(`article/show/${route.params.id}`)

    // 直接更新 articleList 的值
    if (response.value?.data) {
        Object.assign(article, response.value.data)
        htmlContent.value = response.value.data.content
    }

}

await getArticle()

</script>

<style scoped lang="scss">
.article-section {
    margin: 0 auto;
    margin-bottom: 3%;
    font-family: initial;

    .title-box {
        margin: 3% 8%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 1%;
        border-bottom: 1px #686A69 solid;
        font-size: 1.4rem;
        color: $main-color;

        .title {
            letter-spacing: 0.2rem;
            font-weight: 600;
        }

        .announcementDate {
            min-width: 70px;
        }

    }

    .article-content {
        margin: 0 8%;
    }

}
</style>
