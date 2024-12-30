<!--  -->
<template>
    <div>

        <Breadcrumbs firstRoute="家屬關懷" secoundRoute="如果你要懷念我"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">如果你要懷念我</h1>

            <div class="content-box">

                <div class="pc-content-box">
                    <p class="zh-tw-content">
                        譯自／Robert N. Test所寫“To Remember Me”
                        <br>
                        譯者／蘇惠智（本會創會祕書長）
                        <br>
                        總有一天，
                        <br>
                        我會躺在醫院的白色被單下。
                        <br>
                        總有一個時候，
                        <br>
                        醫生會認定我的腦功能已經停止。
                        <br>
                        那表示，我的生命已經結束了。
                        <br>
                        那時候，請千萬不要稱呼那是死亡之床，
                        <br>
                        而應該稱為生命之床。
                        <br>
                        因為我要將我的身體拿出來幫助別人，
                        <br>
                        延續他們的生命。
                        <br>
                        讓我的眼睛，給一位從來沒有見過人世的人；
                        <br>
                        將我的心，給一位擁有一顆使他痛苦的心臟的人；
                        <br>
                        把我的腎，交給那老是去洗腎的人；
                        <br>
                        用我的筋骨、神經，讓跛腳的孩童行走；
                        <br>
                        燒去我的殘骸，
                        <br>
                        變成可綻放美麗花朵的肥料。
                        <br>
                        如果必須埋葬什麼，
                        <br>
                        請埋葬我的過錯、軟弱及偏見。
                        <br>
                        將我的罪歸還魔鬼、將我的靈交給神。
                        <br>
                        如果你要懷念我，請與我一樣；
                        <br>
                        讓我們都永生不死。
                    </p>

                    <p class="en-content">
                        To Remember Me
                        <br><br>
                        by Robert N. Test
                        <br><br>
                        The day will come when my body will lie upon a white sheet neatly tucked under four corners of a
                        mattress located in a hospital busily occupied with the living and the dying.
                        <br><br>
                        At a certain moment a doctor will determine that my brain has ceased to function and that, for
                        all
                        intents and purposes, my life has stopped.
                        <br><br>
                        When that happens, do not attempt to instill artificial life into my body by the use of a
                        machine.
                        And
                        don't call this my deathbed. Let it be called the Bed of Life, and let my body be taken from it
                        to
                        help
                        others lead fuller lives.
                        <br><br>
                        Give my sight to a man who has never seen a sunrise, a baby's face or love in the eyes of a
                        woman.
                        <br><br>
                        Give my heart to a person whose own heart has pain.
                        <br><br>
                        Give my blood to the teen-ager who was pulled from the wreckage of his car, so that he might
                        live to
                        see
                        his grandchildren play.
                        <br><br>
                        Give my kidneys to one who depends on a machine to exist from week to week.
                        <br><br>
                        Take my bones, every muscle, every fiber and nerve in my body and find a way to make a crippled
                        child
                        walk.
                        <br><br>
                        Explore every corner of my brain.
                        <br><br>
                        Take my cells, if necessary, and let them grow so that, someday, a speechless boy will shout at
                        the
                        crack of a bat and a deaf girl will hear the sound of rain against her windows.
                        <br><br>
                        Burn what is left of me and scatter the ashes to the winds to help the flowers grow.
                        <br><br>
                        If you must bury something, let it be my faults, my weaknesses and all my prejudice against my
                        fellow
                        man.
                        <br><br>
                        Give my sins to the devil. Give my soul to God. If, by chance, you wish to remember me, do it
                        with a
                        kind deed or word to someone who needs you.
                        <br><br>
                        If you do all I have asked, I will live forever.

                    </p>
                </div>



                <div class="mobile-content-box">

                    <div class="function-bar">
                        <button class="navigation-btn " :class="{ 'is-active': activeButton === 'zh-btn' }"
                            @click="setActive('zh-btn')">中文版(Chinese)</button>

                        <button class="navigation-btn" :class="{ 'is-active': activeButton === 'en-btn' }"
                            @click="setActive('en-btn')">英文版(Chinese)</button>
                    </div>


                    <div class="display-mobile-box">

                        <p class="mobile-zh-tw-content" :class="{ 'is-active': activeButton === 'zh-btn' }">
                            譯自／Robert N. Test所寫“To Remember Me”
                            <br>
                            譯者／蘇惠智（本會創會祕書長）
                            <br>
                            總有一天，
                            <br>
                            我會躺在醫院的白色被單下。
                            <br>
                            總有一個時候，
                            <br>
                            醫生會認定我的腦功能已經停止。
                            <br>
                            那表示，我的生命已經結束了。
                            <br>
                            那時候，請千萬不要稱呼那是死亡之床，
                            <br>
                            而應該稱為生命之床。
                            <br>
                            因為我要將我的身體拿出來幫助別人，
                            <br>
                            延續他們的生命。
                            <br>
                            讓我的眼睛，給一位從來沒有見過人世的人；
                            <br>
                            將我的心，給一位擁有一顆使他痛苦的心臟的人；
                            <br>
                            把我的腎，交給那老是去洗腎的人；
                            <br>
                            用我的筋骨、神經，讓跛腳的孩童行走；
                            <br>
                            燒去我的殘骸，
                            <br>
                            變成可綻放美麗花朵的肥料。
                            <br>
                            如果必須埋葬什麼，
                            <br>
                            請埋葬我的過錯、軟弱及偏見。
                            <br>
                            將我的罪歸還魔鬼、將我的靈交給神。
                            <br>
                            如果你要懷念我，請與我一樣；
                            <br>
                            讓我們都永生不死。
                        </p>

                        <p class="mobile-en-content" :class="{ 'is-active': activeButton === 'en-btn' }">
                            To Remember Me
                            <br><br>
                            by Robert N. Test
                            <br><br>
                            The day will come when my body will lie upon a white sheet neatly tucked under four corners
                            of a
                            mattress located in a hospital busily occupied with the living and the dying.
                            <br><br>
                            At a certain moment a doctor will determine that my brain has ceased to function and that,
                            for
                            all
                            intents and purposes, my life has stopped.
                            <br><br>
                            When that happens, do not attempt to instill artificial life into my body by the use of a
                            machine.
                            And
                            don't call this my deathbed. Let it be called the Bed of Life, and let my body be taken from
                            it
                            to
                            help
                            others lead fuller lives.
                            <br><br>
                            Give my sight to a man who has never seen a sunrise, a baby's face or love in the eyes of a
                            woman.
                            <br><br>
                            Give my heart to a person whose own heart has pain.
                            <br><br>
                            Give my blood to the teen-ager who was pulled from the wreckage of his car, so that he might
                            live to
                            see
                            his grandchildren play.
                            <br><br>
                            Give my kidneys to one who depends on a machine to exist from week to week.
                            <br><br>
                            Take my bones, every muscle, every fiber and nerve in my body and find a way to make a
                            crippled
                            child
                            walk.
                            <br><br>
                            Explore every corner of my brain.
                            <br><br>
                            Take my cells, if necessary, and let them grow so that, someday, a speechless boy will shout
                            at
                            the
                            crack of a bat and a deaf girl will hear the sound of rain against her windows.
                            <br><br>
                            Burn what is left of me and scatter the ashes to the winds to help the flowers grow.
                            <br><br>
                            If you must bury something, let it be my faults, my weaknesses and all my prejudice against
                            my
                            fellow
                            man.
                            <br><br>
                            Give my sins to the devil. Give my soul to God. If, by chance, you wish to remember me, do
                            it
                            with a
                            kind deed or word to someone who needs you.
                            <br><br>
                            If you do all I have asked, I will live forever.

                        </p>


                    </div>



                </div>


            </div>


        </section>
    </div>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

const activeButton = ref('zh-btn');

const setActive = (button: any) => {
    activeButton.value = button;
}

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
        margin-bottom: 2%;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }
    }

    .content-box {
        margin-left: 8%;
        display: flex;
        font-size: 1rem;
        color: $main-content-color;

        .pc-content-box {
            display: flex;
        }

        .mobile-content-box {
            display: none;

            .function-bar {
                display: flex;
                align-items: center;

                .navigation-btn {
                    padding: 0.5rem 1rem;
                    color: #3F403E;
                    background: #C5CEB6;
                    border: none;
                    border-radius: 8px;
                    margin-right: 1rem;

                }

                .navigation-btn.is-active {
                    color: #fff;
                    background: $main-color;

                }

            }

            .display-mobile-box {
                //這樣已經讓內容並排了
                display: flex;
                overflow: hidden;
                width: 100%;
            }

            .mobile-zh-tw-content.is-active {
                transform: translateX(0);
            }

            .mobile-en-content.is-active {
                transform: translateX(-100%);
            }

            .mobile-zh-tw-content {
                //第一個內容,他設定最小寬度為整個頁面,所以他真正的顯示位置在 0 的位置
                min-width: 100%;
                transition: 1s;
                margin: 5% 0;
                line-height: 3;
                //默認停留在左側視窗外的位置
                transform: translateX(-100%);
            }

            .mobile-en-content {
                //第二個內容,他設定最小寬度為整個頁面,但前面有一個內容了,所以他真正的顯示位置在 右邊100%的的位置
                min-width: 100%;
                transition: 1s;
                margin: 5% 0;
                line-height: 1.4;
                //默認停留在自己位置
                transform: translateX(0);
            }


        }

        @media screen and (max-width:481px) {
            margin-left: 0;

            .pc-content-box {
                display: none;
            }

            .mobile-content-box {
                display: block;
            }

        }



        .zh-tw-content {
            width: 50%;
            border-right: 1px solid black;
            line-height: 3;

            @media screen and (max-width:480px) {
                padding-right: 3%;
            }

        }

        .en-content {
            width: 50%;
            padding-top: 0.6rem;
            margin-left: 5%;
            line-height: 1.5;
        }



    }
}
</style>