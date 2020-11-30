<template>
  <div>
    <label class="switch">
      <input type="checkbox" @click="toggleFarenheit" />
      <span class="slider"></span>
    </label>
    <p style="margin: 0">°C/°F</p>
  </div>
</template>

<script>
export default {
  name: "ToggleSwitch",
  methods: {
    toggleFarenheit() {
      this.$store.commit("toggleFarenheit")
    },
  },
}
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 16px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffa400;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  border-radius: 16px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  border-radius: 50%;
}

input:focus + .slider {
  box-shadow: 0 0 1px #ffa400;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}
</style>