import { defineConfig } from "vite";
import { resolve } from 'path';
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [vue(), dts()],
    build: {
        sourcemap: true,
        cssCodeSplit: false,
        target: "es2017",
        lib: {
            entry: resolve(__dirname, "src/modal.ts"),
            name: 'modal',
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