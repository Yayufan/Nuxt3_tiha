<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="捐贈贊助" secoundRoute="版畫有限量，愛心無限亮"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">版畫有限量，愛心無限亮</h1>

            <div class="function-bar">
                <div class="donation-instructions common-label">劉其偉版畫認購義賣</div>
                <div class="function-box">
                    <nuxt-link target="_blank" to="https://web.intersoft.com.tw/donation/OnlineOrgan/Default.aspx"
                        class="go-to-donate">我要捐款</nuxt-link>
                    <button class="personal-info-instructions" @click="drawer = true">個資說明</button>
                </div>
            </div>

            <div class="content-box">

                <article class="paragraph">
                    <div class="charity-painter-box">
                        <div class="painter-img">
                            <img src="/files/charity-painter.png">
                        </div>
                        <div class="painter-info">
                            特此感謝劉其偉先生的長子劉怡孫先生捐贈版畫
                            <br><br>
                            支持中華民國器官捐贈協會
                        </div>
                    </div>
                </article>

                <article class="paragraph">
                    <p class="info-part info-part01">本會是由熱心公益人士籌募社會資源於民國82年（西元1993年）成立，</p>
                    <p class="info-part info-part01">三十年來，持續對社會大眾進行器捐生命教育宣導，並且陪伴捐贈者家屬走過生命的失落。</p>
                    <p class="info-part info-part01">協會服務經費仰賴會員與各界捐款贊助，您的支持是讓我們持續前行的重要能量。</p>

                    <br><br>

                    <p class="info-part info-part02">本次義賣之限量版畫為星座系列與生肖系列，採半抽象的方式，</p>
                    <p class="info-part info-part02">以誇張與簡化的造形，融入個人豐富的想像力與感受而呈現出來。</p>

                    <br>

                    <p>您的認購將讓無價的藝術品更增添意義。</p>

                    <br>

                    <p class="info-part info-part03">敬請有意願認購之個人或公司行號撥冗致電本會02-2702-5150洽詢 翁專員。</p>
                    <p class="info-part info-part03">義賣款項均開立捐款收據隨版畫一同回寄。</p>


                </article>


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
            padding: 0.5rem 2rem;

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

        @media screen and (max-width:481px) {
            margin-left: 0;
            margin-right: 0;
        }

        .step-btn-box {
            width: 100%;
            text-align: center;
            margin-bottom: 1.5rem;

            img {
                width: 2.5rem;
            }
        }

        @media screen and (max-width:480px) {
            margin-left: 1%;
            margin-right: 1%;
        }


        /**這邊是處理通用段落、sub-title 和 內容 */
        .paragraph {
            position: relative;
            background-color: #fff;
            margin-bottom: 3%;

            @media screen and (max-width:480px) {
                margin-bottom: 6%;
            }


            p {
                margin-top: 3%;
                line-height: 1.5;
            }

            .info-part {
                @media screen and (max-width:481px) {
                    display: inline;
                }

            }

            .charity-painter-box {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .painter-img {
                    margin-right: 8%;

                    @media screen and (max-width:481px) {
                        margin-right: 3%;
                    }

                    img {
                        width: 100%;
                        min-width: 100px;

                        @media screen and (max-width:481px) {
                            min-width: 120px;
                        }
                    }
                }

                .painter-info {
                    font-size: 1.9rem;
                    text-align: center;
                    line-height: 1.5;

                    @media screen and (max-width:481px) {
                        font-size: 1.1rem;
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
