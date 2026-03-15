import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@silux/core';

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true, // we handle background via ThemeProvider
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    colorScheme: {
      description: 'Color scheme',
      defaultValue: 'light',
      toolbar: {
        title: 'Color Scheme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'system', title: 'System', icon: 'monitor' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const colorScheme = context.globals['colorScheme'] ?? 'light';
      const isDark = colorScheme === 'dark';

      return (
        <ThemeProvider colorScheme={colorScheme}>
          <div
            style={{
              minHeight: '100vh',
              padding: '2rem',
              background: isDark ? '#020617' : '#ffffff',
              color: isDark ? '#f8fafc' : '#0f172a',
            }}
          >
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
