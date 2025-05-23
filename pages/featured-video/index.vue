<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="影音專區" secoundRoute="影片精選"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">影片精選</h1>

            <div class="content-box">

                <transition-group name="pagination">

                    <article class="article-item" v-for="(item, index) in articleList.records " :key="item.articleId">

                        <nuxt-link class="article-item-link"
                            :to="{ name: 'featured-video-id', params: { id: item.articleId } }">

                            <h2 class="article-title">{{ item.title }}</h2>
                            <div class="decorate-box"></div>


                            <div class="article-img-box">
                                <img class="article-img" :src="`/minio${item.coverThumbnailUrl}`">
                            </div>

                            <div class="article-info-box">

                                <p class="article-description">
                                    {{ item.description }}
                                </p>
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
const defaultSize = ref(useIsMobile().value ? 2 : 6)

//拿到更新路由分頁參數 以及 獲取當前分頁參數的function
const updatePaginationParams = useUpdatePaginationParams()
//傳續判斷裝置後的預設值,這個就是分頁的size
const { page, size } = useGetPaginationParams(defaultSize.value)

//設定分頁組件,currentPage當前頁數
let currentPage = ref(page)
let currentSize = ref(size)

const GROUP = "featuredVideo"

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

            position: relative;
            margin-bottom: 5%;
            width: 32%;
            border-radius: 16px;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);

            @media screen and (max-width:480px) {
                width: 100%;
                margin: 8% auto;
            }

            .article-item-link {

                //當滑鼠碰到這篇文章時,改變字體顏色+圖片放大
                &:hover {
                    cursor: pointer;
                    background: $main-hover-bg;

                    .article-img-box {
                        img {
                            scale: (1.05);
                        }
                    }
                }

                .article-title {
                    position: absolute;
                    width: 90%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 50;
                    background: #cd93c6;
                    color: #fff;
                    text-align: center;
                    font-size: 1.1rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    border-radius: 16px;
                    padding: 0.5rem 0;

                }

                .decorate-box {
                    position: absolute;
                    top: 10%;
                    left: 5%;
                    z-index: 100;
                    width: 1.8rem;
                    height: 1.8rem;
                    border-radius: 50%;
                    content: url('@/assets/img/play-button.svg');
                    // background: #878788;
                }



                .article-img-box {
                    overflow: hidden;
                    border-radius: 16px;
                    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
                }

                img {
                    transition: 0.5s;
                    aspect-ratio: 5/3;
                    width: 100%;
                    /* 也可以換成任何你想要的寬度 */
                    display: block;
                    /* 新增這行 */
                    object-fit: fill;
                    object-position: top center;
                    border-radius: 16px;
                }
            }

            .article-info-box {
                text-align: left;
                padding: 1rem 0.5rem 2rem 0.5rem;


                .article-description {
                    color: $main-content-color;
                    //這組合是超過三行時使用...
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    line-clamp: 3;
                    overflow: hidden;

                }

            }

        }

    }

}
</style>