import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/// <reference types="@testing-library/jest-dom" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@data': '/src/data',
      '@domain': '/src/domain',
      '@infra': '/src/infra',
      '@main': '/src/main',
      '@presentation': '/src/presentation',
      '@validation': '/src/validation',
    }
  }
})
