<template>
  <h1 class="text-6xl font-bold text-white">{{title}}</h1>
</template>

<script>
export default {
  name: "BigTitle",
  props: {
    title: {
      type: String,
      default: "Lorem Ipsum"
    }
  }
}
</script>

<style scoped>

</style>
