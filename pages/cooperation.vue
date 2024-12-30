<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="訊息看板" secoundRoute="合作申請書"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">合作申請書</h1>

            <div class="content-box">

                <p class="additional-information">
                    機構參訪、採訪申請，或其他的合作申請，請於2周前填寫合作申請單預約，
                    以了解您的需求，進行內部行政作業，在時間人力有限下，
                    無法一一受理所有的參訪申請，歡迎多加運用器捐協會官網了解相關資訊，謝謝~
                </p>

                <article class="paragraph">
                    <h2 class="sub-title common-label">合作申請書下載</h2>
                    <div class="download-file-box">
                        <a class="download-link" href="/files/cooperation_application_form.docx" target="_blank">合作申請書.doc</a>
                        <a class="download-link" href="/files/cooperation_application_form.pdf" target="_blank">合作申請書.pdf</a>
                    </div>

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
        margin-bottom: 2%;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }
    }

    .content-box {
        margin-left: 10%;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

        .additional-information {
            margin-left: 1.7rem;
            margin-bottom: 5rem;
            font-size: 1rem;
            max-width: 900px;
            line-height: 1.5;
        }

        .paragraph {
            margin: 3% 0;
        }

        .sub-title {
            font-size: 1.2rem;
        }

        .download-file-box {
            display: flex;
            flex-direction: column;
            margin-left: 2.5rem;

            .download-link {
                margin: 0.5rem;
                /** 這邊是為了將a標籤從flex block 狀態,改為inline block 狀態  */
                align-self: flex-start;
            }

        }
    }
}
</style>