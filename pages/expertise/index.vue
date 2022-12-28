<template>
  <section class="expertise_index page-top page-bottom">
    <div class="container">
      <h1 class="page-title">Экспертиза</h1>
      <p class="expertise_index-subtitle">
        Команда высококвалифицированных специалистов, обладающих большим опытом
        в области российского и международного права, что позволяет успешно
        представлять интересы клиентов в делах любой сложности
      </p>
      <div class="expertise_index-row">
        <nuxt-link to="/expertise/practices">
          <div class="expertise_index-item">
            <h2>Практики</h2>
            <p>
              Национальные рейтинги юридических фирм неоднократно включают фирму
              в число лучших и рекомендуют для сотрудничества по разным
              направлениям практики.
            </p>
            <div class="expertise_index-item-link_arrow">
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
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/expertise/legislative-activity">
          <div class="expertise_index-item">
            <h2>Законотворческая деятельность</h2>
            <p>
              Юристы «Аронов и Партнеры» часто привлекаются в качестве экспертов в деятельности
профильных законопроектных организаций.
            </p>
            <div class="expertise_index-item-link_arrow">
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
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/expertise/pro-bono">
          <div class="expertise_index-item">
            <h2>Pro Bono</h2>
            <p>
              Команда «Аронов и Партнеры» оказывает активную помощь в решении правовых
проблем льготным категориям граждан по системе Pro Bono.
            </p>
            <div class="expertise_index-item-link_arrow">
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
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.expertise_index-item:hover {
  .expertise_index-item-link_arrow {
    background-color: var(--accent-color);
    transition: background-color 0.3s ease;
  }
}
.expertise_index-item-link_arrow {
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 65px;
  height: 65px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}
.expertise_index-item {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  padding: 130px 65px 130px 65px;
  min-height: 495px;
  h2 {
    font-size: 22px;
    font-weight: 800;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    margin-top: 60px;
  }
  @media screen and (max-width: 1100px) {
    padding: 90px 30px 150px 30px;
    min-height: auto;
  }
}

.expertise_index-row {
  width: 100%;
  margin-top: 84px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
}
.expertise_index-subtitle {
  margin-top: 60px;
}
</style>