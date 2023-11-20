import ar from "./locales/ar_static.js";
import en from "./locales/en_static.js";

export default defineI18nConfig(() => ({
  legacy: false,
  locales: ["en", "ar"],
  defaultLocale: "ar",
  messages: {
    ar,
    en,
  },
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    redirectOn: "root", // recommended
  },
}));
