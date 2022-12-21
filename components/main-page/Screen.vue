<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const mainSlider = ref(null);

const onSwiper = (swiper) => {
  mainSlider.value = swiper;
};
const news = ref([
  {
    category: "Семейное / наследственное право",
    date: "12.12.22",
    content:
      "Евгений Розенблат назначен руководителем практики сложных судебных споров МКА “Аронов и Партнеры”",
  },
  {
    category: "Семейное / право",
    date: "13.12.22",
    content:
      "Розенблат назначен руководителем практики сложных судебных споров МКА “Аронов и Партнеры”",
  },
  {
    category: "Семейное / наследственное",
    date: "14.12.22",
    content:
      "назначен руководителем практики сложных судебных споров МКА “Аронов и Партнеры”",
  },
]);
</script>
<template>
  <div>
    <section class="main">
      <div class="container">
        <div class="main-content">

          <div class="col-1">
            <img
              src="@/assets/img/logo-big.svg"
              alt="logo big"
              class="big-logo"
            />
            <h1 class="screen-mob_title">Международная юридическая фирма</h1>
            <Swiper
              :modules="[Scrollbar, Autoplay]"
              :scrollbar="true"
              :speed="500"
              :autoplay="{
                delay: 2500,
                pauseOnMouseEnter: true,
              }"
              :slides-per-view="1"
              :space-between="15"
              @swiper="onSwiper"
              :direction="'vertical'"
              class="main-slider"
            >
              <SwiperSlide v-for="(item, index) in news" :key="index">
                <div class="slider-item">
                  <div class="slider-item-content">
                    <div class="slider-item-header">
                      <p class="category">{{ item.category }}</p>
                      <p class="date">{{ item.date }}</p>
                    </div>

                    <div class="slider-item-body">
                      <p>
                        {{ item.content }}
                      </p>
                    </div>

                    <NuxtLink
                      :to="$config.public.api + item.link"
                      class="slider-item-link"
                    >
                      Читать далее
                      <img
                        src="@/assets/img/arrow-right.svg"
                        alt="arrow right"
                      />
                    </NuxtLink>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div class="col-2">
            <video
              autoplay
              loop
              muted
              playsinline
              controls
              class="main-planet video"
              src="/planet-black.mp4"
            >
            </video>
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.main-content {
  display: grid;
  grid-template-columns: 50% 50%;
  padding-top: 60px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
  .col-2 {
    @media screen and (max-width: 1100px) {
      grid-row-start: 1;
    }
  }

  .big-logo {
    width: 341px;
    height: auto;
    margin-top: 90px;
    @media screen and (max-width: 1100px) {
      margin-top: 50px;
      margin-inline: auto;
      display: block;
    }
    @media screen and (max-width: 320px) {
      width: 100%;
    }
  }
  .main-slider {
    margin-top: 97px;
    max-height: 280px;
    min-width: 570px;
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
  .slider-item {
    background: linear-gradient(
      70.01deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    backdrop-filter: blur(50px);
    padding: 57px 63px;
    height: 100%;
    max-width: 540px;
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      font-weight: 300;
    }
    &-body {
      font-size: 18px;
      font-weight: 400;
      margin-top: 23px;
    }
    &-link {
      margin-top: 20px;
      font-size: 16px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
  .main-planet.video {
    width: 457px;
    height: auto;
    margin-left: auto;
    display: block;
    mix-blend-mode: screen;
    @media screen and (max-width: 1100px) {
      width: 260px;
      margin: 0 auto;
    }
  }
}

.swiper.main-slider .swiper-scrollbar.swiper-scrollbar-vertical {
  border-radius: 0;
  background: rgba($color: #212121, $alpha: 0.2);
  height: 80%;
  top: 50%;
  transform: translateY(-50%);

  .swiper-scrollbar-drag {
    background: #fff;
    border-radius: 0;
  }
}

.screen-mob_title {
  display: none;
  font-size: 15px;
  font-weight: 300;
  opacity: 0.5;
  margin-top: 8px;
  text-align: center;
  @media screen and (max-width: 1100px) {
    display: block;

  }
}
</style>