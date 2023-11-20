// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },

  typescript: {
    shim: false,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "nuxt-icon",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@vee-validate/nuxt",
  ],

  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },

  image: {
    unsplash: {
      baseURL: "https://images.unsplash.com/",
    },

    cloudinary: {
      baseURL: "https://res.cloudinary.com/<your-cloud-name>/image/upload/",
    },

    presets: {
      default: {
        modifiers: {
          format: "webp",
          fit: "cover",
          quality: "60",
        },
      },
    },
  },

  tailwindcss: {
    cssPath: "~/assets/scss/main.scss",
  },

  build: {
    transpile: ["@googlemaps/js-api-loader"],
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  primevue: {
    options: {
      ripple: true,
    },
  },

  runtimeConfig: {
    public: {
      locale: "ar",
      API_BASE_URL: "",
    },
  },

  app: {
    layoutTransition: { name: "slide-left", mode: "out-in" },
    pageTransition: { name: "fadeIn", mode: "out-in" },

    head: {
      link: [
        {
          id: "theme-link",
          rel: "stylesheet",
          href: process.env.BASE_URL + "themes/lara-light-teal/theme.css",
        },
      ],
    },
  },

  components: [{ path: "~/components", pathPrefix: false }],

  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
});
