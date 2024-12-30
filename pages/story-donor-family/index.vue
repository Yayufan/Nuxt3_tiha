<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="認識器捐" secoundRoute="器捐生命故事 - 捐贈者家屬篇"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">器捐生命故事 - 捐贈者家屬篇</h1>

            <div class="content-box">

                <transition-group name="pagination">

                    <article class="article-item" v-for="(item, index) in articleList.records " :key="item.articleId">

                        <nuxt-link class="article-item-link"
                            :to="{ name: 'story-donor-family-id', params: { id: item.articleId } }">


                            <div class="article-img-box">
                                <img class="article-img" :src="`/minio${item.coverThumbnailUrl}`">

                                <div class="article-info-box">
                                    <h2 class="article-title">{{ item.title }}</h2>
                                    <p class="article-description">
                                        {{ item.description }}
                                    </p>
                                </div>

                            </div>
                        </nuxt-link>



                    </article>
                </transition-group>

                <!-- 
        分頁插件 total為總資料數(這邊設置20筆),  default-page-size代表每頁顯示資料(預設為10筆,這邊設置為5筆) 
        current-page當前頁數,官方建議使用v-model與current-page去與自己設定的變量做綁定,
        -->
                <div class="common-pagination">
                    <el-pagination layout="prev, pager, next" :page-count="Number(articleList.pages)"
                        :default-page-size="Number(articleList.size)" v-model:current-page="currentPage"
                        :hide-on-single-page="true" :pager-count="5" />
                </div>

            </div>


        </section>

    </div>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'


//根據裝置預設顯示數量
// const defaultSize = ref(useState('currentSize', () => useIsMobile().value ? 8 : 8))
const defaultSize = ref(useIsMobile().value ? 3 : 6)

//拿到更新路由分頁參數 以及 獲取當前分頁參數的function
const updatePaginationParams = useUpdatePaginationParams()
//傳續判斷裝置後的預設值,這個就是分頁的size
const { page, size } = useGetPaginationParams(defaultSize.value)

//設定分頁組件,currentPage當前頁數
let currentPage = ref(page)
let currentSize = ref(size)

const GROUP = "storyDonorFamily"

let articleList = reactive({
    pages: 1,
    size: 4,
    records: [
        {
            articleId: '',
            title: '',
            description: '',
            coverThumbnailUrl: ''
        }
    ]
})


//獲取分頁文章的資料
const getArticleList = async (page: number, size: number) => {
    let { data: response, pending } = await SSRrequest.get(`article/${GROUP}/pagination`, {
        params: {
            page,
            size
        }
    })

    // 直接更新 articleList 的值
    if (response.value?.data) {
        Object.assign(articleList, response.value.data)

    }

}

//立即執行獲取資料
await getArticleList(currentPage.value, currentSize.value)

//監聽當前頁數的變化,如果有更動就call API 獲取數組數據
watch(currentPage, (value, oldValue) => {

    //更新URL參數以及獲取新的分頁資料
    updatePaginationParams(value, currentSize.value)
    getArticleList(value, currentSize.value)

    // 使用window.scrollTo()方法触发滚动效果，每當分頁數據改變,回到最上方
    setTimeout(() => window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    }), 200)

})


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
        margin-bottom: 3%;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }
    }

    .content-box {
        margin-left: 10%;
        margin-right: 10%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        @media screen and (max-width:481px) {
            margin-left: 0;
            margin-right: 0;
        }

        .article-item {
            margin-bottom: 3%;
            width: 48%;

            @media screen and (max-width:480px) {
                width: 80%;
                margin: 5% auto;
            }

            .article-item-link {

                //當滑鼠碰到這篇文章時,改變字體顏色+圖片放大
                &:hover {
                    cursor: pointer;

                    .article-img-box {
                        img {
                            scale: (1.05);
                        }
                    }
                }



                .article-img-box {
                    position: relative;
                    overflow: hidden;
                    border-radius: 16px;

                    img {
                        transition: 0.5s;
                        aspect-ratio: 4/2.5;
                        width: 100%;
                        /* 也可以換成任何你想要的寬度 */
                        display: block;
                        /* 新增這行 */
                        object-fit: fill;
                        object-position: top center;


                    }
                }

                .article-info-box {
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 50;
                    text-align: left;
                    color: #fff;
                    background: linear-gradient(to top, rgba(241, 156, 36, 0.9) 10%, rgba(193, 193, 193, 0.4));
                    border-radius: 16px;

                    .article-title {
                        font-size: 1.2rem;
                        margin: 0.4rem 0;
                        margin-left: 5%;
                    }

                    .article-description {
                        margin-bottom: 5%;
                        margin-left: 5%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                }



            }
        }

    }
}
</style>