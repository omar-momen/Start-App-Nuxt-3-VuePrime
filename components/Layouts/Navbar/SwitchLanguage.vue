<template>
  <div class="language h-[30px] w-[30px] cursor-pointer" @click="switchLang">
    <div v-tooltip.bottom="'Switch Language'" aria-label="Switch Lang Icon">
      <nuxt-img
        preset="default"
        width="30"
        height="30"
        :src="langIcon"
        alt="Switch Lang Image"
      />
    </div>
  </div>
</template>

<script setup>
import { useLangStore } from "~/stores/lang";
const lang_store = useLangStore();

const langIcon = computed(() => {
  if (useHelpers().lang() == "en") {
    return "/icons/ar.png";
  } else {
    return "/icons/en.png";
  }
});

const switchLang = () => {
  lang_store.switchLang();
};
</script>
