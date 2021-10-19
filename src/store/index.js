import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    backendhost:'http://localhost:5000',
    auth:null,
    createEventCount:0,
    organisersProfile:[],
    newOrganImage:null,
    
  },

  mutations: {

    registerUser(state,gotten){
      state.auth = gotten
      //localStorage.setItem("auth",JSON.stringify(payload))
    },

    incrementEventCounter(state,gotten){
      state.createEventCount = gotten;
    },

    goToEventCreation(state,gotten){
      state.createEventCount = gotten
    },

    setOrganProfile(state, gotten){
      state.organisersProfile = gotten
    },

    organCreated(state,gotten){
      state.organisersProfile.push(gotten)
    },

  },


  actions: {

    organProfile(context,elsee){

      axios.get(`http://localhost:5000/organProfile?email=${elsee.email}`)
      .then((res) =>{
          context.commit('setOrganProfile',res.data)
      })
      .catch((error) => {
          console.log(error)
      });

    }

  },


  modules: {
  }
})
