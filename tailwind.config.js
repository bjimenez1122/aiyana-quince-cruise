/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Sovereign Voyage design tokens
        primary: '#0c6780',
        'primary-light': '#87CEEB',
        'primary-container': '#9be1ff',
        'on-primary': '#ffffff',
        'on-primary-container': '#001f29',
        secondary: '#735c00',
        'secondary-container': '#fed65b',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#241a00',
        surface: '#f8f9fa',
        'surface-container-low': '#f3f4f5',
        'surface-container': '#edeeef',
        'surface-container-lowest': '#ffffff',
        'on-surface': '#191c1d',
        'on-surface-variant': '#404849',
        outline: '#707979',
        'outline-variant': '#c0c8c9',
      },
      fontFamily: {
        headline: ['"Noto Serif"', 'Georgia', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        label: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      boxShadow: {
        ambient: '0 8px 32px rgba(12, 103, 128, 0.08)',
        'ambient-lg': '0 16px 48px rgba(12, 103, 128, 0.12)',
        gold: '0 8px 32px rgba(115, 92, 0, 0.12)',
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}
