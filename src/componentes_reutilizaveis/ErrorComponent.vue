<template>
  <div class="container" v-if="errors">
    <v-alert
      color="red"
      type="error"
      v-for="(erro, i) in errors"
      :key="i"
      class="mt-5"
      >{{ erro }}</v-alert
    >
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>