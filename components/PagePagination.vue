<template>
  <div class="page-pagination">
    <ul>
      <li v-for="(item, index) in 7" :key="index">
        <NuxtLink to="#" :class="{active: index === 0}">{{ item }}</NuxtLink>
      </li>

      <li><NuxtLink to="#">Далее</NuxtLink></li>
    </ul>
  </div>
</template>

<style lang="scss">
.page-pagination {
  ul {
    list-style: none;
    padding: 0;
    display: inline-flex;
    gap: 30px;
    li a {
      font-weight: 300;
      transition: all .1s ease;
      color: rgb(207, 207, 207);
    }
    li a:hover {
      transition: color .1s ease;
      color: var(--accent-color);
    }
    li a.active {
      opacity: 1;
      color: var(--accent-color);
    }
  }
}
</style>