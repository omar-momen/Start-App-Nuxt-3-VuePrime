<template>
  <div class="notification static sm:relative" @click.stop="show = !show">
    <div v-tooltip.bottom="'Notifications'" aria-label="Notifications Icon">
      <span v-badge="2">
        <Icon name="ion:md-notifications-outline" />
      </span>
    </div>

    <NavDropdown :show="show" @close="show = false">
      <div :class="{ no_Data: notifications.length === 0 }">
        <ul
          class="items h-auto w-72 overflow-y-scroll"
          v-show="notifications.length > 0"
        >
          <li
            v-for="item in notifications"
            class="item flex cursor-pointer py-5 transition-all"
            :key="item.id"
            @click.stop="show = false"
          >
            <div class="image me-3">
              <nuxt-img
                width="50"
                height="50"
                preset="default"
                :src="item.image"
                alt="Notification's Owner"
              />
            </div>

            <div class="content">
              <h6 class="text-slate-500">{{ item.title }}</h6>
              <p class="text-sm">{{ item.body.slice(0, 50) }}</p>
            </div>
          </li>
        </ul>

        <div
          class="sm:h-[20vw]] flex justify-center overflow-hidden sm:w-[20vw]"
          v-show="notifications.length === 0"
        >
          <nuxt-img
            class="rounded-2xl object-contain"
            preset="default"
            height="300"
            width="300"
            src="/images/bg/noNotifications.svg"
            alt="Notifications Empty Image"
          />
        </div>
      </div>
    </NavDropdown>
  </div>
</template>

<script setup>
const show = ref(false);
const notifications = ref([]);

const getData = async () => {
  const res = await useMyFetch("notifications").then((res) => {});
};
// getData();
</script>

<style scoped>
:deep(.p-badge) {
  min-width: 0.9rem;
  height: 0.9rem;
  line-height: 0.9rem;
  right: 3px;
}
</style>
