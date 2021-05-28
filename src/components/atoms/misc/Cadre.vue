<template>
  <div
    class="mx-5 bg-gray-600 border-gray-600 p-4 border-solid rounded-lg border-2 flex flex-col justify-around"
  >
    <div class="flex flex-col justify-center">
      <p class=""> {{ component.title }} </p>
    </div>
    <component :is="component.component" />
  </div>
</template>

<script>
import Paragraph from "../texts/paragraph";
export default {
  name: "Cadre",
  components: {Paragraph},
  props: {
    component: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>

</style>
