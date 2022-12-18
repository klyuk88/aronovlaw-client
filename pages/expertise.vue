<template>
  <section class="expertise_page page-top page-bottom">
    <div class="container">
      <h1 class="page-title">Практики</h1>
      <div class="expertise-row">
        <NuxtLink to="#"
        v-for="(item, index) in 16" :key="index"
        >
          <div class="expertise_item">
            <img
              src="@/assets/img/expertise-icon.png"
              alt=""
              class="expertise_item-icon"
            />
            <div class="expertise_item-content">
              <h2 class="expertise_item-title">
                Антимонопольное право
                <img src="@/assets/img/expertise-arrow.svg" alt="" />
              </h2>
              <p class="expertise_item-about">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.expertise-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 60px;
}
.expertise_item {
  padding: 30px;
  background: linear-gradient(
    28.93deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 345px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &-icon {
    width: 50px;
    height: auto;
  }
  &-title {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }
  &-about {
    font-size: 13px;
    font-weight: 300;
    color: #fff;
    margin-top: 30px;
  }
}
.expertise_item:hover {
  background-color: var(--accent-color);
  transition: background-color .3s ease;
}
</style>