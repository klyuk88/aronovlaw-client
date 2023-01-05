<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const {error, data: singleTeam} = await useFetch(
  () => `/api/teams/${route.query.id}?populate=*`,
  {
    baseURL: runtimeConfig.public.api
  }
)

const about = singleTeam.value.data.attributes.about.replace(/\/uploads/,`${runtimeConfig.public.api}/uploads`)

const {data: singleTeamMedia} = await useFetch(
  () => `/api/medias?filters[team][id][$eq]=${route.query.id}&populate=*`,
  {
    baseURL: runtimeConfig.public.api
  }
)

</script>
<template>
  <section class="team_single page-top page-bottom">
    <div class="container">
      <div class="team_single-header">

        <div>
          <h1 class="team_single-name">{{singleTeam.data.attributes.name}}</h1>
          <h2 class="team_single-post">{{singleTeam.data.attributes.post}}</h2>

          <img src="@/assets/img/dev_images/single-team-image.jpg" alt="" class="team_single-mob_thumb">

          <div class="team_single-header_item"
          v-if="singleTeam.data.attributes.practices.data"
          >
            <h3 class="team_single-subtitle">Практика</h3>
            <ul class="team_single-list">
              <li 
              v-for="(item, index) in singleTeam.data.attributes.practices.data" :key="index"
              >{{item.attributes.title}}</li>
            </ul>
          </div>

          <div class="team_single-header_item">
            <h3 class="team_single-subtitle">Награды</h3>
            <ul class="team_single-list">
              <li>Победитель корпоративных конкурсов «Профи» (2013)</li>
              <li>«Человек года» в номинации «Назначение года» (2015)</li>
            </ul>
          </div>

          <div class="team_single-header_item contacts">
            <a :href="$config.public.api + singleTeam.data.attributes.vCard.data.attributes.url" class="team_single-header_link" download v-if="singleTeam.data.attributes.vCard.data">v-сard</a>

            <a :href="`mailto:${singleTeam.data.attributes.email}`" class="team_single-header_link"
              >{{singleTeam.data.attributes.email}}</a
            >
          </div>

          <div class="team_single-header_item"
          v-if="singleTeam.data.attributes.quote"
          >
            <p class="team_single-header_quote">
              {{singleTeam.data.attributes.quote}}
            </p>
          </div>
        </div>

        <div class="team_single-thumb_wrap">
          <div class="team_single-thumb">
            <img
              :src="$config.public.api + singleTeam.data.attributes.avatar.data.attributes.url"
              alt="team-photo"
              class="cover-image"
            />

            <svg
              width="120"
              height="60"
              viewBox="0 0 120 60"
              fill="none"
              id="btn_video"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="120" height="60" fill="#038DFF" />
              <path d="M70 30L55 38.6603L55 21.3397L70 30Z" fill="white" />
            </svg>
          </div>
        </div>

      </div>

      <div class="team_single-about" v-html="about" />

      <div class="team_single-cases">
        <h2 class="page-title">Успешные кейсы</h2>
        <div class="team_single-cases_row">
          <div class="team_single-cases_item">
            <NuxtLink to="#">
              <h3>
                Юристы «Аронов и Партнеры» помогли АО «Метрогипротранс» отстоять
                в суде право проектировать метро Санкт-Петербурга

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
              </h3>
              <span>Кейс - 13.12.2022</span>
            </NuxtLink>
          </div>

          <div class="team_single-cases_item">
            <NuxtLink to="#">
              <h3>
                Юристы «Аронов и Партнеры» помогли АО «Метрогипротранс» отстоять
                в суде право проектировать метро Санкт-Петербурга
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
              </h3>
              <span>Кейс - 13.12.2022</span>
            </NuxtLink>
          </div>

          <div class="team_single-cases_item">
            <NuxtLink to="#">
              <h3>
                Юристы «Аронов и Партнеры» помогли АО «Метрогипротранс» отстоять
                в суде право проектировать метро Санкт-Петербурга
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
              </h3>
              <span>Кейс - 13.12.2022</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="team_single-media"

      v-if="singleTeamMedia.data.length > 0"
      >
        <div class="team_single-media-header">
          <h2 class="page-title">Публикации</h2>
          <NuxtLink to="/media"
            >Смотреть еще
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
          </NuxtLink>
        </div>

        <div class="team_single-media-row">
          <MediaItem 
          v-for="(item, index) in singleTeamMedia.data" :key="index"
          :mediaItem="item"
          />

        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.team_single-thumb_wrap {
  @media screen and (max-width: 1100px) {
    display: none;
  }
}
.team_single .team_single-header_item.contacts {
  display: flex;
  align-items: center;
  gap: 60px;
  @media screen and (max-width: 1100px) {
    justify-content: space-between;
  }
}
.team_single-mob_thumb {
  display: none;
  width: 100%;
  height: auto;
  margin-bottom: 60px;
  @media screen and (max-width: 1100px) {
    display: block;
  }
}
.team_single-media-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
}
.team_single-media-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
}
.team_single-media {
  margin-top: 120px;
}

.team_single-header {
  display: grid;
  grid-template-columns: 1fr 50%;
  gap: 100px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
}

.team_single-thumb {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  #btn_video {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }
}

.team_single-name {
  font-size: 46px;
  font-weight: 800;
  @media screen and (max-width: 1100px) {
    font-size: 30px;
    font-weight: 700;
  }
}

.team_single-post {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 60px;
  color: var(--accent-color);
  @media screen and (max-width: 1100px) {
    font-size: 24px;
    font-weight: 600;
  }
}
.team_single-subtitle {
  font-size: 18px;
  font-weight: 700;
}
.team_single-list {
  margin-top: 15px;
  padding-left: 20px;
  li {
    font-size: 14px;
    font-weight: 400;
    line-height: 2;
    @media screen and (max-width: 1100px) {
      font-size: 13px;
    }
  }
}

.team_single-header_item {
  margin-bottom: 30px;
}
.team_single-header_item:last-child {
  margin-bottom: 0;
}

.team_single-header_link {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}

.team_single-header_quote {
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  opacity: 0.7;
  @media screen and (max-width: 1100px) {
    text-align: center;
    margin-top: 60px;
  }
}

.team_single-about {
  margin-top: 60px;
  * {
    color: #fff!important;
  }
}

.team_single-cases {
  margin-top: 120px;
}

.team_single-cases_row {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 41% 41%;
  column-gap: 18%;
  row-gap: 60px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
    column-gap: 0;
    row-gap: 30px;
  }
}

.team_single-cases_item {
  h3 {
    font-size: 20px;
    font-weight: 600;
    transition: color 0.2s ease;
    @media screen and (max-width: 1100px) {
      font-size: 14px;
    }
  }
  span {
    font-size: 15px;
    font-weight: 500;
    opacity: 0.5;
    margin-top: 15px;
    display: block;
    @media screen and (max-width: 1100px) {
      font-size: 14px;
    }
  }
  svg path {
    transition: fill 0.2s ease;
  }
}
.team_single-cases_item:hover {
  h3 {
    color: var(--accent-color);
    transition: color 0.2s ease;
  }
  svg path {
    fill: var(--accent-color);
    transition: fill 0.2s ease;
  }
}


</style>