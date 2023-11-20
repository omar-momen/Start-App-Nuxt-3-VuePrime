<template>
  <transition name="fadeIn">
    <div class="nav_dropDown custom_card" v-if="show">
      <main>
        <slot></slot>
      </main>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps(["show"]);
const emits = defineEmits(["close"]);

onMounted(() => {
  window.addEventListener("click", () => {
    emits("close");
  });
});
</script>

<style lang="scss">
.nav_dropDown {
  position: absolute;
  z-index: 999;
  top: 130%;
  right: -20px;
  border: 1px solid var(--border);
  border-radius: 10px;

  main {
    min-height: 10vh;
    min-width: 10vw;
  }

  &::before {
    content: "";
    border-width: 12px;
    border-style: solid;
    border-color: transparent transparent var(--main_bg) transparent;
    position: absolute;
    top: -24px;
    right: 20px;
  }

  @media (max-width: 800px) {
    width: 95%;
    right: 50% !important;
    transform: translateX(50%);
    top: 110%;

    &::before {
      display: none;
    }

    main {
      & > * {
        width: 100% !important;
      }
    }
  }
}

body.rtl {
  .nav_dropDown {
    right: unset;
    left: -20px;

    &::before {
      right: unset;
      left: 20px;
    }
  }
}
</style>
