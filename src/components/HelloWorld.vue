<script setup>
import { onMounted, ref } from "vue";

onMounted: {
  console.log("Montado");
  const fe = fetch("/api/posts", {
    method: "GET",
  })
    .then((r) => r.json())
    .then((res) => {
      console.log(res);
    });
}

defineProps({
  msg: String,
});

const count = ref(0);
console.log(import.meta.env);

const myenv = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <h1>{{ msg }}</h1>
  <h3>My env variable: {{ myenv }}</h3>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
