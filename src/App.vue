<template>
  <div class="w-full overflow-x-hidden">
    <div class="fixed w-full m-auto z-50">
      <navbar :currentSection="currentIndex" @go-to="goTo"/>
    </div>
    <div class="w-full py-4 z-10">
      <transition :enter-active-class="getSlidePosition">
       <index v-if="currentIndex === 0" @go-next="goNext"/>
      </transition>
      <transition :enter-active-class="getSlidePosition">
        <introduction v-if="currentIndex === 1" @go-next="goNext" @go-previous="goPrevious"/>
      </transition>
      <transition :enter-active-class="getSlidePosition">
        <atomic-design v-if="currentIndex === 2" @go-next="goNext" @go-previous="goPrevious"/>
      </transition>
      <transition :enter-active-class="getSlidePosition">
        <concepts v-if="currentIndex === 3" @go-next="goNext" @go-previous="goPrevious"/>
      </transition>
      <transition :enter-active-class="getSlidePosition">
        <avantages v-if="currentIndex === 4" @go-next="goNext" @go-previous="goPrevious"/>
      </transition>
      <transition :enter-active-class="getSlidePosition">
        <inconvenients v-if="currentIndex === 5" @go-next="goNext" @go-previous="goPrevious"/>
      </transition>
      <transition :enter-active-class="getSlidePosition">
        <workflow v-if="currentIndex === 6" @go-next="goNext" @go-previous="goPrevious"/>
      </transition>
      <transition :enter-active-class="getSlidePosition">
        <conclusion v-if="currentIndex === 7" @go-next="goNext" @go-previous="goPrevious"/>
      </transition>
      <transition :enter-active-class="getSlidePosition">
        <sources v-if="currentIndex === 8" @go-previous="goPrevious"/>
      </transition>
    </div>
  </div>

</template>

<script>

import Navbar from "./components/molecules/navbar";
import Index from "./components/pages";
import Introduction from "./components/pages/introduction"
import AtomicDesign from "./components/pages/atomicDesign";
import Concepts from "./components/pages/concepts";
import Avantages from "./components/pages/avantages";
import Inconvenients from "./components/pages/inconvenients";
import Workflow from "./components/pages/workflow";
import Conclusion from "./components/pages/conclusion";
import Sources from "./components/pages/sources";

export default {
  name: 'App',
  components: {
    Sources,
    Conclusion,
    Workflow,
    Inconvenients,
    Avantages,
    Concepts,
    AtomicDesign,
    Introduction,
    Index,
    Navbar
  },
  data () {
    return {
      currentIndex: 0,
      oldIndex: 0
    }
  },
  methods: {
    goTo(section) {
      this.currentSection = section.name
      this.oldIndex = this.currentIndex
      this.currentIndex = section.index
      this.scrollToTop()
    },
    goNext() {
      this.oldIndex = this.currentIndex
      this.currentIndex = this.currentIndex + 1
      this.scrollToTop()
    },
    goPrevious() {
      this.oldIndex = this.currentIndex
      this.currentIndex = this.currentIndex - 1
      this.scrollToTop()
    },
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
  computed: {
    getSlidePosition() {
      return this.oldIndex > this.currentIndex ? "animate__animated animate__slideInLeft" : "animate__animated animate__slideInRight"
    }
  }

}
</script>
