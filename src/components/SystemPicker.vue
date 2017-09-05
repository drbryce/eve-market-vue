<template>
  <div>
    <p>system picker</p>
    <select v-model="selectedSystem">
      <option disabled>Please select a system</option>
      <option v-for="system in systemList" :key="system.solarSystemName" v-bind:value="system.solarSystemID">{{ system.solarSystemName }}</option>
    </select>
    <input type="button" value="add" @click="addSystem()"></input>
    <p>{{ chosenSystems }}</p>
  </div>
</template>

<script>
export default {
  name: 'system-picker',
  data () {
    return {
      selectedSystem: '',
      chosenSystems: []
    }
  },
  computed: {
    systemList () {
      return this.$store.state.staticData.systemList
    }
  },
  methods: {
    addSystem () {
      this.chosenSystems.push(this.selectedSystem)
    }
  },
  mounted () {
    if (this.$store.state.staticData.systemList.length < 1) this.$store.dispatch('staticData/updateSystemList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
