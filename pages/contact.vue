<!-- 聯絡我們路由 -->
<template>
    <section class="contact-section">

        <el-breadcrumb :separator-icon="ArrowRight" class="article-list-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item>聯絡我們</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 聯絡我們組件,無表單型 -->
        <ContactUs></ContactUs>

    </section>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

const tempMemberInofState = useTempMemberInfo()




</script>

<style scoped lang="scss">
.contact-section {
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
}
</style>
