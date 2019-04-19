<template>
  <div class="button" v-on:click="click" :class="{toggled: toggled}">
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    toggleMode: Boolean
  },
  data() {
    return {
      toggled: false
    };
  },
  methods: {
    click() {
      if (this.toggleMode) {
        this.toggled = !this.toggled;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  border: 1px solid #333;
  padding: 2px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;

  &:hover {
    background-color: #ddd;
  }

  &.toggled {
    background-color: #ccc;
  }
}
</style>


