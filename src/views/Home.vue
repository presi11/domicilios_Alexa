<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Bienvenidos a Hermes" />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button type="button" class="btn btn-info" v-if="!$auth.isAuthenticated" @click="login">Iniciar Sesión</button>
      <!-- show logout when authenticated -->
      <button  type="button" class="btn btn-danger" v-if="$auth.isAuthenticated" @click="logout">Cerrar Sesión</button>
    </div>
    <img alt="Card of pedido mockup" src="../assets/Card_mockup.png"> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// .. imports removed for brevity
//import { MDBBtn } from "mdb-vue-ui-kit";

export default {
  name: "home",
  components: {
    HelloWorld,
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};

</script>
