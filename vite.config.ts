import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
    resolve:{
        alias:{
            src:'/src'
        }
    } ,
    plugins: [ react(),svgr()]
});
