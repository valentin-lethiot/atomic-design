<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <burger-button @click="isMobileNavBarOpen = !isMobileNavBarOpen" />
        </div>
        <div class="flex-1 flex items-center justify-center lg:items-stretch lg:justify-center">
          <div class="hidden lg:block sm:ml-6">
            <div class="flex space-x-4">
              <nav-bar-button
                v-for="(button, index) in buttons"
                :key="index"
                :text="button.title"
                :is-selected="getIsSelected(index)"
                @click.native="goTo({name: button.name, index: index+1})"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Short screen menu -->
    <div class="lg:hidden" v-if="isMobileNavBarOpen">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <nav-bar-button
          v-for="(button, index) in buttons"
          :key="index"
          :text="button.title"
          :is-selected="getIsSelected(index)"
          @click.native="goTo({name: button.name, index: index+1})"/>
      </div>
    </div>
  </nav>

  <!--<div class="lg:flex lg:justify-center w-full mx-auto block rounded-lg navbar mb-6">
    <nav-bar-button
      v-for="(button, index) in buttons"
      :key="index"
      :text="button.title"
      :is-selected="getIsSelected(index)"
      @click.native="goTo({name: button.name, index: index+1})"/>
    <atitle text="Valentin Lethiot"/>
  </div>-->
</template>

<script>
import NavBarButton from "../atoms/buttons/navBarButton";
import Atitle from "../atoms/texts/Atitle";
import BurgerButton from "../atoms/buttons/BurgerButton";
export default {
  name: "navbar",
  components: {BurgerButton, Atitle, NavBarButton },
  props: {
    currentSection: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      buttons: [
        {
          title: "Introduction",
          name: "introduction"
        },
        {
          title: "Késako ?",
          name: "atomicDesign"
        },
        {
          title: "Concepts",
          name: "concepts"
        },
        {
          title: "Avantages",
          name: "avantages"
        },
        {
          title: "Inconvénients",
          name: "inconvenients"
        },
        {
          title: "Workflow",
          name: "workflow"
        },
        /*{
          title: "Mon expérience",
          name: "experience"
        },*/
        {
          title: "Conclusion",
          name: "conclusion"
        },
        /*{
          title: "Composants",
          name:  "composants"
        },*/
        {
          title: "Sources",
          name: "sources"
        },
      ],
      isMobileNavBarOpen: false
    }
  },
  methods: {
    getIsSelected(sectionIndex) {
      return this.currentSection - 1 === sectionIndex
    },
    goTo(section) {
      this.isMobileNavBarOpen = false
     this.$emit('go-to', section)
    }
  }
}
</script>

<style scoped>

</style>
