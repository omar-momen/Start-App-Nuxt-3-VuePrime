<template>
  <div class="profilePage">
    <h1>Profile</h1>
    <button aria-label="logout" @click="logOut">Submit LogOut</button>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Profile",
});

import { useAuthStore } from "@/stores/auth";

const logOut = () => {
  useAuthStore().logOut();
};

definePageMeta({
  requireAuth: true,
});
</script>

<style lang="scss" scoped></style>
