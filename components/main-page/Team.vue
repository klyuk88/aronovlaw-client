<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
const config = useRuntimeConfig()

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

const {data: teamData} = useFetch(
  () => '/api/teams?populate=avatar',
  {
    baseURL: config.public.api
  }
)

</script>
<template>
  <section class="team section-top" v-if="teamData.data.length > 0">
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
        <SwiperSlide v-for="(item, index) in teamData.data" :key="index">
          <img
            :src="`${$config.public.api}${item.attributes.avatar.data.attributes.url}`"
            alt=""
            class="team-slider-image"
          />
          <div class="team_slider-item_names">
            <h3 class="team_slider-item_names-name">{{item.attributes.name}}</h3>
            <p class="team_slider-item_names-post">{{item.attributes.post}}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>

  <section class="slogan section-top">
    <h1 class="slogan-title">Сочетание глубоких знаний и обширной практики</h1>
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
    // @media screen and (max-width: 768px) {
    //   height: 550px;

    // }
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



.slogan-title {
  font-size: 48px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  width: 60%;
  margin: 0 auto;
  @media screen and (max-width: 1100px) {
    font-size: 24px;
    width: 100%;
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


</style>
