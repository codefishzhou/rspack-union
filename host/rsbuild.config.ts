import { defineConfig, rspack  } from "@rsbuild/core";
import { pluginVue,  } from "@rsbuild/plugin-vue";
// import { pluginEslint } from '@rsbuild/plugin-eslint';
import path from "node:path";
import { dependencies } from "./package.json";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { pluginSass } from "@rsbuild/plugin-sass";
import Dotenv from 'dotenv-webpack';

export default defineConfig({
  source: {
    entry: {
      index: "./src/main.js",
    },
  },
  plugins: [
    pluginVue({
      splitChunks: {
        vue: false,
        router: false,
      },
    }),
    pluginSass(),
  ],
  server: {
    port: 5050,
    open: false,
    proxy: [
      {
        context: ['/worknotes'],
        target: process.env.API_APP_BASE_URL,
        changeOrigin: true,
        secure: false,
      },
    ],

  },
  output: {
    assetPrefix: process.env.VUE_APP_ASSETSPREFIX,
    filenameHash: true,
    publicPath: process.env.VUE_APP_PUBLICPATH,
    polyfill: "usage",
  },
  html: {
    title: "主应用",
    crossorigin: "anonymous",
    favicon: "./public/favicon.svg",
    meta: {
      charset: { charset: "utf-8" },
      viewport: "width=device-width, initial-scale=1.0",
    },
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // Will work in dev only if set to "/"
      config.resolve ||= {};
      // config.module ||= {
      //   rules: []
      // }
      config.resolve.alias ||= {};
      config.output ||= {};
      // public
      config.resolve.alias["@"] = path.resolve(__dirname, "src");
      appendPlugins([
        new Dotenv({
          path: path.resolve(__dirname, `.env.${process.env.MODE}`),
        }),
        new ModuleFederationPlugin({
          name: `ASSET_HOST`,
          filename: `ASSET_HOST__remoteEntry.js`,
          remotes: {
            // "@remote": "ASSET_REMOTE@http://localhost:6001/remoteEntry.js",
            "@remote": `ASSET_REMOTE@${process.env.VUE_APP_REMOTEECHARTS}/remoteEntry.js`,
            "@user": `USER_REMOTE@${process.env.VUE_APP_REMOTEECHARTS_USER}/remoteEntry.js`,
          },
          shared: {
            vue: {
              singleton: true,
              requiredVersion: dependencies.vue,
            },
            vuex: {
              singleton: true,
              requiredVersion: dependencies.vuex,
            },
          },
        }),
      ]);
    },
    // sass: {
    //   // 添加 Sass 模块解析配置
    //   implementation: 'sass-embedded',
    //   sassOptions: {
    //     importer: [
    //       (url) => {
    //         if (url.startsWith('@/')) {
    //           return { file: path.resolve(__dirname, 'src', url.slice(2)) };
    //         }
    //         return null;
    //       }
    //     ]
    //   }
    // },
  },
});
