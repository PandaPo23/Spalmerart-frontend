<template>
  <div id="app">
    <SpalmHeader></SpalmHeader>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <SpalmFooter></SpalmFooter>
  </div>
</template>

<script>
import SpalmHeader from './components/common/Header.vue'
import SpalmFooter from './components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    SpalmHeader,
    SpalmFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 80%;
  margin: 0 auto;
  /* margin-top: 60px; */
}

@media only screen and (max-width: 768px) {
  #app {
    width: 100%;
    padding: 0 15px;
  }
}
</style>
