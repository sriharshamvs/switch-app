<template>
  <div>
    <h2>Settings</h2>
    <p>Click to clear the User</p>
    <v-btn
      @click="clearData"
    >
      Clear Data
      <v-icon right>clear</v-icon>
    </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Settings',
  components: {},
  methods: {
    clearData () {
      this.$store.dispatch('clearData')
    }
  }
}
</script>
