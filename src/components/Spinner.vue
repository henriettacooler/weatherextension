<template>
  <div>
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
}
</script>

<style scoped>
div {
  margin: 20px auto;
}
.spinner {
  border: 6px solid #f7f2e7;
  border-top: 6px solid #199d7c;
  border-bottom: 6px solid #199d7c;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>