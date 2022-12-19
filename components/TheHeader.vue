<script setup>
import { ref } from "vue";
const menu = ref([
  { title: "О нас", slug: "#" },
  { title: "Команда", slug: "/team" },
  { title: "Экспертиза", slug: "/expertise" },
  { title: "Офисы", slug: "#" },
  { title: "Медиа", slug: "/media" },
  { title: "Блог", slug: "#" },
]);
</script>
<template>
  <header>
    <div class="container">
      <div class="header-content">
        <NuxtLink to="/"
          ><img src="@/assets/img/logo.svg" alt="" class="logo header"
        /></NuxtLink>
        <nav>
          <ul class="menu">
            <li v-for="(item, index) in menu" :key="index">
              <NuxtLink :to="item.slug">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="lang-switcher">
          <span>RU</span>
          <img src="@/assets/img/chevron-down.svg" alt="" />
        </div>
        <div class="header-mob_menu">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header-content {
  display: flex;
  align-items: center;
  padding-top: 60px;
  @media screen and (max-width: 1100px) {
    padding-top: 30px;
  }
  .logo {
    width: 65px;
    height: auto;
  }
  nav {
    margin-left: 70px;
    .menu {
      list-style: none;
      padding: 0;
      display: flex;
      align-items: center;
      gap: 70px;
      @media screen and (max-width: 1100px) {
        display: none;
      }
      a {
        color: #fff;
        text-decoration: none;
        transition: color 0.2s ease;
      }
      a:hover {
        color: var(--accent-color);
        transition: color 0.2s ease;
      }
    }
  }
  .lang-switcher {
    cursor: pointer;
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      font-size: 14px;
    }
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
}

.header-mob_menu {
  display: none;
  margin-left: auto;
  width: 36px;
  position: relative;
  height: 15px;
  cursor: pointer;
  @media screen and (max-width: 1100px) {
    display: block;
  }
}

.header-mob_menu {
  div {
    height: 1px;
    background: rgba($color: #fff, $alpha: 0.5);
    position: absolute;
    left: 0;
  }
  div:first-child {
    width: 100%;
    top: 0;
  }
  div:last-child {
    width: 100%;
    bottom: 0;
  }
}
</style>