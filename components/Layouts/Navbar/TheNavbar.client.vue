<template>
  <section class="navs">
    <!-- <UpperNav /> -->

    <nav
      class="theNav bg-[--main_bg] pb-1 shadow-sm transition-all duration-300"
      :class="{ stikyNav: stikyNav, inView: inView }"
    >
      <div
        class="container relative mx-auto flex items-center justify-between p-3"
      >
        <div class="flex items-center gap-x-1">
          <SwitchLanguage />
          <ChangeTheme class="mx-4" />
          <SearchMenu />
          <ToggleLinksMenu />
        </div>

        <Logo fixed_src="/images/logo/logo_dark.png" />

        <div class="flex items-center gap-x-3">
          <notification-menu
            v-if="true || (useAuthStore().user && useAuthStore().user.token)"
            :image="useAuthStore().user && useAuthStore().user.image"
            url="/lol"
          ></notification-menu>

          <UserMenu v-if="useAuthStore().user && useAuthStore().user.token" />

          <nuxt-link
            v-if="!useAuthStore().user"
            aria-label="login"
            link
            to="/authentication/login"
          >
            Login
          </nuxt-link>

          <Favs />
        </div>
      </div>
    </nav>

    <LowerNav />
  </section>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";

const stikyNav = ref(false);
const inView = ref(false);

onMounted(() => {
  setTimeout(() => {
    const BODY = document.querySelector("body");
    const NAV_HEIGHT = document.querySelector("nav.theNav").clientHeight;

    window.addEventListener("scroll", () => {
      const documentScrollTop = document.documentElement.scrollTop;

      stikyNav.value = documentScrollTop > 6 * NAV_HEIGHT;
      inView.value =
        documentScrollTop > 8 * NAV_HEIGHT &&
        useHelpers().scrollDirection() != "down";

      if (stikyNav.value) {
        BODY.style.paddingTop = NAV_HEIGHT + "px";
      } else {
        BODY.style.paddingTop = 0;
      }
    });
  }, 1000);
});
</script>

<style lang="scss" scoped>
.theNav {
  @media (max-width: 640px) {
    .language,
    .change_theme,
    .fave,
    .user {
      display: none;
    }
    .toggleMenu {
      display: block;
    }
  }

  &.stikyNav {
    position: fixed;
    top: -100px;
    width: 100%;
    z-index: 999;
    border-bottom: 1.5px solid var(--border);
    box-shadow: 0 0 10px var(--shadow);
  }

  &.inView {
    top: 0;
  }
}
</style>
