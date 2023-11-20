<template>
  <span class="search">
    <span v-tooltip.bottom="'Search'" aria-label="Search Icon">
      <Icon @click="show = !show" name="ic:outline-search" />
    </span>

    <search-model
      :show="show"
      :closeIcon="false"
      @close="show = false"
    ></search-model>
  </span>
</template>

<script setup>
const props = defineProps(["url"]);
const show = ref(false);
</script>
