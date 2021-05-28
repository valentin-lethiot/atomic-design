<template>
  <img :src="require(`@/assets/${image}`)" :alt="alt" class="text-white flex m-auto max-w-none" :width="width" :height="height">
</template>

<script>
export default {
  name: "adImage",
  props: {
    image: {
      type: String,
      default: 'no_image.png'
    },
    alt: {
      type: String,
      default: 'Default image'
    },
    width: {
      type: String,
      default: '150px'
    },
    height: {
      type: String,
      default: '150px'
    }
  }
}
</script>
