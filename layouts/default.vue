<template>
  <div class="default_layout">
    <TheNavbar />
    <div class="insideHomeView container mx-auto px-4">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
const set_body_height = () => {
  const BODY = document.querySelector("body");
  const NAVBAR = document.querySelector("nav.theNav");
  const FOOTER = document.querySelector("footer.theFooter");
  const HOME_CHILD = document.querySelector(".insideHomeView");
  const BODY_STYLE = BODY.currentStyle || window.getComputedStyle(BODY);

  HOME_CHILD.style.setProperty(
    "min-height",
    `calc(100vh - ${
      NAVBAR.clientHeight +
      FOOTER.clientHeight +
      parseInt(BODY_STYLE.margin) * 2 +
      "px"
    })`,
  );
};

onMounted(() => {
  setTimeout(() => {
    set_body_height();

    window.addEventListener("resize", () => {
      set_body_height();
    });
  }, 1000);
});
</script>

<style lang="scss" scoped>
.v-container {
  position: relative;
}
</style>
