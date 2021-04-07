<template>
  <div>{{ helloWorld }}</div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    helloWorld: gql`query holamundo{
      helloWorld
    }`,
  },
}
</script>