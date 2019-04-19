<template>
  <div class="map">
    <div class="top-panel">
      <MapMainPanel/>
    </div>
    <div class="map-and-panels">
      <div class="left-panel" v-show="leftPanelVisible"></div>
      <div class="map-wrapper">
        <MapboxMap/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MapboxMap from '@/components/MapboxMap.vue';
import MapMainPanel from '@/components/MapMainPanel.vue';

export default {
  name: 'mapv',
  components: {
    MapboxMap,
    MapMainPanel
  },
  computed: {
    leftPanelVisible() {
      return this.$store.getters['leftPanel/VISIBLE'];
    }
  }
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.top-panel {
  flex-grow: 0;
  flex-shrink: 0;
}

.map-and-panels {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;

  display: flex;
  flex-direction: row;
}

.left-panel {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 300px;
}

.map-wrapper {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}
</style>

