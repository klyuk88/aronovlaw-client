<script setup>
import { reactive } from "vue";
const filters = reactive({
  practic: [
    "Антимонопольное право",
    "Банкротство",
    "Корпоративное право",
    "Медицинское право",
    "Налоговое право",
    "Недвижимость и строительство",
    "Разрешение споров в судах",
    "Семейное / наследственное право",
    "Трудовое право",
    "Уголовное право",
    "Таможенное право",
    "Спортивное право",
    "Санкицонное право",
    "Миграционное право",
  ],
  office: ["Москва", "Ташкент", "Дубай"],
});
</script>
<template>
  <div>
    <section class="team-page page-top">
      <div class="container">
        <h1 class="page-title">Команда Аронов и партнеры</h1>

        <div class="team-search">
          <input
            type="text"
            name=""
            id=""
            placeholder="Поиск по имени или ключевому слову"
          />
          <img
            src="@/assets/img/search-icon.svg"
            alt=""
            class="team-search-icon"
          />
        </div>

        <MobileFilters/>

        <div class="team-page-content">
          <div class="sidebar">
            <div class="sidebar-filter">
              <h2 class="sidebar-filter-title">Практика</h2>
              <ul class="sidebar-filter-list">
                <li v-for="(item, index) in filters.practic" :key="index">
                  <a href="#">{{ item }}</a>
                </li>
              </ul>
            </div>

            <div class="sidebar-filter">
              <h2 class="sidebar-filter-title">Офисы</h2>
              <ul class="sidebar-filter-list">
                <li v-for="(item, index) in filters.office" :key="index">
                  <a href="#">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="team-page-items">
            <NuxtLink to="#" v-for="(item, index) in 12" :key="index">
              <div class="team-page-item">
                <img
                  src="@/assets/img/comands-img.jpg"
                  alt=""
                  class="team_item-image"
                />
                <img
                  src="@/assets/img/team/item-2.jpg"
                  alt=""
                  class="team_item-hover_image"
                />
                <div class="team-page-item_names">
                  <h3 class="team-page-item-title">Александр Аронов</h3>
                  <p class="team-page-item-post">Управляющий партнер</p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <PagePagination class="team-pagination" />
      </div>
    </section>
  </div>
</template>

<style lang="scss">

.team-page {
  padding-bottom: 120px;
}
.team-search {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 27px;
  &-icon {
    cursor: pointer;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    font-weight: 300;
    background: transparent;
    padding-bottom: 10px;
  }
  input::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    font-weight: 300;
  }
  input:focus {
    border-color: var(--accent-color);
    outline: none;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
}
.team-page-content {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 25% 1fr;
  gap: 30px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
}
.sidebar {
  &-filter {
    margin-bottom: 60px;
    &-title {
      font-size: 16px;
      font-weight: 600;
    }
    &-list {
      list-style: none;
      padding: 0;
      margin-top: 30px;
      li {
        margin-bottom: 15px;
        a {
          font-size: 14px;
          font-weight: 400;
          transition: color 0.2s ease;
        }
        a:hover {
          color: var(--accent-color);
          transition: color 0.2s ease;
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
  &-filter:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
}
.team-page-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  .team-page-item {
    position: relative;
    width: 100%;
    aspect-ratio: 17/24;
    padding: 35px 30px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }
    &_names {
      position: relative;
      z-index: 1;
    }
    &-title {
      font-size: 20px;
      font-weight: 700;
    }
    &-post {
      font-size: 13px;
      font-weight: 300;
      margin-top: 16px;
    }
    @media screen and (max-width: 1100px) {
      font-size: 20px;
      font-weight: 700;
    }
  }
  .team-page-item:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(33, 33, 33, 0) 49.98%,
      #212121 99.98%
    );
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 440px) {
    grid-template-columns: 100%;
  }
}
.team-pagination {
  margin-top: 60px;
  text-align: right;
}
.team_item-hover_image {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.team-page-item:hover {
  .team_item-hover_image {
    opacity: 1;
    transition: opacity 0.5s ease;
  }
}
</style>