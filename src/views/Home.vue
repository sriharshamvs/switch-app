<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 md4>
        <h1 class="text-center">Smart Home Application</h1>
        <div v-if="!auth" class="text-center">
          <p>Please Signin to access the Dashboard</p>
          <Signin />
        </div>
        <div v-else class="text-center">
          <p class="subtitle-1">Click to view the Dashboard</p>
          <v-btn small to="/dashboard">
            <v-icon left>dashboard</v-icon>
            Dashboard
          </v-btn>
          <v-btn small to="/controls">
            <v-icon left>apps</v-icon>
            Controls
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Signin from '@/components/Signin.vue'
export default {
  name: 'Home',
  components: {
    Signin
  },
  data () {
    return {

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
