<script setup>
import { ref } from 'vue'
const submenuShow = ref(false)
const showMobMenu = useShowMobMenu()

</script>
<template>
<!-- :style="{display: showMobMenu ? 'block' : 'none'}" -->
  <div class="mob_menu" :class="{show: showMobMenu}">
    <div class="mob_menu-wrap">
      <div class="mob_menu-header">
        <div class="mob_menu-lang_switch">
          <span>RU</span>
          <img src="@/assets/img/chevron-r.svg" alt="" />
        </div>

        <img src="@/assets/img/close_menu.svg" alt="" @click="showMobMenu = false"/>
      </div>

      <ul class="mob_menu-items">
        <li>
          <nuxt-link to="/"> Главная </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#"> О нас </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/team">Команда</nuxt-link>
        </li>
        <li class="mob_menu-items-item_with_submenu">
          <nuxt-link to="/expertise">Экспертиза</nuxt-link>

          <img
            src="@/assets/img/chevron-r.svg"
            alt=""
            class="mob_menu-items-arrow"
            :class="{rotate: submenuShow}"
            @click="submenuShow = !submenuShow"
          />

          <ul class="mob_menu-submenu_items"
          :class="{show: submenuShow}"
          >
            <li>
              <nuxt-link to="#">Практики</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#"
                >Законотворческая деятельность</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="#">Pro bono</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="#">Офисы</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/media">Медиа</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Блог</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.mob_menu-items-item_with_submenu {
  position: relative;
  .mob_menu-items-arrow {
    position: absolute;
    right: 0;
    top: 0;
    transition: transform .3s ease-out;
  }
  .mob_menu-items-arrow.rotate {
    transform: rotate(90deg);
    transition: transform .3s ease-in;
  }
}
.mob_menu-submenu_items {
  padding-left: 20px;
  list-style: none;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

.mob_menu-submenu_items.show {
  max-height: 500px;
  transition: max-height 0.5s ease-in;
}
.mob_menu {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  transform: translateX(-100%);
  top: 0;
  left: -100%;
  background-color: rgba($color: #383b3e, $alpha: 0.9);
  backdrop-filter: blur(6px);
  transition: transform .3s ease-out, left .1s ease-out .3s;
  .mob_menu-wrap {
    width: 200px;
    margin-inline: auto;
    margin-top: 10vh;
  }
  .mob_menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  .mob_menu-lang_switch {
    display: flex;
    align-items: center;
    gap: 6px;
    span {
      font-size: 16px;
      font-weight: 600;
    }
  }
  .mob_menu-items {
    list-style: none;
    padding: 0;
    li {
      a {
        font-size: 16px;
        font-weight: 600;
        transition: color 0.2s ease;
        margin-bottom: 30px;
        display: inline-block;
      }
      a:hover {
        transition: color 0.2s ease;
        color: var(--accent-color);
      }
    }
  }
}
.mob_menu.show {
  left: 0;
  transform: translateX(0);
  transition: transform .3s ease-in;
}
</style>