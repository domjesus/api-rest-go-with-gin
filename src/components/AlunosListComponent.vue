<script>
import { VSimpleTable } from "vuetify";
import { mapGetters } from "vuex";

export default {
  name: "AlunosListComponent",
  components: {
    VSimpleTable,
  },
  // methods: {
  //   deleteItem(itemId) {
  //     console.log("You are deleting this item...", itemId);
  //   },
  // },
  computed: {
    ...mapGetters({ alunos: "getAlunos" }),
  },
};
</script>

<template>
  <v-simple-table color="purple lighten-1">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Nome</th>
          <th class="text-left">RG</th>
          <th class="text-left">CPF</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(aluno, i) in alunos" :key="i">
          <td>{{ aluno.ID }}</td>
          <td>{{ aluno.nome }}</td>
          <td>{{ aluno.rg }}</td>
          <td>{{ aluno.cpf }}</td>
          <td>
            <v-btn
              class="mx-2"
              fab
              dark
              x-small
              color="red ascent-4"
              @click="$emit('deleteItem', aluno.ID)"
            >
              <v-icon dark> mdi-delete </v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<style scoped>
a {
  color: #42b983;
}
tbody {
  text-align: center;
}
</style>
