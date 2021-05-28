<template>
  <div class="w-full mt-16">
    <div class="w-2/3 m-auto">
      <big-title title="Les avantages" />
      <paragraph :text="intro"/>
      <div class="w-full">
        <atitle :text="comprehensionTitle"/>
        <texte-avec-image-et-lien image="avantages/teamwork.png" :text="comprehensionText" />
      </div>
      <div>
        <atitle :text="coherenceTitle"/>
        <texte-avec-image-et-lien :text="coherenceText" is-right-img/>
      </div>
      <div>
        <atitle :text="retourClientTitle"/>
        <texte-avec-image-et-lien image="avantages/client.jpg" :text="retourClientText"/>
      </div>
      <div>
        <atitle :text="vitesseTitle"/>
        <texte-avec-image-et-lien image="avantages/acceleration.jpg" :text="vitesseText" is-right-img/>
      </div>
      <navigation-btns @go-previous="goPrevious" @go-next="goNext"/>
    </div>
  </div>
</template>

<script>
import Paragraph from "../atoms/texts/paragraph";
import Atitle from "../atoms/texts/Atitle";
import TexteAvecImageEtLien from "../organisms/texteAvecImageEtLien";
import {
  coherenceText,
  coherenceTitle,
  comprehensionText,
  comprehensionTitle,
  intro, retourClientText, retourClientTitle, vitesseText,
  vitesseTitle
} from "../../../static/avantages";
import navigationBtns from "../molecules/navigationBtns";
import BigTitle from "../atoms/texts/BigTitle";
export default {
  name: "avantages",
  components: {BigTitle, TexteAvecImageEtLien, Atitle, Paragraph, navigationBtns},
  data() {
    return {
      intro: intro,
      comprehensionTitle: comprehensionTitle,
      comprehensionText: comprehensionText,
      coherenceTitle: coherenceTitle,
      coherenceText: coherenceText,
      retourClientTitle: retourClientTitle,
      retourClientText: retourClientText,
      vitesseTitle: vitesseTitle,
      vitesseText: vitesseText
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
