<!-- 團隊介紹路由 -->
<template>

    <section class="introduce-section">

        <el-breadcrumb :separator-icon="ArrowRight" class="article-list-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item >團隊介紹</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 團隊介紹組件 -->
        <TeamDetail></TeamDetail>

    </section>
</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'


</script>

<style scoped lang="scss">
.introduce-section {
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
