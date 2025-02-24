/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare namespace NodeJS {
  interface ProcessEnv {
    VUE_APP_API_BASE_URL: string
    VUE_APP_REMOTEECHARTS: string
    VUE_APP_REMOTEECHARTS_USER: string
    VUE_APP_PUBLICPATH: string
    VUE_APP_ASSETSPREFIX: string
    API_APP_BASE_URL: string
    NODE_ENV: 'dev' | 'production'
  }
}

interface ImportMetaEnv {
  readonly VITE_APP_API_BASE_URL: string
  // 添加其他Vite环境变量...
}