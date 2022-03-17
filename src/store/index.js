import Vue from "vue";
import Vuex from "vuex";
import { getUserFromLocal, initOrgan } from "../helpers/auth";

Vue.use(Vuex);

const user = getUserFromLocal();

export default new Vuex.Store({
  state: {
    auth: user,
    createEventCount: 0,
  },

  mutations: {
    registerUser(state, gotten) {
      //state.isLoggedIn = true;
      state.auth = gotten;

      localStorage.setItem("orbauth", JSON.stringify(state.auth));
    },
    logout(state) {
      localStorage.removeItem("orbauth");
      //state.isLoggedIn = false;
      state.auth = null;
    },
    initOrganProfile(state) {
      //sets the isOrganProfile to trut in both state,localstorage and database
      state.auth.isOrganiser = true;
      localStorage.setItem("orbauth", JSON.stringify(state.auth));
      initOrgan(state.auth.token);
    },

    //all the below are not sure off
    incrementEventCounter(state, gotten) {
      state.createEventCount = gotten;
    },

    goToEventCreation(state, gotten) {
      state.createEventCount = gotten;
    },
  },

  actions: {},

  modules: {},
});
