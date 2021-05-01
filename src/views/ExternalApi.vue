<template>
  <div>
    <button @click="callApi">Call</button>
    <p>{{ apiMessage }}</p>
    <h1>{{users}}</h1>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
    apollo: {
    // Simple query that will update the 'hello' vue property
    users: gql`query {
      users {
        user_id
        name
        nickname
         email
      }
    }`,
  },
  name: "external-api",
  data() {
    return {
      apiMessage: ""
    };
  },
  methods: {
    async callApi() {
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      const token1 = await this.$auth.getIdTokenClaims();
      const token2 = await this.$auth.getTokenWithPopup();
      console.log(token);
      console.log(token1);
      console.log(token2);
    }
  }


  
};



</script>