<template>
  <div class="login">
    <h2 class="h_2 big text-center">{{ $t("auth.login.title") }}</h2>
    <v-form ref="form" class="auth" @submit.prevent="login">
      <div class="inputs">
        <base-input
          type="email"
          v-model="data.email"
          :label="$t('labels.email')"
          required
        ></base-input>

        <base-input
          type="password"
          v-model="data.password"
          :label="$t('labels.password')"
          required
        ></base-input>
      </div>

      <div class="inputsFooter d-flex align-center">
        <div class="rememberMe me-auto">
          <v-checkbox
            v-model="data.rememberMe"
            :label="$t('auth.remember_me')"
            color="primary"
            hide-details
          ></v-checkbox>
        </div>

        <div class="fotgetPassword">
          <router-link to="/authentication/forget-password">
            {{ $t("auth.forget_password") }}</router-link
          >
        </div>
      </div>

      <footer class="authFooter">
        <base-button :loading="loading" type="submit" class="lg w-100">{{
          $t("form.login")
        }}</base-button>
        <p class="mt-1 text-center">
          {{ $t("auth.login.footer") }}
          <button class="colored">
            <router-link to="/authentication/signup">{{
              $t("form.signup")
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
  email: null,
  password: null,
  rememberMe: null,
});

const form = ref(null);
const login = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    const user = {
      id: 5,
      userType: "user",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      name: "omar",
      phone: "01009867150",
      email: "tugrp@example.com",
      token: "asdwascascsadfggf fgh fghgfh fgh fgh hfghd cascsacascasasc",
      cartLength: 0,
      notificationLength: 0,
    };
    useAuthStore().logIn(user);
  }, 1000);
};
</script>
