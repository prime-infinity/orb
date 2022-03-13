import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { getUserFromLocal } from "../helpers/auth";

Vue.use(Vuex);

const user = getUserFromLocal();

export default new Vuex.Store({
  state: {
    auth: user,
    isLoggedIn: !!user,
    createEventCount: 0,
    organisersProfile: [],
    newOrganImage: null,
  },

  mutations: {
    registerUser(state, gotten) {
      state.isLoggedIn = true;
      state.auth = gotten;

      localStorage.setItem("orbauth", JSON.stringify(state.auth));
    },
    logout(state) {
      localStorage.removeItem("orbauth");
      state.isLoggedIn = false;
      state.auth = null;
    },

    incrementEventCounter(state, gotten) {
      state.createEventCount = gotten;
    },

    goToEventCreation(state, gotten) {
      state.createEventCount = gotten;
    },

    setOrganProfile(state, gotten) {
      state.organisersProfile = gotten;
    },

    organCreated(state, gotten) {
      state.organisersProfile.push(gotten);
    },
  },

  actions: {
    organProfile(context, elsee) {
      console.log(this.state.backendhost);

      axios
        .get(this.state.backendhost + `/organProfile?email=${elsee.email}`)
        .then((res) => {
          context.commit("setOrganProfile", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  modules: {},
});
