<template>
  <div>
    <h2>{{getUsername}}'s Room</h2>
    <ControlButtons />
  </div>
</template>

<script>
import ControlButtons from '@/components/ControlButtons.vue'

export default {
  name: 'Controls',
  components: {
    ControlButtons
  },
  computed: {
    getUsername () {
      var value = this.$store.getters.isAuthenticated
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
