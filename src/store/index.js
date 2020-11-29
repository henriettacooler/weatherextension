import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: {type: "initial"},
    showFarenheit: false
  },
  mutations: {
    setLoading () {
      this.state.result = { 
        type: "loading",
      }
    },
    setCompleted (state, data) {
      this.state.result = { 
        type: "completed",
        data: data 
      }
    },
    setError (state, message) {
      this.state.result = { 
        type: "error",
        message: message 
      }
    },
    toggleFarenheit(){
      this.state.showFarenheit = !this.state.showFarenheit
    }
  },
  actions: {
  },
  modules: {
  }
})
