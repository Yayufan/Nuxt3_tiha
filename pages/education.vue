<!--  -->
<template>

    <section class="article-list-section">

        <el-breadcrumb :separator-icon="ArrowRight" class="article-list-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/education' }">疾病及治療介紹</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="type-title-box">
            <p>疾病及治療介紹</p>
        </div>

        <div class="multiple-category-box">

            <el-menu :default-active="activeMenu" class="multiple-category-menu" @open="handleOpen" @close="handleClose"
                :unique-opened="true">

                <template v-for="(item, index) in articleCategory" :key="item.articleCategoryId">
                    <!-- 使用遞歸組件 -->
                    <RecursiveMenu :item="item" routePath="education-surgery" />
                </template>
            </el-menu>

            <div class="article-outer-box">
                <nuxt-page></nuxt-page>
            </div>


        </div>


    </section>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import {
    ArrowRight,
    Menu as IconMenu,
} from '@element-plus/icons-vue'
import { useWindowSize } from '~/composables/useWindowSize'

// 如果需要的话，这里可以添加组件逻辑

const route = useRoute()
const router = useRouter()

let group = "educationSurgery"

let articleCategory = reactive([{
    articleCategoryId: '1',
    name: '',
    children: [
        {
            articleCategoryId: '1',
            name: '',
        }
    ]

}])


//獲取手術衛教的分類Menu
const getArticleCategory = async () => {
    let res = await CSRrequest.get(`article-category/${group}`, {
    })

    articleCategory.length = 0
    Object.assign(articleCategory, res.data)

}


const activeMenu = computed(() => {
    return route.path 
    //return route.path; // 如果沒有匹配到，返回完整路徑

});


const handleOpen = (key: string, keyPath: string[]) => {

}
const handleClose = (key: string, keyPath: string[]) => {

}

onMounted(() => {
    getArticleCategory()
})


</script>

<style scoped lang="scss">
.article-list-section {
    margin-top: 3%;
    font-family: initial;

    .article-list-breadcrumb {
        margin: 0 8%;
    }

    /** 重寫麵包屑導航樣式 */

    :deep(.el-breadcrumb) {
        font-size: 1rem;
        letter-spacing: 0.1rem;
    }

    :deep(.el-breadcrumb__inner.is-link:hover) {
        color: var(--el-text-color-regular);
    }

    :deep(.el-breadcrumb__inner.is-link) {
        color: #242B64;
    }

    :deep(.el-breadcrumb__separator) {
        color: #242B64;
    }

    .type-title-box {
        margin: 1% 0 2% 0;
        font-size: 2rem;
        background: #F2F2F2;
        color: #1C2B6E;
        letter-spacing: 0.2rem;
        padding: 1% 0;

        p {
            margin-left: 8%;
            font-weight: 550;
        }
    }

    .multiple-category-box {
        width: 84%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .multiple-category-menu {
            min-width: 200px;
            width: 20%;
            border-right: none;
            letter-spacing: 0.1rem;

            :deep(a) {
                color: inherit;
            }

            //重寫導覽欄樣式
            :deep(.el-menu) {
                border-right: none;
            }

            :deep(.el-sub-menu__title) {
                color: #1C2B6E;
                font-weight: 550;
                border-bottom: 1.5px dotted #1B479C;
            }

            :deep(.el-menu-item) {
                color: #49BADE;
                font-weight: 550;
                border-bottom: 1.5px dotted #1B479C;

            }

            :deep(.el-sub-menu.is-active.is-opened .el-sub-menu__title){
                color: #4D4D4D;
                background-color: #E6E6E6
            }

            :deep(.el-menu-item.is-active) {
                color: #4D4D4D;
            }



        }


        .article-outer-box {
            width: 100%;


            //衛教文章外部盒子
            .articleBox {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;

                //所有a連結沒有下底線
                a {
                    text-decoration: none;
                }

                //每篇文章
                .articleItem {
                    border: 2px solid #C3E1EA;
                    width: 27%;
                    max-width: 400px;
                    max-height: 250px;

                    @media screen and (max-width:850px) {
                        max-width: none;
                        max-height: none;
                        width: 42%;

                        // min-width: 200px;
                        // min-height: 100px;
                    }


                    margin: 0 0 2% 5%;


                    //手機視口RWD響應
                    @media screen and (max-width:481px) {
                        width: 100%;
                    }

                    //當滑鼠碰到這篇文章時,改變字體顏色+圖片放大
                    &:hover {
                        .itemInfo {
                            color: #49BADE;
                        }

                        .itemImgBox {
                            img {
                                scale: (1.1);
                            }
                        }
                    }
                }

                //文章圖片盒子
                .itemImgBox {
                    width: 100%;
                    //搭配hover後的scale使用
                    overflow: hidden;

                    //文章圖片
                    img {
                        width: 100%;
                        aspect-ratio: 3 / 2;
                        transition: 0.5s;
                        object-position: top center;

                    }
                }

                //文章內容
                .itemInfo {
                    padding: 10px;
                    line-height: 22px;

                    .title {
                        color: #1C2B6E;
                        text-align: center;
                        font-weight: 550;
                        font-size: 1.3rem;
                    }

                    .introduction {
                        //多行文字超出3行時隱藏,這是一整套的不能拆開使用
                        //除非必要效果不然建議少用,避免移動端或者特殊瀏覽器無法正常顯示
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        -webkit-line-clamp: 3;
                        line-clamp: 3;
                    }

                    //類型與日期, 日期將自身往右推5px
                    .date {
                        margin-left: 5px;
                    }

                }
            }
        }
    }


}
</style>
