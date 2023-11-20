<template>
  <div
    class="change_theme"
    v-tooltip.bottom="'Switch Theme'"
    @click="theme_store.changeTheme()"
  >
    <Icon name="mdi:theme-light-dark"></Icon>
  </div>
</template>

<script setup>
import { useThemeStore } from "~/stores/theme";
const theme_store = useThemeStore();
</script>
