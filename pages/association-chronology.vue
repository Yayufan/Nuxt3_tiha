<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="加入我們" secoundRoute="協會年表"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">協會年表</h1>

            <div class="content-box">
                <el-timeline style="max-width: 800px">

                    <el-timeline-item placement="top" v-for="(item, index) in displayedChronologyList" :key="index"
                        color="#4A863F" :timestamp="item.timestamp">

                        <ul class="timeline-item-content">
                            <li v-for="(content, index) in item.content">{{ content }}</li>
                        </ul>
                    </el-timeline-item>


                </el-timeline>

                <div class="more-box">
                    <button v-if="!showFullList" class="more-btn" @click="getOtherList">查看更多</button>
                    <button v-else class="more-btn" @click="getOtherList"> 收起更多 </button>
                </div>


            </div>
        </section>

    </div>
</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

let showFullList = ref(false)

//原始名單
let chronologyFullList = reactive([
    {
        timestamp: '民國108年',
        content: [
            '1月開始拜訪全台各勸募及移植醫院並致贈福袋',
            '5月開辦「器捐移植協調人員培力課程」(三場次)',
            '持續整理'
        ],
    },
    {
        timestamp: '民國107年',
        content: [
            '5/31出席「永遠的老朋友~孫叔叔感恩會',
            '7月舉辦「北區志工讀書會」(六堂)',
            '8月開辦「器捐移植協調人員培力課程」(三場次)',
            '8/31出席登錄中心「心臟停止死亡後器官捐贈作業參考文件討論會議」',
            '9月安可電影贈「無聊的人生我死也不要」特映票予家屬及志工',
            '10/5舉辦「廿五週年聯誼茶會」',
            '11/20出席「第十一屆優秀器官勸募人員暨醫療機構及相關團體頒獎典禮」接受表揚',
            '11/23~25參展「2018亞太移植醫學研討會」'
        ],

    },
    {
        timestamp: '民國106年',
        content: [
            '4月協助「基督教國家禱告祭壇及器捐導活動」及後續器捐簽署',
            '6/19出席衛福部「心臟死後器官捐贈」研商會議',
            '7/4協助「交換心生命」電影特映會-振興醫院',
            '7月開始拜訪全台各移植醫院相關單位及人員',
            '9月「校園生命講座」活動開跑',
            '10月無心跳器捐議題投稿「蘋果論壇」'
        ],
    },
    {
        timestamp: '民國105年',
        content: [
            '4月台新基金會補助方案「野餐嘉年華」活動開辦(三場次)',
            '8月台新基金會補助方案「家屬工作坊」活動開辦(四場次)'
        ],
    },
    {
        timestamp: '民國104年',
        content: [
            '7月「器捐家屬團體輔導」北區課程開辦(五堂)',
            '7月「器捐家屬團體輔導」中區課程開辦(五堂)',
            '8月開始拜訪全台各移植醫院相關單位及人員',
            '10月「器捐家屬團體輔導」南區課程開辦(五堂)'
        ],
    },
    {
        timestamp: '民國103年',
        content: [
            '3月「器捐家屬團體輔導」北區課程開辦(八堂)',
            '3月「器捐家屬團體輔導」中區課程開辦(八堂)',
            '3月「生命的味道從"捨"開始綻放」校園巡迴分享開跑',
            '4月接受立委-周倪安邀約至立法院討論器捐修法草案',
            '7月「器捐者三親等內家屬可優先受惠」議題多家媒體採訪',
            '9月「器捐家屬團體輔導」南區課程開辦(八堂)',
            '9/17參加立委-楊玉欣小姐舉辦「器官移植問題與困境」座談會',
            '10/16與羅氏藥廠合辦FB活動「我想捐，我最喜歡的...」活動成果記者會',
            '12/27與輝瑞藥廠合辦「詩情話意話生命」新詩口袋書發表記者會暨頒獎典禮'
        ],
    },
    {
        timestamp: '民國102年',
        content: [
            '4月舉辦「人體器官移植條例第六條論壇」',
            '4月「人體器官移植條例第六條論壇」相關議題引發媒體採訪',
            '7月本會首任秘書長-蘇惠智先生來訪',
            '7月「死囚器捐」議題多家媒體採訪',
            '8/25舉辦「器捐二十‧向捐贈者致敬」二十週年慶活動',
            '9月「器捐二十‧向捐贈者致敬」二十週年慶活動多家媒體採訪',
            '10月與導演-陳永旭先生洽談及籌備「生命的味道」紀錄片',
            '11月「生命的味道」紀錄片拍攝',
            '12月舉辦「生命的味道」紀錄片記者會與多場座談'
        ],
    },
    {
        timestamp: '民國101年',
        content: [
            '3月「家屬諮商室」規劃施工',
            '5月家屬諮商室「語窩」成立茶會',
            '6月舉辦北區「讓愛延續-器捐家屬實務陪伴二日工作坊」',
            '9月舉辦中區「讓愛延續-器捐家屬實務陪伴二日工作坊」'
        ],
    },
    {
        timestamp: '民國100年',
        content: [
            '3月網路電視劇「生命交叉口」首映',
            '5月校園「Show in Love音樂愛無限」演唱會',
            '8月出席登錄中心-愛滋器捐事件關懷小組會議',
            '9月「愛滋器捐事件」新聞發酵，各媒體採訪',
            '9月參與「全國器官捐贈及移植制度改革論壇」',
            '10月理事長至立法院參與「愛滋器捐事件」備詢',
            '12月辦公室搬遷至信義路四段26號3樓之1'
        ],
    },
    {
        timestamp: '民國99年',
        content: [
            '1月率領家屬赴台南參加「2010台灣器官移植運動會」',
            '與台北榮民總醫院合作錄製有聲書-器捐家屬的故事',
            '7月舉辦「Going On單曲EP發表記者會」(轉動器捐希望‧救愛感動你-歌唱比賽成果)',
            '9月網路電視劇「生命交叉口」開拍'
        ],
    },
    {
        timestamp: '民國98年',
        content: [
            '5月登錄中心支援二名工讀生協助繕打簽署資料',
            '6月青輔會一年專案人力二名報到，加入協會大家庭',
            '9月起舉辦「2009轉動器捐希望‧救愛感動你」歌唱比賽；藝人與名人支持拍攝宣導短片',
            '10月監察院長-王建煊先生來訪，瞭解器捐現況'
        ],
    },
    {
        timestamp: '民國97年',
        content: [
            '1月南加州 Donate Life 器捐志工-王先生來訪',
            '1月四格漫畫比賽成果出版「器捐愛‧說畫」',
            '2月與小兵出版社於台北國際書展合辦器捐宣導座談',
            '10月受邀出席登錄中心「器官捐贈優良勸募人員表揚」記者會',
            '10月出席「97年度器官分配原則修正會議」',
            '11月「五親等內指定捐贈」新聞議題發酵，各媒體採訪'
        ],
    },
    {
        timestamp: '民國96年',
        content: [
            '1月矯正機構徵文、海報活動成果出版「生命最後的禮物」',
            '3月起與新視波電視台合辦「捐血及器捐宣導」系列活動',
            '5月起「器官捐贈生命關懷列車」校園耕系列活動開跑',
            '6月「器官捐贈四格漫畫比賽」活動開跑',
            '7月南加州 Donate Life 器捐中心來訪',
            '9月南加州 Donate Life 器捐中心再度來訪，就器捐議題討論交流'
        ],
    },
    {
        timestamp: '民國95年',
        content: [
            '3月起台中區矯正機構「感恩生命‧器官捐贈」巡迴生命教育演溝',
            '5月市長-馬英九先生宣導海報於台北捷運各站揭出',
            '5月起台中區矯正機構「感恩生命‧器官捐贈」徵文、海報活動開始',
            '6月與桃園區肝臟受贈者們合辦「讓愛薪傳」園遊會',
            '9月市長-馬英九先生宣導燈箱廣告於台北捷運中山站、古亭站、新埔站揭出'
        ],
    },
    {
        timestamp: '民國94年',
        content: [
            '1月起與300A2區獅子會合辦「捐血及器捐宣導」系列活動',
            '1月協辦中區「人體大探索」展覽活動',
            '1月「人球-邱小妹」事件引發一連串新聞相關議題',
            '6月網站未完工產生官司事件(由專業電腦志工林先生接手協助處理網站事宜)',
            '7月孫越篇燈箱廣告於台北捷運-台大醫院站、台電大樓站、頂溪站揭出',
            '10月市長-馬英九先生拍攝器捐導短片'
        ],
    },
    {
        timestamp: '民國93年',
        content: [
            '4月協辦「人體奧妙-台灣巡迴展」活動',
            '5月本會新版網站上線',
            '10月健保IC卡登錄器捐意願功能上線',
            '11月協辦南區「人體奧妙-台灣巡迴展」活動'
        ],
    },
    {
        timestamp: '民國92年',
        content: [
            '啟動器官捐贈全國369鄉鎮宣導活動',
            '3月衛生署「捐贈屍體器官移植喪葬費補助標準」發布',
            '4月起與登錄中心合辦「名人看器捐」大專校園器捐宣導',
            '5月參與器官移植分配原則研議',
            '7月衛生署「活體肝臟捐贈移植許可辦法」發布',
            '11月本會「十年有成」十週年慶系列活動開跑',
            '12月起與登錄中心合辦「生命再現-校園巡迴」活動'
        ],
    },
    {
        timestamp: '民國91年',
        content: [
            '6/6出席財團法人器官捐贈移植登錄中心成立大會',
            '7/21舉辦南區醫療網器捐種子志工教育訓練'
        ],
    },
    {
        timestamp: '民國90年',
        content: [
            '1月與奇摩網站合作透過網路公益廣告宣導器官捐贈',
            `3/2舉辦「從本土人文關懷層面談如何推動器官捐贈」座談會，敦促政府成立全國器官捐贈移植
            登錄系統、放寬活體器官移植至五親等、提高違法器官買賣罰則，呼籲提升醫療人員對意外傷害
            病患及家屬的照護品質，並將生死教育加入各級教育課程中`,
            '3/16、17舉辦首場器官捐贈協調人員進階工作坊，期能妥善處理器官捐贈者家屬情緒',
            '7月統計全台簽署器官捐贈卡人數超過40萬人',
            '7月參與人體器官移植條例修正',
            '9月參與財團法人器官捐贈移植登錄中心籌備，期能合理分配並有效利用捐贈之器官',
            '10月啟動器官捐贈全國走透透一年計畫，舉辦大型宣導活動，於公務、醫學與民間機構舉辦，合計450場座談'
        ],
    },
    {
        timestamp: '民國89年',
        content: [
            '2/26開辦專業人員教育課程「器官勸募技巧研習」',
            '3/9以本會理事長名義加入國際組織International Transplant Coordinators Society，正式成為該組織會員',
            '4月召募大專院校「燭心大使」宣導志工',
            '5/10應西班牙TPM（Transplant Procurement Management）之邀，提供全國捐贈／移植人數統計資料，併入全世界器捐資料庫，供全球上網瀏覽',
            '7月拜訪立法院討論台灣器捐現況與因應',
            '9月促請衛生署擴大腦判醫師資格',
            '10月參與人體器官移植條例及腦判程序修訂'
        ],
    },
    {
        timestamp: '民國88年',
        content: [
            '1/11本會電腦網址www.organ.org.tw正式啟用',
            '3/10編輯器官捐贈社會大眾教育手冊',
            '3/18製作孫越篇公益廣告卡式播帶送予廣播電台播出',
            '4/17第350000號器捐同意卡在器捐宣導活動中發出',
            '7/31「生生園器捐網站」啟用，提供社會大眾上網認識器捐相關資訊與簽卡',
            '12/17提出「洗腎與換腎病人健保支出之經濟面問題」、「腦死病人之健保支出及建議要項」供立法院修法參考'
        ],
    },
    {
        timestamp: '民國87年',
        content: [
            '4/24新版孫越篇公益廣告在電視台播出',
            '4月台北中央扶輪社贊助本會免費索卡熱線080-091-066',
            '7/17中華民國器官捐贈者家屬聯誼會成立，從此由本會每年定期舉辦家屬生活營',
            '9/14拜會交通部長，懇請支持駕照背面註記同意器捐事宜',
            '10月簽署器官捐贈同意卡人數超過32萬人',
            '11/13因應業務需要，第二屆臨時理監事會議議決，暫時將中、南兩中心業務歸併至北區總會，全責推展器官捐贈宣導與教育相關工作'
        ],
    },
    {
        timestamp: '民國86年',
        content: [
            `5月「器官捐贈」理念在社會各界積極推動與協助之下，於第三屆國民大會第二次會議中
            獲國大代表陳大鈞等22人提案連署，建請衛生署於健保卡中附上器官捐贈欄，以使願意捐
            贈及被捐贈者管道暢通`,
            '10/19邀集全台器官捐贈者家屬、受贈者、醫護人員與社工等，參加華視百戰百勝節目錄影，共組成五支競賽隊伍，歡樂中兼具器官捐贈宣導的社會教育意義',
            '12月籌畫上網簽卡企劃'
        ],
    },
    {
        timestamp: '民國85年',
        content: [
            '2/13前往健保局拜訪葉金川總經理，提出希望政府協助宣導正確之器官捐贈觀念，並同意將來健保局發行健保IC卡後，將簽署器官捐贈同意資料登錄於健保卡上',
            '7月完成「器官捐贈之勸募兼論死亡病例家屬之悲傷輔導」錄影帶，贈送予各醫院神經內外科、急診室、加護病房、社工室、護理部，以及學校相關科系',
            '11/16舉辦「分享生命」音樂晚會，聽眾憑器官捐贈同意卡入場',
            '12/21「找尋生命的意義」巡迴講座開跑'
        ],
    },
    {
        timestamp: '民國84年',
        content: [
            '1/27完成「Survey of Organ Procuerment Status in Taiwan」報告，提交第三屆世界器官分享學會',
            '2/21舉辦首場「器官捐贈作業研討會」',
            '4/27本會終身義工孫越叔叔器官捐贈電視公益廣告首播，亞洲地區第一支器官捐贈公益廣告片',
            '7/4舉辦專業教育課程「死亡學綜觀系列研討會」',
            '7/14-21前往法國巴黎參加第三屆世界器官分享學會大會，於會中發表「台灣器官捐贈概況」'
        ],
    },
    {
        timestamp: '民國83年',
        content: [
            '3/10北區器官捐贈移植聯絡網路協調委員會於台大醫院召開成立',
            '3/15中區器官捐贈移植聯絡網路協調委員會於台中榮總召開成立',
            '3/16南區器官捐贈移植聯絡網路協調委員會於高雄長庚召開成立',
            '9/25主辦第一屆台灣區移植運動會',
            '10月全國各醫院「悲傷敏感度訓練」課程開辦',
            '11月啟動全國性器官捐贈宣導活動'
        ],
    },
    {
        timestamp: '民國82年',
        content: [
            '8/28中華民國器官捐贈協會於台大校友會館舉行成立大會',
            `10/1參加法律醫事學會「從法制觀點談如何推動器官捐贈」座談會，會中提出
            「人體器官移植條例」修法，議訂第2條之1「醫院應宣導器官捐贈的意義，
            並得對臨終病人及其家屬主動請求捐贈器官」，並修改第8條第2款為「摘
            取器官須不危害捐贈者之生命安全，並以移植於五親等以內之血親或三親等
            以內之姻親或配偶為限」`,
            '10/24「區運在桃園，愛心傳全民」器官捐贈宣導，共有三千七百多人簽署同意卡',
            '11/19本會中區器官捐贈中心成立',
            '12/6啟動全台各大醫院器官捐贈宣導活動'
        ],
    },
    {
        timestamp: '民國81年',
        content: [
            '81年9月15日行政院衛生署發行「器官捐贈同意卡」正式出爐'
        ],
    },
    {
        timestamp: '民國80年',
        content: [
            '80年1月亞洲第一個從事「器官捐贈」宣導教育協調的民間機構 「中華民國器官捐贈中心」（中華民國器官捐贈協會前身）成立'
        ],
    },
    {
        timestamp: '過去',
        content: [],
    },
])

//初始化名單,原始名單的前五位,slice 會返回一個新數組
let initChronologyList = computed(() => { return chronologyFullList.slice(0, 5); })

//顯示名單,根據情況顯示前五個,或是全部
let displayedChronologyList = reactive([...initChronologyList.value])

//獲取其他List
const getOtherList = () => {
    if (!showFullList.value) {
        // 清空原数组并赋值全部数据
        displayedChronologyList.splice(0, displayedChronologyList.length, ...chronologyFullList);
        showFullList.value = true

    } else {

        // 清空原数组并赋值前五个元素
        displayedChronologyList.splice(0, displayedChronologyList.length, ...chronologyFullList.slice(0, 5));
        showFullList.value = false
    }
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
        margin-bottom: 3%;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

    }

    .content-box {
        margin-left: 10%;

        @media screen and (max-width:481px) {
            margin-left: 0;

            .el-timeline{
                padding-left: 0;
            }

        }

        .paragraph {
            margin: 3% 0;
        }


        :deep(.el-timeline-item__timestamp) {
            font-size: 1rem;
            font-weight: 550;
            color: $main-color;
            letter-spacing: 0.1rem;
        }


        .timeline-item-content {
            margin-left: -22px;
            list-style-type: disc;
            color: black;

            li {

                &::marker {
                    font-size: 1.2rem;
                    color: pink;
                }
            }

        }

        /**用來觸發查看更多歷屆理監事的按鈕 */
        .more-box {
            margin: 2% 0;
            text-align: center;

            .more-btn {
                color: #fff;
                background-color: $main-color;
                padding: 1rem 5rem;
                border-radius: 16px;
                letter-spacing: 0.1rem;
                border: none;
                font-weight: normal;
                transition: 0.5s;

                &:hover {
                    cursor: pointer;
                    background-color: $main-hover-btn-bg;
                    color: $main-hover-btn-text;
                }
            }
        }

    }
}
</style>
