<template>
  <div class="signup">
    <h2 class="h_2 big text-center">{{ $t("auth.register.title") }}</h2>
    <v-form ref="form" class="auth" @submit.prevent="signup">
      <div class="inputs">
        <base-input
          type="text"
          v-model="data.fullname"
          :label="$t('labels.fullname')"
          required
        ></base-input>

        <base-input
          type="email"
          v-model="data.email"
          :label="$t('labels.email')"
          required
        ></base-input>

        <phone-code v-model="data.phone" />

        <base-input
          type="password"
          v-model="data.password"
          :label="$t('labels.password')"
          required
        ></base-input>
      </div>

      <footer class="authFooter">
        <base-button :loading="loading" type="submit" class="lg w-100">{{
          $t("form.signup")
        }}</base-button>
        <p class="mt-1 text-center">
          {{ $t("auth.register.footer") }}
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
  title: "Login",
});
definePageMeta({
  layout: "auth",
});
import { useAuthStore } from "@/stores/auth";

const loading = ref(false);
const data = ref({
  fullname: null,
  email: null,
  phone: null,
  password: null,
});

const form = ref(null);
const signup = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  setTimeout(() => {
    const user = {
      id: 5,
      name: "omar",
      phone: "01009867150",
      email: "tugrp@example.com",
      token: "asdwascascsadfggf fgh fghgfh fgh fgh hfghd cascsacascasasc",
    };
    loading.value = false;
    useAuthStore().logIn(user);
  }, 1000);
};

const validata = async () => {};
</script>
