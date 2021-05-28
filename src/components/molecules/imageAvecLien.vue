<template>
  <div class="w-full">
    <ad-image :image="image"/>
    <lien/>
  </div>
</template>

<script>
import AdImage from "../atoms/images/adImage";
import Lien from "../atoms/texts/lien";
export default {
  name: "imageAvecLien",
  components: {Lien, AdImage},
  props: {
    image: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>

</style>
