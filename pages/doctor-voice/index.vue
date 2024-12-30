<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="認識器捐" secoundRoute="白袍心聲"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">白袍心聲</h1>

            <div class="content-box">

                <transition-group name="pagination">
                    <article class="article-item" v-for="(item, index) in articleList.records " :key="item.articleId">
                        <div class="article-img-box">
                            <img class="article-img" src="@/assets/img/doctor-voice-img-01.png">
                        </div>

                        <div class="article-base">
                            <div class="article-info-box">
                                <h2 class="article-title">{{ item.title }}</h2>
                                <p class="article-description">{{ item.description }}</p>
                            </div>

                            <div class="article-more-box">
                                <nuxt-link class="more-btn"
                                    :to="{ name: 'doctor-voice-id', params: { id: item.articleId } }">查看更多</nuxt-link>

                            </div>
                        </div>
                    </article>
                </transition-group>


                <!-- 
        分頁插件 total為總資料數(這邊設置20筆),  default-page-size代表每頁顯示資料(預設為10筆,這邊設置為5筆) 
        current-page當前頁數,官方建議使用v-model與current-page去與自己設定的變量做綁定,
        -->

                <div class="common-pagination" v-if="articleList.pages >= 1">
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



//設定分頁組件,currentPage當前頁數
//根據裝置預設顯示數量
// const defaultSize = ref(useState('currentSize', () => useIsMobile().value ? 8 : 8))
const defaultSize = ref(useIsMobile().value ? 5 : 4)

//拿到更新路由分頁參數 以及 獲取當前分頁參數的function
const updatePaginationParams = useUpdatePaginationParams()
//傳續判斷裝置後的預設值,這個就是分頁的size
const { page, size } = useGetPaginationParams(defaultSize.value)


//設定分頁組件,currentPage當前頁數
let currentPage = ref(page)
let currentSize = ref(size)

const GROUP = "doctorVoice"

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
        margin-left: 14%;
        margin-right: 10%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        @media screen and (max-width:481px) {
            margin-left: 4%;
            margin-right: 0;

        }

        .article-item {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 3%;
            padding-bottom: 0.4rem;
            min-height: 5rem;
            border-radius: 16px;
            border: 1px solid #b1b1b1;
            box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2);


            @media screen and (max-width:481px) {
                width: 100%;
                margin-bottom: 8%;

            }


            .article-img-box {
                position: relative;
                max-width: 6rem;
                min-width: 6rem;
                left: -2.3rem;

                @media screen and (max-width:481px) {
                    left: -1.8rem;
                }


                img {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    border: 1px solid #b1b1b1;
                    border-radius: 50%;
                    /* 也可以換成任何你想要的寬度 */
                    display: block;
                    /* 新增這行 */
                    object-fit: cover;
                    object-position: top center;
                }
            }

            .article-base {
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                width: 100%;

                @media screen and (max-width:481px) {
                    flex-direction: column;
                }

                .article-info-box {
                    text-align: left;
                    white-space: pre-wrap;
                    margin-right: 0.5rem;
                    margin-top: 0.5rem;


                    .article-title {
                        text-align: left;
                        font-size: 1.3rem;
                    }

                    .article-description {
                        //這組合是超過三行時使用...
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        line-clamp: 3;
                        /* 這是標準屬性 */
                        overflow: hidden;

                        @media screen and (max-width:481px) {
                            -webkit-line-clamp: 5;
                        }

                    }

                }

                .article-more-box {
                    text-align: center;
                    margin-right: 1.5rem;

                    text-wrap-mode: nowrap;

                    @media screen and (max-width:481px) {}

                    .more-btn {
                        display: inline-block;
                        color: #fff;
                        background-color: $accent-color;
                        padding: 0.5rem 3rem;
                        border-radius: 16px;
                        letter-spacing: 0.1rem;
                        border: none;
                        font-weight: normal;
                        transition: 0.5s;

                        &:hover {
                            cursor: pointer;
                            background-color: $accent-hover-bg;
                        }
                    }
                }

            }

        }

    }
}
</style>