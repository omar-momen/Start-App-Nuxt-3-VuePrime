<template>
  <div class="confirm">
    <h2 class="h_2 mb-1 big text-center">
      {{ $t("auth.resetPassword.title") }}
    </h2>
    <p class="para md text-center mx-auto mb-5">
      {{ $t("auth.resetPassword.text") }}
    </p>
    <v-form ref="form" class="auth" @submit.prevent="submit">
      <div class="inputs">
        <base-input
          type="password"
          v-model="data.password"
          :label="$t('labels.password')"
          required
        ></base-input>

        <base-input
          type="password"
          v-model="data.confirm_password"
          :label="$t('labels.confirm_password')"
          required
        ></base-input>
      </div>

      <footer class="authFooter">
        <base-button :loading="loading" type="submit" class="lg w-100">{{
          $t("form.send")
        }}</base-button>
      </footer>
    </v-form>
  </div>
</template>

<script setup>
useHead({
  title: "Reset Password",
});
definePageMeta({
  layout: "auth",
});

const loading = ref(false);

const data = ref({
  password: null,
  confirm_password: null,
});

const form = ref(null);
const submit = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    navigateTo("/authentication/login");
  }, 1000);
};
</script>
