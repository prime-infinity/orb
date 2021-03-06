import Vue from "vue";
import Vuex from "vuex";
import {
  getUserFromLocal,
  initOrgan,
  getOrganiserProfile,
} from "../helpers/auth";

Vue.use(Vuex);

const user = getUserFromLocal();

const getOrganiserP = async (token) => {
  /*getOrganiserProfile(token)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });*/

  const data = await getOrganiserProfile(token);
  //console.log(data);
  return data;
};

export default new Vuex.Store({
  state: {
    auth: user,
    createEventCount: 0,
    organiserProfile:
      user?.isOrganiser === true ? getOrganiserP(user.token) : null,
  },

  mutations: {
    registerUser(state, gotten) {
      //state.isLoggedIn = true;
      state.auth = gotten;
      localStorage.setItem("orbauth", JSON.stringify(state.auth));
    },
    logout(state) {
      localStorage.removeItem("orbauth");
      state.auth = null;
    },
    initOrganProfile(state) {
      //sets the isOrganProfile to trut in both state,localstorage and database
      state.auth.isOrganiser = true;
      localStorage.setItem("orbauth", JSON.stringify(state.auth));
      initOrgan(state.auth.token);
    },
    setOrganiserProfile(state, gotten) {
      //fill in data from organiser, from create or from get request
      state.organiserProfile = gotten;
    },

    //all the below are not sure off
    incrementEventCounter(state, gotten) {
      state.createEventCount = gotten;
    },
  },

  actions: {},

  modules: {},
});
