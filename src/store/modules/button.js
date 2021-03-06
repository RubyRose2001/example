/* Automatically generated by './build/add-module.js' */
const button = {
  namespaced: true,
  state: {
    globel: 0
  },
  mutations: {
    global(state, number) {
      state.global = number;
    }
  },
  actions: {
    setGlobal: ({
      commit,
    }, number) => {
      commit('global', number);
    }
  },
  getters: {
    global: state => state.global,
  }
};

export default button;
