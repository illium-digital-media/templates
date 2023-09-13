import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#CE410D',
        primaryLight: '#001F3F',
        secondary: '#FFBA43',
        secondaryLight: '#FFBA43',
        headerColor: '#1a1a1a',
        bodyTextColor: '#4E4B66',
        bodyTextColorWhite: '#FAFBFC',
      },
    },
  },
  plugins: [],
}
export default config
