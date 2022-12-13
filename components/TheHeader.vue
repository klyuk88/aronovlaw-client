<script setup>
import { ref } from "vue";
const menu = ref([
  { title: "О нас", slug: "/" },
  { title: "Команда", slug: "/team" },
  { title: "Экспертиза", slug: "/" },
  { title: "Офисы", slug: "/" },
  { title: "Медиа", slug: "/" },
  { title: "Блог", slug: "/" },
]);
</script>
<template>
  <header>
    <div class="container">
      <div class="header-content">
        <NuxtLink to="/"><img src="@/assets/img/logo.svg" alt="" class="logo header" /></NuxtLink>
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
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header-content {
  display: flex;
  align-items: center;
  padding-top: 60px;
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
      a {
        color: #fff;
        text-decoration: none;
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
  }
}
</style>