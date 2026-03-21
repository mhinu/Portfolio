import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/',   // 👈 MUST MATCH REPO NAME
  plugins: [react()],
})