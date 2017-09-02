<template>
  <nav id="nav-bar" class="my-3">
    <ul class="nav nav-tabs">
      <div v-if="!user">
        <li class="nav-item">
          <a href="#" class="nav-link" v-on:click.prevent="logIn">Login</a>
        </li> 
      </div>
      <div v-else>
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link> 
        </li> 
        <li class="nav-item">
          <router-link to="/system-picker" class="nav-link">Link 2</router-link> 
        </li> 
        <li class="nav-item">
          <router-link to="/brand" exact class="nav-link">Link 3</router-link> 
        </li> 
        <li class="nav-item">
          <a href="#" class="nav-link" v-on:click.prevent="logOut">Logout</a>
        </li>
      </div> 
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    logOut () {
      this.$store.commit('logOut')
    },
    logIn () {
      this.$store.commit('logIn')
    }
  }
}
</script>