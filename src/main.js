// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './tailwind.css';
import './components/atoms/colors/colors.css';
import './components/atoms/fonts/fonts.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCat, faSatellite, faChevronLeft, faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons'
import 'animate.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCat, faSatellite, faChevronLeft, faChevronRight, faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
