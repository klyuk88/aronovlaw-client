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
        :breakpoints="{
          320: {
            slidesPerView: 1,
            allowTouchMove: true
          },
          768: {
            slidesPerView: 2
          },
          1100: {
            slidesPerView: 10,
            allowTouchMove: false
          }
        }"
      >
        <SwiperSlide v-for="(item, index) in 12" :key="index">
          <img
            src="@/assets/img/team/item-1.jpg"
            alt=""
            class="team-slider-image"
          />
          <div class="team_slider-item_names">
            <h3 class="team_slider-item_names-name">Александр Аронов</h3>
            <p class="team_slider-item_names-post">Управляющий партнер</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  <section class="estimation">
    <div class="container">
      <h2 class="estimation-title">Независимая оценка</h2>
      <div class="estimation-content">
        <div class="estimation-item">
          <div class="estimation-item-image_wrap">
            <img src="@/assets/img/pravo300-logo.svg" alt="" />
          </div>
          
          <h3 class="estimation-item-title">
            Рейтинг юридических<br />компаний России
          </h3>
        </div>

        <div class="estimation-item">
          <div class="estimation-item-image_wrap"><img src="@/assets/img/kommersant_logo.svg" alt="" /></div>
          
          <h3 class="estimation-item-title">
            Рейтинг юридических<br />компаний России
          </h3>
        </div>

        <div class="estimation-item">
          <div class="estimation-item-image_wrap"><img src="@/assets/img/forbes_logo.svg" alt="" /></div>
          
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
  @media screen and (max-width: 1100px) {
    transform: translateX(0);
    overflow: hidden;
  }
  .swiper-slide {
    position: relative;
    height: 490px;
    z-index: 100;
    transition: transform 0.3s ease;
    z-index: 1;
    .team-slider-image {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      z-index: 1;
      object-fit: cover;
      transition: width 0.3s ease;
      transform: translateX(-50%);
      @media screen and (max-width: 1100px) {
        transform: translateX(0);
      }
    }
    @media screen and (max-width: 1100px) {
      height: inherit;
      aspect-ratio: 3/4;
    }
  }
}

.swiper.team-slider {
  .swiper-slide:hover {
    transform: scale(1.3);
    z-index: 2;
    @media screen and (max-width: 1100px) {
      transform: scale(1);
    }
    .team-slider-image {
      width: 340px;
      transition: width 0.3s ease;
      @media screen and (max-width: 1100px) {
        width: 100%;
      }
    }
    .team_slider-item_names {
      opacity: 1;
      transition: opacity .3s ease
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
    @media screen and (max-width: 1100px) {
      font-size: 24px;
      font-weight: 400;
    }
  }
  &-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 70px;
    @media screen and (max-width: 1100px) {
      margin-top: 60px;
      grid-template-columns: 100%;
      row-gap: 30px
    }
  }
  &-item {
    display: flex;
    align-items: center;
    gap: 30px;
    &-title {
      font-size: 14px;
      font-weight: 600;
      @media screen and (max-width: 1100px) {
        font-weight: 400;
      }
    }
  }
  &-item:first-child {
    img {
      width: 37px;
      @media screen and (max-width: 1100px) {
        width: 35px;
      }
      
    }
  }
  &-item:nth-child(2) {
    img {
      width: 84px;
      @media screen and (max-width: 1100px) {
        width: 67px;
      }
    }
  }
  &-item:nth-child(3) {
    img {
      width: 105px;
      @media screen and (max-width: 1100px) {
        width: 55px;
      }
    }
  }
}

.slogan-title {
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 1100px) {
    font-size: 20px;
    font-weight: 800;
  }
}

.team_slider-item_names {
  position: absolute;
  z-index: 2;
  transform: translateX(-50%);
  bottom: 30px;
  left: -40px;
  min-width: 220px;
  opacity: 0;
  transition: opacity .2s ease;
  @media screen and (max-width: 1100px) {
    left: 20px;
    transform: translateX(0);
    opacity: 1;

  }
}


.team_slider-item_names-name {
  font-size: 20px;
  font-weight: 700;
}
.team_slider-item_names-post {
  font-size: 13px;
  font-weight: 300;
  margin-top: 10px;
}


.estimation-item-image_wrap {
  @media screen and (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    background: linear-gradient(70.01deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%);
    height: 60px;
  }
}


</style>
