<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex xs12 md4>
        <v-card flat>
          <v-card-title primary-title>
            <h4>Login</h4>
          </v-card-title>
          <v-form>
            <v-text-field
                  prepend-icon="person"
                  label="Username"
                  v-model="userCredentials.username">
            </v-text-field>
            <v-text-field
                  v-model="userCredentials.password"
                  prepend-icon="lock"
                  label="Password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show = !show"
                  :type="show ? 'text' : 'password'"
                  :rules="[rules.required, rules.counter]"
                  @keydown.space.prevent>
            </v-text-field>
            <v-card-actions>
              <v-btn primary large block @click="onSubmit">Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      userCredentials: {
        username: null,
        password: null
      },
      rules: {
        required: value => !!value || 'Required.',
        counter: value => (value && value.length <= 50) || 'Max 50 characters'
      },
      show: false
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('login', this.userCredentials)
    }
  }
}
</script>

<style scoped>

</style>
