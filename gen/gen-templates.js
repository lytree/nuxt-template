import { resolve } from 'node:path'
import { generateTemplates } from 'swagger-typescript-api'

// 导出swagger-typescript-api内置模板
generateTemplates({
  cleanOutput: false,
  output: resolve(__dirname, './templates'),
  httpClientType: 'fetch',
  modular: true,
  silent: false,
  rewrite: false,
})
