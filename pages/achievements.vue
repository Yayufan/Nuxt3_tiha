<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="加入我們" secoundRoute="歷年成果(簽卡分析)"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">歷年成果(簽卡分析)</h1>

            <div class="content-box">

                <article class="paragraph">
                    <h2 class="sub-title common-label">年度工作報告</h2>
                    <div class="download-file-box">
                        <a class="download-link" href="/files/109_work_result.pdf" target="_blank" >109年度器捐協會 -
                            工作成果報告.pdf</a>
                        <a class="download-link" href="/files/110_work_result.pdf" target="_blank" >110年度器捐協會 -
                            工作成果報告.pdf</a>
                        <a class="download-link" href="/files/111_work_result.pdf" target="_blank" >111年度器捐協會 -
                            工作成果報告.pdf</a>
                    </div>

                </article>

                <article class="paragraph">
                    <h2 class="sub-title common-label">年度簽卡分析</h2>
                    <div class="download-file-box">
                        <a class="download-link" href="/files/109_data_analysis.pdf" target="_blank" >109年器官捐贈認同簽屬 -
                            資料統計分析.pdf</a>
                        <a class="download-link" href="/files/110_data_analysis.pdf" target="_blank" >110年器官捐贈認同簽屬 -
                            資料統計分析.pdf</a>
                        <a class="download-link" href="/files/111_data_analysis.pdf" target="_blank">111年器官捐贈認同簽屬 -
                            資料統計分析.pdf</a>
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
        margin-bottom: 3%;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

    }

    .content-box {
        margin-left: 10%;

        @media screen and (max-width:481px) {
            margin-left: 0;
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

            @media screen and (max-width:480px) {
                margin-left: 1rem;
            }

            .download-link {
                margin: 0.5rem;
                /** 這邊是為了將a標籤從flex block 狀態,改為inline block 狀態  */
                align-self: flex-start;
            }

        }
    }
}
</style>
