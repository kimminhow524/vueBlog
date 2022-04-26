<template>
  <div v-for="(item,i) in datas" :key="item">
      <h4 @click="$router.push(`/detail/${i}`)">{{datas[i].title}}</h4>
      <p>{{datas[i].content}}</p>
      <p>{{datas[i].date}}</p>
  </div>
</template>

<script>
export default {
    name:'app',
    props:{
        datas:Array,
    }
}

</script>

<style>

</style>