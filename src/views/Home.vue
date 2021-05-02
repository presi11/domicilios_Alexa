<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Bienvenidos a Hermes" />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <!-- <MDBBtn color="warning" v-if="!$auth.isAuthenticated" @click="login">Log in</MDBBtn>-->
      <!-- show logout when authenticated -->
      <!--<MDBBtn  color="Danger" v-if="$auth.isAuthenticated" @click="logout">Log out</MDBBtn>-->
    </div>
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
