import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        postcss: {
            plugins: [
                tailwindcss(),
            ],
        },
    },
    resolve: {
        alias: {
            "@": "/src",
            "@assets": "/src/assets",
            "@stores": "/src/stores",
            "@pages": "/src/pages",
            "@components": "/src/components",
        },
    },
})
