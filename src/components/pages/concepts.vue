<template>
  <div class="w-full mt-16">
    <div class="w-2/3 m-auto">
      <big-title title="Les concepts" />
      <citation :phrase="citationText" :auteur="auteur"/>
      <div class="w-full">
        <a-title :text="atomeTitle"/>
        <ad-image height="200" width="200" image="concepts/usabilis_atoms.jpeg"/>
        <paragraph :text="atome1"/>
        <paragraph :text="atome2"/>
        <paragraph :text="atome3"/>
      </div>
      <div>
        <a-title :text="moleculeTitle"/>
        <ad-image height="200" width="200" image="concepts/usabilis_molecule.jpeg"/>
        <paragraph :text="molecule1"/>
        <paragraph :text="molecule2"/>
      </div>
      <div>
        <a-title :text="organismeTitle"/>
        <ad-image height="200" width="200" image="concepts/usabilis_organismes.jpeg"/>
        <paragraph :text="organisme1"/>
        <paragraph :text="organisme2"/>
        <paragraph :text="organisme3"/>
      </div>
      <div>
        <a-title :text="templateTitle"/>
        <ad-image height="200" width="200" image="concepts/usabilis_template.jpeg"/>
        <paragraph :text="template1"/>
        <ad-image height="700" width="700" image="concepts/usabilis_template_exemple.jpeg"/>
        <paragraph :text="template2"/>
        <paragraph :text="template3"/>
      </div>
      <div>
        <a-title :text="pageTitle"/>
        <ad-image height="200" width="200" image="concepts/usabilis_page.jpeg"/>
        <paragraph :text="page1"/>
        <ad-image height="700" width="700" image="concepts/usabilis_page_exemple.jpeg"/>
        <paragraph :text="page2"/>
      </div>
      <div>
        <a-title :text="resumeTitle"/>
        <paragraph :text="resume"/>
        <paragraph :text="resumeAtome"/>
        <ad-image height="700" width="700" image="concepts/lego_exploded_view.png"/>
        <paragraph :text="resume2"/>
        <ad-image height="700" width="700" image="concepts/lego_view.png"/>
        <paragraph :text="resume3"/>
        <ad-image height="700" width="700" image="concepts/lego_story.jpg"/>
        <paragraph :text="resume4"/>
      </div>
      <navigation-btns @go-previous="goPrevious" @go-next="goNext"/>
    </div>
  </div>
</template>

<script>
import Citation from "../molecules/citation";
import ATitle from "../atoms/texts/Atitle";
import Paragraph from "../atoms/texts/paragraph";
import AdImage from "../atoms/images/adImage";
import {
  atome1,
  atome2,
  atome3,
  atomeTitle,
  auteur,
  citation,
  molecule1,
  molecule2,
  moleculeTitle,
  organisme1,
  organisme2,
  organisme3,
  organismeTitle,
  page1,
  page2,
  pageTitle,
  resume,
  resumeAtome,
  resume2,
  resume3,
  resume4,
  resumeTitle,
  template1,
  template2,
  template3,
  templateTitle
} from "../../../static/concepts";
import navigationBtns from "../molecules/navigationBtns";
import BigTitle from "../atoms/texts/BigTitle";
export default {
  name: "concepts",
  components: {BigTitle, AdImage, Paragraph, ATitle, Citation, navigationBtns},
  data () {
    return {
      citationText: citation,
      auteur: auteur,
      atomeTitle: atomeTitle,
      atome1: atome1,
      atome2: atome2,
      atome3: atome3,
      moleculeTitle: moleculeTitle,
      molecule1: molecule1,
      molecule2: molecule2,
      organismeTitle: organismeTitle,
      organisme1: organisme1,
      organisme2: organisme2,
      organisme3: organisme3,
      templateTitle: templateTitle,
      template1: template1,
      template2: template2,
      template3: template3,
      pageTitle: pageTitle,
      page1: page1,
      page2: page2,
      resumeTitle: resumeTitle,
      resume: resume,
      resumeAtome: resumeAtome,
      resume2: resume2,
      resume3: resume3,
      resume4: resume4

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
