
import type { UseFetchOptions } from "#app"

// 定義這個是為了排除,TS類型推斷時造成的編碼時報錯
// 將這個接口,跟著封裝到useFetch中,之後在獲取result.data....之後不管多深的層次,在編碼時都不報錯
interface RetrunData {
    // 根據你的數據結構定義相應的字段
    code: {},
    data: {
        // 使用索引签名，表示 data 字段可以是任意 key 的 string 类型
        [key: string]: string | any | undefined
    },
    msg: {}
}

//如果真的不知道數據長怎麼,可以這樣寫,我覺得這種寫法在不知道內部長怎樣時更好
//且code 應該是number , msg 應該是string
interface ReturnData2 {
    // 根據你的數據結構定義相應的字段
    code: number,
    data: Record<string, any>,
    msg: string
}



// SSRrequest.ts 是對useFetch的封裝,返回的result是一個RefImpl(也就是Ref對象), result.data 是一個Proxy(Object)(也就是reactive對象)
// 因為useFetch 在Nuxt3中定義的很複雜,所以就算return封裝也只能定義明確的類型
// 注意 !!! SSRrequest.ts 是用useFetch 封裝而成的, 如果你是透過SSG方式部屬,那它就會直接紀錄那次的數據,並將它寫在HTML中, 之後不管怎麼F5刷新,他都不會再變更內容
// 注意 !!! 如果請求的路徑不一致,通常是參數不一致,那會造成server端獲取一次, 客戶端判斷不一致還會再獲取一次
// 請在setup中使用!!  這是使用SSR渲染,會帶著數據渲染後返回,利於SEO
// 預設暴露一個對象,對象內有get,post,put,delete方法
// 當調用在輸入URL參數時,不用輸入domain, 但要輸入之後的路徑
// 像是訪問後端我固定為/api/.../... , 但是前端要手寫/api ,不固定是因為之後可能要訪問其他搭配的資源,例如Minio, 就會是/minio/.../...

export default {
    //獲取運行時的環境變量
    config() {
        // console.log(useRuntimeConfig())
        return useRuntimeConfig()
    },

    //獲取localStorage裡的key為Authorization 的值
    auth() { return localStorage.getItem('Authorization') },

    //get方法,useFetch只可顯式傳遞類型,傳遞泛型給useFetch會報錯,且在使用上也不便利(因為沒提示)
    get(url: string, options?: object) {
        return useFetch<ReturnData2>(url, {
            //baseURL不寫預設好像是抓自己的當前的所有路徑再加上url參數
            baseURL: this.config().public.domain + this.config().public.apiBase,
            method: 'get',
            ...options,
        })
    },
    //post方法,useFetch只可顯式傳遞類型,傳遞泛型給useFetch會報錯,且在使用上也不便利(因為沒提示)
    post(url: string, options?: object) {
        return useFetch<ReturnData2>(url, {
            baseURL: this.config().public.apiBase,
            method: 'post',
            ...options,
        })
    },
    //put方法,useFetch只可顯式傳遞類型,傳遞泛型給useFetch會報錯,且在使用上也不便利(因為沒提示)
    put(url: string, options?: object) {
        return useFetch<ReturnData2>(url, {
            baseURL: this.config().public.apiBase,
            method: 'put',
            ...options,
        })
    },
    //delete方法,useFetch只可顯式傳遞類型,傳遞泛型給useFetch會報錯,且在使用上也不便利(因為沒提示)
    delete(url: string, options?: object) {
        return useFetch<ReturnData2>(url, {
            baseURL: this.config().public.apiBase,
            method: 'delete',
            ...options,
        })
    }

}



