<template>
    <header class="PC-menu-box">
        <img class="hambuger-menu" src="@/assets/img/HamburgerMenu.png" alt="" @click="openMenu">
        <div class="logo-box">
            <nuxt-link :to="'/'"><img ref="" class="logo" src="@/assets/img/logo.png" alt="logo"
                    @click="closeMenu"></img></nuxt-link>
        </div>
        <div class="input-section">

            <div class="gcse-search"></div>


            <!-- <el-input class="input" v-model="search">
                <template #suffix>
                    <el-icon class="el-input__icon">
                        <ElIconSearch />
                    </el-icon>
                </template>
</el-input> -->

            <nuxt-link class="contact" @click="goToBottom">聯絡我們</nuxt-link>
        </div>
    </header>
    <div v-if="isOpened" class="mask" @click="closeMenu"></div>
    <div v-show="isOpened" class="menu">

        <!-- <div class="gcse-search"></div> -->
        <!-- <img style="width: 90%;margin: 5px auto"  ref="" class="logo" src="@/assets/img/logo.png" alt="logo" @click="closeMenu"></img> -->

        <!-- <div class="input-section">
            <el-input class="input" v-model="search">
                <template #suffix>
                    <el-icon class="el-input__icon">
                        <ElIconSearch />
                    </el-icon>
                </template>
            </el-input>

            <el-button class="cancel-button" @click="isOpened = false"><el-icon><ElIconClose /></el-icon></el-button>
        </div> -->

        <div class="menu-item-section">
            <div class="main-menu">
                <div :class="['menu-item', { active: selectedIndex === index }]" v-for="(item, index) in menuItem"
                    @click="() => selectItem(index)">{{ item.title }}<div class="icon-box"><el-icon
                            v-if="selectedIndex === index">
                            <ElIconArrowRight />
                        </el-icon></div>
                </div>
            </div>
            <div class="sub-menu">
                <div class="menu-item" v-for="item in submenu"><nuxt-link :to="item.link" @click="isOpened = false">{{
                    item.title }}</nuxt-link></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

import { Search } from '@element-plus/icons-vue'

const search = ref('')
const isOpened = ref(false)

const openMenu = () => {
    isOpened.value = !isOpened.value
}
const closeMenu = () => {
    isOpened.value = false
}



const menuItem = [
    {
        title: '關於我們',
        subMenu: [
            {
                title: '宗旨任務',
                link: '/purpose'
            },
            {
                title: '加入會員',
                link: '/become-member'
            },
            {
                title: '協會年表',
                link: '/association-chronology'
            },
            {
                title: '歷年成果(簽卡分析)',
                link: '/achievements'
            },
            {
                title: '臉書粉絲團',
                link: 'https://www.facebook.com/organassociation/'
            },
        ]
    },
    {
        title: '訊息看板',
        subMenu: [
            { title: '最新消息', link: 'news' },
            { title: '活動花絮', link: '/event-highlights' },
            { title: '合作申請單', link: '/cooperation' }
        ]
    },
    {
        title: '認識器捐',
        subMenu: [
            { title: '器捐學堂', link: '/organ-donation' },
            { title: '器捐捐贈會刊', link: '/journal' },
            { title: '影音專區', link: '/video-area' },
            { title: '文宣下載', link: '/brochure-download' },
            { title: '器捐生命故事:捐贈者家屬篇', link: '/story-donor-family' },
            { title: '器捐生命故事:受贈者篇', link: '/story-recipient' },
            { title: '白袍心聲', link: '/doctor-voice' },
            { title: '法令規章', link: '/laws' }
        ]
    },
    {
        title: '家屬關懷',
        subMenu: [
            { title: '協助資源', link: '/assistance-resources' },
            { title: '好書推薦', link: '/book-recommendations' },
            { title: '社工專欄', link: '/social-work-column' },
            { title: '家屬資料填寫', link: 'https://docs.google.com/forms/d/e/1FAIpQLScxrl0on7gvcaTYTI9knEgy0-dwGHhT7SeJfS183B8g811QHQ/viewform' },
            { title: '如果你要懷念我', link: '/miss-me' }
        ]
    },
    {
        title: '捐款贊助',
        subMenu: [
            { title: '捐款支持-立即行動', link: '/donate' },
            { title: '版畫有限量，愛心無限亮', link: '/charity-sale' }
        ]
    },
    {
        title: '簽署器捐',
        subMenu: [
            { title: '線上簽署', link: '/sign-online' },
            { title: '簽卡停看聽', link: '/frequently-asked-questions' },
            { title: '撤銷簽署', link: '/cancel-donation' }
        ]
    }
]
const submenu = ref()

const active = ref(false);

const selectedIndex = ref();
const selectItem = (index: number) => {
    selectedIndex.value = index;
    submenu.value = menuItem[index].subMenu;
}

const goToBottom = () => {

    window.scrollTo(
        {
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        }
    )
}


</script>

<style lang="scss" scoped>
.PC-menu-box {
    width: 100%;
    display: flex;
    //justify-content: center;
    justify-content: space-between;

    @media screen and (max-width: 850px) {
        justify-content: flex-start;
        box-shadow: 0 2px 0px rgba(0, 0, 0, 0.1);
    }

    .hambuger-menu {
        display: none;

        @media screen and (max-width: 850px) {
            display: block;
            margin: 4vw 30% 1.5vw 5vw;
            width: 3vw;
            height: 3vw;
            cursor: pointer;
        }
    }

    .logo-box {
        // margin-left: 40vw;
        margin-left: 4%;

        @media screen and (max-width: 850px) {
            // margin: 0 0 1.5vw 0;
            width: 30vw;
            margin: 1vw 0 1.5vw 0;
        }

        width: 20vw;

        img {
            width: 100%;
        }
    }

    .input-section {

        width: 25vw;
        display: flex;
        // align-items: flex-end;
        align-items: center;
        margin-left: 15vw;
        padding-bottom: 0.5rem;

        @media screen and (max-width: 850px) {
            display: none;
        }

        .el-input {
            width: 16vw;
        }

        :deep(.el-input__wrapper) {
            background-color: $main-color;
            max-height: 1.8rem;
            border-radius: 30px;
        }

        :deep(.el-input__suffix) {
            background-color: #FFFFFF;
            color: $main-color;
            padding-right: 1.2rem;
            max-height: 1rem;
            width: 0.4rem;
            border-radius: 10px;
            cursor: pointer;

            .el-icon {
                font-size: 0.6rem;
            }
        }

        .contact {
            color: $main-color;
            font-size: 1rem;
            margin-left: 1vw;
            padding-bottom: 0.1vw;
            cursor: pointer;

            &:hover {
                border-bottom: 1px solid $main-color;
            }
        }
    }

}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 90;
}


.menu {
    display: none;

    @media screen and (max-width: 850px) {
        -webkit-mask: linear-gradient(#fff, #fff);
        mask: linear-gradient(#fff, #fff);
        // display: none;
        display: flex;
        flex-direction: column;
        background-color: #FFFFFF;
        // min-height: 750px;
        width: 65vw;
        position: absolute;
        left: 0;
        top: 10.8vw;
        z-index: 1000;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }

    .input-section {
        display: flex;
        justify-content: center;

        .el-input {
            width: 65%;
            padding: 10px 0 15px 0;
        }

        :deep(.el-input__wrapper) {
            background-color: $main-color;
            max-height: 1.8rem;
            border-radius: 30px;
            // width: 70vw;
        }

        :deep(.el-input__suffix) {
            background-color: #FFFFFF;
            color: $main-color;
            padding-right: 1.2rem;
            max-height: 1rem;
            width: 0.4rem;
            border-radius: 10px;
            cursor: pointer;

            .el-icon {
                font-size: 0.6rem;
            }
        }

    }

    .menu-item-section {
        display: flex;
        border-width: 0.5px 0 0px 0;
        min-height: 100%;
        border-color: $main-content-color;
        border-style: solid;

        .main-menu {
            display: flex;
            width: 40%;
            min-height: 500px;
            border: 1px solid #DDDDDD;
            flex-direction: column;

            .menu-item {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.2rem;
                // line-height: 60px;
                border-width: 0px 0px 0.1px 1px;
                border-style: solid;
                border-color: #DDDDDD;
                min-height: 47px;

                .icon-box {
                    min-width: 1.5rem;
                }

                .el-icon {
                    position: relative;
                    top: 3.2px;
                    color: #FFFFFF;
                }

                &.active {
                    color: #FFFFFF;
                    background-color: #9BB179;
                    border-color: #9BB179;
                }
            }
        }

        .sub-menu {
            display: flex;
            width: 60%;
            flex-direction: column;

            // align-items: center;
            // justify-content: center;
            .menu-item {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-size: 1.2rem;
                flex-wrap: wrap;
                // align-self: center;
                border-width: 0px 0px 0.1px 0px;
                border-style: solid;
                border-color: #DDDDDD;
                // line-height: 47px;
                // border: 0.1px solid #DDDDDD;
                width: 100%;
                min-height: 47px;

            }
        }
    }
}
</style>