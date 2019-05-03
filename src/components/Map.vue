<template>
  <v-card flat height="100%" width="100%" tile>
    <lg-add-layer-form />
    <lg-map-details-panel />
    <lg-map-mapbox />
  </v-card>
</template>

<script>
import AddLayerForm from '@/components/AddLayerForm.vue';
import MapDetailsPanel from '@/components/MapDetailsPanel.vue';
import MapMapbox from '@/components/MapMapbox.vue';

export default {
  name: 'home',
  components: {
    LgAddLayerForm: AddLayerForm,
    LgMapDetailsPanel: MapDetailsPanel,
    LgMapMapbox: MapMapbox
  },
  data() {
    return {};
  },
  computed: {
    navigationDrawerVisible: {
      get() {
        return this.$store.getters['navigationDrawer/VISIBLE'];
      },
      set(value) {
        this.$store.dispatch('navigationDrawer/SET_VISIBLE', value);
      }
    }
  }
};
</script>
