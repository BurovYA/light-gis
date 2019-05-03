<template>
  <v-dialog width="500" persistent hide-overlay v-model="addLayerFormVisible">
    <v-card>
      <v-card-title class="lighten-2 pa-3 title">Add layer from web</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-select :items="layerServiceTypes" label="Select layer service type" item-value="code" item-text="text"></v-select>
        <v-text-field label="URL"></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions dense>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="addLayerBtnClick">Add layer</v-btn>
        <v-btn flat @click="closeBtnClick">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      layerServiceTypes: [
        {
          code: 'ARC_GIS',
          text: 'Web service ArcGIS Server'
        },
        {
          code: 'WMS_OGC',
          text: 'Web service WMS OGC'
        }
      ]
    };
  },
  computed: {
    addLayerFormVisible: {
      get() {
        return this.$store.getters['addLayerForm/VISIBLE'];
      },
      set(value) {
        this.$store.dispatch('addLayerForm/SET_VISIBLE', value);
      }
    }
  },
  methods: {
    addLayerBtnClick() {},
    closeBtnClick() {
      this.$store.dispatch('addLayerForm/SET_VISIBLE', false);
    }
  }
};
</script>
