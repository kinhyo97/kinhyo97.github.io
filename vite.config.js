import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ 반드시 본인 주소로 base 설정
export default defineConfig({
  plugins: [react()],
  base: '/',
})