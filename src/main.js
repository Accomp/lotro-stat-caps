// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import {
  Vuetify,
  VApp,
  VBtn,
  VCheckbox,
  VDataTable,
  VFooter,
  VForm,
  VGrid,
  VIcon,
  VList,
  VNavigationDrawer,
  VSelect,
  VToolbar,
  VTooltip,
  transitions
} from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl'

import App from './App';
import router from './router';

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCheckbox,
    VDataTable,
    VFooter,
    VForm,
    VGrid,
    VIcon,
    VList,
    VNavigationDrawer,
    VSelect,
    VToolbar,
    VTooltip,
    transitions
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
