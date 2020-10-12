<template>
  <div>
    <h2>Settings</h2>
    <br>
    <SetServer />
    <div v-if="auth">
      <p>Click to clear the User</p>
      <v-btn
        @click="clearData"
      >
        Clear Data
        <v-icon right>clear</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SetServer from '@/components/SetServer.vue'
export default {
  name: 'Settings',
  data () {
    return {
    }
  },
  watch: {
    localHost (value) {
      console.log(value)
      this.$store.dispatch('localHost', value)
    }
  },
  components: {
    SetServer
  },
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    clearData () {
      this.$store.dispatch('clearData')
    },
    setLocalServer (event) {
      console.log('localHost: ', event)
    }
  }
}
</script>

<style scoped>
hr {
  display: block;
  position: relative;
  padding: 0;
  margin: 8px auto;
  height: 0;
  width: 100%;
  max-height: 0;
  font-size: 1px;
  line-height: 0;
  clear: both;
  border: none;
  border-top: 1px solid #aaaaaa;
  border-bottom: 1px solid #ffffff;
}
</style>
