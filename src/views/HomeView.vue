<template>
  <div>
    <alunos-list-component
      msg="Minha mensagem custom"
      @deleteItem="deleteItem"
      :alunos="alunos"
    />
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-snackbar
      v-model="snackbar"
      :color="typeSnack"
      right
      bottom
      class="pb-15"
      timeout="5000"
    >
      {{ textSnack }}

      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="snackbar = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import AlunosListComponent from "../components/AlunosListComponent.vue";

export default {
  name: "HomeComponent",

  components: {
    AlunosListComponent,
  },
  data: () => {
    return {
      overlay: false,
      snackbar: false,
      typeSnack: "",
      textSnack: "",
      alunos: [],
    };
  },
  methods: {
    deleteItem(itemId) {
      this.overlay = true;
      console.log("Component pai: You are deleting this item...", itemId);

      axios
        .delete("/alunos/" + itemId)
        .then((r) => {
          // console.log("Alunos: ", this.alunos);
          console.log("Result of delete: ", r.data);

          this.textSnack = r.data.data;
          this.typeSnack = "success";
          this.snackbar = true;
          this.alunos = this.alunos.filter((a) => a.ID != itemId);

          // r.data.status == 200 ? "success" : "red accent-2";
        })
        .catch((err) => {
          this.snackbar = true;
          this.typeSnack = "red accent-2";
          // console.log("Result of delete: ", err.response.data);
          const resp = err.response.data;
          this.textSnack = "Erro: ";
          this.textSnack = resp.data;
        })
        .finally(() => {
          // setTimeout(() => {
          //   this.overlay = false;
          // }, 3000);
          this.overlay = !this.overlay;
        });
    },
  },
  mounted() {
    // console.log(import.meta.env);
    console.log("Montado");
    // const myenv = import.meta.env.VITE_APP_NAME;

    axios
      .get("/alunos", {
        method: "GET",
      })
      .then((res) => {
        this.alunos = res.data;
        // this.alunos.concat("Outro item");

        // this.alunos = [
        //   {
        //     nome: "jose manoel",
        //     rg: "123456",
        //     cpf: "123456654",
        //     ID: 1,
        //   },
        // ]
        //   .concat(res.data)
        //   .concat(res.data)
        //   .concat(res.data);
        // console.log(res.data);
      });
  },
};
</script>
