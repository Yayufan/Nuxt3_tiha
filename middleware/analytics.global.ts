// middleware/analytics.global.ts

export default defineNuxtRouteMiddleware(async (to, from) => {
  // 1. 確保只在客戶端執行（如果你只想統計真實用戶瀏覽，避免 SSR 重複計算）
  // 或者你也可以在 Server 端執行，這取決於你的後端統計邏輯
  if (process.client) {

    try {
      // 2. 呼叫你的後端 API
      await CSRrequest.get('/setting/add-view-count');

    } catch (error) {
      // 靜默失敗，不影響用戶導航
      console.error('Failed to log view:', error);
    }
  }
});