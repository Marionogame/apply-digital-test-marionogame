import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        header: '#EEEEEE',
        secondary: '#585660',
        'text-primary': '#3B3B3B',
        'text-secondary': '#737373',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function ({
      addComponents,
    }: {
      addComponents: PluginAPI['addComponents'];
    }) {
      addComponents({
        '.custom-container': {
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '1.5rem', // px-6
          'padding-right': '1.5rem', // px-6
          'padding-top': '1.25rem', // py-5
          'padding-bottom': '1.25rem', // py-5
          '@screen lg': {
            'padding-left': '4rem', // lg:px-32
            'padding-right': '4rem', // lg:px-32
            'padding-top': '1.25rem', // lg:py-5
            'padding-bottom': '1.25rem', // lg:py-5
            'max-width': '1536px', // lg:max-w-[1536px]
          },
        },
      });
    },
  ],
};

export default config;
