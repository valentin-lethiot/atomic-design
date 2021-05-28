<template>
  <div class="w-2/3 m-auto p-6">
    <navbar/>
    <citation text="Lorem Ipsum"/>
    <texte-avec-image-et-lien/>
    <citation text="Dolor"/>
    <texte-avec-image-et-lien is-right-img/>
    <citation text="Sit"/>
    <texte-avec-image-et-lien />
    <citation text="Amet"/>
    <texte-avec-image-et-lien is-right-img/>
    <navigation-btns/>
  </div>
</template>

<script>
import Navbar from "../molecules/navbar";
import Citation from "../atoms/texts/citationTitle";
import TexteAvecImageEtLien from "../organisms/texteAvecImageEtLien";
import NavigationBtns from "../molecules/navigationBtns";
export default {
  name: "MyTemplate",
  components: {NavigationBtns, TexteAvecImageEtLien, Citation, Navbar}
}
</script>

<style scoped>

</style>
