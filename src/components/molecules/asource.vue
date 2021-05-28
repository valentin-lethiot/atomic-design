<template>
  <div class="flex flex-col">
    <paragraph :text="source.title"/>
    <lien class="px-4 m-0" :href="source.link"/>
  </div>
</template>

<script>
import Atitle from "../atoms/texts/Atitle";
import Lien from "../atoms/texts/lien";
import Paragraph from "../atoms/texts/paragraph";
export default {
  name: "ASource",
  components: {Paragraph, Lien, Atitle},
  props: {
    source: {
      type: Object,
      require: true
    }
  }
}
</script>
