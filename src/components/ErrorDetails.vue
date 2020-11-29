<template>
  <div>
    <p>Something went wrong :( This is what we know:</p>
    <p>{{result.message}}</p>
    <span class="icon" role="img" aria-label="crying emoji">😢</span>
  </div>
</template>

<script>
export default {
  name: "ErrorDetails",
  props: ["result"],
}
</script>