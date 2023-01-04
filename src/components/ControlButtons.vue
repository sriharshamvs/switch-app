<template>
  <div>
    <v-container fluid>
      <div v-if="getUsername=='admin'">
        <!-- <h1 class="text-center">Admin Access</h1> -->
        <v-row dense>
          <div v-for="room in getRooms" :key="room">
            <h1 class="text-center">Room {{room}}</h1>
            <v-col cols="12">
              <v-row
                align="center"
                justify="space-around"
              >
                <v-card
                    v-for="device in getDevicesByRoom(room)"
                    :key="device.device"
                    @click="toggleDevice(device, room)"
                    flat
                    class="ma-6"
                  >
                    <div v-if="device.icon !== '' && device.icon !== undefined">
                      <DeviceIcon :name="device.icon" :status="device.status" />
                      <p class="text-center subtitle-1">{{device.location}}</p>
                    </div>
                </v-card>
              </v-row>
            </v-col>
          </div>
        </v-row>
      </div>
      <div v-else>
        <v-row dense>
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
                  <p class="text-center subtitle-1">{{device.location}}</p>
                </div>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
// Note:- DeviceIcon component is imported in main.js
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
    },
    getRooms () {
      const totalDevices = this.$store.getters.getDevices
      const rooms = [...new Set(totalDevices.map(row => row.room))]
      return rooms
    }
  },
  methods: {
    toggleDevice (device) {
      this.$store.dispatch('toggle', device)
    },
    getDevicesByRoom (room) {
      const totalDevices = this.$store.getters.getDevices
      const roomDevices = totalDevices.filter((data) => {
        return data.room === room
      })
      const devices = roomDevices.filter((data) => {
        return data.icon !== ''
      })
      return devices
    }
  }
}
</script>
