<template>
  <div>
    <p>system picker</p>
    <p>{{ systemNames }}</p>
  </div>
</template>

<script>
export default {
  name: 'system-picker',
  data () {
    return {
    }
  },
  computed: {
    systemNames () {
      return [1, 2, 3]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
