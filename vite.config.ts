import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';


// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return defineConfig({
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // ...
          },
        },
      }),
      eslintPlugin({ cache: false }),
    ],
    resolve: {
      alias: {
        '@': process.cwd() + '/src',
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // example : additionalData: `@import "./src/design/styles/variables";`
          // dont need include file extend .scss
        },
      },
    },
  });
};
