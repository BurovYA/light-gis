<template>
  <v-layout column>
    <v-flex shrink>
      <MapMainPanel/>
    </v-flex>
    <v-flex>
      <v-layout fill-height align-space-around>
        <v-flex shrink>
          <transition name="expand" @ended="consle.log('aaa')" @enter="enter">
            <v-card
              color="red"
              :width="leftPanelHeight"
              height="100%"
              @transitionend="rightPanelTransitionEnd"
              @transitionbegin="rightPanelTransitionEnd"
            ></v-card>
          </transition>
        </v-flex>
        <v-flex>
          <MapboxMap ref="map"/>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
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
  methods: {
    rightPanelTransitionEnd() {
      console.log('aaa');
      this.$refs.map.resize();
    },
    enter(el, done) {
      console.log('aaa');
    }
  },
  computed: {
    leftPanelHeight: {
      get() {
        return this.$store.getters['leftPanel/VISIBLE'] ? 100 : 0;
      }
    }
  }
};
</script>

