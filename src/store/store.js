import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import leftPanel from './modules/leftPanel';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    leftPanel
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
