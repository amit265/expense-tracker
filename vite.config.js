import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/projects/react/expense-tracker-app/',

  plugins: [react()],
})
