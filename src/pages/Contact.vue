<template>
    <div class="Contact">
        {{ this.$route.params.id }}
        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
    </div>
  </template>
  
  <script>
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  export default {
    name: 'SpalmerartContact',
    props: {
      
    },
    components: {
      PulseLoader
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  