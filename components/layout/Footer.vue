<template>
    <footer class="footer-box">
        <div class="top-box">
            <div class="logo-box">
                <img src="/assets/img/logo.png" alt="">
            </div>
            <div class="footer-info-box">
                <p>
                    會址:　台北市中山區南京東路二段１３２號２樓
                </p>
                <p>
                    會員服務Email:　tihaservice2024@gmail.com
                </p>
                <p>
                    行政聯絡窗口Email:　tiha20250521@gmail.com
                </p>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright © 2024 台灣腸保健康協會.All Rights Reserved</p>
        </div>
    </footer>
</template>
<script setup lang="ts">
const numberOfVisitors = ref(3977434)
const numberOfVisitorsThisyear = ref(156520)
const updateDate = ref('2024年10月21日')
</script>
<style lang="scss" scoped>
.footer-box {
    background-color: #EFEFEE;

    .top-box {
        display: flex;
        justify-content: center;
        gap: 2rem;

        align-items: center;
        width: 100%;
        padding: 2% 0;

        @media screen and (max-width:850px) {
            flex-direction: column;
            align-items: center;
            padding: 5% 0;
        }
    }

    .logo-box {
        display: flex;
        width: 30%;
        justify-content: center;

        img {
            width: 100%;
            height: auto;

        }

        @media screen and (max-width:850px) {
            flex: 0;
            padding: 0;
            margin-bottom: 2%;
            align-items: center;
            justify-content: center;
        }
    }

    .footer-info-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40%;
        padding: 2% 0;
        ;
        gap: 0.5rem;

        align-items: flex-start;
        color: $main-content-color;
        font-size: 1rem;
        letter-spacing: 0.2rem;

        @media screen and (max-width:850px) {
            flex-direction: column;
            font-size: 0.8rem;
            letter-spacing: 0.1rem;
            padding: 5% 0;
        }
    }

    .copyright {
        display: flex;
        justify-content: center;
        color: $main-content-color;
        font-size: 1rem;
        padding-bottom: 5%;
        letter-spacing: 0.2rem;

        @media screen and (max-width:850px) {
            // flex-direction: column;
            letter-spacing: 0;
            font-size: 10px;
        }
    }
}

.footer-info {
    background-color: #EFEFEE;
    display: flex;
    justify-content: space-around;
    width: 100%;
    letter-spacing: 0.1rem;

    @media screen and (max-width:850px) {
        flex-direction: column;
        width: 100%;
        // letter-spacing: 0s;
        // font-size: 0.3rem;

    }



    .footer-item1,
    .footer-item2 {

        border-left: 1px solid $main-content-color;
        margin-top: 2%;
        margin-bottom: 2%;
        padding-left: 2%;
        font-size: 0.8rem;
        color: $main-content-color;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media screen and (max-width:850px) {
            border-left: none;
            padding-left: 0;
            margin: 0;
            align-items: center;
            width: 100%;

        }

        .info-box {
            align-items: center;
            display: flex;
            padding: 0.3rem 0;
            font-size: 1rem;

            @media screen and (max-width:850px) {
                display: block;
                margin: 0;
                // font-size:0.5rem ;
            }

            .visitors-number-content,
            .info-content {
                line-height: 1.5rem;
            }

            .map-icon,
            .phone-icon,
            .fax-icon,
            .email-icon {
                margin-right: 5px;
                line-height: 1.5rem;
                width: 1rem;

                @media screen and (max-width:850px) {
                    margin: 0;
                    margin-right: 5px;
                }
            }

            .fax-icon,
            .account {
                margin-left: 1.5rem;

                @media screen and (max-width:850px) {
                    margin: 0;
                    margin-right: 5px;
                }
            }

            .association-name {
                @media screen and (max-width:850px) {
                    margin-bottom: 12%;
                }
            }

            .update-time {
                @media screen and (max-width:850px) {
                    display: block;
                    text-align: center;

                }
            }
        }

    }
}
</style>