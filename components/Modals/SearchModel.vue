<template>
  <transition name="fadeIn">
    <div v-if="show" class="searchModel" @click="$emit('close')">
      <main @click.stop>
        <span @click.stop="$emit('close')" class="close"
          ><Icon name="fa:close"
        /></span>

        <!-- <v-form class="bg-transparent elevation-0" @submit.prevent="submit">
          <Logo
            fixed_src="/images/logo/logo_dark.png"
            class="mx-auto mt-6 mb-5"
          />

          <SearchInput aria-label="search" v-model="searchVal" />

          <v-container class="text-center">
            <v-row justify="center" dense>
              <v-col v-for="(shortcut, i) in shortcuts" :key="i" cols="auto">
                <v-card
                  :href="shortcut.href"
                  class="pa-4"
                  flat
                  rel="noopener noreferer"
                  target="_blank"
                  width="112"
                >
                  <v-avatar
                    :icon="shortcut.icon"
                    color="white"
                    variant="tonal"
                    class="mb-2"
                  ></v-avatar>

                  <div
                    class="text-caption text-truncate"
                    v-text="shortcut.title"
                  ></div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-form> -->
      </main>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps(["show"]);

const searchVal = ref(null);

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

<style lang="scss">
.searchModel {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #333333f2;
  background-position: center;
  background-size: cover;
  inset: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    a.logo {
      text-align: center;
      display: block;

      // img {
      //   height: 40px;
      // }
    }

    width: 600px;
    @media (max-width: 620px) {
      width: 98vw;
    }
  }

  .close {
    position: absolute;
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
}

body.rtl {
  .searchModel {
    .close {
      left: unset;
      right: 15px;
    }
  }
}
</style>
