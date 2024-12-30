<template>
    <main class="main">
        <el-carousel arrow="always" indicator-position="outside">
            <el-carousel-item>
                <img src="@/assets/img/carousel-item3.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/img/carousel-item2.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/img/carousel-item1.jpg" alt="">
            </el-carousel-item>
        </el-carousel>

        
    
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

    // 訊息看板
    .message-board-box {
        width: 100%;
        background-color: #E9B2B1;
        border-radius: 35px;

        // 標題
        .title {
            display: inline-block;
            font-size: 1.5rem;
            color: #FFFFFF;
            margin-left: 10%;
            padding: 15px 0;

            @media screen and (max-width: 850px) {
                margin-left: 3.5%;
                text-align: center;
            }
        }

        // 按鈕
        .header-button-section,
        .mobile-header-button-section {
            background-color: #F4D4BE;
            display: flex;
            justify-content: space-around;
            padding: 10px 0;

            @media screen and (max-width: 481px) {
                justify-content: flex-start;
                padding-left: 10%;
            }

            .el-button {
                border-radius: 40px;
                color: #8F1D22;
                font-size: 1rem;
                background-color: #F4D4BE;

                .btn-link {
                    color: inherit;
                }


                // 點擊時的邊框顏色
                &:active {
                    border-color: #F4D4BE;
                }

                // &.el-button:first-child {
                //     background-color: #8F1D22;
                //     color: white;
                // }
                @media screen and (max-width: 481px) {
                    background-color: #8F1D22;
                    color: white;
                }

                &.el-button:not(:first-child) {
                    @media screen and (max-width: 481px) {
                        display: none;
                    }
                }
            }

            // 被選中的按鈕
            .active {
                background-color: #8F1D22;
                color: white;
            }
        }




        .article-box,
        .mobile-article-box {
            display: flex;
            justify-content: center;
            padding-bottom: 2rem;

            .el-button {

                // 行動裝置下隱藏
                @media screen and (max-width: 481px) {
                    display: none;
                }

                background-color: #C4D5D2;
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 2rem;
                height: 2rem;
                width: 2rem;
                margin: 8% 0;

                &.el-button:first-child {
                    margin-right: 10px;
                }

                &.el-button:last-child {
                    margin-left: 10px;
                }
            }

            .article-item {
                max-width: 17vw;
                margin: 1vw 5px;

                @media screen and (max-width: 850px) {
                    max-width: 15vw;
                }

                @media screen and (max-width: 481px) {
                    max-width: 30vw;
                }

                .article-img {
                    width: 100%;
                    height: 17vw;

                    @media screen and (max-width: 850px) {
                        height: 15vw;
                    }

                    @media screen and (max-width: 481px) {
                        height: 30vw;
                    }
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top center;
                    border-radius: 20px;
                }

                p {
                    text-align: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #8F1D22;
                }
            }

        }

        .mobile-header-button-section,
        .mobile-article-box {
            margin-bottom: 2vw;

            @media screen and (min-width: 481px) {
                display: none;
            }
        }

        .page-box {
            @media screen and (max-width: 481px) {
                display: none;
            }

            margin: 2% 0;
            padding-bottom: 1rem;
            display: flex;
            justify-content: center;

            :deep(.btn-prev) {
                // background-color: #E9B2B1;
                // color: white;
                display: none;
            }

            :deep(.btn-next) {
                // background-color: #E9B2B1;
                // color: white;
                display: none;

            }

            :deep(.number),
            :deep(.btn-quickprev),
            :deep(.btn-quicknext) {
                background-color: #E9B2B1;
                color: white;
            }
        }
    }

    .join-us-board {
        width: 100%;
        margin-top: 5%;
        justify-content: center;


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
                    font-size: 1rem;
                    text-align: center;
                }
            }

            img {
                width: 100%;
                transition: 0.5s;

                &:hover {
                    transform: scale(1.1);
                }
            }

        }
    }
}
</style>