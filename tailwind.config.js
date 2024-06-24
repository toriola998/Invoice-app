/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,scss}'],
   theme: {
      extend: {
         colors: {
            blue: '#7C5DFA',
            'blue-2': '#9277FF',
            black: '#1E2139',
            'black-2': '#252945',
            'black-3': '#0C0E16',
            'black-4': '#141625',
            'black-5': '#494E6E',
            'black-6': '#373B53',
            grey: '#DFE3FA',
            'grey-1': '#888EB0',
            'grey-2': '#7E88C3',
            'grey-4': '#777F98',
            orange: '#EC5757',
            'light-orange': '#9277FF',
            light: '#F8F8FB',
            'light-2': '#F9FAFE',
            green: '#33D69F',
            'light-green': '#33d69f0f',
         },
      },
   },
   plugins: [],
};
