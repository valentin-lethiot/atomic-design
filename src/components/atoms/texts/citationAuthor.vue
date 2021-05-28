<template>
  <p
  class="citation citation-author-color"
  > {{ author }}</p>
</template>

<script>
export default {
  name: "citationAuthor",
  props: {
    author: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
