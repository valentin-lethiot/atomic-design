<template>
  <button
    class="circular-button py-2 px-3 m-2 rounded-full" @click="clicked"
  >
    <font-awesome-icon :icon="icon" />
  </button>
</template>

<script>

export default {
  name: 'CircularIconButton',
  props: {
    icon: {
      type: String,
      default: 'satellite'
    }
  },
  methods: {
    clicked () {
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>
