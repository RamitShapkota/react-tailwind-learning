import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Use the full name here

export default defineConfig({
  plugins: [react()],
})