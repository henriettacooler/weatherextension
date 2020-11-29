<template>
  <div>
    <p v-show="!showInFarenheit">It feels like {{tempInCelsius}}°C outside.</p>
    <p v-show="showInFarenheit">It feels like {{tempInFahrenheit}}°F outside.</p>
    <ToggleSwitch />
    <Icon v-bind:weatherIcon="result.weather[0]" />
  </div>
</template>

<script>
import Icon from "./Icon"
import ToggleSwitch from "./ToggleSwitch"
export default {
  name: "WeatherDetails",
  props: ["result"],
  components: {
    Icon,
    ToggleSwitch,
  },
  computed: {
    tempInCelsius: function () {
      return (this.result.main.feels_like - 273.15).toFixed(1)
    },
    tempInFahrenheit: function () {
      return ((this.result.main.feels_like - 273.15) * 1.8 + 32).toFixed(1)
    },
    showInFarenheit: function () {
      return this.$store.state.showFarenheit
    },
  },
}
</script>

<style scoped>
</style>