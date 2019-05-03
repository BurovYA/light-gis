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

    this._map.on('load', () => {
      this._map.addLayer({
        id: 'wms-test-layer',
        type: 'raster',
        source: {
          type: 'raster',
          tiles: [
            /*`https://geodata.state.nj.us/imagerywms/Natural2015
              ?bbox={bbox-epsg-3857}
              &format=image/png&service=WMS
              &version=1.1.1
              &request=GetMap
              &srs=EPSG:3857
              &transparent=true
              &width=256
              &height=256
              &layers=Natural2015`*/
            `https://cpkk5.rosreestr.ru/arcgis/rest/services/Cadastre/CadastreWMS/MapServer/export?bbox={bbox-epsg-3857}&size=1024%2C1024&dpi=96&format=png32&transparent=true&bboxSR=3857&imageSR=3857&layers=show%3A0%2C1%2C2%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19%2C20%2C23%2C24%2C29%2C30%2C31%2C32%2C33%2C34%2C35%2C38%2C39&f=image`
          ],
          tileSize: 1024
        },
        paint: {}
      });
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
