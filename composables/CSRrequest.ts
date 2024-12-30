
// 定義這個是為了排除,TS類型推斷時造成的編碼時報錯
// 將這個接口,跟著封裝到$fetch中,之後在獲取result.data....之後不管多深的層次,在編碼時都不報錯
interface RetrunData {
    // 根據你的數據結構定義相應的字段
    code: {},
    data: {
        // 使用索引签名，表示 data 字段可以是任意 key 的 string 类型
        // 裡面的Value可以是string any undefined
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

// CSRrequest.ts 是對 $fetch的封裝,返回的是一個普通的Object
// 因為返回的是一個普通object對象,所以在封裝方法時可以使用泛型,來表示返回的數據結構
// 要使用CSRrequest 請在onMounted這個生命週期內使用
// 預設暴露一個對象,對象內有get,post,put,delete方法
// 當調用在輸入URL參數時,不用輸入domain, 但要輸入之後的路徑
// 像是訪問後端我固定為/api/.../... , 但是前端要手寫/api ,不固定是因為之後可能要訪問其他搭配的資源,例如Minio, 就會是/minio/.../...

export default {
    //獲取運行時的環境變量
    config() {
        console.log(useRuntimeConfig())
        return useRuntimeConfig()
    },


    //獲取localStorage裡的key為Authorization-member 的值
    auth() { return localStorage.getItem('Authorization-member') },

    //get方法,新增泛型且預設返回類型
    get<T = ReturnData2>(url: string, options?: object) {
        return $fetch<T>(url, {
            baseURL: this.config().public.apiBase,
            method: 'get',
            headers: {
                'Authorization-member': localStorage.getItem('Authorization-member') || ''
            },
            ...options,

        })
    },
    //post方法,新增泛型且預設返回類型
    post<T = ReturnData2>(url: string, options?: object) {
        return $fetch<T>(url, {
            baseURL: this.config().public.apiBase,
            method: 'post',
            headers: {
                'Authorization-member': localStorage.getItem('Authorization-member') || ''
            },
            ...options,
        })
    },
    //put方法,新增泛型且預設返回類型
    put<T = ReturnData2>(url: string, options?: object) {
        return $fetch<T>(url, {
            baseURL: this.config().public.apiBase,
            method: 'put',
            headers: {
                'Authorization-member': localStorage.getItem('Authorization-member') || ''
            },
            ...options,
        })
    },
    //delete方法,新增泛型且預設返回類型
    delete<T = ReturnData2>(url: string, options?: object) {
        return $fetch<T>(url, {
            baseURL: this.config().public.apiBase,
            method: 'delete',
            headers: {
                'Authorization-member': localStorage.getItem('Authorization-member') || ''
            },
            ...options,
        })
    }

}

