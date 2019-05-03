<template>
  <v-app>
    <router-view name="toolbar"></router-view>
    <lg-navigation-drawer />
    <v-content>
      <v-container fluid fill-height pa-0>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer.vue';

export default {
  components: {
    LgNavigationDrawer: NavigationDrawer
  }
};
</script>
