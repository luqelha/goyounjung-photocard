import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        'on-tertiary-container': '#000000',
        'on-tertiary': '#1b1b1b',
        secondary: '#c7c6c6',
        'surface-container-low': '#1c1b1b',
        'on-secondary-fixed': '#1a1c1c',
        error: '#ffb4ab',
        'surface-dim': '#131313',
        'surface-container-high': '#2a2a2a',
        primary: '#ffffff',
        'inverse-on-surface': '#313030',
        'error-container': '#93000a',
        'secondary-fixed-dim': '#ababab',
        'on-primary': '#1a1c1c',
        surface: '#131313',
        'on-surface': '#e5e2e1',
        outline: '#919191',
        'surface-variant': '#353534',
        'secondary-fixed': '#c7c6c6',
        'on-secondary': '#1a1c1c',
        'primary-fixed': '#5d5f5f',
        tertiary: '#e2e2e2',
        'primary-container': '#d4d4d4',
        'on-primary-fixed': '#ffffff',
        'on-tertiary-fixed': '#ffffff',
        'on-secondary-fixed-variant': '#3a3c3c',
        background: '#131313',
        'surface-container-lowest': '#0e0e0e',
        'inverse-surface': '#e5e2e1',
        'tertiary-container': '#919191',
        'on-tertiary-fixed-variant': '#e2e2e2',
        'on-surface-variant': '#c6c6c6',
        'on-background': '#e5e2e1',
        'surface-bright': '#3a3939',
        'inverse-primary': '#5d5f5f',
        'on-primary-fixed-variant': '#e2e2e2',
        'on-secondary-container': '#e3e2e2',
        'on-error': '#690005',
        'on-error-container': '#ffdad6',
        'tertiary-fixed': '#5e5e5e',
        'secondary-container': '#464747',
        'surface-container-highest': '#353534',
        'on-primary-container': '#000000',
        'surface-container': '#201f1f',
        'outline-variant': '#474747',
        'tertiary-fixed-dim': '#474747',
        'surface-tint': '#c6c6c7',
        'primary-fixed-dim': '#454747',
      },

      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },

      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
    },
  },

  plugins: [],
};

export default config;
