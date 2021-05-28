<template>
  <div class="flex w-full justify-center">
    <circular-icon-button icon="chevron-left" v-if="!noLeft" @click="goPrevious"/>
    <circular-icon-button icon="chevron-right" v-if="!noRight" @click="goNext"/>
  </div>
</template>

<script>
import CircularIconButton from "../atoms/buttons/circularIconButton";
export default {
  name: "navigationBtns",
  components: {CircularIconButton},
  props: {
    noLeft: {
      type: Boolean,
      default: false
    },
    noRight: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goPrevious() {
      this.$emit('go-previous')
    },
    goNext() {
      this.$emit('go-next')
    }
  }
}
</script>

<style scoped>

</style>
