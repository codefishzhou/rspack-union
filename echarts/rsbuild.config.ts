import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import path from 'node:path';
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { dependencies } from "./package.json";
import { pluginSass } from "@rsbuild/plugin-sass";
export default defineConfig({
  plugins: [
    pluginVue(),
    pluginSass(),
  ],
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
    assetPrefix: '/',
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
      config.resolve.alias ||= {};
      config.output ||= {};
      config.resolve.alias['@'] = path.resolve(__dirname, "src");
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
            }
          },
        }),
      ]);
    },
  },
} as any);
