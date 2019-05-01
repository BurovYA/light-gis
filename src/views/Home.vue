<template>
  <v-card flat height="100%" width="100%" tile>
    <v-navigation-drawer absolute floating stateless v-model="leftPanelVisible">
      <v-tabs>
        <v-tab :key="1">
          <v-icon>layers</v-icon>
        </v-tab>
        <v-tab-item :key="1"></v-tab-item>
        <v-tab :key="2">
          <v-icon>list</v-icon>
        </v-tab>
        <v-tab-item :key="2"></v-tab-item>
      </v-tabs>
    </v-navigation-drawer>
    <lg-map-mapbox ref="map" />
  </v-card>
</template>

<script>
import MapMapbox from '@/components/MapMapbox.vue';
//import MapToolbar from '@/components/MapToolbar.vue';

export default {
  name: 'home',
  components: {
    LgMapMapbox: MapMapbox
    //LgMapToolbar: MapToolbar
  },
  data() {
    return {};
  },
  computed: {
    leftPanelVisible: {
      get() {
        return this.$store.getters['leftPanel/VISIBLE'];
      },
      set() {}
    }
  }
};
</script>

<style lang="scss" scoped>
.expand-transition {
  transition: all 0.3s ease;
}
</style>
