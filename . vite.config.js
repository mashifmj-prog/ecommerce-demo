import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/<YOUR_GITHUB_REPO_NAME>/"
})
