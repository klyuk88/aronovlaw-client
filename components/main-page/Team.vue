<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const teamSlider = ref(null);

const onSwiper = (swiper) => {
  teamSlider.value = swiper;
};

const nextSlide = () => {
  teamSlider.value.slideNext();
};

const prevSlide = () => {
  teamSlider.value.slidePrev();
};
</script>
<template>
  <section class="team section-top">
    <div class="container">
      <h2 class="section-title">Команда</h2>
    </div>
    <div class="team-content">
      <img
        src="@/assets/img/chevron-right.svg"
        alt=""
        class="team-slider-nav next"
        @click="nextSlide"
      />
      <img
        src="@/assets/img/chevron-left.svg"
        alt=""
        class="team-slider-nav prev"
        @click="prevSlide"
      />

      <Swiper
        :slides-per-view="10"
        :space-between="0"
        :allowTouchMove="false"
        @swiper="onSwiper"
        class="team-slider"
      >
        <SwiperSlide>
            <img
              src="@/assets/img/team/item-2.jpg"
              alt=""
              class="team-slider-image"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="@/assets/img/team/item-1.jpg"
              alt=""
              class="team-slider-image"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="@/assets/img/team/item-2.jpg"
              alt=""
              class="team-slider-image"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="@/assets/img/team/item-1.jpg"
              alt=""
              class="team-slider-image"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="@/assets/img/team/item-2.jpg"
              alt=""
              class="team-slider-image"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="@/assets/img/team/item-1.jpg"
              alt=""
              class="team-slider-image"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="@/assets/img/team/item-2.jpg"
              alt=""
              class="team-slider-image"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="@/assets/img/team/item-1.jpg"
              alt=""
              class="team-slider-image"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="@/assets/img/team/item-2.jpg"
              alt=""
              class="team-slider-image"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="@/assets/img/team/item-1.jpg"
              alt=""
              class="team-slider-image"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="@/assets/img/team/item-2.jpg"
              alt=""
              class="team-slider-image"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="@/assets/img/team/item-1.jpg"
              alt=""
              class="team-slider-image"
            />
        </SwiperSlide>
 
      </Swiper>


    </div>
  </section>
  <section class="estimation">
    <div class="container">
      <h2 class="estimation-title">Независимая оценка</h2>
      <div class="estimation-content">
        <div class="estimation-item">
          <img src="@/assets/img/pravo300-logo.svg" alt="" />
          <h3 class="estimation-item-title">
            Рейтинг юридических<br />компаний России
          </h3>
        </div>

        <div class="estimation-item">
          <img src="@/assets/img/kommersant_logo.svg" alt="" />
          <h3 class="estimation-item-title">
            Рейтинг юридических<br />компаний России
          </h3>
        </div>

        <div class="estimation-item">
          <img src="@/assets/img/forbes_logo.svg" alt="" />
          <h3 class="estimation-item-title">
            Рейтинг юридических<br />компаний России
          </h3>
        </div>
      </div>
    </div>
  </section>

  <section class="slogan section-top">
    <h1 class="slogan-title">Слоган фраза компании</h1>
  </section>
</template>
<style lang="scss">
.team {
  overflow: hidden;
  padding-bottom: 80px;
}

.swiper.team-slider {
  overflow: visible;
  transform: translateX(70px);
  .swiper-slide {
    position: relative;
    height: 490px;
    z-index: 100;
    transition: transform .3s ease;
    z-index: 1;
    .team-slider-image {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      z-index: 1;
      object-fit: cover;
      transition: width .3s ease;
      transform: translateX(-50%);
      
    }
  }
}

.swiper.team-slider {
  .swiper-slide:hover {
    transform: scale(1.25);
    z-index: 2;
    .team-slider-image {
      width: 340px;
    }

  }
}

.team-content {
  position: relative;
  .team-slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;
  }
  .team-slider-nav.next {
    right: 20px;
  }
  .team-slider-nav.prev {
    left: 20px;
  }
}

.estimation {
  // padding-top: 68px;
  &-title {
    font-size: 32px;
    font-weight: 500;
    text-align: center;
  }
  &-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 70px;
  }
  &-item {
    display: flex;
    align-items: center;
    gap: 30px;
    &-title {
      font-size: 14px;
      font-weight: 600;
    }
  }
  &-item:first-child {
    img {
      width: 37px;
    }
  }
  &-item:nth-child(2) {
    img {
      width: 84px;
    }
  }
  &-item:nth-child(3) {
    img {
      width: 105px;
    }
  }
}

.slogan-title {
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
}
</style>
