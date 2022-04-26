<template>
  <div>
    <h2>디테일 페이지</h2>
    <h5>{{ datas[$route.params.id].title }}</h5>
    <p>{{ datas[$route.params.id].content }}</p>
  </div>

  <router-view></router-view>
</template>

<script>
export default {
  name: "app",
  props: {
    datas: Array,
  },
};
</script>

<style></style>
