<script setup>
import { ref, watch } from "vue";
const showFilters = ref(false);
const mediaFilter = ref("");
const runtimeConfig = useRuntimeConfig();

const currentPage = ref(1);

const { data: mediaCategories } = useFetch(
  () => `/api/media-categories?populate=*`,
  {
    baseURL: runtimeConfig.public.api,
  }
);

const { data: mediaItems } = await useFetch(
  () =>
    `/api/medias?populate[0]=thumbnail&populate[1]=practice&sort=publishedAt:desc&pagination[pageSize]=6&pagination[page]=${currentPage.value}${mediaFilter.value}`,
  {
    baseURL: runtimeConfig.public.api,
  }
);
const filterVal = ref("");

watch(filterVal, (newVal) => {
  if (newVal) {
    currentPage.value = 1;
    mediaFilter.value = `&filters[media_categories][slug][$eq]=${newVal}`;
  } else {
    currentPage.value = 1;
    mediaFilter.value = "";
  }
});

const navPage = (page) => {
  currentPage.value = page;
};
</script>
<template>
  <section class="media_page page-top page-bottom">
    <div class="container">
      <div class="media_page-row">
        <div>
          <h1 class="page-title">Медиа</h1>
          <MobileFilters @clickFilter="showFilters = true" />

          <div
            class="media_page-sidebar mob_filters"
            :class="{ active: showFilters }"
          >
            <img
              src="~/assets/img/close-filters.svg"
              alt=""
              class="close_filters_btn"
              @click="showFilters = false"
            />

            <div class="media_nav">
              <label v-for="(item, index) in mediaCategories.data" :key="index">
                <input
                  type="radio"
                  v-model="filterVal"
                  :value="item.attributes.slug"
                  v-if="item.attributes.medias.data.length > 0"
                />
                <span v-if="item.attributes.medias.data.length > 0">{{
                  item.attributes.title
                }}</span>
              </label>
              <label>
                <input type="radio" v-model="filterVal" :value="''" />
                <span>Все</span>
              </label>
            </div>
          </div>
        </div>

        <div class="media_page-items" v-if="mediaItems.data.length > 0">
          <MediaItem
            v-for="(item, index) in mediaItems.data"
            :key="index"
            :mediaItem="item"
          />
        </div>
        <NoContent v-else />
      </div>
      <PagePagination
        :pageTotal="mediaItems.meta.pagination.pageCount"
        @changePage="navPage"
        class="media_page-pagination"
      />
    </div>
  </section>
</template>
<style lang="scss">
.media_page-row {
  display: grid;
  grid-template-columns: 25% 1fr;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
}
.media_nav {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  label {
    color: #fff;
    font-weight: 600;
    transition: color 0.2s ease;
    position: relative;
    cursor: pointer;
    input {
      position: absolute;
      left: 0;
      width: 0;
      height: 0;
      opacity: 0;
    }
    input:checked + span {
      color: var(--accent-color);
    }
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
