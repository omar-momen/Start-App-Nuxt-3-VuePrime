<template>
  <NuxtLink to="/profile" name="Profile Page">
    <span v-tooltip.bottom="'Profile'" aria-label="User Icon">
      <Icon name="solar:user-linear" />
    </span>
  </NuxtLink>
</template>

<script setup>
// import placeholder_image from "@/assets/media/images/avatars/user_placholder.jpg";
// const props = defineProps(["image"]);
</script>
