export const useGlobalStore = defineStore("global", () => {
  // =========== Resize
  const currentWindowSize = ref(null);
  const screenSize = computed(() => {
    if (currentWindowSize.value > 0 && currentWindowSize.value < 640)
      return "xs";
    if (currentWindowSize.value > 640 && currentWindowSize.value < 768)
      return "sm";
    if (currentWindowSize.value > 768 && currentWindowSize.value < 1024)
      return "md";
    if (currentWindowSize.value > 1024 && currentWindowSize.value < 1280)
      return "lg";
    if (currentWindowSize.value > 1280) return "xl";
  });
  const isSmallScreen = computed(() => {
    return screenSize.value == "xs";
  });
  const handleResize = () => {
    currentWindowSize.value = window.innerWidth;
  };

  // =========== Scroll
  const scrollDirection = ref(null);
  const handleScroll = (lastScrollTop) => {
    const scrollTopPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTopPosition > lastScrollTop.value) {
      scrollDirection.value = "down";
    } else if (scrollTopPosition < lastScrollTop.value) {
      scrollDirection.value = "up";
    }
    lastScrollTop.value = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  };

  // =========== Loading
  const AppInitLoading = ref(true);
  const pageLoading = ref(false);

  return {
    screenSize,
    isSmallScreen,
    handleResize,
    handleScroll,
    scrollDirection,
    AppInitLoading,
    pageLoading,
  };
});
