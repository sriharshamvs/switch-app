<template>
  <div>
    <component
      :is="require(`@/assets/svg/${name}${status}.svg`)"
      class="DeviceIcon"
      v-bind="$attrs"
      @v-on="$listeners"
    />
  </div>
</template>

<script>

export default {
  name: 'DeviceIcon',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .DeviceIcon {
    max-width: 100%;
    height: auto;
  }
</style>
