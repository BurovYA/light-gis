<template>
  <v-app>
    <v-navigation-drawer temporary app v-model="showNavigationDrawer"></v-navigation-drawer>
    <v-toolbar app dense>
      <v-btn @click="showNavigationDrawer = !showNavigationDrawer" icon>
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid :fill-height="true" pa-0>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      showNavigationDrawer: false
    };
  }
};
</script>
