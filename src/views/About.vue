<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{helloWorld}}</div>
  </div>
</template>
<script>

import gql from 'graphql-tag'


export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    helloWorld: gql`query {
      helloWorld 
    }`,
  },
}


</script>