<template>
  <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer =! drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Smart Home
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      fixed
      v-if="auth"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-icon>perm_identity</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ getUsername }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" router :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'home', route: '/' },
        { title: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
        { title: 'Controls', icon: 'apps', route: '/controls' },
        { title: 'Settings', icon: 'settings', route: '/settings' }
      ]
    }
  },
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    },
    getUsername () {
      var value = this.$store.getters.isAuthenticated
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style scoped>

</style>
