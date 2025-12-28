import forms from '@tailwindcss/forms';
import preline from 'preline/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    'node_modules/preline/dist/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    forms,
    preline
  ],
};