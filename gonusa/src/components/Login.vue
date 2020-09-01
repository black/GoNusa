<template>
  <div class="w-full h-full">
    <div class="flex items-top" v-show="getAuthState">
      <img
        class="w-10 h-10 rounded-full mr-4"
        v-bind:src="getUserDetails.photoURL"
        alt="Avatar of Jonathan Reinink"
      />
      <div class="text-sm">
        <p class="text-gray-900 leading-none">{{getUserDetails.displayName}}</p>
        <p class="text-gray-600">{{getUserDetails.email}}</p>
        <a href="#" class="block text-sm" v-on:click="signOut()">Sign out</a>
      </div>
    </div>
    <div v-show="!getAuthState">
      <a href="#" class="block text-sm" v-on:click="Login()">Login</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginState: false,
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch("signout");
    },
    Login() {
      this.$store.dispatch("login");
    },
    checkUserState() {
      this.$store.dispatch("checkAdmin");
    },
  },
  computed: {
    getUserDetails() {
      return this.$store.getters.getAdmin;
    },
    getAuthState() {
      return this.$store.getters.getAuthState;
    },
  },
  mounted() {
    this.checkUserState();
  },
};
</script>

<style scoped>
.list {
  width: 300px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.list > li {
  padding: 10px;
  border: 1px solid lightblue;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: blue;
}
</style>