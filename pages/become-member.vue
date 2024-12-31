<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="加入我們" secoundRoute="加入會員"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">加入會員</h1>

            <div class="content-box">

                <article class="paragraph">
                    <h2 class="sub-title">會員類別</h2>
                    <div class="individual-member-box">
                        <div class="common-label">個人會員</div>
                        <p class="content">凡贊同本會宗旨，年滿二十歲，填具入會申請書， 經理事會通過，並繳納會費後，為個人會員。</p>
                    </div>
                    <div class="group-member-box">
                        <div class="common-label">團體會員</div>
                        <p class="content">凡機構團體贊同本會宗旨，填具入會申請書，經理事會通過，並繳納會費後，為團體會員。團體會員得推派代表一人，以行使權利。</p>
                    </div>
                    <div class="number-mask">1</div>
                </article>

                <div class="step-btn-box">
                    <img src="@/assets/img/arrow-bottom.png">
                </div>

                <article class="paragraph">
                    <h2 class="sub-title">會員權責</h2>
                    <div class="individual-member-box">
                        <p class="content">行使本會章程第二章第十條之權責。</p>
                    </div>
                    <div class="number-mask">2</div>
                </article>

                <div class="step-btn-box">
                    <img src="@/assets/img/arrow-bottom.png">
                </div>

                <article class="paragraph">
                    <h2 class="sub-title">入會申請辦法</h2>
                    <p class="application-reminder">有意加入本會成為會員者，請將申請書填妥後寄回協會，或e-mail、傳真回本會，並請同時繳交會員費。</p>
                    <div class="individual-member-box">
                        <div class="common-label">個人會員會費</div>
                        <p class="content">第一年入會，繳納新台幣貮仟元整（含入會費壹仟元及常年會費壹仟元），第二年起，每年僅須繳納常年會費。</p>
                    </div>
                    <div class="group-member-box">
                        <div class="common-label">團體會員會費</div>
                        <p class="content">
                            第一年入會，繳納新台幣壹萬伍仟元整（含入會費壹萬元及常年會費伍仟元），第二年起，每年僅須繳納常年會費。
                            <br>
                            本會接到您的入會申請書及會費後，經由理、監事會審查通過，您即成為本會會員。
                        </p>
                    </div>
                    <div class="number-mask">3</div>
                </article>

                <div class="step-btn-box">
                    <img src="@/assets/img/arrow-bottom.png">
                </div>

                <article class="paragraph">
                    <h2 class="sub-title">下載入會表格</h2>
                    <p class="application-reminder">請依會員類別下載</p>

                    <div class="download-box">
                        <div class="download-item">
                            <div class="common-label">個人</div>
                            <div class="download-file-box">
                                <a class="download-link" href="/files/personal_membership_application_form.doc"
                                    target="_blank">個人會員入會申請書.doc</a>
                                <a class="download-link" href="/files/personal_membership_application_form.pdf"
                                    target="_blank">個人會員入會申請書.pdf</a>
                            </div>
                        </div>

                        <div class="download-item">
                            <div class="common-label">團體</div>
                            <div class="download-file-box">
                                <a class="download-link" href="/files/group_membership_application_form.doc"
                                    target="_blank">團體會員入會申請書.doc</a>
                                <a class="download-link" href="/files/group_membership_application_form.pdf"
                                    target="_blank">團體會員入會申請書.pdf</a>
                            </div>
                        </div>

                    </div>

                    <div class="number-mask">4</div>
                </article>



            </div>

        </section>
    </div>


</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

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

        // background-color: aqua;
        width: 100%;
        color: $main-content-color;

        .step-btn-box {
            width: 100%;
            text-align: center;
            margin-bottom: 1.5rem;

            img {
                width: 2.5rem;
            }
        }


        /**這邊是處理通用段落、sub-title 和 內容 */
        .paragraph {
            position: relative;
            //min-height: 100px;
            border: 5px solid #E5E8E0;
            border-radius: 80px 40px 40px 40px;
            background-color: #fff;
            padding: 1rem 3rem;
            margin-bottom: 3%;

            .sub-title {
                color: #56575E;
                font-size: 1.3rem;
            }


            .number-mask {
                font-size: 2rem;
                background-color: #C5CEB6;
                color: white;
                border-radius: 50%;
                width: 2.5rem;
                height: 2.5rem;
                display: inline-block;
                /* 使其為行內塊元素 */
                text-align: center;
                line-height: 2.5rem;
                /* 行高等於圓形高度以置中 */
                position: absolute;
                /* 絕對定位 */
                left: 0;
                top: 7%;
                transform: translateY(-50%);
                /* 調整位置至垂直中心 */
            }

            /**這邊做部分特殊處理 */

            .content {
                margin-top: 1.5%;
            }

            .application-reminder {
                margin-top: 1.5%;
            }

            .individual-member-box {
                margin: 3% 0;
            }

            .download-box {
                display: flex;
                align-items: center;
                justify-content: space-around;

                @media screen and (max-width:480px) {
                    flex-direction: column;
                }

                .download-item {
                    display: flex;
                    align-items: center;
                }

                .download-file-box {
                    display: flex;
                    flex-direction: column;

                    // max-width: 10rem;
                    .download-link {
                        margin: 1rem 0.9rem;
                    }

                }

            }


        }

    }
}
</style>
