<template>
  <div>
    <h1>{{weatherIconn}}</h1>
    <span class="icon" role="img" v-bind:aria-label="weatherIcon.main">{{selectedWeatherIcon}}</span>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: ["weatherIcon"],
  computed: {
    selectedWeatherIcon: function () {
      switch (this.weatherIcon.main.toLowerCase()) {
        case "clear":
          var icon = this.weatherIcon.icon
          if (icon === "01d") return "☀️"
          else return "🌙"
          break
        case "clouds":
          return "☁️"
          break
        case "snow":
          return "❄️"
          break
        case "rain":
        case "drizzle":
          return "☔️"
          break
        case "thunderstorm":
          return "⛈"
          break
        default:
          return "💨"
          break
      }
    },
  },
}
</script>