<script setup>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

const clientsSlider = ref(null);
const onSwiper = (swiper) => {
  clientsSlider.value = swiper;
};
const nextSlide = () => {
  clientsSlider.value.slideNext()
}
const prevSlide = () => {
clientsSlider.value.slidePrev()
}
</script>
<template>
  <section class="clients section-top">
    <div class="container">
      <h2 class="section-title">Клиенты</h2>
      <div class="clients-content">
        <Swiper
          :slides-per-view="5"
          :space-between="60"
          @swiper="onSwiper"
          class="clients-slider"
        >
          <SwiperSlide
            class="clients-slider-item"
            v-for="(item, index) in 7"
            :key="index"
            ><img src="@/assets/img/client-logo.png" alt=""
          /></SwiperSlide>
        </Swiper>
        <img
          class="clients-slider-nav prev"
          src="@/assets/img/chevron-left.svg"
          alt=""
          @click="prevSlide"
        />
        <img
          class="clients-slider-nav next"
          src="@/assets/img/chevron-right.svg"
          alt=""
           @click="nextSlide"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.clients-content {
  margin-top: 60px;
  position: relative;
  .clients-slider {
    width: 90%;
    &-nav {
      position: absolute;
      top: 50%;
      z-index: 2;
      cursor: pointer;
    }
    &-nav.prev {
      left: 0;
    }
    &-nav.next {
      right: 0;
    }
    &-item {
      img {
        max-width: 143px;
        opacity: 0.5;
        transition: opacity 0.2s ease;
      }
    }
    &-item {
      img:hover {
        max-width: 143px;
        opacity: 1;
        transition: opacity 0.2s ease;
      }
    }
  }
}
</style>