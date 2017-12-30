<template>
  <v-app>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
      dark
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
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>configure</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <StatValues />
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 Accomp.me</span>
    </v-footer>
  </v-app>
</template>

<script>
  import StatForm from './components/StatForm.vue'
  import StatValues from './components/StatValues.vue'
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
        title: 'LOTRO Stat Caps',
      };
    },
    components: {
      StatForm,
      StatValues
    }
  };
</script>
