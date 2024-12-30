<template>
    <!-- 連結和版權所有盒子 -->
    <div class="footerLinkBox">
        <!-- 版權所有盒子 -->
        <div class="reservedBox">
            <p class="reserved">© 2024. All Rights Reserved.</p>
            <p class="built">Built by ZF with ♥</p>
        </div>
        <!-- 圖標連結盒子 -->
        <div class="iconLinkBox">
            <!-- 單個圖標連結 -->
            <div class="iconLink">
                <!-- FB -->
                <a href="#">
                    <img class="icon" src="/img/facebook.svg">
                </a>
            </div>

            <div class="iconLink">
                <!-- Line -->
                <a href="#">
                    <img class="icon" src="/img/line.svg">
                </a>
            </div>

            <div class="iconLink">
                <!-- Youtube -->
                <a href="#">
                    <img class="icon" src="/img/youtube.svg">
                </a>
            </div>

            <!-- Instagram -->
            <!-- <div class="iconLink">
                    <a href="#">
                        <img class="icon" src="/img/instagram.svg">
                    </a>
                </div> -->
        </div>
    </div>

</template>

<script setup lang='ts'>


import { ref, reactive } from 'vue'

</script>

<style scoped lang="scss">
/**連結和版權所有盒子 */
.footerLinkBox {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4% 0;

    @media screen and (max-width:481px) {
        flex-direction: column;
    }


    /**版權所有盒子 */
    .reservedBox {
        width: 45%;

        @media screen and (max-width:481px) {
            order: 2;
        }

        .reserved {
            font-size: 0.9rem;
            line-height: 26px;
        }

        .built {
            font-size: 0.8rem;
            line-height: 26px;
            color: #6C757D;
        }
    }

    /**連結盒子 */
    .iconLinkBox {
        //width: 45%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width:481px) {
            order: 1;
        }

        /**每個連結 */
        .iconLink {
            padding: 5px 15px;

            /**連結圖標 */
            .icon {
                width: 24px;
                height: 24px;
                transition: 0.5s;

                &:hover {
                    transform: translateY(-5px);
                }
            }
        }

    }
}
</style>