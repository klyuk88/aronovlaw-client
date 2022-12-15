<template>
  <div class="page-template">
    <TheHeader />
    <slot/>
    <TheFooter />
    <TheWidget />
  </div>
</template>

<style lang="scss">
.page-template {
  height: 100vh;
  overflow-y: scroll;
  background: radial-gradient(261.98% 122.1% at 50% 122.1%, #EBF6FF 0%, #7B7D7F 44.27%, #383B3E 100%);
}
  
</style>