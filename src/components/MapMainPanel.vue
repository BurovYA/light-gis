<template>
  <div class="map-main-panel">
    <ButtonC
      class="button"
      v-on:click="detailsClick"
      v-bind:text="'Details'"
      v-bind:toggleMode="true"
    />
  </div>
</template>

<script>
import ButtonC from './ButtonC.vue';
export default {
  components: {
    ButtonC
  },
  methods: {
    detailsClick() {
      this.$store.ac;
    }
  }
};
</script>

<style lang="scss" scoped>
.map-main-panel {
  display: flex;
  flex-direction: row;
  padding: 4px;
}

.button {
  flex-basis: 50px;
}
</style>


