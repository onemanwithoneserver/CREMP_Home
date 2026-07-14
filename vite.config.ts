import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/CRMP_Home/',
  plugins: [react()],
})
