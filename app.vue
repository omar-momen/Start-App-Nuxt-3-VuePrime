<template>
  <div class="app">
    <AppLoader v-show="globaleStore.AppInitLoading" />
    <NuxtLayout>
      <div>
        <LazyPageLoader v-if="globaleStore.pageLoading" />
        <div :key="useHelpers().lang()">
          <NuxtPage />
        </div>
        <NuxtLoadingIndicator />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/stores/global";
import { useThemeStore } from "@/stores/theme";

const globaleStore = useGlobalStore();
const themeStore = useThemeStore();

const htmlClass = computed(() => {
  if (themeStore.current_theme == "dark") return "dark";
  else if (themeStore.current_theme == "light") return "light";
  else return themeStore.default_theme;
});

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Outfit` : "Outfit";
  },
  meta: [
    {
      name: "description",
      content:
        "Get offers on popular products on Outfit. Browse and discover thousands of brands. Read customer reviews and find top sellers. discounted rates. Wide variety of products. Fast delivery. One-click payment. Track the shipment.",
    },
    {
      name: "author",
      content: "Omar Momen",
    },
    {
      name: "keywords",
      content: "SALE, BYE, CLOTHES, DISCOUNT",
    },
    {
      property: "og:title",
      content: "E-Commerce Omar",
    },
    {
      property: "og:descreption",
      content:
        "Get offers on popular products on Outfit. Browse and discover thousands of brands. Read customer reviews and find top sellers. discounted rates. Wide variety of products. Fast delivery. One-click payment. Track the shipment.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content:
        "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      property: "og:url",
      content: "http://localhost:3000/",
    },

    {
      property: "twitter:title",
      content: "E-Commerce Omar",
    },
    {
      property: "twitter:descreption",
      content:
        "Get offers on popular products on Outfit. Browse and discover thousands of brands. Read customer reviews and find top sellers. discounted rates. Wide variety of products. Fast delivery. One-click payment. Track the shipment.",
    },
    {
      property: "twitter:type",
      content: "website",
    },
    {
      property: "twitter:image",
      content:
        "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      property: "twitter:url",
      content: "http://localhost:3000/",
    },
  ],
  htmlAttrs: {
    class: htmlClass,
  },
});

// Handling App
const nuxtApp = useNuxtApp();
nuxtApp.hook("app:suspense:resolve", async () => {
  globaleStore.AppInitLoading = false;
});
</script>
