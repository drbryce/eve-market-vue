<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'app',
  components: {
    'nav-bar': NavBar
  }
}
</script>

<style>
</style>
