<template>
  <section
    class="lowerNav"
    :class="{
      inView:
        useHelpers().scrollDirection() != 'down' &&
        useHelpers().isSmallScreen(),
    }"
  >
    <SwitchLanguage />

    <ChangeTheme class="mx-4" />

    <Favs />

    <UserMenu v-if="user && user.token" />
  </section>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";
const user = useAuthStore().user;
</script>

<style lang="scss" scoped>
.lowerNav {
  background: var(--main_bg);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 998;
  border-top: 1.5px solid var(--border);
  box-shadow: 0 0 -10px var(--shadow);
  transform: translate(0, 200px);
  transition: all 0.3s ease-in-out;
  padding: 13px 0;

  display: flex;
  justify-content: space-around;

  &.inView {
    transform: translate(0, 0);
  }
}
</style>
