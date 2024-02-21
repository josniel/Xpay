import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    transitionDuration: {
      DEFAULT: '300ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'linear',
    },
    extend: {
      lineHeight: {
        normal: 'normal',
      },
      borderRadius: {
        "10": "10px",
        "20": "20px",
      },
      colors: {
        'navy-blue': {
          '100': '#e1e9ec',
          '200': '#c6d4db',
          '300': '#9fb6c1',
          '400': '#7090a0',
          '500': '#557485',
          '600': '#496071',
          '700': '#40525e',
          '800': '#3a4650',
          '900': '#273039',
        },
        'navy-gray': {
          '100': '#edf1f2',
          '200': '#dde5e8',
          '300': '#c9d3d8',
          '400': '#b2bfc7',
          '500': '#8392a0',
          '600': '#8795a4',
          '700': '#74808e',
          '800': '#5f6974',
          '900': '#50585f',
        },
        'light-grey': {
          '100': '#e8ecf1',
          '200': '#cbd5e0',
          '300': '#bac8d6',
          '400': '#99acc1',
          '500': '#8095b1',
          '600': '#6e80a2',
          '700': '#627193',
          '800': '#545d79',
          '900': '#464e62',
        },
        porcelain: {
          "50": "#f6f8f9",
          "100": "#eef1f3",
          "200": "#d5dde2",
          "300": "#b1c1c8",
          "400": "#869faa",
          "500": "#678390",
          "600": "#526a77",
          "700": "#435661",
          "800": "#3a4952",
          "900": "#343f46",
          "950": "#232a2e",
        },
      },
      screens: {
        'xxs': '400px',
      },
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1740px',
      },
    },
  },
  plugins: [],
}
// eslint-disable-next-line import/no-default-export
export default config
