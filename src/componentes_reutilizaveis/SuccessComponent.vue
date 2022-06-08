<template>
  <div class="container" v-if="Object.entries(aluno).length">
    <v-alert color="green" type="success" class="mt-5"
      >O aluno {{ aluno.nome }} foi criado com sucesso com o ID={{
        aluno.ID
      }}</v-alert
    >
  </div>
</template>

<script>
export default {
  props: {
    aluno: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>