import { build } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const widgets = ['checkbox', 'dropdown', 'popover', 'radiogroup', 'select', 'slider', 'tabs', 'toolbar']

const buildWidget = (lib) => {
  return build({
    configFile: false,
    build: {
      outDir: './dist',
      emptyOutDir: false,
      lib: {
        entry: resolve(__dirname, `src/${lib}.jsx`),
        name: 'Widget',
        fileName: `widgets/widget-${lib}`,
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
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        '@assets': resolve(__dirname, './src/assets'),
        '@components': resolve(__dirname, './src/components'),
        '@constants': resolve(__dirname, './src/constants'),
        '@lib': resolve(__dirname, './src/lib'),
      },
    },
    define: {
      'process.env.NODE_ENV': "'production'",
    },
  })
}

Promise.all(widgets.map(buildWidget))
  .then(() => {
    console.log('All builds finished!')
  })
  .catch((error) => {
    console.error('Some builds failed:', error)
  })
