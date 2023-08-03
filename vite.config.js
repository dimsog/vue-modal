import { defineConfig } from "vite";
import { resolve } from 'path';
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [vue(), dts()],
    build: {
        sourcemap: true,
        cssCodeSplit: false,
        lib: {
            entry: resolve(__dirname, "src/modal.ts"),
            name: 'Modal',
            fileName: 'modal'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});