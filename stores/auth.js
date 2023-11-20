import { useLangStore } from "./lang";

export const useAuthStore = defineStore("auth", () => {
  const nuxtApp = useNuxtApp();

  const user = ref(null);

  const verify_code = ref(null);
  const verify_method_value = ref(null);

  const setStorage = (loginData) => {
    user.value = { ...loginData };
    nuxtApp.$encryptStorage.setItem("blank_App_User", loginData);
  };

  const clearStorage = () => {
    user.value = null;
    nuxtApp.$encryptStorage.removeItem("blank_App_User");
  };

  const logOut = () => {
    // let langStore = useLangStore();
    // useFetch({
    //   method: "post",
    //   url: "logout",
    // })
    //   .then(() => {
    //     nuxtApp.$iziToast.success({
    //       message:
    //         langStore.current_lang == "en"
    //           ? "Logout Successed"
    //           : "تم تسجيل الخروج بنجاح",
    //       position: "topCenter",
    //     });

    clearStorage();

    setTimeout(() => {
      navigateTo("/");
      // location.reload();
    }, 500);
    // })
    // .catch((err) => {
    //   nuxtApp.$iziToast.error({
    //     message: err.response.data.message,
    //   });
    // });
  };

  const logIn = (loginData) => {
    let langStore = useLangStore();

    setStorage(loginData);

    nuxtApp.$iziToast.success({
      message:
        langStore.current_lang == "en" ? "Welcome to App" : "App مرحبا بك في",
      position: "topCenter",
    });

    setTimeout(() => {
      navigateTo("/");
      // location.reload();
    }, 500);
  };

  return { user, verify_code, verify_method_value, logOut, logIn };
});
