<template>
  <h1 class="text-3xl font-bold p-2 text-white font-mono text-center"> {{ text }} </h1>
</template>

<script>
export default {
  name: "atitle",
  props: {
    text : {
      type: String,
      default: 'Lorem Ispum'
    }
  }
}
</script>

<style scoped>

</style>
