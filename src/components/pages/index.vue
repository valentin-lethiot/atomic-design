<template>
  <div class="w-full mt-16">
    <div class="w-2/3 m-auto">
      <a-title :text="title"/>
      <paragraph :text="paragraph"/>
      <paragraph :text="link"/>
      <lien class="ml-4" :href="depotLink"/>
      <navigation-btns noLeft @go-next="goNext"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../molecules/navbar";
import ATitle from "../atoms/texts/Atitle";
import Paragraph from "../atoms/texts/paragraph";
import { title, paragraphPresentation, link, depotLink } from "../../../static/index"
import NavigationBtns from "../molecules/navigationBtns";
import Lien from "../atoms/texts/lien";
export default {
  name: "index",
  components: {Lien, NavigationBtns, Paragraph, ATitle, Navbar},
  data() {
    return {
      title: title,
      paragraph: paragraphPresentation,
      link: link,
      depotLink: depotLink
    }
  },
  methods: {
    goNext() {
      this.$emit('go-next')
    }
  }
}
</script>

<style scoped>

</style>
