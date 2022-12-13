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
          <div>
            <img
              src="@/assets/img/logo-big.svg"
              alt="logo big"
              class="big-logo"
            />
            <!-- :autoplay="{
                delay: 2500,
              }" -->
            <!-- :pagination="{
                type: 'progressbar',
              }" -->
            <Swiper
              :modules="[Scrollbar]"
              :scrollbar="true"
              :slides-per-view="1"
              :space-between="50"
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

            <!-- <div class="main-slider">
              <div class="slider-item">
                <div class="slider-item-content">
                  <div class="slider-item-header">
                    <p class="category">Семейное / наследственное право</p>
                    <p class="date">11 ноября 2022</p>
                  </div>

                  <div class="slider-item-body">
                    <p>
                      Евгений Розенблат назначен руководителем практики сложных
                      судебных споров МКА “Аронов и Партнеры”
                    </p>
                  </div>

                  <NuxtLink to="#" class="slider-item-link">
                    Читать далее
                    <img src="@/assets/img/arrow-right.svg" alt="arrow right" />
                  </NuxtLink>
                </div>
              </div>
            </div> -->
          </div>

          <div>
            <img
              src="@/assets/img/planet.png"
              alt="planet image"
              class="main-planet"
            />
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

  .big-logo {
    width: 341px;
    height: auto;
    margin-top: 90px;
  }
  .main-slider {
    margin-top: 97px;
    max-height: 280px;
    min-width: 570px;
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
  .main-planet {
    width: 457px;
    height: auto;
    margin-left: auto;
    display: block;
  }
}

// .swiper.main-slider .swiper-pagination.swiper-pagination-progressbar.swiper-pagination-vertical {
//   right: 0;
//   left: auto;
//   width: 5px;
//   height: 80%;
//   top: 50%;
//   transform: translateY(-50%);
//   background: rgba($color: #212121, $alpha: 0.2);
//   .swiper-pagination-progressbar-fill {
//     background: #fff;
//   }
// }

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
</style>