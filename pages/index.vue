<template>
  <div class="homePage">
    <section class="homeSection section_one">
      <template v-if="section_one_Intersected">
        <h1>section 1</h1>
        <form @submit.prevent="submit">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user"></i>
            </InputGroupAddon>
            <BaseInput
              :error="errorMessage"
              required
              v-model="data.email"
              type="text"
              placeholder="Username"
            />
          </InputGroup>
        </form>
      </template>
    </section>
    <section class="homeSection section_tow">
      <template v-if="section_tow_Intersected">
        <h1>section 2</h1>
      </template>
    </section>
  </div>
</template>

<script setup>
const data = reactive({
  email: "",
  username: "",
});

const errorMessage = "errorMessageasd";

useSeoMeta({
  title: "HomePage",
});

const section_one_Intersected = ref(false);
const section_tow_Intersected = ref(false);

onMounted(() => {
  setTimeout(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        const theVar = eval(`${entries[0].target.classList[1]}_Intersected`);
        theVar.value = true;
        observer.unobserve(entries[0].target);
      }
    });
    const All_Sections = document.querySelectorAll(".homeSection");
    All_Sections.forEach((section) => {
      observer.observe(section);
    });
  }, 1000);
});
</script>

<style scoped lang="scss">
.homeSection {
  margin-bottom: 100px;
  min-height: 200px;
}
</style>
