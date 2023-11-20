<template>
  <transition name="fadeIn">
    <div v-if="show" class="baseModel" @click="$emit('close')">
      <main @click.stop :class="{ closeIcon: isSmallScreen || closeIcon }">
        <span
          v-if="isSmallScreen || closeIcon"
          @click.stop="$emit('close')"
          class="close"
        >
          <Icon name="fa:close" />
        </span>

        <slot></slot>
      </main>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps(["show", "closeIcon"]);

const isSmallScreen = true;

const _show = computed(() => {
  return props.show;
});

watch(_show, (newVal) => {
  if (newVal) {
    document.querySelector("body").classList.add("noScroll");
  } else {
    document.querySelector("body").classList.remove("noScroll");
  }
});
</script>

<style lang="scss" scoped>
.baseModel {
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 999;
  background: #333333d4;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    max-width: 95vw;
    max-height: 95vh;
    overflow-y: scroll;
    width: auto;
    height: auto;
    background: var(--main_bg);
    position: relative;
    border-radius: 15px;
    padding: 10px;

    &.closeIcon {
      padding: 50px 40px;
    }

    .close {
      position: fixed;
      top: 15px;
      left: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primary);
      border-radius: 50%;
      z-index: 99;

      svg.icon {
        color: #fff;
        font-size: 20px !important;
      }
    }

    @media (max-width: 992px) {
      width: 100vw;
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
      border-radius: 0;

      &.closeIcon {
        padding: 50px 15px;
      }
    }
  }
}

body.rtl {
  .baseModel {
    .close {
      left: unset;
      right: 15px;
    }
  }
}
</style>
