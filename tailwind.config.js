module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik'],
      },
      colors: {
        'darker-blue': 'hsl(226, 43%, 10%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'pale-blue': 'hsl(236, 100%, 87%)',
        'desaturated-blue': 'hsl(235, 45%, 61%)',
        work: 'hsl(15, 100%, 70%)',
        play: 'hsl(195, 74%, 62%)',
        study: 'hsl(348, 100%, 68%)',
        exercise: 'hsl(145, 58%, 55%)',
        social: 'hsl(264, 64%, 52%)',
        'self-care': 'hsl(43, 84%, 65%)',
        blue: {
          650: 'hsl(246, 80%, 60%)',
        },
      },
    },
  },
};
