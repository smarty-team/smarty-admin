const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];



const safelist = [

  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-400`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-100`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `border-${v}-500`),
  ...colors.map((v) => `text-${v}-500`),
  ...colors.map((v) => `hover:text-${v}-500`),

  ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
  ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
  ...["rounded-full", "rounded-lg"],
  ...[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
  ].map((v) => `i-ic-baseline-${v}`),

];

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  purge: {
    safelist
  },
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      },
      flexGrow: {
        5: '5'
      },
      maxHeight: {
        'screen-menu': 'calc(100vh - 3.5rem)',
        modal: 'calc(100vh - 160px)'
      },
      transitionProperty: {
        position: 'right, left, top, bottom, margin, padding',
        textColor: 'color'
      },
      keyframes: {
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 }
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        fadeOut: 'fadeOut 250ms ease-in-out',
        fadeIn: 'fadeIn 250ms ease-in-out'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
