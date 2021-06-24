import Vue from "vue";
import Vuex from "vuex";

const axios = require("axios");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: [],
    generators: [],
  },
  getters: {
    getResult: (state) => state.result,
    getGenerators: (state) => state.result,
  },
  mutations: {
    setResult(state, result) {
      state.result = result;
    },
    addGenerator(state, generator) {
      state.result.append(generator);
    },
  },
  actions: {
    submitQuery(context, payload) {
      axios
        .post("https://qgen.trebabcock.me/api/new", { query: payload })
        .then((response) => {
          if (response.status === 200) {
            context.commit("setResult", response.data);
          }
          return response.status;
        });
    },
  },
  modules: {},
});
