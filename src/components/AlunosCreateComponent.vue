<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="nome"
            :rules="nameRules"
            label="Nome"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="rg"
            :rules="rules.rgRules"
            :counter="9"
            label="RG"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="cpf"
            :rules="[
              //VALIDAÇÃO INLINE
              () => !!cpf || 'Informe o CPF',
              () => cpf.length == 11 || 'CPF deve ter 11 caracteres!',
              () =>
                !cpf.match(/[A-Za-z]/g) ||
                'Este campo pode conter somente números!',
            ]"
            :counter="11"
            label="CPF"
            required
          ></v-text-field>
        </v-col>
        <v-btn color="primary" @click="submitForm">Gravar</v-btn>
      </v-row>
    </v-container>
    <error-component :errors="errors" />
    <success-component :aluno="aluno" />
    <p v-if="Object.entries(aluno).length">Redireciona em {{ redireciona }}s</p>
    <overlay-component :show="showOverlay" />
  </v-form>
</template>

<script>
import axios from "axios";
import ErrorComponent from "../componentes_reutilizaveis/ErrorComponent.vue";
import SuccessComponent from "../componentes_reutilizaveis/SuccessComponent.vue";
import OverlayComponent from "./OverlayComponent.vue";

export default {
  components: { ErrorComponent, SuccessComponent, OverlayComponent },
  name: "AlunosCreateComponent",
  data: () => ({
    showOverlay: false,
    redireciona: 5,
    aluno: {},
    errors: [],
    valid: false,
    nome: "JOSE MANOEL SILVEIRA",
    rg: "321654311",
    cpf: "32165432166",
    nameRules: [
      (v) => !!v || "Informe o nome",
      (v) => v.length >= 10 || "O nome precisa ter no mínimo 10 caracterez",
    ],
    rules: {
      rgRules: [
        (v) => !!v || "Informe o RG",
        (v) => v.length == 9 || "RG deve ser igual a 9 caracteres!",
        (v) =>
          !v.match(/[A-Za-z]/g) || "Este campo pode conter somente números!",
      ],
      cpfRules: [
        (v) => !!v || "Informe o CPF",
        (v) => v.length == 11 || "CPF deve ter 11 caracteres!",
      ],
    },
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    submitForm() {
      this.showOverlay = true;

      console.log("Submiting: ", this.nome, this.rg, this.cpf);
      if (!this.valid) {
        this.errors = ["Verifique os campos com erro!"];
        setTimeout(() => (this.errors = []), 5000);
        this.showOverlay = false;
        return;
      }

      axios
        .post("/alunos", { nome: this.nome, rg: this.rg, cpf: this.cpf })
        .then((r) => {
          console.log("Result post: ", r);
          this.aluno = r.data.aluno;
        })
        .catch((err) => {
          console.log("Error: ", err.response.data.error);
          this.errors = err.response.data;
          //   error.split(",");
        })
        .finally(() => {
          this.showOverlay = false;

          const redir = setInterval(() => this.redireciona--, 1000);
          setTimeout(() => {
            clearInterval(redir);
            this.$router.push("/");
          }, 5000);
        });
    },
  },
  //   watch: {
  //     cpf() {
  //       const pattern = /[A-Za-z]/g;
  //       console.log("Padrão: ", this.cpf.match(pattern));
  //     },
  //   },
};
</script>