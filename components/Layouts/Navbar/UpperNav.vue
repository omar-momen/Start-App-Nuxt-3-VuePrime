<template>
  <section v-if="!over && !close">
    <div class="text">
      <nuxt-img
        preset="default"
        width="15"
        height="15"
        src="/icons/present.png"
        alt="Sale present icon"
      />
      Buy 2 Get 1 Of Them
      <span aria-label="offer in percentage">50% Off</span>
    </div>

    <div class="time">
      D: <span aria-label="number of days">{{ time.d }}</span> H:<span
        aria-label="number of hours"
        >{{ time.h }}</span
      >
      M:
      <span aria-label="number of minutes">{{ time.m }}</span>
      <!-- <span aria-label="number of seconds">{{ time.s }}</span> S -->
    </div>

    <div class="close" @click="close = true">
      <Icon name="material-symbols:cancel-rounded" />
    </div>
  </section>
</template>

<script setup>
const close = ref(false);

const sale_day_finish = "2023-10-25";

const over = ref(false);
const time = ref({
  d: 0,
  h: 0,
  m: 0,
  // s: 0,
});

const startCounter = (targetDate) => {
  const targetTime = new Date(targetDate).getTime();

  const intervalId = ref(null);

  const mainLogic = () => {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;

    if (timeDifference <= 0) {
      over.value = true;
      clearInterval(intervalId.value);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
    );
    // const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    time.value = {
      d: days,
      h: hours,
      m: minutes,
      // s: seconds,
    };
  };

  // IIfe
  (function () {
    mainLogic();
  })();
  intervalId.value = setInterval(mainLogic, 5000);
};

onMounted(() => {
  startCounter(sale_day_finish);
});
</script>

<style lang="scss" scoped>
section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  font-weight: bold;
  color: #fff;

  .text {
    font-size: 17px;
    margin-inline-end: 25px;
  }

  .time {
    font-size: 15px;
    margin-inline-end: 25px;
    display: flex;

    & > * {
      margin-inline: 5px;
    }
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;
    .text {
      font-size: 15px;
    }
    .time {
      font-size: 13px;
    }
  }

  img {
    height: 15px;
  }

  span {
    color: #ffa17a;
  }

  .close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2px;
    font-size: 10px;
  }
}
</style>
