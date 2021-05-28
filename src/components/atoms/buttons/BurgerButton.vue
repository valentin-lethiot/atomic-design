<template>
  <button type="button"
          @click="click"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
    <font-awesome-icon icon="bars" />
  </button>
</template>

<script>
export default {
  name: "BurgerButton",
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>
