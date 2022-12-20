<script setup>
const showPopup = useShowPopup()
</script>
<template>
  <div class="popup_wrap show" @click.self="showPopup = false">
    <form action="" class="map-form">
      <svg
      @click="showPopup = false"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        class="form_close_btn"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.39092e-05 1.36362L1.36368 0L15 13.6362L13.6364 14.9999L4.39092e-05 1.36362Z"
          fill="white"
          fill-opacity="0.5"
        />
        <path
          d="M13.6363 0.000145635L15 1.36377L1.36363 15L0 13.6364L13.6363 0.000145635Z"
          fill="white"
          fill-opacity="0.5"
        />
      </svg>
      <h3 class="map-form-title">Заказать обратный звонок</h3>
      <input type="text" id="" placeholder="Имя" />
      <input type="email" id="" placeholder="Email" />
      <input type="tel" id="" placeholder="Телефон" />
      <textarea placeholder="Сообщение"></textarea>
      <button class="btn map-form-btn">Отправить</button>
      <p class="map-form-small">
        Нажимая на кнопку Вы соглашаетесь с
        <NuxtLink to="#">политикой обработки персональных данных</NuxtLink>
      </p>
    </form>
  </div>
</template>
<style lang="scss">
.popup_wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba($color: #212121, $alpha: 0.5);
  backdrop-filter: blur(6px);
  align-items: center;
  justify-content: center;
  z-index: 99;
  display: none;
  .map-form {
    padding: 40px 50px;
    background: #fff;
    width: 450px;
    max-width: 450px;
    position: relative;
    z-index: 1;
    input,
    textarea {
      font-size: 16px;
      font-weight: 300;
      color: var(--dark-color);
      border: none;
      border-radius: 0;
      background: transparent;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(33, 33, 33, 0.5);
      width: 100%;
      margin-bottom: 35px;
      @media screen and (max-width: 576px) {
        margin-bottom: 25px;
      }
    }
    input::placeholder,
    textarea::placeholder {
      font-size: 16px;
      font-weight: 300;
      color: var(--dark-color);
    }
    input:focus,
    textarea:focus {
      outline: none;
      border-color: var(--accent-color);
      color: var(--accent-color);
    }
    input:focus::placeholder,
    textarea:focus::placeholder {
      color: var(--accent-color);
    }
    textarea {
      padding-bottom: 0;
      margin-bottom: 0;
    }
    &-title {
      font-size: 24px;
      font-weight: 700;
      color: var(--dark-color);
      text-align: center;
      margin-bottom: 60px;
      @media screen and (max-width: 576px) {
        font-size: 20px;
        margin-bottom: 30px;
      }
    }
    &-btn {
      width: 100%;
      margin-top: 66px;
      @media screen and (max-width: 576px) {
        margin-top: 44px;
      }
    }
    &-small {
      display: inline-block;
      font-size: 11px;
      font-weight: 400;
      text-align: center;
      margin-top: 20px;
      color: var(--dark-color);
      a {
        color: var(--dark-color);
        text-decoration: underline;
        font-size: 11px;
      }
    }
    .form_close_btn {
      position: absolute;
      right: -25px;
      top: -25px;
      cursor: pointer;
    }
    @media screen and (max-width: 576px) {
      width: 85%;
      padding: 30px;
    }
  }
}
.popup_wrap.show {
  display: flex;
}
</style>
