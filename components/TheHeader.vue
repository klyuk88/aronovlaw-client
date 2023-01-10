<script setup>
import { ref } from "vue";
const runtimeConfig = useRuntimeConfig()
const showMobMenu = useShowMobMenu();

const {data: practices} = await useFetch(
  `/api/practices`,
  {baseURL: runtimeConfig.public.api}
)
</script>
<template>
  <header>
    <div class="container">
      <div class="header-content">
        <!-- <NuxtLink to="/"
          ><img src="@/assets/img/logo.svg" alt="" class="logo header"
        /></NuxtLink> -->
        <nav>
          <ul class="menu">
            <li>
              <NuxtLink to="/">Главная</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">О нас</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/team">Команда</NuxtLink>
            </li>
            <li class="with_submenu_item">
              <NuxtLink to="/expertise"> Экспертиза</NuxtLink>
              <div class="submenu_wrap">
                <div class="submenu">
                  <div class="">
                    <NuxtLink to="/expertise/practices/" class="submenu-parent_link"
                      >Практики</NuxtLink
                    >
                    <ul class="submenu-practices"
                    v-if="practices.data.length > 0"
                    >
                      <li v-for="(item, index) in practices.data" :key="index">
                        <NuxtLink :to="`/expertise/practices/${item.attributes.slug}`"
                          >
                          {{item.attributes.title}}
                          </NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                  <div>
                    <NuxtLink
                      to="/expertise/legislative-activity"
                      class="submenu-parent_link"
                      >Законотворческая деятельность</NuxtLink
                    >
                  </div>
                  <div>
                    <NuxtLink
                      to="/expertise/pro-bono"
                      class="submenu-parent_link"
                      >Pro bono</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </li>
            <li>
              <NuxtLink to="/offices">Офисы</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/media">Медиа</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog">Блог</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="lang-switcher">
          <TheLangSwitcher />
        </div>

        <div class="header-mob_menu" @click="showMobMenu = !showMobMenu">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  .container {
    position: relative;
  }
}
.header-content {
  .menu {
    li {
      position: relative;
      .submenu_wrap {
        position: fixed;
        z-index: 99;
        transform: translateY(80px) translateX(-50%);
        padding-top: 70px;
        left: 50%;
        top: 0;
        display: none;
        width: 1110px;

      }
      .submenu {
        background: #fff;
        padding: 60px;
        display: grid;
        grid-template-columns: 50% 1fr 1fr;
        gap: 30px;

        .submenu-practices {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 50px;
          row-gap: 10px;
          margin-top: 34px;
          li a {
            transition: color 0.3s ease;
            color: #616161;
          }
          li a:hover {
            transition: color 0.3s ease;
            color: var(--accent-color);
          }
        }
        .submenu-parent_link {
          font-size: 16px;
          font-weight: 500;
          color: #212121;
          transition: color 0.2s ease;
        }
        .submenu-parent_link:hover {
          transition: color 0.2s ease;
          color: var(--accent-color);
        }
      }
    }
    .with_submenu_item:hover {
      .submenu_wrap {
        display: block;

      }
    }
    .with_submenu_item:hover:after {
      content: "";
      width: 1px;
      height: 60px;
      background: #fff;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(50%) translateY(25px);
      
    }
  }
}

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
    // margin-left: 70px;
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
        position: relative;
      }
      a:hover {
        color: var(--accent-color);
        transition: color 0.2s ease;
      }
      .router-link-active {
        color: var(--accent-color);
      }
    }
  }

  .lang-switcher-arrow:hover {
    path {
      transition: fill 0.2s ease;
      fill: var(--accent-color);
    }
  }

  .lang-switcher {
    cursor: pointer;
    margin-left: auto;
    position: relative;
    width: 20px;
    height: 20px;
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