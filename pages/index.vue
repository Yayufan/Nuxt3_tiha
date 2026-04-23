<template>
    <main class="main">
        <!-- <el-carousel arrow="always" indicator-position="outside">
            <el-carousel-item>
                <img src="@/assets/img/carousel-item3.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/img/carousel-item2.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/img/carousel-item1.jpg" alt="">
            </el-carousel-item>
        </el-carousel> -->


        <div class="main-visual-box">
            <img src="@/assets/img/carousel-item1.jpg">
        </div>

        <!-- 衛教資訊信息 -->
        <section class="home-health-section">
            <div class="section-header">
                <h2 class="common-title">衛教資訊</h2>
                <nuxt-link to="/health-education" class="more-link">查看更多</nuxt-link>
            </div>

            <div class="health-feature-grid">
                <article v-for="(item, index) in homeArticles" :key="item.articleId"
                    :class="['health-card', `pos-${index}`]">
                    <nuxt-link :to="{ name: 'case-sharing-id', params: { id: item.articleId } }">
                        <div class="card-img-box">
                            <img :src="`/minio${item.coverThumbnailUrl}`" class="article-img">
                        </div>
                        <div class="card-info-box">
                            <h3 class="article-title">{{ item.title }}</h3>
                            <p class="article-description">{{ item.description }}</p>
                        </div>
                    </nuxt-link>
                </article>
            </div>
        </section>



        <div class="join-us-board">
            <p class="title">快速連結</p>
            <div class="icon-link-box">
                <div class="link-item">
                    <nuxt-link to="/news">
                        <img src="@/assets/img/purpose-icon.png" alt="">
                    </nuxt-link>
                    <p>最新消息</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="/health-education">
                        <img src="@/assets/img/become-member-icon.png" alt="">
                    </nuxt-link>
                    <p>衛教資訊</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="/donate">
                        <img src="@/assets/img/association-chronology-icon.png" alt="">
                    </nuxt-link>
                    <p>線上捐款</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="/purpose">
                        <img src="@/assets/img/achievements-icon.png" alt="">
                    </nuxt-link>
                    <p>關於我們</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="/registration">
                        <img src="@/assets/img/family-support-icon.png" alt="">
                    </nuxt-link>
                    <p>加入會員</p>
                </div>
            </div>
        </div>

    </main>
</template>

<script setup lang='ts'>

const viewWidth = ref(0);
const activeLink = ref('news');

/** */

//根據裝置預設顯示數量
// const defaultSize = ref(useState('currentSize', () => useIsMobile().value ? 8 : 8))
const isMobile = ref<boolean>(useIsMobile().value);
const defaultSize = ref(useIsMobile().value ? 3 : 5)

//傳續判斷裝置後的預設值,這個就是分頁的size
const { page, size } = useGetPaginationParams(defaultSize.value)


const GROUP = "healthEducation"
const homeArticles = ref<any[]>([])

// 獲取首頁前 6 筆資料
const getHomeArticles = async () => {
    let { data: response } = await SSRrequest.get(`article/${GROUP}/pagination`, {
        params: {
            page: 1,
            size: 6 // 固定抓取 6 筆
        }
    })
    if (response.value?.data) {
        homeArticles.value = response.value.data.records
    }
}

await getHomeArticles()




</script>
<style lang="scss" scoped>
.main {
    width: 100%;

    @media screen and (max-width: 850px) {
        margin-top: 0.4vw;
    }

    @media screen and (max-width: 850px) {
        margin-top: 0.4vw;
    }

    .el-carousel {
        height: 400px;
        max-width: 100%;

        @media screen and (max-width: 850px) {
            height: 200px;
        }

        img {
            width: 100%;
            // height: 100%;
        }

        :deep(.el-carousel__container) {
            height: 80%;
        }

        :deep(.el-carousel__arrow) {
            background-color: $main-color;
            // margin-bottom: 3%;
            top: 40%;
        }

        :deep(.el-carousel__arrow--left) {
            margin-left: 3%;
        }

        :deep(.el-carousel__arrow--right) {
            margin-right: 3%;
        }

        :deep(.el-icon),
        :deep(.el-icon svg) {
            width: 2rem;
            height: 2rem;
        }

        :deep(.el-carousel__button) {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
        }
    }

    .main-visual-box {
        // margin: 3% 0;
        text-align: center;

        img {
            // max-width: 80%;
            max-width: 100%;
            width: 100%;
        }
    }

    // --- 衛教區塊優化版 ---
    // --- 衛教區塊 1/2 : 1/2 平分版 ---
    .home-health-section {
        background-color: #fdfaf8;
        padding: 60px 10%;

        @media screen and (max-width: 1200px) {
            padding: 40px 5%;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 30px;
            border-bottom: 2px solid #eee;
            padding-bottom: 15px;

            .common-title {
                color: #E99B67;
                font-size: 1.8rem;
                font-weight: 600;
                margin: 0;
                position: relative;

                &::after {
                    content: "";
                    position: absolute;
                    bottom: -17px;
                    left: 0;
                    width: 50px;
                    height: 4px;
                    background: #E99B67;
                }
            }

            .more-link {
                color: #91715F;
                font-size: 0.95rem;
                text-decoration: none;
                padding: 5px 15px;
                border: 1px solid #d3c5bd;
                border-radius: 20px;
                transition: 0.3s;

                &:hover {
                    background: #91715F;
                    color: #fff;
                }
            }
        }

        .health-feature-grid {
            display: grid;
            /* 定義 3 欄，每欄平分空間 (1:1:1) */
            grid-template-columns: repeat(3, 1fr);
            /* 定義 2 列 (高度可以設定 auto 讓它隨內容伸縮，或是固定高度) */
            grid-template-rows: repeat(2, auto);
            /* 設定格子之間的間距 */
            gap: 20px;

            @media screen and (max-width: 850px) {
                grid-template-columns: repeat(2, 1fr);
                /* 定義 2 列 (高度可以設定 auto 讓它隨內容伸縮，或是固定高度) */
                grid-template-rows: repeat(1, auto);
            }

            .health-card {
                background: #fff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
                transition: transform 0.4s, box-shadow 0.4s;

                &:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 10px 25px rgba(145, 113, 95, 0.15);
                }

                a {
                    text-decoration: none;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .card-img-box {
                    width: 100%;
                    flex: 1;
                    overflow: hidden;
                    background: #f0f0f0;

                    img {
                        width: 100%;
                        transition: 0.5s;
                    }
                }

                .card-info-box {
                    padding: 15px;

                    .article-title {
                        color: #333;
                        font-size: 1rem;
                        font-weight: 600;
                        margin-bottom: 8px;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        line-height: 1.4;
                    }

                    .article-description {
                        color: #666;
                        font-size: 0.85rem;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        line-height: 1.5;
                    }
                }

            }

        }
    }

    .join-us-board {
        width: 100%;
        justify-content: center;
        margin-top: 3%;
        margin-bottom: 3%;

        .title {
            margin-left: 10%;
            color: #E99B67;
            font-size: 1.5rem;

            @media screen and (max-width: 850px) {
                margin-left: 3.5%;
            }
        }

        .icon-link-box {
            display: flex;
            margin: 3% 0 0 10%;

            @media screen and (max-width: 850px) {
                max-width: 85%;
                margin-left: 5%;
                justify-content: center;
                flex-wrap: wrap;
            }

            .link-item {
                @media screen and (max-width: 850px) {
                    width: 28%;
                    margin: 0 5px 2% 5px;
                }

                margin: 0 8% 2% 0;

                // width: 100%;
                p {
                    color: #91715F;
                    font-size: $paragraph-font-size;
                    text-align: center;
                }
            }

            img {
                width: 100%;
                transition: 0.5s;

                &:hover {
                    cursor: pointer;
                    transform: scale(1.1);
                }
            }

        }
    }
}
</style>