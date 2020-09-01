<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";

export default {
  components: {
    HelloWorld,
    Login,
  },
};
</script>
