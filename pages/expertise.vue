<template>
  <section class="expertise_page page-top page-bottom">
    <div class="container">
      <h1 class="page-title">Практики</h1>
      <div class="expertise-row">
        <NuxtLink to="#" v-for="(item, index) in 16" :key="index">
          <div class="expertise_item">
            <img
              src="@/assets/img/expertise-icon.png"
              alt=""
              class="expertise_item-icon"
            />
            <div class="expertise_item-content">
              <h2 class="expertise_item-title">
                Антимонопольное право
                <img
                  src="@/assets/img/expertise-arrow.svg"
                  alt=""
                  class="expertise_item-arrow"
                />
              </h2>
              <p class="expertise_item-about">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне.
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="expertise-links">
        <div class="expertise-links-item" v-for="(item, idx) in 2" :key="idx">
          <NuxtLink to="#">
            <h4>
              Законотворческая деятельность
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
            </h4>
          </NuxtLink>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.expertise-links-item:hover {
  @media screen and (max-width: 1100px) {
    background-color: var(--accent-color);
    transition: background-color 0.3s ease;
  }
}

.expertise-links-item:last-child {
  margin-bottom: 0;
}
.expertise-links-item {
  margin-bottom: 60px;
  h4 {
    font-size: 32px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    gap: 60px;
    transition: color 0.2s ease;
    align-items: center;
    @media screen and (max-width: 1100px) {
      font-size: 13px;
      font-weight: 500;
      gap: 5px;
      line-height: 1;
    }
  }
  p {
    margin-top: 60px;
    font-size: 16px;
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
  svg {
    width: 30px;
    height: auto;
    path {
      transition: fill 0.2s ease;
    }
    @media screen and (max-width: 1100px) {
      width: 8px;
      height: auto;
    }
  }
  h4:hover {
    color: var(--accent-color);
    transition: color 0.2s ease;
    svg path {
      fill: var(--accent-color);
      transition: fill 0.2s ease;
    }
  }
  @media screen and (max-width: 1100px) {
    margin-bottom: 15px;
    height: 75px;
    background: linear-gradient(
      28.93deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.expertise-links {
  margin-top: 120px;
}
.expertise-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 60px;
  @media screen and (max-width: 1100px) {
    gap: 15px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 320px) {
    grid-template-columns: 100%;
  }
}
.expertise_item {
  padding: 30px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 345px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &-icon {
    width: 50px;
    height: auto;
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
  &-title {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    @media screen and (max-width: 1100px) {
      font-size: 12px;
      font-weight: 500;
    }
  }
  &-about {
    font-size: 13px;
    font-weight: 300;
    color: #fff;
    margin-top: 30px;
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
  &-arrow {
    @media screen and (max-width: 1100px) {
      width: 8px;
    }
  }
  @media screen and (max-width: 1100px) {
    padding: 25px;
    max-height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.expertise_item:hover {
  background-color: var(--accent-color);
  transition: background-color 0.3s ease;
}
</style>