<template>
  <div class="w-full mt-16">
    <div class="w-2/3 m-auto">
      <big-title title="Les sources" />
      <paragraph :text="composantsText" />
      <a-source class="my-6 w-4/5 m-auto" v-for="(data, index) in sources" :key="index" :source="data"/>
      <paragraph :text="remerciementText" />
      <navigation-btns @go-previous="goPrevious" no-right/>
    </div>
  </div>
</template>

<script>
import Paragraph from "../atoms/texts/paragraph";
import {composantsText, remerciementText} from "../../../static/composants";
import BigTitle from "../atoms/texts/BigTitle";
import navigationBtns from "../molecules/navigationBtns";
import ASource from "../molecules/asource";
export default {
  name: "Sources",
  components: {ASource, BigTitle, Paragraph, navigationBtns},
  data() {
    return {
      composantsText: composantsText,
      remerciementText: remerciementText,
      sources : [
        {
          title: "- “Atomic Design” by Brad Frost - An Event Apart Austin 2015 ",
          link: "https://www.youtube.com/watch?v=W-h1FtNYim4"
        },
        {
          title: "- Atomic design - Brad Frost",
          link: "https://bradfrost.com/blog/post/atomic-web-design"
        },
        {
          title: "- Comment concevoir un système de composants en atomic design ?",
          link: "https://medium.com/@audreyhacq/comment-concevoir-un-système-de-composants-en-atomic-design-770b910f4f32"
        },
        {
          title: "- Atomic design, une nouvelle métaphore ?",
          link: "https://www.usabilis.com/atomic-design"
        },
        {
          title: "- L’atomic design, une méthode de co-création prometteuse ",
          link: "https://medium.com/@audreyhacq/l-atomic-design-une-méthode-de-co-creation-prometteuse-bd9d5fc2b2ad"
        },
        {
          title: "- L’Atomic Design, une méthode de conception adaptée aux enjeux actuels du numérique ",
          link: "https://www.smartagence.com/2019/03/14/atomic-design-methode-conception-adaptee-enjeux-actuels-numerique"
        },
        {
          title: "- The Atomic Workflow",
          link: "https://atomicdesign.bradfrost.com/chapter-4"
        }
      ]
    }
  },
  methods: {
    goPrevious() {
      this.$emit('go-previous')
    }
  }
}
</script>

<style scoped>

</style>
