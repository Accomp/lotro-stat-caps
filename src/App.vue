<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
      dark
      fixed
      mobile-break-point="640"
    >
      <v-toolbar dark>
        <v-icon>mouse</v-icon>
        <v-toolbar-title>Accomp.me</v-toolbar-title>
      </v-toolbar>
      <StatForm />
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <CurrentSelection />
            <StatValues />
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="supplementalPanel"
      app
      dark
      fixed
      mobile-break-point="1024"
      right
    >
      <v-toolbar dark>
        <v-icon>share</v-icon>
      </v-toolbar>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 Accomp.me</span>
    </v-footer>
  </v-app>
</template>

<script>
  import StatForm from './components/StatForm.vue'
  import StatValues from './components/StatValues.vue'
  import CurrentSelection from './components/CurrentSelection.vue'
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'mouse',
          title: 'Accomp.me',
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        supplementalPanel: true,
        title: 'LOTRO Stat Caps',
      };
    },
    components: {
      CurrentSelection,
      StatForm,
      StatValues
    }
  };
</script>
