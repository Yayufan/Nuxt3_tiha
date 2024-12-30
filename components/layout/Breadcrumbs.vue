<template>
    <div class="breadcrumbs">
        <div class="temp-box"></div>
        <el-breadcrumb class="breadcrumb" :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item>{{ props.firstRoute }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ props.secoundRoute }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script lang="ts" setup>
    import { ArrowRight } from '@element-plus/icons-vue'

    const props = defineProps<{
        firstRoute: string,
        secoundRoute: string
    }>();


</script>
<style lang="scss" scoped>
.breadcrumbs {
    padding: 20px 0;
    max-width: 100vw;
    max-width: 100vw;
    background-color: #EAEAE9;
    display: flex;
    // justify-content: space-around;
    .breadcrumb {
        display: flex;
        line-height: 100%;
        font-size: 1rem;
        font-weight: normal;
        letter-spacing: 0.1rem;
        color: $main-content-color;
        width: 1047.6px;
        @media screen and (max-width: 1100px) {
            width: 682.8px;
            
        }
        @media screen and (max-width: 850px) {
            width: 70%;
            // padding: 0 10px;
            margin-left: 13%;
            
        }
        margin: 0 auto;
        // margin-left: 14.4%;
        // width: 47rem;
       :deep(.is-link) {
            &:hover {
                color: $main-color;
            }
       }
    }
}
</style>