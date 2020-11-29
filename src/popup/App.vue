<template>
  <div id="app">
    <Header />
    <Search v-on:search-city="fetchWeatherData" />
    <span
      v-if="result.type === 'initial'"
      class="icon icon-initial"
      role="img"
      aria-label="crying emoji"
    >☔️☀️</span>
    <WeatherDetails v-if="result.type === 'completed'" v-bind:result="result.data" />
    <ErrorDetails v-if="result.type === 'error'" v-bind:result="result" />
    <Spinner v-if="result.type ==='loading'" />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Search from "@/components/Search"
import WeatherDetails from "@/components/WeatherDetails"
import ErrorDetails from "@/components/ErrorDetails"
import Spinner from "@/components/Spinner"

export default {
  name: "app",
  components: {
    Header,
    Search,
    WeatherDetails,
    ErrorDetails,
    Spinner,
  },
  data() {
    return {}
  },
  methods: {
    fetchWeatherData(city) {
      this.$store.commit("setLoading")
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e5eb9a9342c9b1b9fcf0df6dd828cfb`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((json) => {
          if (json.cod === 200) {
            this.$store.commit("setCompleted", json)
          } else {
            //want to set type to error if city is not found
            this.$store.commit("setError", json.message)
          }
        })
        .catch((error) => this.$store.commit("setError", error.message))
    },
  },
  computed: {
    result: function () {
      return this.$store.state.result
    },
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Raleway&display=swap");

html {
  width: 400px;
  height: 400px;
  background-color: #f7f2e7;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
h1,
h2 {
  font-weight: normal;
  font-family: "Poppins", sans-serif;
  color: #199d7c;
}
p {
  font-family: "Raleway", sans-serif;
  color: #199d7c;
}
.icon {
  font-size: 100px;
}
.icon-initial {
  line-height: 2;
}
</style>
