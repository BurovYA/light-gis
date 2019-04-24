<template>
  <v-toolbar dense elevation-0 card>
    <v-btn-toggle multiple>
      <v-btn v-model="toggleDetails" small>{{ buttonTexts.details }}</v-btn>
      <v-btn v-model="toggleAddLayer" small>{{ buttonTexts.addLayer }}</v-btn>
    </v-btn-toggle>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      buttonTexts: {
        details: 'Details',
        addLayer: 'Add layer'
      },
      toggleDetails: false,
      toggleAddLayer: false
    };
  },
  watch: {
    toggleDetails(newValue) {
      this.$store.dispatch('leftPanel/SET_VISIBLE', newValue);
    },
    toggleAddLayer(newValue) {
      this.$store.dispatch('addLayerForm/SET_VISIBLE', newValue);
    }
  }
};
</script>
