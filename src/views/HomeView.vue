<template>
  <div class="home">
    <button @click="onClick">click me</button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line quotes, semi
import HelloWorld from "../components/HelloWorld.vue";
// eslint-disable-next-line quotes, semi
import axios from "axios";

const onClick = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function, semi
  console.log(111);
  // eslint-disable-next-line quotes, semi
  // eslint-disable-next-line @typescript-eslint/no-empty-function, semi, quotes
  axios
    // eslint-disable-next-line @typescript-eslint/no-empty-function, semi, quotes
    .get("/user1/users")
    .then(function (response) {
      // eslint-disable-next-line semi
      console.log(response.data);
      // eslint-disable-next-line semi
    });
  // eslint-disable-next-line semi
};
</script>
