import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import path from "node:path";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { dependencies } from "./package.json";
import { pluginSass } from "@rsbuild/plugin-sass";
export default defineConfig({
  plugins: [pluginVue(), pluginSass()],
  source: {
    entry: {
      index: "./src/main.js",
    },
  },
  server: {
    port: 3001,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production build, you need to configure output.assetPrefix
    assetPrefix: `http://localhost:3001`,
  },
  output: {
    assetPrefix: "/",
    filenameHash: true,
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
              loader: ['css-loader',
            'postcss-loader',
            'resolve-url-loader'],
              options: {
                // 同时使用 `modern-compiler` 和 `sass-embedded` 可以显著提升构建性能
                // 需要 `sass-loader >= 14.2.1`
                api: "modern-compiler",
                implementation: require.resolve("sass-embedded"),
                sourceMap: true,
                // additionalData: '@import "@/assets/styles/normal.css";'
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
          name: `ASSET_REMOTE`,
          filename: `remoteEntry.js`,
          exposes: {
            "./AppIndex": "./src/views/AppIndex",
            "./bigData": "./src/views/dashed/bigData.vue",
            // "./views": "./src/views",
            "./store": "./src/store/index",
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
