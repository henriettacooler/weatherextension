<template>
  <form @submit="submitQuery">
    <input type="text" v-model="city" :disabled="loading" name="city" placeholder="city..." />
    <input type="submit" value="Submit" :disabled="loading" class="btn" />
  </form>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      city: "",
    }
  },
  methods: {
    submitQuery(event) {
      event.preventDefault()
      this.$emit("search-city", this.city)
    },
  },
  computed: {
    loading: function () {
      return this.$store.state.result.type === "loading"
    },
  },
}
</script>

<style scoped>
</style>