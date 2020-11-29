<template>
  <div>
    <div>
      <p v-show="!showInFarenheit">
        It feels like
        <span class="temp-text">{{tempInCelsius}}°C</span> outside.
      </p>
      <p v-show="showInFarenheit">
        It feels like
        <span class="temp-text">{{tempInFahrenheit}}°F</span> outside.
      </p>
    </div>
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
.temp-text {
  font-size: 42px;
}
</style>