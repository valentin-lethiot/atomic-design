<template>
  <h1
    class="w-full citation citation-color capitalize font-serif text-2xl italic font-semibold"
  > "{{ text }}"
  </h1>
</template>

<script>
export default {
  name: "CitationTitle",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
