import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import svgr from 'vite-plugin-svgr';

const svgrOpts = {
  include: '**/*.svg?react',
  exclude: '',
}

// https://vite.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [preact(), svgr(svgrOpts)],
})
