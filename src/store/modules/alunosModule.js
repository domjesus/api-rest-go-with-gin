import axios from "axios";

export default {
  state: {
    alunos: [],
  },
  getters: {
    getAlunos(state) {
      return state.alunos;
    },
  },
  mutations: {
    SET_ALUNOS(state, newValue) {
      state.alunos = newValue;
    },
  },
  actions: {
    changeAlunos(context) {
      //do fetch
      axios
        .get("/alunos", {
          method: "GET",
        })
        .then((res) => {
          //   console.log("Result no store: ", res);
          context.commit("SET_ALUNOS", res.data);
        });
    },
  },
};
