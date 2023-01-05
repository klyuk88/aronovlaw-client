<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const {data: singleOffice} = await useFetch(
  `/api/offices?filters[slug][$eq]=${route.params.slug}&populate=*`,
  {
    baseURL: runtimeConfig.public.api
  }
)
const content = useReplaceUploads(singleOffice.value.data[0].attributes.content)

</script>
<template>
  <section class="single_office section-top">
    <div class="container">
      <h1 class="page-title single_office-title">{{singleOffice.data[0].attributes.title}}</h1>
    </div>
    <img
      :src="$config.public.api + singleOffice.data[0].attributes.Cover.data.attributes.url"
      alt="office-cover"
      class="single_offce-cover"
    />

    <div class="container single_office-content" v-html="content" />
  </section>
</template>
<style lang="scss">
.single_office {
  margin-bottom: 150px;
  @media screen and (max-width: 1100px) {
    padding-top: 60px;
  }
}
.single_office-content {
  margin-top: 60px;
}
.single_offce-cover {
  width: 100%;
  height: auto;
  @media screen and (max-width: 1100px) {
    margin-top: 60px;
  }
}
.single_office-content {
  * {
    color: #fff!important;
  }
  color: #fff;
  h2 {
    font-size: 24px;
    font-weight: 700;
    position: relative;
    @media screen and (max-width: 1100px) {
      font-size: 18px;
      font-weight: 700;
    }
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
  p, li {
    @media screen and (max-width: 1100px) {
      font-size: 14px;
    }
  }
}
</style>