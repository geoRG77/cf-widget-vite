import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/calc.jsx'),
        name: 'Widget',
        fileName: 'calc-widget',
        formats: ['iife'],
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    plugins: [
      react(),
      svgr(),
    ],
    resolve: {
      alias: {
        '@assets': resolve(__dirname, './src/assets'),
        '@components': resolve(__dirname, './src/components'),
        '@constants': resolve(__dirname, './src/constants'),
        '@lib': resolve(__dirname, './src/lib'),
      },
    },
    define: {
      'process.env.NODE_ENV': command === 'build' ? '"production"' : '"development"',
    },
  }
})
