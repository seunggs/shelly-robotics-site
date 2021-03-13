module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    whitelist: [/^bg-/, /^text-/, /^border-/, /^font-/],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
