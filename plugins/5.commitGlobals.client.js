import { useThemeStore } from "~/stores/theme";
import { useLangStore } from "~/stores/lang";
import { useGlobalStore } from "@/stores/global";

// ************* Fonts
// KOHO
import "@fontsource/koho/200.css";
import "@fontsource/koho/300.css";
import "@fontsource/koho/400.css";
import "@fontsource/koho/500.css";
import "@fontsource/koho/600.css";
import "@fontsource/koho/700.css";

export default defineNuxtPlugin((nuxtApp) => {
  // Theme
  const theme_store = useThemeStore();
  theme_store.handleTheme();

  // Lang
  const lang_store = useLangStore();
  lang_store.handleLang();

  nuxtApp.hook("app:mounted", async () => {
    // Handle Resize
    useGlobalStore().handleResize();
    window.addEventListener("resize", useGlobalStore().handleResize);

    // Handle Scroll
    const lastScrollTop = ref(
      window.pageYOffset || document.documentElement.scrollTop,
    );
    useGlobalStore().handleScroll(lastScrollTop);
    window.addEventListener(
      "scroll",
      () => {
        useGlobalStore().handleScroll(lastScrollTop);
      },
      false,
    );

    // Handle Page Loading...
    nuxtApp.hook("page:start", async () => {
      if (useGlobalStore().AppInitLoading) return;
      useGlobalStore().pageLoading = true;
    });
    nuxtApp.hook("page:finish", () => {
      useGlobalStore().pageLoading = false;
    });
  });
});
