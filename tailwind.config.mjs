/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // light theme
        lightbg: "#F2F2F2",
        lightheading: "#262626",
        lighttext: "#808080",
        lighthighlight: "#AAAAAA",
        // dark theme
        darkbg: "#121212",
        darkheading: "#D9D9D9",
        darktext: "#737373",
        darkhighlight: "#404040",
      },
    },
  },
  plugins: [],
};
