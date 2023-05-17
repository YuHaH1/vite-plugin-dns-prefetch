import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/main.ts', // 入口
  ],
  dts: true, // 生成dist
  clean: true,
  format: ['cjs', 'esm'],
})
