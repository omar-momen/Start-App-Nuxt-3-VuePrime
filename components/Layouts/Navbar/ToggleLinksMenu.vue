<template>
  <div class="block sm:hidden" @click="show = !show">
    <Icon name="mdi:format-list-bulleted" />

    <Sidebar v-model:visible="show">
      <Logo />
    </Sidebar>

    <!-- <side-menu :show="show" @close="show = false">
      <Logo />
    </side-menu> -->
  </div>
</template>

<script setup>
const props = defineProps(["links"]);
const show = ref(false);
</script>
