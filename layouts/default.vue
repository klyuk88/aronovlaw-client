<script setup>
</script>
<template>
  <div ref="page" @scroll="test(event)">
    <TheHeader />
    <slot ref=""/>
    <TheFooter />
    <TheWidget />
  </div>
</template>