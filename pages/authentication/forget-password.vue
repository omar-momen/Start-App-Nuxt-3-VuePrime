<template>
  <div class="forget_password">
    <h2 class="h_2 mb-1 big text-center">
      {{ $t("auth.forgetPassword.title") }}
    </h2>
    <p class="para md text-center mx-auto mb-5">
      {{ $t("auth.forgetPassword.text") }}
    </p>
    <v-form ref="form" class="auth" @submit.prevent="submit">
      <div class="inputs">
        <phone-code v-model="data.phone" />
      </div>

      <footer class="authFooter">
        <base-button :loading="loading" type="submit" class="lg w-100">{{
          $t("form.send")
        }}</base-button>
        <p class="mt-1 text-center">
          {{ $t("auth.forgetPassword.footer") }}
          <button class="colored">
            <router-link to="/authentication/login">{{
              $t("form.login")
            }}</router-link>
          </button>
        </p>
      </footer>
    </v-form>
  </div>
</template>

<script setup>
useHead({
  title: "Forget Pssword",
});
definePageMeta({
  layout: "auth",
});

const loading = ref(false);
const data = ref({
  phone: null,
});

import { useAuthStore } from "@/stores/auth";
const form = ref(null);
const submit = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    useAuthStore().verify_method_value = data.value.phone;
    navigateTo("/authentication/confirm");
  }, 1000);
};
</script>
