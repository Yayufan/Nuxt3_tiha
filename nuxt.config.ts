// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // server: {
  //   host: '0.0.0.0', // 或指定的 IP 地址
  //   port: 3000
  // },


  //運行時的配置
  runtimeConfig: {
    //運行時配置,僅服務器端可訪問
    //apiSecret: '', // 可以由 NUXT_API_SECRET 环境变量覆盖
    //也可以透過process.env 來訪問環境配置文件的屬性
    apiSecret: process.env.NUXT_API_SECRET,
    //可被客戶端公開訪問
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      domain: process.env.NUXT_PUBLIC_DOMAIN
    }
  },

  //SEO設置,不支持響應式數據
  app: {
    //如果是需要設置再Nginx或者Apache的子目路上,需要加上baseURL,務必記得加上/線, 它就會自動在需要的地方上增加子目錄層級,
    //但是這邊要注意,如果是由後端給的URL字串,要訪問靜態目錄結構的URL 則需要注意路徑問題,如果是Minio其實沒這個問題
    // baseURL: "/organ2/",
    baseURL: "/",

    head: {
      charset: 'utf-8', //預設,不設置也行
      viewport: 'width=device-width, initial-scale=1',  //預設,不設置也行
      title: '社團法人中華民國器官捐贈協會',
      meta: [
        { name: 'keyword', content: "中華民國器官捐贈協會、器官捐贈、移植、登錄、器捐、大愛器捐、健保卡、公益團體、NPO、簽署、大愛器官" },
        { name: 'description', content: "中華民國器官捐贈協會，提供詳細的器官捐贈與移植資訊，幫助使用者瞭解如何透過健保卡進行器捐登錄，並介紹相關的公益團體與NPO的推廣活動。透過簽署器捐意願，您可以為需要移植的病患帶來生命的希望，傳遞大愛精神，支持器官捐贈的社會責任。" }
      ],
      //引入第三方外部css可能會用到
      link: [
        //設置facicon icon,開發時如果透過Nginx代理會看不到
        { rel: "icon", href: "/logo.ico" }
        // <link rel="stylesheet" href="https://myawesome-lib.css">  如果你像引入這個
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' }  //請這樣寫
        //{rel: 'stylesheet', href: "assets/reset.css" }
      ],
      //引入第三方外部JS可能會用到
      script: [
        {
          src: 'https://cse.google.com/cse.js?cx=93296d208c72f464b',
          async: true
        }
        // <script src="https://myawesome-lib.js"></script>  如果你像引入這個
        // { src: 'https://awesome-lib.js' }  //請這樣寫
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }

  },
  //引入全局css
  css: [
    '@/assets/styles/reset.css',
  ],
  //vite配置
  vite: {

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/global.scss";',
        }
      }
    }
  },
  devtools: {
    enabled: false  //預設為true
  },
  //使用模塊,Element Plus
  modules: [
    '@element-plus/nuxt',
    'nuxt-gtag'
  ],
  //這是一個GA4 配置項,如果有報錯是暫時的,安裝完依賴,重開Vscode, 以及npm run dev跑一次
  gtag: {
    //id是追蹤代碼,都是G-開頭的
    id: 'G-LCR3TC6YH8'
  },
  //這是一個elementPlus配置項,如果有報錯是暫時的,安裝完依賴,重開Vscode, 以及npm run dev跑一次
  elementPlus: {
    //預設icon是不會自動引入的,預設為false, 他只接受String | false 兩種配置
    //在使用icon的時候 就要加上前墜ElIcon, 例如使用Search Icon , 就得寫成 ElIconSearch
    icon: 'ElIcon',

    /** 其他Options */
  },

  nitro: {
    prerender: {
      ignore: [
        '/organ2/education-surgery/1',
        '/organ2/professional/1'
        // 可以繼續列出不需要預渲染的其他路由
      ]
    }
  },

})
