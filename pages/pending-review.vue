<template>
    <div class="pending-approval-container">
        <el-card class="approval-card">
            <template #header>
                <h1 class="card-title">資格待審核</h1>
            </template>
            <p class="approval-message">
                您的會員資格正在審核中。<br>
                在審核完成之前，您將無法觀看專業醫療相關的文章。
            </p>
            <p class="approval-submessage">
                我們會盡快處理您的申請。感謝您的耐心等待。
            </p>
            <el-button type="primary" @click="goToLogin" class="login-button">
                返回會員登入
            </el-button>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLogin = () => {
    router.push('login')
}
</script>

<style scoped lang="scss">
.pending-approval-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: white;

    .approval-card {
        width: 90%;
        max-width: 500px;

        .card-title {
            color: #82D3DE;
            margin: 0;
        }

        .approval-message {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .approval-submessage {
            font-size: 14px;
            color: #606266;
            margin-bottom: 30px;
        }


        .login-button {
            background-color: #82D3DE;
            border-color: #82D3DE;
            width: 100%;
        }

        .login-button:hover,
        .login-button:focus {
            background-color: #6BC8D3;
            border-color: #6BC8D3;
        }

    }
}
</style>