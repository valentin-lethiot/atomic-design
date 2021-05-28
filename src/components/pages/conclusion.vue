<template>
  <div class="w-full mt-16">
    <div class="w-2/3 m-auto">
      <big-title title="Conclusion" />
      <paragraph :text="conclusion" />
      <navigation-btns @go-previous="goPrevious" @go-next="goNext"/>
    </div>
  </div>
</template>

<script>
import Paragraph from "../atoms/texts/paragraph";
import {conclusion} from "../../../static/conclusion";
import navigationBtns from "../molecules/navigationBtns";
import BigTitle from "../atoms/texts/BigTitle";
export default {
  name: "conclusion",
  components: {BigTitle, Paragraph, navigationBtns},
  data() {
    return {
      conclusion: conclusion
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
