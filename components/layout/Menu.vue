<template>
    <div class="menu-section">

        <el-menu :class="['PC-navbar', { 'not-show-logo': !showLogo }]" :ellipsis="false" mode="horizontal" @select=""
            :popper-offset="-1" popper-class="popper">
            
            <el-menu-item v-if="showLogo" class="logo-box" index="homw">
                <nuxt-link :to="'/'"><img ref="" class="logo" src="@/assets/img/logo.png" alt="logo"></nuxt-link>
            </el-menu-item>

            <el-sub-menu index="1">
                <template #title class="firstTitle">關於我們</template>
                <nuxt-link :to="'/purpose'"><el-menu-item index="purpose">成立宗旨</el-menu-item></nuxt-link>
                
            </el-sub-menu>

       
            <el-sub-menu index="2">
                <template #title>訊息看板</template>
                <nuxt-link   to="" ><el-menu-item index="news">最新消息</el-menu-item></nuxt-link>
                <nuxt-link   to="" ><el-menu-item
                        index="event-highlights">活動花絮</el-menu-item></nuxt-link>
                <!-- <nuxt-link :to="'/cooperation'"><el-menu-item index="cooperation">合作申請單</el-menu-item></nuxt-link> -->
            </el-sub-menu>

            <el-sub-menu index="3">
                <template #title>衛教資訊</template>
                <!-- <nuxt-link to="/organ-donation"><el-menu-item index="organ-donation">器捐學堂</el-menu-item></nuxt-link>
                <nuxt-link to="/journal"><el-menu-item index="journal">器捐捐贈會刊</el-menu-item></nuxt-link>
                <nuxt-link to="/video-area"><el-menu-item index="video-area">影音專區</el-menu-item></nuxt-link>
                <nuxt-link to="/brochure-download">
                    <el-menu-item index="brochure-download">文宣下載</el-menu-item>
                </nuxt-link> -->


            </el-sub-menu>
            <el-sub-menu index="4">
                <template #title>影音專區</template>
                <!-- <nuxt-link :to="'/assistance-resources'"><el-menu-item
                        index="assistance-resources">協助資源</el-menu-item></nuxt-link>
                <nuxt-link :to="'/book-recommendations'"><el-menu-item
                        index="book-recommendations">好書推薦</el-menu-item></nuxt-link>
                <nuxt-link :to="'/social-work-column'"><el-menu-item
                        index="social-work-column">社工專欄</el-menu-item></nuxt-link> -->

            </el-sub-menu>
            <el-sub-menu index="5">
                <template #title>捐款資訊</template>
                <!-- <nuxt-link :to="'/donate'"><el-menu-item index="donate">捐款支持-立即行動</el-menu-item></nuxt-link>
                <nuxt-link :to="'/charity-sale'"><el-menu-item
                        index="charity-sale">版畫有限量，愛心無限亮</el-menu-item></nuxt-link> -->
            </el-sub-menu>
            <el-sub-menu index="6">
                <template #title>加入會員</template>
                <nuxt-link to=""><el-menu-item index="sign-online">會員註冊</el-menu-item></nuxt-link>
                <nuxt-link to=""><el-menu-item index="cancel-donation">會員登入</el-menu-item></nuxt-link>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<script lang="ts" setup>

const showLogo = ref(false);

const scrollPosition = useScrollPosition();
watch(scrollPosition, (newValue) => {
    showLogo.value = newValue > 130;
});

</script>

<style lang="scss" scoped>
.menu-section {
    @media screen and (max-width: 850px) {
        display: none;
    }

    background-color: #FFFFFF;
    min-width: 100%;
    box-shadow: 0 2px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    // justify-content: center;


    .PC-navbar {
        border-bottom: none;
        margin-top: 20px;
        padding: 0;
        margin-left: auto;
        margin-right: auto;


        .el-sub-menu {
            :deep(.el-sub-menu__title) {
                color: $main-color;
                font-size: 1.4rem;
                padding-left: 0;
                padding-right: 37px;
                border-bottom: none;
                margin-right: 3rem;


                @media screen and (max-width: 1100px) {
                    font-size: 1.2rem;
                    margin-right: 0;

                }
            }

            :deep(.el-icon) {
                top: 10%;
                min-height: 100%;
                font-size: 1rem;
                padding: 0;
                align-self: center;

            }

        }


        .logo-box {
            transition: opacity 0.1s ease;
            margin-right: 2vw;

            .logo {
                width: 13rem;
            }
        }


    }
}

.popper {
    .el-menu {
        .el-menu-item:not(:first-child) {
            border-top: 1px solid #E0E0E0;
        }

        .el-menu-item {
            font-size: 1rem;
            color: black;
            background-color: #FFFFFF;

            &:hover {
                background-color: #FFFFFF;
                color: $main-color;
            }
        }

    }
}
</style>