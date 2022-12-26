<template>
  <section class="single_office section-top">
    <div class="container">
      <h1 class="page-title single_office-title">Россия</h1>
    </div>
    <img
      src="~/assets/img/office-cover.svg"
      alt=""
      class="single_offce-cover"
    />

    <div class="container single_office-content">
      <h2>
        Сопровождение при внесении взноса за второй год обслуживания, обновлении
        секретаря и оформлении Декларации о ежегодной проверке
      </h2>
      
    </div>
  </section>
</template>
<style lang="scss">
.single_office {
  margin-bottom: 150px;
}
.single_office-content {
  margin-top: 60px;
}
.single_offce-cover {
  width: 100%;
  height: auto;
}
.single_office-content {
  h2 {
    font-size: 24px;
    font-weight: 700;
    position: relative;
  }
  h2:before {
    content: "";
    position: absolute;
    width: 6px;
    left: -15px;
    height: 100%;
    display: block;
    background: var(--accent-color);

  }
}
</style>