<template>
  <div>
    <v-container fluid>
      <v-row dense>
        <div v-if="getUsername=='admin'">
          <h1>ADMIN PAGE</h1>
        </div>
        <div v-else>
          <v-col cols="12">
            <v-row
              align="center"
              justify="space-around"
            >
              <v-card
                v-for="device in getDevices"
                :key="device.device"
                @click="toggleDevice(device)"
                flat
                class="ma-6"
              >
                <div v-if="device.icon !== '' && device.icon !== undefined">
                  <DeviceIcon :name="device.icon" :status="device.status" />
                </div>
              </v-card>
            </v-row>
          </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// DeviceIcon component is imported in main.js
export default {
  name: 'ControlButtons',
  data () {
    return {
    }
  },
  computed: {
    getUsername () {
      return this.$store.getters.getUser
    },
    getDevices () {
      const totalDevices = this.$store.getters.getDevices
      const devices = totalDevices.filter((data) => {
        return data.icon !== ''
      })
      return devices
    }
  },
  methods: {
    toggleDevice (device) {
      this.$store.dispatch('toggle', device)
    }
  }
}
</script>
