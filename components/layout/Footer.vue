<template>
    <footer class="footer-box">
        <!-- <div class="footer-info">
            <div class="footer-item1">
                <div class="info-box">
                    <p class="info-content association-name">社團法人中華民國器官捐贈協會</p>
                </div>
                <div class="info-box">
                    <p class="info-content"><img class="map-icon" src="@/assets/img/MapMarkedAlt.svg"
                            alt="">地址:106台北市大安區信義路四段24號6樓</p>
                </div>
                <div class="info-box">
                    <p class="info-content"><img class="phone-icon" src="@/assets/img/LocalPhoneRound.svg"
                            alt="">電話:02-2702-5150</p>
                    <p class="info-content"><img class="fax-icon" src="@/assets/img/fax.svg" alt="">傳真:02-2702-5393</p>
                </div>
                <div class="info-box">
                    <p class="info-content"><img class="email-icon" src="@/assets/img/EmailRound.svg"
                            alt="">聯絡信箱:office@organ.org.tw</p>
                </div>
            </div>
            <div class="footer-item2">
                <div class="info-box">
                    <p class="info-content">立案字號: 台內社字第8221013號</p>
                </div>
                <div class="info-box">
                    <p class="info-content">統一編號:76947385</p>
                    <p class="info-content account">劃撥帳號:17424922</p>
                </div>
                <div class="info-box">
                    <p class="info-content">戶名:社團法人中華民國器官捐贈協會</p>
                </div>
                <div class="info-box">
                    <p class="info-content">訪客人數 {{ numberOfVisitors }} (當年度{{ numberOfVisitorsThisyear }}) <span class="update-time">更新日期 {{
                        updateDate }}</span></p>
                </div>
            </div>
        </div> -->
        <div class="copyright" style="margin-top: 5%;" >
            <p>Copyright © 2025 台灣腸保健康協會.All Rights Reserved</p>
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