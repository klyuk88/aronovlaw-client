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

const runtimeConfig = useRuntimeConfig();
const { error, data: newsData } = await useFetch(
  () => "/api/medias?populate=practice",
  {
    baseURL: runtimeConfig.public.api,
  }
);
</script>
<template>
  <div>
    <section class="main">
      <div class="container">
        <div class="main-content">
          <div class="col-1">
            <img
              src="@/assets/img/aronov_partners_logo.svg"
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
              <SwiperSlide>
                <div class="slider-item">
                  <div class="slider-item-content">
                    <div class="slider-item-header"></div>

                    <div class="slider-item-body">
                      <p class="slogan_slider_title">
                        Московская коллегия адвокатов объединенная
                        профессиональными юристами в области российского и
                        международного права
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <template v-if="newsData.data.length > 0">
                <SwiperSlide
                  v-for="(item, index) in newsData.data"
                  :key="index"
                >
                  <div class="slider-item">
                    <div class="slider-item-content">
                      <div class="slider-item-header">
                        <p
                          class="category"
                          v-if="item.attributes.practice.data"
                        >
                          {{ item.attributes.practice.data.attributes.title }}
                        </p>
                        <p class="date">{{ item.date }}</p>
                      </div>

                      <div class="slider-item-body">
                        <p class="news_body">
                          {{ item.attributes.shortAbout }}
                        </p>
                      </div>

                      <NuxtLink
                        :to="`${$config.public.api}/medias/${item.attributes.slug}`"
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
              </template>
            </Swiper>
          </div>

          <div class="col-2">
            <video
              autoplay
              loop
              muted
              playsinline
              class="main-planet video"
              :src="`${$config.public.api}/uploads/planet_black_aa7c57e8f9.mp4`"
            ></video>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
// .planet_gif {
//   max-width: 480px;
//   margin-left: auto;
//   display: block;
//   @media screen and (max-width: 1100px) {
//     width: 260px;
//     margin: 0 auto;
//   }

// }
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
    width: 367px;
    height: auto;
    display: block;
    margin: 0 auto;
    margin-top: 80px;
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
      .news_body {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
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
.slogan_slider_title {
  text-align: center;
}
</style>