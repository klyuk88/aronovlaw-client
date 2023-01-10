<template>
  <section class="estimation section-top">
    <div class="container">
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
          <div class="estimation-item-image_wrap">
            <img src="@/assets/img/kommersant_logo.svg" alt="" />
          </div>

          <h3 class="estimation-item-title">
            Рейтинг юридических<br />компаний России
          </h3>
        </div>

        <div class="estimation-item">
          <div class="estimation-item-image_wrap">
            <img src="@/assets/img/forbes_logo.svg" alt="" />
          </div>

          <h3 class="estimation-item-title">
            Рейтинг юридических<br />компаний России
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
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
      row-gap: 30px;
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
.estimation-item-image_wrap {
  @media screen and (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    background: linear-gradient(
      70.01deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    height: 60px;
  }
}
</style>