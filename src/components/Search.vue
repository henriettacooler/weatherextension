<template>
  <form @submit="submitQuery">
    <input type="text" v-model="city" :disabled="loading" name="city" placeholder=" 🔍 Search... " />
    <input type="submit" value="Search" :disabled="loading" class="btn" />
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
.btn {
  background-color: #ffa400;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
input[type="text"] {
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  background: #ffa400;
  color: #fff;
}
input:focus {
  outline: none;
}
::placeholder {
  color: #fff;
}
</style>