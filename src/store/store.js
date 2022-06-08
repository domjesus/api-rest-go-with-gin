import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import alunosModule from "./modules/alunosModule";

export default new Vuex.Store({
  modules: {
    alunosModule,
  },
});
