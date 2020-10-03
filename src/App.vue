<template>
  <v-app>
    <Header />
    <v-layout justify-center>
      <v-flex xs12 md12>
        <v-content class="ma-1">
          <router-view></router-view>
        </v-content>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  mounted () {
    if (localStorage.getItem('user')) {
      this.$store.dispatch('loadUser')
    }
    if (localStorage.getItem('devices') && localStorage.getItem('room')) {
      this.$store.dispatch('loadDevices')
    }
  },
  components: {
    Header
  }
}
</script>
