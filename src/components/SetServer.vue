<template>
  <div>
    <v-switch
      v-model="localHost"
      :label="`Use LAN (No Internet)`"
    ></v-switch>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'SetServer',
  data () {
    return {
      localHost: null
    }
  },
  mounted () {
    this.localHost = JSON.parse(localStorage.getItem('localHost'))
  },
  watch: {
    localHost (value) {
      console.log(value)
      this.$store.dispatch('localHost', value)
    }
  },
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>

<style scoped>

</style>
