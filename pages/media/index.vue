<script setup>
</script>
<template>
  <section class="media_page page-top page-bottom">
    <div class="container">
      <div class="media_page-row">
        <div>
          <h1 class="page-title">Медиа</h1>

          <div class="media_page-sidebar">
            
            <ul class="media_nav list-unstyle">
              <li>
                <nuxt-link to="/media/news">Новости</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/media/publications">Публикации</nuxt-link>
              </li>
              <li><nuxt-link to="/media/all">Все</nuxt-link></li>
            </ul>
          </div>

          <MobileFilters />

        </div>

        <div class="media_page-items">
          <MediaItem v-for="(item, index) in 6" :key="index" />
        </div>
      </div>
      <PagePagination class="media_page-pagination" />
    </div>
  </section>
</template>

<style lang="scss">
.media_page-sidebar {
  @media screen and (max-width: 1100px) {
    display: none;
  }
}
.media_page-row {
  display: grid;
  grid-template-columns: 25% 1fr;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
}
.media_nav {
  margin-top: 60px;
  li {
    margin-bottom: 15px;
    a {
      color: #fff;
      font-weight: 600;
      transition: color 0.2s ease;
    }
    a:hover {
      color: var(--accent-color);
      transition: color 0.2s ease;
    }
  }
  li:list-child {
    margin-bottom: 0;
  }
}

.media_page-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
}

.media_page-pagination {
  margin-top: 60px;
  text-align: right;
}
</style>