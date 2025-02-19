import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import path from "node:path";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { dependencies } from "./package.json";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginEslint } from "@rsbuild/plugin-eslint";
export default defineConfig({
  plugins: [pluginVue(), pluginSass(), pluginEslint()],
  source: {
    entry: {
      index: "./src/main.js",
    },
  },
  server: {
    port: 5052,
    open: false,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production build, you need to configure output.assetPrefix
    assetPrefix: `http://localhost:5052`,
  },
  output: {
    assetPrefix: process.env.VUE_APP_ASSETSPREFIX,
    filenameHash: true,
    publicPath: process.env.VUE_APP_PUBLICPATH,
    polyfill: "usage",
  },
  html: {
    title: "用户中心",
    crossorigin: "anonymous",
    favicon: "./public/favicon.svg",
    meta: {
      charset: { charset: "utf-8" },
      viewport: "width=device-width, initial-scale=1.0",
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["sass-loader"],
      },
    ],
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.resolve ||= {};
      config.module ||= {};
      config.module.rules ||= [
        {
          test: /\.(sass|scss)$/,
          use: [
            {
              loader: ["css-loader", "postcss-loader", "resolve-url-loader"],
              options: {
                // 同时使用 `modern-compiler` 和 `sass-embedded` 可以显著提升构建性能
                // 需要 `sass-loader >= 14.2.1`
                api: "modern-compiler",
                implementation: require.resolve("sass-embedded"),
                sourceMap: true,
                additionalData: '@import "@/assets/styles/normal.css";',
              },
            },
          ],
          // 如果你需要将 '*.module.(sass|scss)' 视为 CSS Modules 那么将 'type' 设置为 'css/auto' 否则设置为 'css'
          type: "css/auto",
        },
      ];
      config.resolve.alias ||= {};
      config.output ||= {};
      config.resolve.alias["@"] = path.resolve(__dirname, "src");
      appendPlugins([
        new ModuleFederationPlugin({
          name: `USER_REMOTE`,
          filename: `remoteEntry.js`,
          exposes: {
            "./user": "./src/App.vue",
            "./routes": "./src/router/"
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
            echarts: {
              singleton: true,
              requiredVersion: dependencies.echarts,
            },
          },
        }),
      ]);
    },
  },
} as any);
