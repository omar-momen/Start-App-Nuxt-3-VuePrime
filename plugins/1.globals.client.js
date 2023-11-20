import { EncryptStorage } from "encrypt-storage";
import { usePrimeVue } from "primevue/config";
import { useI18n } from "#imports";

export default defineNuxtPlugin(() => {
  const encryptStorage = new EncryptStorage("hash-123-amoz");
  const primeVue = usePrimeVue();
  return {
    provide: {
      useI18n: useI18n,
      encryptStorage,
      primeVue,
    },
  };
});
