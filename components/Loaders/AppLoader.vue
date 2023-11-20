<template>
  <div class="app_loader">
    <SpinnerLoader />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app_loader {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
