<template>
  <a :href="href" class="text-blue-300"> {{ href }} </a>
</template>

<script>
export default {
  name: "lien",
  props : {
    href : {
      type : String,
      default : ""
    }
  }

}
</script>

<style scoped>

</style>
