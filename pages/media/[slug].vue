<script setup>
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const singleMedia = ref(null);
const { error, data: singleMediaData } = await useFetch(
  () =>
    `/api/medias?filters[slug][$eq]=${route.params.slug}&populate[team][populate]=*&populate[cover]=*`,
  {
    baseURL: runtimeConfig.public.api,
  }
);
singleMedia.value = singleMediaData.value.data[0].attributes;

const date = new Date(singleMedia.value.publishedAt);

const pubDate = date.toLocaleString("ru-RU", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const content = useReplaceUploads(singleMedia.value.content);

const { error: allMediaError, data: allMedia } = await useFetch(
  () => `/api/medias`,
  {
    baseURL: runtimeConfig.public.api,
  }
);

const currentIndex = allMedia.value.data.findIndex((element) => {
  return element.id === singleMediaData.value.data[0].id;
});

const nextElem = async () => {
  if (currentIndex < allMedia.value.data.length - 1) {
    allMedia.value.data.forEach((item, idx) => {
      if (currentIndex + 1 === idx) {
        navigateTo(`/media/${item.attributes.slug}`);
      }
    });
  }
};

const prevElem = async () => {
   if (currentIndex > 0) {
    allMedia.value.data.forEach((item, idx) => {
      if (currentIndex - 1  === idx) {
        navigateTo(`/media/${item.attributes.slug}`);
      }
    });
  }
}
</script>
<template>
  <section class="single_page page-top">
    <div class="container">
      <div class="single_page-raw">
        <div class="single_page-sidebar">
          <div class="single_page-nav">
            <h1 class="page-title">Медиа</h1>

            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="single_page-nav_icon"
              @click="navigateTo('/media')"
            >
              <path
                d="M0.5 0.5H5.5V5.42589H0.5V0.5ZM10.5 0.5H15.5V5.42589H10.5V0.5ZM20.5 0.5H25.5V5.42589H20.5V0.5ZM0.5 10.6334H5.5V15.5593H0.5V10.6334ZM0.5 20.5741H5.5V25.5H0.5V20.5741ZM10.5 20.5741H15.5V25.5H10.5V20.5741ZM20.5 20.5741H25.5V25.5H20.5V20.5741ZM10.5 10.6334H15.5V15.5593H10.5V10.6334ZM20.5 10.6334H25.5V15.5593H20.5V10.6334Z"
                stroke="white"
              />
            </svg>
          </div>

          <div class="single_page-pag">
            <button class="single_page-pag-item prev" @click.prevent="prevElem()" :disabled="currentIndex > 0 ? false : true">
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 6.5091e-07L6.475 1.20833L3.36875 4.16667L14 4.16667L14 5.83333L3.36875 5.83333L6.475 8.79167L5.25 10L-5.13696e-07 5L5.25 6.5091e-07Z"
                  fill="white"
                />
              </svg>
              <span>Предыдущая</span>
            </button>
            <button class="single_page-pag-item next" @click.prevent="nextElem()" :disabled="currentIndex < allMedia.data.length - 1 ? false : true">
              <span>Следующая</span>
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 10L7.525 8.79167L10.6312 5.83333H0V4.16667H10.6312L7.525 1.20833L8.75 0L14 5L8.75 10Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <img
            v-if="singleMedia.cover.data"
            :src="$config.public.api + singleMedia.cover.data.attributes.url"
            alt="image"
            class="single_page-cover"
          />
          <client-only
            ><span class="single_page-date">{{ pubDate }}</span></client-only
          >
          <h1 class="single_media-title">
            {{ singleMedia.title }}
          </h1>

          <div class="single_page-content" v-html="content"></div>

          <div class="single_page-author" v-if="singleMedia.team.data">
            <div class="author_photo">
              <img
                :src="
                  $config.public.api +
                  singleMedia.team.data.attributes.avatar.data.attributes.url
                "
                alt="author-photo"
              />
            </div>
            <p class="author_name">
              {{ singleMedia.team.data.attributes.post }} МКА «Аронов и
              партнеры»<br />
              {{ singleMedia.team.data.attributes.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.single_page {
  padding-bottom: 120px;
}
.single_page-raw {
  display: grid;
  grid-template-columns: 25% 1fr;
  gap: 30px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
}
.single_page-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.single_page-pag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
  &-item {
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0.5;
    transition: opacity 0.3s ease span {
      font-size: 14px;
      font-weight: 300;
    }
  }
  &-item:hover {
    transition: opacity 0.3s ease;
    opacity: 1;
  }
}
.single_page-nav_icon {
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.single_page-nav_icon:hover {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.single_page-cover {
  width: 100%;
  height: auto;
  margin-bottom: 60px;
}

.single_page-date {
  color: var(--accent-color);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;
  display: block;
}

.single_page-content {
  * {
    color: #fff !important;
  }
  a {
    text-decoration: underline;
  }
}

.single_page-author {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-top: 60px;
  .author_photo {
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    width: 120px;
    height: 120px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media screen and (max-width: 1100px) {
      width: 80px;
      height: 80px;
    }
  }
  .author_name {
    font-size: 16px;
    font-weight: 300;
  }
  @media screen and (max-width: 1100px) {
    gap: 15px;
  }
}
.single_media-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 1100px) {
    font-size: 24px;
    font-weight: 600;
  }
}
.single_page-pag-item {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}
.single_page-pag-item:disabled {
  opacity: 0.2;
  cursor: auto;
}
</style>