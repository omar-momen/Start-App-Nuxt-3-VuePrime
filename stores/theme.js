export const useThemeStore = defineStore("theme", () => {
  const nuxtApp = useNuxtApp();

  const current_theme = ref(null);
  const default_theme = ref("light");

  function handleTheme() {
    default_theme.value = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    let theme = current_theme.value;
    if (!theme) {
      theme = default_theme.value;
      current_theme.value = theme;
    }

    nuxtApp.$encryptStorage.setItem("blank_App_Theme", theme);
    const theme_redirected = useCookie("theme_redirected");
    theme_redirected.value = theme;

    if (theme == "light") {
      nuxtApp.$primeVue.changeTheme(
        "lara-dark-teal",
        "lara-light-teal",
        "theme-link",
        () => {},
      );

      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
    } else if (theme == "dark") {
      nuxtApp.$primeVue.changeTheme(
        "lara-light-teal",
        "lara-dark-teal",
        "theme-link",
        () => {},
      );
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").classList.add("dark");
    }
  }

  function changeTheme() {
    if (current_theme.value == "light") {
      nuxtApp.$encryptStorage.setItem("blank_App_Theme", "dark");
      current_theme.value = "dark";
    } else if (current_theme.value == "dark") {
      nuxtApp.$encryptStorage.setItem("blank_App_Theme", "light");
      current_theme.value = "light";
    }

    handleTheme();
  }

  return {
    current_theme,
    default_theme,
    handleTheme,
    changeTheme,
  };
});
