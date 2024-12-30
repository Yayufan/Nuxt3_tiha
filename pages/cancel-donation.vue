<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="簽署器捐" secoundRoute="撤銷器官簽署"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">撤銷器官簽署</h1>

            <div class="content-box">

                <p class="additional-information">
                    現行經註記於健保卡之器官捐贈意願屬「具法律效力之同意」
                    <br><br>
                    不管您曾經透過哪些管道簽署器官捐贈，
                    <br><br>
                    如果您因故欲撤除器官捐贈意願註記，
                    <br><br>
                    請於本頁下載列印【器官捐贈意願撤回聲明書】
                    <br><br>
                    填寫後郵寄書面資料至本會
                    <br>
                    <br>
                    感謝您！
                </p>

                <article class="paragraph">
                    <div class="download-file-box">
                        <a class="download-link-ver2"
                            href="/files/withdrawal-of-statement-of-intention-for-organ-donation.docx"
                            target="_blank" >器捐意願撤回聲明書.docx</a>
                        <a class="download-link-ver2"
                            href="/files/withdrawal-of-statement-of-intention-for-organ-donation.pdf"
                            target="_blank" >器捐意願撤回聲明書.pdf</a>
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
            // margin-bottom: 5rem;
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
            margin-left: 1.7rem;

            .download-link-ver2 {
                margin: 0.5rem;
                /** 這邊是為了將a標籤從flex block 狀態,改為inline block 狀態  */
                align-self: flex-start;
            }

        }
    }
}
</style>