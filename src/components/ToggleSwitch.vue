<template>
  <div>
    <label class="switch">
      <input type="checkbox" v-bind:checked="showInFarenheit" @click="toggleFarenheit" />
      <span class="slider round"></span>
    </label>
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
  computed: {},
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 16px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.2s;
  transition: 0.2s;
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
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 16px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>