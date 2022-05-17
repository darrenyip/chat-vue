<template>
  <div id="app">
    <div class="container">
      <h1 class="is-size-1">Hot-line 聊天室</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { auth } from './firebase'
console.log("fire Auth: ",auth);
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
