<template>
  <v-navigation-drawer disable-resize-watcher temporary app right v-model="navigationDrawerVisible"></v-navigation-drawer>
</template>

<script>
export default {
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
