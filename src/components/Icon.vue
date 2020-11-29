<template>
  <div>
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
        case "clouds":
          return "☁️"
        case "snow":
          return "❄️"
        case "rain":
        case "drizzle":
          return "☔️"
        case "thunderstorm":
          return "⛈"
        default:
          return "💨"
      }
    },
  },
}
</script>