import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    // Gzip compression for build
    compression({ algorithm: 'gzip', ext: '.gz' }),
    // Brotli compression (better than gzip)
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
  ],

  build: {
    // Increase chunk size warning limit (framer-motion is large)
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          'react-vendor':   ['react', 'react-dom', 'react-router-dom'],
          'motion':         ['framer-motion'],
          'iconify':        ['@iconify/react'],
          'lenis':          ['@studio-freight/lenis'],
        },
      },
    },
  },

  // Optimize deps in dev
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', '@iconify/react'],
  },
})
