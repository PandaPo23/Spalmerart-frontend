<template>
    <div class="spalm-footer">
        <p><small>Copyright © 2022 Stephen Palmer</small></p>
        <font-awesome-icon icon="fa-brands fa-square-instagram" class="spalm-footer__icon"/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'spalm-footer',
    props: {
      
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .spalm-footer {
    text-align: center;
  }
  .spalm-footer p {
    color: rgba(0, 0, 0, 0.5);
  }
  .spalm-footer__icon {
    color: #d1c286;
    width: 20px;
    height: 20px;
  }
  </style>
  