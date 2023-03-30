/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// postcss
import postcssMixe from 'postcss-mixins'
import postcssRem from 'postcss-rem'
// rollup
import Delete from 'rollup-plugin-delete'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'doublek-ui',
            fileName: format => `doublek-ui.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            },
            plugins: [
                Delete({
                    targets: ['dist/{env.d.ts}', 'dist/*.{ico,txt,html,svg}'],
                    hook: 'generateBundle'
                })
            ]
        }
    },
    css: {
        postcss: {
            plugins: [postcssMixe, postcssRem]
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    test: {
        environment: 'happy-dom'
    }
})
