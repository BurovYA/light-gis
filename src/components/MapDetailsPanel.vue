<template>
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
</template>

<script>
export default {
  computed: {
    leftPanelVisible: {
      get() {
        return this.$store.getters['leftPanel/VISIBLE'];
      },
      set(value) {
        this.$store.dispatch('leftPanel/SET_VISIBLE', value);
      }
    }
  }
};
</script>
