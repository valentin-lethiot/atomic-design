<template>
  <div class="w-full">
    <citation-title :text="phrase"/>
    <citation-author
      class="flex justify-start"
      :author="auteur"
    />
  </div>
</template>

<script>
import CitationAuthor from "../atoms/texts/citationAuthor";
import CitationTitle from "../atoms/texts/citationTitle";

export default {
  name: "citation",
  components: {
    CitationAuthor,
    CitationTitle,
  },
  props: {
    phrase: {
      type: String,
      default: "Lorem Ipsum dolor sit amet"
    },
    auteur: {
      type: String,
      default: "Lorem Ipsum"
    }
  }
}
</script>

<style scoped>

</style>
