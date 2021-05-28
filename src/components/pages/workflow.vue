<template>
  <div class="w-full mt-16">
    <div class="w-2/3 m-auto">
      <big-title title="Le Workflow"/>
      <paragraph :text="workflow1"/>
      <paragraph :text="workflow2"/>
      <paragraph :text="workflow3"/>
      <div>
        <atitle :text="atomeTitle"/>
        <paragraph :text="atomeText"/>
      </div>
      <div>
        <atitle :text="generiqueTitle"/>
        <paragraph :text="generiqueText"/>
      </div>
      <div>
        <atitle :text="responsiveTitle"/>
        <paragraph :text="responsiveText"/>
      </div>
      <navigation-btns @go-previous="goPrevious" @go-next="goNext"/>
    </div>
  </div>
</template>

<script>
import Paragraph from "../atoms/texts/paragraph";
import Atitle from "../atoms/texts/Atitle";
import {
  atomeText,
  atomeTitle,
  generiqueText,
  generiqueTitle, responsiveText, responsiveTitle,
  workflow1,
  workflow2,
  workflow3
} from "../../../static/workflow";
import navigationBtns from "../molecules/navigationBtns";
import BigTitle from "../atoms/texts/BigTitle";
export default {
  name: "workflow",
  components: {BigTitle, Atitle, Paragraph, navigationBtns},
  data() {
    return {
      workflow1: workflow1,
      workflow2: workflow2,
      workflow3: workflow3,
      atomeTitle: atomeTitle,
      atomeText: atomeText,
      generiqueTitle: generiqueTitle,
      generiqueText: generiqueText,
      responsiveTitle: responsiveTitle,
      responsiveText: responsiveText
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
