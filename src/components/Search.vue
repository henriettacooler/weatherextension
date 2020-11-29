<template>
  <form class @submit="submitQuery">
    <input type="text" v-model="city" name="city" placeholder="city..." />
    <input type="submit" value="Submit" class="btn" />
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
      //this.city = '';
    },
  },
}
</script>

<style scoped>
</style>