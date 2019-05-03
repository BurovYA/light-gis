<template>
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
        <v-list-tile v-for="(item, index) in addMenuItems" :key="index" @click.stop="addMenuItemClick(item)">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-btn @click="appsBtnClick" icon>
      <v-icon>apps</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      addMenuItems: [
        {
          code: 'AddLayerFromWeb',
          title: 'Add layer from web'
        }
      ]
    };
  },
  computed: {
    leftPanelVisible: {
      get() {
        return this.$store.getters['leftPanel/VISIBLE'];
      },
      set(value) {
        this.$store.dispatch('leftPanel/SET_VISIBLE', value);
      }
    }
  },
  methods: {
    appsBtnClick() {
      this.$store.dispatch('navigationDrawer/SET_VISIBLE', true);
    },
    addMenuItemClick(menuItem) {
      switch (menuItem.code) {
        case 'AddLayerFromWeb':
          this.$store.dispatch('addLayerForm/SET_VISIBLE', true);
          break;
      }
    }
  }
};
</script>
