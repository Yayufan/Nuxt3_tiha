<template>
    <div>

        <Breadcrumbs firstRoute="關於我們" secoundRoute="發展歷程"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">發展歷程 (敬請期待)</h1>

            <div class="content-box">

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


        /**這邊是處理通用段落、sub-title 和 內容 */
        .paragraph {
            margin-bottom: 3%;

            @media screen and (max-width:480px) {
                margin-bottom: 6%;
            }

        }

        .sub-title {
            display: inline-block;
            margin-left: 10%;
            color: #fff;
            background-color: $main-color;
            padding: 5px 2.5rem;
            border-radius: 16px;
            font-size: $paragraph-font-size;

            @media screen and (max-width:480px) {
                margin-left: 0;
            }

        }

        .content {
            margin-left: 14%;
            margin-top: 2%;
            font-size: $paragraph-font-size;
        }

        .org-content {
            font-size: 1.2rem;
            line-height: 2.5;
        }

    }

}
</style>
