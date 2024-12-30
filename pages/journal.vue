<!--  -->
<template>
    <div>

        <Breadcrumbs firstRoute="認識器捐" secoundRoute="器官捐贈會刊"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">器官捐贈會刊</h1>

            <div class="content-box">

                <div class="journal-box">

                    <nuxt-link class="article-item" v-for="(item, index) in displayedJournaList " :key="index"
                        target="_blank" :to="item.downloadUrl">

                        <div class="article-info-box">

                            <h2 class="article-title">NO.
                                <span class="number">{{ item.title }}</span>
                                <br>
                                電子會刊
                            </h2>

                        </div>

                    </nuxt-link>
                </div>

                <div class="more-box">
                    <button v-if="!showFullList" class="more-btn" @click="getOtherList">查看更多</button>
                    <button v-else class="more-btn" @click="getOtherList"> 收起更多 </button>
                </div>

            </div>


        </section>
    </div>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'


let showFullList = ref(false)

let journaFullList = reactive(
    [
        {
            title: '93',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/93.pdf'
        },
        {
            title: '92',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/92.pdf'
        },
        {
            title: '91',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/91.pdf'
        },
        {
            title: '90',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/90.pdf'
        },
        {
            title: '89',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/89.pdf'
        },
        {
            title: '88',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/88.pdf'
        },
        {
            title: '87',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/87.pdf'
        },
        {
            title: '86',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/86.pdf'
        },
        {
            title: '85',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/85.pdf'
        },
        {
            title: '84',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/84.pdf'
        },
        {
            title: '83',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/83.pdf'
        },
        {
            title: '82',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/82.pdf'
        },
        {
            title: '81',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/81.pdf'
        },
        {
            title: '80',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/80.pdf'
        },
        {
            title: '79',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/79.pdf'
        },
        {
            title: '78',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/78.pdf'
        },
        {
            title: '77',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/77.pdf'
        },
        {
            title: '76',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/76.pdf'
        },
        {
            title: '75',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/75.pdf'
        },
        {
            title: '74',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/74.pdf'
        },
        {
            title: '73',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/73.pdf'
        },
        {
            title: '72',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/72.pdf'
        },
        {
            title: '71',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/71.pdf'
        },
        {
            title: '70',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/70.pdf'
        },
        {
            title: '69',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/69.pdf'
        },
        {
            title: '68',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
            downloadUrl: '/files/journa/68.pdf'
        },
    ]
)



//初始化名單,原始名單的前12位,slice 會返回一個新數組
let initJournaList = computed(() => { return journaFullList.slice(0, 12); })

//顯示名單,根據情況顯示前12個,或是全部
let displayedJournaList = reactive([...initJournaList.value])

//獲取其他List
const getOtherList = () => {
    if (!showFullList.value) {
        // 清空原数组并赋值全部数据
        displayedJournaList.splice(0, displayedJournaList.length, ...journaFullList);
        showFullList.value = true

    } else {

        // 清空原数组并赋值前12个元素
        displayedJournaList.splice(0, displayedJournaList.length, ...journaFullList.slice(0, 12));
        showFullList.value = false
    }
}



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


        @media screen and (max-width:481px) {
            margin-left: 0;
            margin-right: 0;
        }

        .journal-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            .article-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 5%;
                margin-right: 4%;
                border-radius: 50%;
                border: 3px solid $sub-color;
                box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
                width: 200px;
                height: 200px;
                transition: 0.5s;
                color: $sub-color;

                //當滑鼠碰到這篇文章時,改變字體顏色+圖片放大
                &:hover {
                    cursor: pointer;
                    background: $sub-color ;

                    .article-title {
                        color: #fff !important;
                    }

                }

                @media screen and (max-width:810px) {
                    width: 155px;
                    height: 155px;
                    margin: 5% auto;
                }

                @media screen and (max-width:480px) {
                    width: 90px;
                    height: 90px;
                    margin: 5% auto;
                }


                .article-info-box {
                    color: $sub-color;

                    .article-title {
                        font-size: 1.5rem;
                        color: $sub-color;

                        @media screen and (max-width:480px) {
                            font-size: 1.3rem;
                        }

                        .number {
                            font-size: 3rem;

                            @media screen and (max-width:480px) {
                                font-size: 2.7rem;
                            }
                        }

                    }

                }

            }


        }





        /**用來觸發查看更多的按鈕 */
        .more-box {
            text-align: center;
            margin: 0 auto;

            .more-btn {
                color: #fff;
                background-color: $sub-color;
                padding: 1rem 5rem;
                border-radius: 16px;
                letter-spacing: 0.1rem;
                border: none;
                font-weight: normal;

                &:hover {
                    cursor: pointer;
                }
            }
        }

    }
}
</style>