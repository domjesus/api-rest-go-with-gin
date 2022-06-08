<template>
  <v-overlay :value="show">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: "OverlayComponent",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
</style>