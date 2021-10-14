import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth:null,
    createEventCount:0,
  },
  mutations: {
    registerUser(state,gotten){
      state.auth = gotten
    },
    incrementEventCounter(state,gotten){
      state.createEventCount = gotten;
    },
    goToEventCreation(state,gotten){
      state.createEventCount = gotten
    }
  },
  actions: {
  },
  modules: {
  }
})
