<script setup>
</script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div>
          <img
            src="@/assets/img/big-logo-footer.svg"
            alt="logotype"
            class="footer-logo"
          />

          <div class="footer-info-block">
            <p class="footer-info">
              © МКА Аронов и Партнеры 2018-2022 Все права защищены
            </p>
            <p class="footer-info">Web site разработан Art Factory</p>
          </div>
        </div>

        <div>
          <div class="footer-item">
            <h4 class="footer-item-title">Адрес</h4>
            <p class="footer-item-content">
              115191, г. Москва, Гамсоновский переулок, д. 2, стр. 1,
              бизнес-центр «Т», помещение 11
            </p>
          </div>

          <div class="footer-item">
            <h4 class="footer-item-title">Контакты</h4>
            <p class="footer-item-content">
              Email: <a href="mailto:info@aronovlaw.ru ">info@aronovlaw.ru </a>
            </p>
            <p class="footer-item-content">
              Телефон | факс: <a href="tel:+74952257650 ">+7 495 225 76 50</a>
            </p>
          </div>

          <div class="footer-item">
             <p class="footer-info">
              © МКА Аронов и Партнеры 2018-2022.<br>Все права защищены
            </p>
            <p class="footer-info">Web site разработан Art Factory</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer-info-block {
  @media screen and (max-width: 1100px) {
    display: none;
  }
}
.footer-content {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 50%;
  gap: 75px;
  @media screen and (max-width: 1100px) {
    width: 100%;
    grid-template-columns: 100%;
    gap: 30px;
  }
}
.footer {
  padding-bottom: 90px;
  position: relative;
  .container {
    position: relative;
  }
  &-info {
    font-size: 12px;
    font-weight: 300;
    // color: #D1D1D1;
    margin-bottom: 35px;
    @media screen and (max-width: 1100px) {
      margin-bottom: 20px;
    }
  }
  &-info:last-child {
    margin-bottom: 0;
  }
  &-logo {
    width: 252px;
    height: auto;
    margin-bottom: 66px;
    @media screen and (max-width: 1100px) {
      margin-bottom: 0;
      display: block;
      margin-inline: auto;
    }
  }
}

.footer-item {
  margin-bottom: 56px;
  &-title {
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 20px;
  
  }
  &-content {
    font-size: 14px;
    font-weight: 400;
    line-height: 170%;
    // color: #BEBDBB;
  }
  @media screen and (max-width: 1100px) {
    margin-bottom: 30px;
  }
}
.footer-item:last-child {
  margin-bottom: 0;
  display: none;
  @media screen and (max-width: 1100px) {
    display: block;
  }
}
</style>