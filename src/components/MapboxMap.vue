<template>
  <div class="mapbox-map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnVyb3Z5YSIsImEiOiJjanVucnE3bHMweHRlM3pvNXAycXllaHl5In0.ytKUDnITJq8JScaXHW3qzQ';

export default {
  mounted() {
    this._map = new mapboxgl.Map({
      container: this.$el,
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }
};
</script>

<style lang="scss" scoped>
.mapbox-map {
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss">
/*Фикс для корректного отображения карты mapbox-gl*/
.mapboxgl-canvas {
  top: 0;
  left: 0;
}
</style>

