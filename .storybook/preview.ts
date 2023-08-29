import type { Preview } from '@storybook/react';

const preview: Preview = {
  // Значения пропов кнопки (по умолчанию) для всех историй
  args: { children: 'Button' },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
