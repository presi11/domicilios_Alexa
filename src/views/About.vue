<template>
  <div class="about">
    
    <h1>This is an about page</h1>
    <div>{{hello_world}}</div>
    <button type="button" class="btn btn-primary">Button</button>
    
  </div>
</template>
<script>

import gql from 'graphql-tag'


export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello_world: gql`query {
      hello_world 
    }`,
  },
}


</script>