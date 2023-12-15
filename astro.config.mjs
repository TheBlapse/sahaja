import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    twitter: "https://x.com/pasricha_sehaj",
    x: "https://x.com/pasricha_sehaj",
    discord: "https://discord.com/users/491548262768050191",
    linkedin: "https://www.linkedin.com/in/sehajp",
    github: "https://github.com/SehajDxstiny",
    instagram: "https://www.instagram.com/sehaj._.p/",
    email: "mailto:newsehaj@gmail.com",
    spotify: "https://open.spotify.com/user/zyu7bvc2qpz9xstvs1847h7wl",
  },
});
