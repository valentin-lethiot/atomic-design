<template>
  <div class="w-full mt-16">
    <div class="w-2/3 m-auto">
      <big-title title="Introduction"/>
      <citation :auteur="author" :phrase="citation" />
      <paragraph :text="paragraph1"/>
      <ad-image width="500" height="500" image="introduction/screens_size.jpg"/>
      <paragraph :text="paragraph2" />
      <navigation-btns @go-previous="goPrevious" @go-next="goNext"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../molecules/navbar";
import NavigationBtns from "../molecules/navigationBtns";
import Citation from "../molecules/citation";
import {citation, author, paragraph1, paragraph2} from "../../../static/intro";
import Paragraph from "../atoms/texts/paragraph";
import AdImage from "../atoms/images/adImage";
import BigTitle from "../atoms/texts/BigTitle";
export default {
  name: "introduction.js",
  components: {BigTitle, AdImage, Paragraph, Citation, NavigationBtns, Navbar},
  data() {
    return {
      citation: citation,
      author: author,
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
