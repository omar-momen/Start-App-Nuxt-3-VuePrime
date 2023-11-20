<template>
  <transition name="fadeIn">
    <div v-if="show" class="mediaModel" @click="$emit('close')">
      <main @click.stop :class="{ closeIcon: isSmallScreen || closeIcon }">
        <span
          v-if="isSmallScreen || closeIcon"
          @click.stop="$emit('close')"
          class="close"
        >
          <Icon name="fa:close" />
        </span>

        <div class="image">
          <nuxt-img
            width="400"
            height="400"
            preset="default"
            :src="src"
            :alt="alt || 'media'"
          />
        </div>
      </main>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps(["show", "src", "alt", "closeIcon"]);
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
.mediaModel {
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
    position: relative;
    border-radius: 15px;
    padding: 10px;

    &.closeIcon {
      padding: 50px 40px;
    }

    .image {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 95vw;
        max-height: 95vh;
      }
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

      .image {
        height: 100%;
        img {
          max-height: 100%;
        }
      }

      &.closeIcon {
        padding: 50px 15px;
      }
    }
  }
}

body.rtl {
  .mediaModel {
    .close {
      left: unset;
      right: 15px;
    }
  }
}
</style>
