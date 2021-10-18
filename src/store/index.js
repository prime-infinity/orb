import Vue from 'vue'
import Vuex from 'vuex'

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
    organProfile(context){
      context.commit('setOrganProfile',[])

      /*axios.get('/web/getOrganProfile')
      .then((res) =>{
          context.commit('setOrganProfile',res.data)
      })
      .catch((error) => {
          //console.log(error)
      });*/
    }
  },
  modules: {
  }
})
