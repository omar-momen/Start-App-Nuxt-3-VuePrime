<template>
  <NuxtLink class="logo" to="/" name="Home Page Logo">
    <nuxt-img
      v-bind="$attrs"
      preset="default"
      :src="fixed_src ? fixed_src : logo"
      alt="App Logo"
      :height="height"
      :width="width"
  /></NuxtLink>
</template>

<script setup>
const props = defineProps(["fixed_src", "big"]);

const width = computed(() => {
  if (props.big) return "160";
  else return "110";
});
const height = computed(() => {
  if (props.big) return "45";
  else return "30";
});

const logo = computed(() => {
  if (useHelpers().theme() == "light") {
    return "/images/logo/logo_light.png";
  } else {
    return "/images/logo/logo_dark.png";
  }
});
</script>

<style lang="scss" scoped>
a {
  img {
    display: block;
  }
}
</style>
