import type { Config } from "tailwindcss";
import twDefaultTheme from "tailwindcss/defaultTheme";
import twDefaultColorsRaw from "tailwindcss/colors";

const {
  lightBlue,
  warmGray,
  trueGray,
  coolGray,
  blueGray,
  ...twDefaultColors
} = twDefaultColorsRaw;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.tsx"],
  presets: [],
  darkMode: "media",
  theme: {
    ...twDefaultTheme,
    colors: {
      ...twDefaultColors,
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;
