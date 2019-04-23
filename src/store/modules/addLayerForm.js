const state = {
  visible: false
};

const getters = {
  VISIBLE: (state) => {
    return state.visible;
  }
};

const actions = {
  SET_VISIBLE(state, visible) {
    state.commit('SET_VISIBLE', visible);
  }
};

const mutations = {
  SET_VISIBLE(state, visible) {
    state.visible = visible;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
