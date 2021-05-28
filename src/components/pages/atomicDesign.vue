<template>
  <div class="w-full mt-16">
    <div class="w-2/3 m-auto">
      <big-title title="L'atomic design ?"/>
      <citation :phrase="citationText" :auteur="citationAuteur" />
      <paragraph :text="paragraph1"/>
      <ad-image height="900" width="900" image="atomic_design/periodic.png"/>
      <paragraph :text="paragraph2"/>
      <navigation-btns @go-previous="goPrevious" @go-next="goNext"/>
    </div>
  </div>
</template>

<script>
import Citation from "../molecules/citation";
import Paragraph from "../atoms/texts/paragraph";
import AdImage from "../atoms/images/adImage";
import {auteur, citation, paragraph1, paragraph2} from "../../../static/atomicDesign";
import navigationBtns from "../molecules/navigationBtns";
import BigTitle from "../atoms/texts/BigTitle";
export default {
  name: "atomicDesign",
  components: {BigTitle, AdImage, Paragraph, Citation, navigationBtns},
  data () {
    return {
      citationText: citation,
      citationAuteur: auteur,
      paragraph1: paragraph1,
      paragraph2: paragraph2,
    }
  },
  methods: {
    goNext() {
      this.$emit('go-next')
    },
    goPrevious() {
      this.$emit('go-previous')
    }
  }
}
</script>

<style scoped>

</style>
