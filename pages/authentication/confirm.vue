<template>
  <div class="confirm">
    <h2 class="h_2 mb-1 big text-center">
      {{ $t("auth.confirm.title") }}
    </h2>
    <p class="para md text-center mx-auto mb-5">
      {{ $t("auth.confirm.text") + " +" + country_code + " " + phone }}
    </p>
    <v-form ref="form" class="auth" @submit.prevent="submit">
      <div class="inputs">
        <v-otp-input
          v-model="data.code"
          :length="4"
          placeholder="*"
          @finish="onFinish"
          :loading="OTPLoading"
        ></v-otp-input>
      </div>

      <footer class="authFooter">
        <p class="mb-2">
          {{ $t("auth.confirm.footer") }}
          <button class="colored">{{ $t("form.resend") }}</button>
        </p>
        <base-button :loading="loading" type="submit" class="lg w-100">{{
          $t("form.send")
        }}</base-button>
      </footer>
    </v-form>
    <v-snackbar v-model="OTPsnackbar" :color="OTPsnackbarColor" :timeout="1000">
      {{ OTPMessage }}
    </v-snackbar>
  </div>
</template>

<script setup>
useHead({
  title: "Confirm Code",
});
definePageMeta({
  layout: "auth",
});

import { useAuthStore } from "@/stores/auth";
const country_code = useAuthStore().verify_method_value.countryKey;
const phone = useAuthStore().verify_method_value.phone;

const data = ref({
  code: "",
});

const OTPLoading = ref(false);
const OTPsnackbar = ref(false);
const OTPsnackbarColor = ref(null);
const expectedOtp = ref(1111);
const OTPMessage = ref(null);
const onFinish = () => {
  OTPLoading.value = true;

  setTimeout(() => {
    OTPLoading.value = false;
    OTPsnackbarColor.value =
      +data.value.code === +expectedOtp.value ? "success" : "warning";
    OTPMessage.value = `Processed OTP with "${data.value.code}" (${OTPsnackbarColor.value})`;
    OTPsnackbar.value = true;

    if (OTPsnackbarColor.value == "success") {
      setTimeout(() => {
        navigateTo("/authentication/reset-password");
      }, 1000);
    }
  }, 1500);
};

const form = ref(null);
const loading = ref(false);
const submit = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    useAuthStore().verify_code = data.value.code;
    navigateTo("/authentication/reset-password");
  }, 1000);
};
</script>
