const { mergeConfig } = require("vite");
const path = require("path");

import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: {
    builder: "@storybook/builder-vite", // 👈 The builder enabled here.
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: { $lib: path.resolve(__dirname, "../*.scss") },
      },
      // css: {
      //   postcss: null,
      //   preprocessorOptions: {
      //     scss: {
      //       additionalData: `
      //               @import '../styles/base.scss';
      //           `,
      //     },
      //   },
      // },
    });
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
