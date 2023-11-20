import prime_ar_locale from "../locales/ar_prime_vue.js";
import prime_en_locale from "../locales/en_prime_vue.js";

export const useLangStore = defineStore("lang", () => {
  const nuxtApp = useNuxtApp();

  const current_lang = ref(null);
  const default_lang = ref("ar");

  const handleLang = () => {
    let lang = current_lang.value;
    if (!lang) {
      lang = default_lang.value;
      current_lang.value = default_lang.value;
    }

    useRuntimeConfig().public["LOCALE"] = lang;
    nuxtApp.$encryptStorage.setItem("blank_App_Lang", lang);
    document.documentElement["lang"] = lang;
    nuxtApp.$i18n.locale.value = lang;

    const i18n_redirected_key = useCookie("i18n_redirected");
    i18n_redirected_key.value = lang;

    if (lang == "ar") {
      nuxtApp.$primeVue.config.locale = prime_ar_locale;
      document.querySelector("body").classList.add("rtl");
      document.querySelector("body").setAttribute("dir", "rtl");
      document.querySelector("body").classList.remove("ltr");
    } else if (lang == "en") {
      nuxtApp.$primeVue.config.locale = prime_en_locale;
      document.querySelector("body").classList.add("ltr");
      document.querySelector("body").setAttribute("dir", "ltr");
      document.querySelector("body").classList.remove("rtl");
    }
  };

  const switchLang = () => {
    if (current_lang.value == "ar") {
      nuxtApp.$encryptStorage.setItem("blank_App_Lang", "en");
      current_lang.value = "en";
    } else if (current_lang.value == "en") {
      nuxtApp.$encryptStorage.setItem("blank_App_Lang", "ar");
      current_lang.value = "ar";
    }

    handleLang();
  };

  return { current_lang, default_lang, handleLang, switchLang };
});
