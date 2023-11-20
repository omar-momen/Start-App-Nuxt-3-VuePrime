import { useThemeStore } from "#imports";

export default defineNuxtRouteMiddleware((to, from) => {
  const nuxtApp = useNuxtApp();
  const theme_store = useThemeStore();

  // Retrieve the locale from the cookie
  const userLocale = useCookie("i18n_redirected");
  const userTheme = useCookie("theme_redirected");

  console.log(userTheme.value);

  // Set the i18n locale if the cookie is present
  nuxtApp.$i18n.locale.value = userLocale.value;
  theme_store.current_theme = userTheme.value;
});
