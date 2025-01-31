import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import path from 'node:path';
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { dependencies } from "./package.json";

export default defineConfig({
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
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.resolve ||= {};
      config.resolve.alias ||= {};
      config.output ||= {};
      config.resolve.alias['@'] = path.resolve(__dirname, "src");
      appendPlugins([
        new ModuleFederationPlugin({
          name: `echarts`,
          filename: `remoteEntry.js`,
          exposes: {
            "./AppIndex": "./src/views/AppIndex",
            "./bigData": "./src/views/dashed/bigData.vue",
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
  plugins: [pluginVue({
    splitChunks: {
      vue: false,
      router: false
    }
  })],
});
