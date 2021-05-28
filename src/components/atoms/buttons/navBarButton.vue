<template>
  <button
     :class="[`${getBgColor} w-full text-lg text-left lg:w-auto text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md lg:text-sm lg:text-center font-medium`]"
  >
      {{ text }}
    </button>
</template>

<script>
export default {
  name: "navBarButton",
  props: {
    icon: {
      type: String,
      default: "cat"
    },
    text: {
      type: String,
      default: "click"
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getBgColor() {
      return this.isSelected ? "bg-gray-600" : ""
    }
  }
}
</script>

<style scoped>

</style>
