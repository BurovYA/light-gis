<template>
  <v-card height="100%" width="100%">
    <v-layout column fill-height>
      <v-flex shrink>
        <lg-map-toolbar />
      </v-flex>
      <v-flex>
        <v-layout fill-height align-space-around>
          <v-flex v-show="leftPanelVisible" shrink>
            <v-card height="100%" flat>
              <v-card-actions>
                <v-btn>test</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex>
            <lg-map-mapbox ref="map" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
// @ is an alias to /src
import MapMapbox from '@/components/MapMapbox.vue';
import MapToolbar from '@/components/MapToolbar.vue';

export default {
  name: 'home',
  components: {
    LgMapMapbox: MapMapbox,
    LgMapToolbar: MapToolbar
  },
  computed: {
    leftPanelVisible: {
      get() {
        return this.$store.getters['leftPanel/VISIBLE'];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.expand-transition {
  transition: all 0.3s ease;
}
</style>
