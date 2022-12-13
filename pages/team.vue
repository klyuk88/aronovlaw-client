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
    <section class="team-page">
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
        <div class="team-page-content">
          <div class="sidebar">
            <div class="sidebar-filter">
              <h2 class="sidebar-filter-title">Практика</h2>
              <ul class="sidebar-filter-list">
                <li v-for="(item, index) in filters.practic" :key="index">
                  <NuxtLink to="#">{{ item }}</NuxtLink>
                </li>
              </ul>
            </div>

            <div class="sidebar-filter">
              <h2 class="sidebar-filter-title">Офисы</h2>
              <ul class="sidebar-filter-list">
                <li v-for="(item, index) in filters.office" :key="index">
                  <NuxtLink to="#">{{ item }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <div class="team-page-items">
            <div class="team-page-item" v-for="(item, index) in 12" :key="index">
              <div class="team-page-item-thumb">
                <img src="@/assets/img/comands-img.jpg" alt="" />
              </div>
              <h3 class="team-page-item-title">Александр Аронов</h3>
              <p class="team-page-item-post">Управляющий партнер</p>
            </div>
          </div>
        </div>
        <PagePagination class="team-pagination"/>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.team-page {
  padding-top: 134px;
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
}
.team-page-content {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 25% 1fr;
  gap: 30px;
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
}
.team-page-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  .team-page-item {
    &-thumb {
      position: relative;
      width: 100%;
      aspect-ratio: 1/1;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-title {
      font-size: 16px;
      font-weight: 700;
      margin-top: 30px;
    }
    &-post {
      font-size: 14px;
      font-weight: 300;
      margin-top: 10px;
    }
  }
}
.team-pagination {
  margin-top: 60px;
  text-align: right;
}
</style>