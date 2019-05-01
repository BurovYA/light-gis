<template>
  <v-app>
    <v-toolbar app dense>
      <v-btn-toggle multiple class="transparent">
        <v-btn v-model="leftPanelVisible" icon>
          <v-icon>menu</v-icon>
        </v-btn>
      </v-btn-toggle>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>library_add</v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-tile v-for="(item, index) in addMenuItems" :key="index">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-btn @click="navigationDrawerVisible = !navigationDrawerVisible" icon>
        <v-icon>apps</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer temporary app right v-model="navigationDrawerVisible"></v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height pa-0>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      navigationDrawerVisible: false,
      leftPanelVisible: false,
      addMenuItems: [
        {
          title: 'Add layer from web'
        }
      ]
    };
  },
  watch: {
    leftPanelVisible(newValue) {
      this.$store.dispatch('leftPanel/SET_VISIBLE', newValue);
    }
  }
};
</script>
