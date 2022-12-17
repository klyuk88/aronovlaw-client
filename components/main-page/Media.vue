<template>
  <section class="media section-top">
    <div class="container">
      <h2 class="section-title">Медиа</h2>
      <div class="media-content">
        <MediaItem/>
        <MediaItem/>
        <MediaItem/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.media-content {
  display: grid;
  width: 100%;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
}

</style>