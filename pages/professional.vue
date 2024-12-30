<!--  -->
<template>

    <section class="article-list-section">

        <el-breadcrumb :separator-icon="ArrowRight" class="article-list-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/professional' }">專業醫療資訊</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="type-title-box">
            <p>{{ categoryName }}</p>
        </div>

        <div class="multiple-category-box">

            <el-menu :default-active="activeMenu" class="multiple-category-menu" @open="handleOpen" @close="handleClose"
                :unique-opened="true">

                <template v-for="(item, index) in articleCategory" :key="item.articleCategoryId">
                    <!-- 使用遞歸組件 -->
                    <RecursiveMenu :item="item" routePath="professional" />
                </template>
            </el-menu>

            <div class="article-outer-box">
                <nuxt-page></nuxt-page>
            </div>

        </div>

        <div class="multiple-category-mobile-box">
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

let group = "professionalMedical"

let categoryName = ref("專業醫療資訊")


let currentCategoryId = route.params.category

if (currentCategoryId) {
    let { data: articleRes } = await SSRrequest.get(`article-category/category/${currentCategoryId}`)
    console.log(articleRes.value)
    categoryName.value = articleRes.value?.data.name
}

watch(() => route.params.category, async (value, oldValue) => {
    let { data: articleRes } = await SSRrequest.get(`article-category/category/${value}`)
    console.log(articleRes.value)
    categoryName.value = articleRes.value?.data.name
})

//獲取手術衛教的分類Menu
const getArticleCategory = async () => {
    let res = await CSRrequest.get(`article-category/${group}`, {
    })

    articleCategory.length = 0
    Object.assign(articleCategory, res.data)
}


const activeMenu = computed(() => {
    return route.path; // 如果沒有匹配到，返回完整路徑
});

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

const handleOpen = (key: string, keyPath: string[]) => {

}
const handleClose = (key: string, keyPath: string[]) => {

}

onMounted(async () => {

    //獲取token
    let token = localStorage.getItem('Authorization-member')

    if (token === null) {
        ElMessage.error("欲查看請先進行登入")
        router.push("/login")
    } else {
        //攜帶token 去確認登入時效
        let res = await CSRrequest.get("member/check-login", {
            headers: {
                'Authorization-member': token
            }
        })

        //如果校驗返回的結果為false, 則讓他再去登入一次
        if (!res.data) {
            ElMessage.error("登入時效已過期,請重新登入")
            router.push("/login")
        }
    }

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

        @media screen and (max-width:850px) {
            display: none;
        }

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

            :deep(.el-sub-menu.is-active.is-opened .el-sub-menu__title) {
                color: #4D4D4D;
                background-color: #E6E6E6
            }

            :deep(.el-menu-item.is-active) {
                color: #4D4D4D;
            }




        }


        .article-outer-box {
            width: 100%;

        }

    }

    .multiple-category-mobile-box {
        display: none;
        width: 84%;
        margin: 0 auto;

        @media screen and (max-width:850px) {
            display: flex;
        }

    }

}
</style>
