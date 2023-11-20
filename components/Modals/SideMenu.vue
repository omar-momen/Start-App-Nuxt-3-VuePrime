<template>
  <div class="sideMenu menu_container">
    <Transition name="fadeIn">
      <div v-if="show" class="backdrop"></div>
    </Transition>
    <Transition :name="`slide-${direction}`">
      <main
        v-if="show"
        @click.stop
        class="main_body sideMenu"
        :class="{ left: direction == 'left', right: direction == 'right' }"
      >
        <span @click="$emit('close')" class="close"
          ><Icon name="fa:close"
        /></span>
        <slot></slot>
      </main>
    </Transition>
  </div>
</template>

<script setup>
import { useLangStore } from "~/stores/lang";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["closeMenu"]);

const direction = useLangStore().current_lang == "ar" ? "right" : "left";
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
.sideMenu.menu_container {
  .backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    cursor: auto;
  }

  main.main_body:not(.insideMenu) {
    overflow: hidden;
    width: 300px;
    position: fixed;
    top: 0;
    background: red;
    background: var(--main_bg);
    height: 100%;
    overflow-y: scroll;
    transition: all 0.2s linear;
    z-index: 999;
    cursor: auto;

    &.left {
      right: 0;
      .close {
        right: 10px;
      }
    }
    &.right {
      left: 0;
      .close {
        left: 10px;
      }
    }

    @media (max-width: 300px) {
      width: 100%;
    }

    .close {
      position: absolute;
      top: 10px;
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
        font-size: 20px;
      }
    }
  }
}
</style>
