<template>
  <div class="w-full mt-16">
    <div class="w-2/3 m-auto">
      <big-title title="Les inconvenients" />
      <paragraph :text="intro"/>
      <div>
        <atitle :text="disciplineTitle"/>
        <texte-avec-image-et-lien :text="disciplineText"/>
      </div>
      <div>
        <atitle :text="categorisationTitle"/>
        <texte-avec-image-et-lien :text="categorisationText" is-right-img/>
      </div>
      <div>
        <atitle :text="miseEnPlaceTitle"/>
        <texte-avec-image-et-lien :text="miseEnPlaceText"/>
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
  categorisationText,
  categorisationTitle,
  disciplineText,
  disciplineTitle,
  intro, miseEnPlaceText, miseEnPlaceTitle
} from "../../../static/inconvenients";
import navigationBtns from "../molecules/navigationBtns";
import BigTitle from "../atoms/texts/BigTitle";
export default {
  name: "inconvenients",
  components: {BigTitle, TexteAvecImageEtLien, Atitle, Paragraph, navigationBtns},
  data() {
    return {
      intro: intro,
      disciplineTitle: disciplineTitle,
      disciplineText: disciplineText,
      categorisationTitle: categorisationTitle,
      categorisationText: categorisationText,
      miseEnPlaceTitle: miseEnPlaceTitle,
      miseEnPlaceText: miseEnPlaceText,
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
