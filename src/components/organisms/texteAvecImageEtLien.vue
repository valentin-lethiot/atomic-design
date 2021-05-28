<template>
  <div class="flex flex-col items-center lg:flex-row">
    <image-avec-lien :image="image" v-if="!isRightImg" class="mr-2"/>
    <paragraph :text="text"/>
    <image-avec-lien :image="image" v-if="isRightImg" class="ml-2"/>
  </div>
</template>

<script>
import Paragraph from "../atoms/texts/paragraph";
import AdImage from "../atoms/images/adImage";
import ImageAvecLien from "../molecules/imageAvecLien";
export default {
  name: "texteAvecImageEtLien",
  components: {ImageAvecLien, AdImage, Paragraph},
  props : {
    isRightImg : {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      require: true
    },
    image: String,
    require: true
  }
}
</script>

<style scoped>

</style>
