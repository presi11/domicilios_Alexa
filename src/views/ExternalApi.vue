<template>
  <div>
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

};



</script>