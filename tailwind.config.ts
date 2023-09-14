import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CE410D',
        primaryLight: '#001F3F',
        secondary: '#FFBA43',
        secondaryLight: '#FFBA43',
        headerColor: '#1a1a1a',
        bodyTextColor: '#4E4B66',
        bodyTextColorWhite: '#FAFBFC',
      },
      fontSize: {
        // Define custom font sizes using your variables
        topperFontSize: 'clamp(0.8125rem, 1.6vw, 1rem);',
        header: 'var(--headerFontSize)',
      },
      padding: {
        // Define custom padding using your variables
        section: 'clamp(3.75rem, 7.82vw, 6.25rem) 1rem;',
      },
    },
  },
  plugins: [],
}
export default config
