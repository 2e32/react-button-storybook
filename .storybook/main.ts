import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: { strictMode: true },
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    // Добавления плагина обработки svg как ReactComponent
    return mergeConfig(config, { plugins: [svgr()] });
  },
};
export default config;
