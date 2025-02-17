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
                    <nuxt-link to="/case-sharing">
                        <img src="@/assets/img/become-member-icon.png" alt="">
                    </nuxt-link>
                    <p>衛教資訊</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="">
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