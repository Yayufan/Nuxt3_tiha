<!--  -->
<template>
    <section class="article-list-section">
        <el-breadcrumb :separator-icon="ArrowRight" class="article-list-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item>最新消息</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="type-title-box">
            <p>最新消息</p>
        </div>

        <div class="article-list-box">
            <ul>
                <nuxt-link v-for="(item, index) in newsList.records" :key="index"
                    :to="{ name: 'news-id', params: { id: item.articleId } }">
                    <li class="news-item">
                        <p class="news-title"> {{ item.title }}</p>
                        <p class="news-announcementDate"> {{ item.announcementDate }} </p>
                    </li>
                </nuxt-link>
            </ul>
        </div>

        <!-- 
        分頁插件 total為總資料數(這邊設置20筆),  default-page-size代表每頁顯示資料(預設為10筆,這邊設置為5筆) 
        current-page當前頁數,官方建議使用v-model與current-page去與自己設定的變量做綁定,
        -->
        <div class="example-pagination-block news-pagination">
            <el-pagination layout="prev, pager, next" :page-count="Number(newsList.pages)"
                :default-page-size="Number(newsList.size)" v-model:current-page="currentPage"
                :hide-on-single-page="true" />
        </div>

    </section>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

//設定分頁組件,currentPage當前頁數
let currentPage = ref(1)

let newsList = reactive({
    pages: 1,
    size: 10,
    records: [
        {
            articleId: 123,
            title: '淺談雷射包皮雕碩手術',
            announcementDate: '2024-10-07'
        },
        {
            articleId: 123,
            title: '解救你的鳥鳥危機，尿尿疼痛、灼熱，尿道口流出黃白色膿，我是尿道炎嗎?',
            announcementDate: '2024-10-08'
        },
        {
            articleId: 123,
            title: '寒流來襲，氣溫驟降!! 你是一直想尿尿，還是尿不出來?',
            announcementDate: '2024-10-09'
        },
        {
            articleId: 123,
            title: '請問醫師，到底包皮 「割還是不割」 比較好?',
            announcementDate: '2024-10-10'
        },
    ]
})

const getNewsList = async (page: number, size: number) => {
    let { data: response } = await SSRrequest.get('article/news/pagination', {
        params: {
            page,
            size
        }
    })

    // 直接更新 articleList 的值
    if (response.value?.data) {
        Object.assign(newsList, response.value.data)
    }


}

await getNewsList(currentPage.value, 10)


//監聽當前頁數的變化,如果有更動就call API 獲取數組數據
watch(currentPage, (value, oldValue) => {
    getNewsList(value, 10)
})



</script>

<style scoped lang="scss">
.article-list-section {
    margin: 3% auto;
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

    .article-list-box {
        margin: 3% 8%;
        font-weight: 540;
        font-family: 'Microsoft YaHei', "DFKai-SB", "PingFang TC", "Microsoft JhengHei", "Source Han Sans", "Noto Sans CJK", sans-serif;


        ul {
            margin: 0;
            padding: 0;

            .news-item {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                padding: 6px 0;
                color: #1C2B6E;
                border-bottom: 1.5px #b5b5b5 solid;

                &:hover,
                &:hover .news-title::before {
                    color: #49BADE;
                }


                .news-title {
                    display: block;
                    margin-left: 10px;

                    &::before {
                        content: '•';
                        /* 使用•字符模拟disc */
                        position: relative;
                        font-size: 1.3rem;
                        line-height: 1.5;
                        padding: 0 5px;
                        color: #1C2B6D;
                    }

                }

                .news-announcementDate {
                    text-wrap: nowrap;
                    margin-left: 20px;
                }

            }

        }


    }

    .news-pagination {

        /**
        使用Vue3 element plus 專屬的改變UI組件CSS 寫法 '深層覆蓋'
        分頁組件引入盒子,重置分頁組件CSS 
        */
        :deep(.el-pagination) {

            justify-content: center;

            //重製將分頁組件背景色調為 '無'
            .el-pager li {
                background: none !important;
            }

            //按鈕背景色改成 '無'
            button {
                background: none !important;
            }

            &+& {
                margin-top: 10px;
            }

            .example-demonstration {
                margin-bottom: 16px;
            }

        }
    }

}
</style>
