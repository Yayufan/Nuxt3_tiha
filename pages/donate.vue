<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="捐贈資訊" secoundRoute="捐款方式"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">捐款方式</h1>

            <!-- <div class="function-bar">
                <div class="donation-instructions common-label">捐款方式說明</div>
                <div class="function-box">
                    <nuxt-link target="_blank" to="https://web.intersoft.com.tw/donation/OnlineOrgan/Default.aspx"
                        class="go-to-donate">我要捐款</nuxt-link>
                    <button class="personal-info-instructions" @click="drawer = true">個資說明</button>
                </div>
            </div> -->

            <div class="content-box">

                <article class="paragraph">
                    <h2 class="sub-title">捐款帳戶
                    </h2>
                    <div class="donation-info ">
                        <div class="common-label">戶名</div>
                        <p class="content">社團法人台灣腸保健康協會</p>
                    </div>

                    <!-- 額外新增 -->
                    <div class="donation-info  ">
                        <div class="common-label">搭配銀行</div>
                        <div class="content">
                            <p>台北富邦銀行（代碼：012） </p>
                            <p>南京東路分行（分行代碼：7026）</p>
                        </div>
                    </div>

                    <div class="donation-info">
                        <div class="common-label">帳號</div>
                        <p class="content">82120000244940</p>
                    </div>
                    <div class="number-mask">01</div>
                </article>

                <!-- <article class="paragraph">
                    <h2 class="sub-title">ATM</h2>
                    <div class="donation-info ">
                        <div class="common-label">戶名</div>
                        <p class="content">社團法人中華民國器官捐贈協會</p>
                    </div>
                    <div class="donation-info  ">
                        <div class="common-label">搭配銀行</div>
                        <ol class="content">
                            <li>華南銀行(銀行代碼：008)<span class="bank">信維分行</span><br><br>帳 號：149-10-008398-4</li>
                            <li>聯邦銀行(銀行代碼：803)<span class="bank">文林簡易分行</span><br><br>帳 號：048-50-8017900</li>
                            <li>元大銀行(銀行代碼：806)<span class="bank">和平分行</span><br><br>帳 號：215-9200-1838088</li>

                        </ol>
                    </div>
                    <div class="number-mask">02</div>
                </article>

                <article class="paragraph">
                    <h2 class="sub-title">支&nbsp;&nbsp;票</h2>
                    <div class="donation-info ">
                        <div class="common-label">抬頭</div>
                        <p class="content">社團法人中華民國器官捐贈協會</p>
                    </div>

                    <div class="number-mask">03</div>
                </article>



                <article class="paragraph">
                    <h2 class="sub-title">信&nbsp;用&nbsp;卡</h2>
                    <div class="application-reminder">
                        <p class="application-reminder-part01">點擊上方<span class="go-to-donate">我要捐款</span>進行線上捐款 或</p>
                        <p class="application-reminder-part02">
                            請填妥
                            <a class="download-link" href="/files/donate.pdf" target="_blank" >信用卡捐款單</a>
                            <span class="note">(本會需負擔信用卡公司相關費用)</span>
                        </p>
                    </div>

                    <div class="number-mask">04</div>
                </article>

                <article class="paragraph">
                    <h2 class="sub-title">郵局存簿轉帳</h2>
                    <div class="application-reminder">請填妥
                        <a class="download-link" href="/files/post-office-transfer-108.pdf" target="_blank" >郵局捐款轉帳付款授權書</a>
                    </div>
                    <div class="number-mask">05</div>

                </article> -->

            </div>

            <el-drawer v-model="drawer" direction="rtl">
                <template #header>
                    <h4 class="donate-drawer-header">個資說明</h4>
                </template>
                <template #default>
                    <ol class="drawer-content-box">
                        <li class="personal-info-title">蒐集、處理及利用之目的：<br>
                            <p class="personal-info-content">
                                本會為辦理捐款作業，向台端蒐集個人資料，提供本會用於捐款管理，
                                以供本會辦理捐款作業事宜進行資料處理及行政事務等相關作業。
                            </p>
                        </li>
                        <li class="personal-info-title">蒐集、處理及利用之個人資料類別：<br>
                            <p class="personal-info-content">
                                捐款者之姓名、身分證字號或居留證號、email、通訊電話、行動電話、通訊地址等。
                            </p>
                        </li>
                        <li class="personal-info-title">個人資料利用之期間、地區、對象及方式：<br>
                            <p class="personal-info-content">
                                (一)期間：個人資料蒐集之特定目的存續期間，依相關法令之保存所訂保存年限或本會因執行行政相關業務所必須之保存期間。
                                <br><br>
                                (二)地區：本國及與本會有業務往來之國內外機構營業處所所在地。
                                <br><br>
                                (三)對象：本會、依法有調查權機關及主管行政機關。
                                <br><br>
                                (四)方式：以自動化機器或其他非自動化之方式，依誠實及信用方法利用。
                            </p>
                        </li>
                        <li class="personal-info-title">依據個資法第三條規定， 台端就個人資料依個資法規定得行使下列權利，不得預先拋棄或以特約限制之：<br>
                            <p class="personal-info-content">
                                (一)得向本會查詢、請求閱覽或請求製給複製本，惟本會依法得酌收必要成本費用。
                                <br><br>
                                (二)得向本會請求補充或更正，惟依法 台端應為適當之釋明。
                                <br><br>
                                (三)得向本會請求停止蒐集、處理或利用及請求刪除，惟依法本會因執行業務所必須者，得不依 請求為之。
                            </p>
                        </li>
                        <li class="personal-info-title">相關資料本會僅使用於會務行政相關業務， 台端得自由選擇是否提供相關個人資料，惟
                            台端若拒絕提供相關個人資料，本會將無法進行必要之審核及處理作業，致無法提供您參與本會捐款事宜。</li>
                        <li class="personal-info-title">本告知事項如有未盡事宜，依個人資料保護法及其他相關法規之規定辦理。</li>
                    </ol>
                </template>

            </el-drawer>

        </section>

    </div>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

const drawer = ref(false)

</script>

<style scoped lang="scss">
.common-section {
    width: $common-section-width;
    margin: $common-section-margin;
    font-family: $common-section-font-family;

    @media screen and (max-width:481px) {
        :deep(.el-drawer) {
            width: 80% !important;
        }

    }


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

    .function-bar {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin: 5% 10% 5% 10%;

        @media screen and (max-width:481px) {
            flex-direction: column-reverse;
            align-items: center;
            margin: 5% 0;
        }

        .donation-instructions {
            padding: 0.5rem 1rem;

            @media screen and (max-width:481px) {
                align-self: baseline;
                margin: 6% 0;
            }

        }

        .go-to-donate {
            display: inline-block;
            cursor: pointer;
            font-size: 1.2rem;
            margin: 0 5px;
            padding: 0.5rem 2rem;
            background: $accent-color;
            color: #fff;
            border-radius: 16px;
            border: none;

            @media screen and (max-width:481px) {
                margin: 0 0.5rem;
                box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
            }

        }

        .personal-info-instructions {

            font-size: 1.2rem;
            margin: 0 5px;
            padding: 0.5rem 2rem;
            background: $sub-color;
            color: #fff;
            border-radius: 16px;
            border: none;
            transition: 0.5s;

            &:hover {
                cursor: pointer;
                background: $sub-hover-bg;
                color: $sub-hover-text;
            }

            @media screen and (max-width:481px) {
                margin: 0 0.5rem;
                box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
            }

        }

    }

    .drawer-content-box {
        .personal-info-title {
            font-weight: bold;
            margin-bottom: 1rem;
        }

        .personal-info-content {
            font-weight: normal;
            margin: 1rem 0;
        }
    }

    .content-box {
        margin-left: 10%;
        margin-right: 10%;
        // background-color: aqua;
        color: $main-content-color;

        .step-btn-box {
            width: 100%;
            text-align: center;
            margin-bottom: 1.5rem;

            img {
                width: 2.5rem;
            }
        }

        @media screen and (max-width:480px) {
            margin: 6% 1%;
        }


        /**這邊是處理通用段落、sub-title 和 內容 */
        .paragraph {
            position: relative;
            //min-height: 100px;
            border: 2px solid $main-color;
            border-radius: 20px;
            background-color: #fff;
            padding: 1rem 3rem;
            margin-bottom: 3%;

            @media screen and (max-width:480px) {
                padding: 1rem;
                margin-bottom: 6%;
            }

            .sub-title {
                color: #56575E;
                font-size: 1.3rem;
            }


            .number-mask {
                font-size: 2rem;
                background-color: $accent-color;
                color: white;
                border-radius: 50%;
                width: 3rem;
                height: 3rem;
                display: inline-block;
                /* 使其為行內塊元素 */
                text-align: center;
                line-height: 3rem;
                /* 行高等於圓形高度以置中 */
                position: absolute;
                /* 絕對定位 */
                left: 0;
                top: 2rem;
                transform: translate(-50%, -50%);

                @media screen and (max-width:480px) {
                    top: 0;
                }

            }

            /**這邊做部分特殊處理 */

            .application-reminder {
                margin-top: 1.5%;
                font-weight: 600;

                p {
                    display: inline-block;

                    @media screen and (max-width:480px) {
                        display: block;
                        margin: 1rem 0;
                    }

                    .note {
                        font-size: 0.9rem;
                    }

                }

                .go-to-donate {
                    margin: 0 5px;
                    padding: 4px 20px;
                    background: $accent-color;
                    color: #fff;
                    border-radius: 4px;
                }

                .download-link {
                    text-underline-offset: 3px;
                    position: relative;
                    top: -2px;
                }


            }


            .donation-info {
                display: flex;
                align-items: baseline;
                margin: 3% 0;
                font-weight: 600;

                .common-label {
                    min-width: 4rem;
                    text-align: center;
                    margin-right: 1rem;

                    @media screen and (max-width:480px) {
                        padding: 2px 4px;
                    }

                }

                .common-no-label {
                    min-width: 4rem;
                    text-align: center;
                    margin-right: 1rem;

                    @media screen and (max-width:480px) {
                        padding: 2px 4px;
                    }
                }



                ol {
                    list-style: none;
                    counter-reset: item;

                    @media screen and (max-width:480px) {
                        padding-left: 20px;
                    }

                }

                li {
                    counter-increment: item;
                    margin-bottom: 2rem;
                    position: relative;

                    &:last-child {
                        margin-bottom: 0;
                    }

                }


                li::before {
                    content: counter(item);
                    background-color: orange;
                    color: white;
                    border-radius: 50%;
                    width: 1.5rem;
                    height: 1.5rem;
                    display: inline-block;
                    text-align: center;
                    line-height: 1.5rem;
                    position: absolute;
                    left: -40px;
                    top: 0;


                    @media screen and (max-width:480px) {
                        left: -20px;
                    }

                }

                .bank {
                    margin-left: 1rem;

                    @media screen and (max-width:480px) {
                        margin-left: 0.5rem;
                    }

                }



            }

        }

    }

    .donate-drawer-header {
        color: $main-color;
    }

}
</style>
