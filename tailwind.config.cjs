/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'discord-bg-1': '#42464D',
        'discord-bg-2': '#40444B',
        'discord-bg-3': '#36393F',
        'discord-bg-4': '#32353B',
        'discord-bg-5': '#2F3136',
        'discord-blue-1': '#5865F2',
        'discord-border': '#1E1E1E',
        'discord-text-1': '#FFFFFF',
        'discord-text-2': '#CFD2D8',
        'discord-text-3': '#96989D',
      },
    },
  },
  plugins: [],
}
