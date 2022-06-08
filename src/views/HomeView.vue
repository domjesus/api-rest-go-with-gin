<template>
  <div>
    <alunos-list-component
      msg="Minha mensagem custom"
      @deleteItem="deleteItem"
    />

    <overlay-component :show="showOverlay" />

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
    <router-link to="/aluno_create">
      <v-btn class="mx-2" fab dark large right bottom color="primary">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import AlunosListComponent from "../components/AlunosListComponent.vue";
import OverlayComponent from "@/components/OverlayComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeComponent",

  components: {
    AlunosListComponent,
    OverlayComponent,
  },
  data: () => {
    return {
      showOverlay: false,
      snackbar: false,
      typeSnack: "",
      textSnack: "",
    };
  },
  methods: {
    deleteItem(itemId) {
      this.showOverlay = true;
      console.log("Component pai: You are deleting this item...", itemId);

      axios
        .delete("/alunos/" + itemId)
        .then((r) => {
          // console.log("Alunos: ", this.alunos);
          // console.log("Result of delete: ", r.data);

          this.textSnack = r.data.data;
          this.typeSnack = "success";
          this.snackbar = true;
          this.$store.dispatch(
            "changeAlunos",
            this.alunos.filter((a) => a.ID != itemId)
          );

          // r.data.status == 200 ? "success" : "red accent-2";
        })
        .catch((err) => {
          this.snackbar = true;
          this.typeSnack = "red accent-2";
          // console.log("Result of ERROR delete: ", err);
          const resp = err.response.data;
          this.textSnack = "Erro: ";
          this.textSnack = resp.data;
        })
        .finally(() => {
          // setTimeout(() => {
          //   this.showOverlay = false;
          // }, 3000);
          this.showOverlay = !this.showOverlay;
        });
    },
  },
  mounted() {
    // console.log(import.meta.env);
    console.log("Montado");
    // const myenv = import.meta.env.VITE_APP_NAME;
    this.$store.dispatch("changeAlunos");
    // console.log("Store: ", this.$store.getters);
  },
  computed: {
    ...mapGetters({ alunos: "getAlunos" }),
  },
};
</script>
