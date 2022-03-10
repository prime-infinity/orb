<template>
  <div class="container-fluid">
    <div class="row pt-4 pt-md-0">
      <div class="col-12 col-md-7 pt-4">
        <div class="row pt-4">
          <div class="col-11 col-md-8 col-lg-6 mx-auto">
            <div class="auth-header">
              <h3 class="font-weight-bold  float-left">Register</h3>
              <div class="float-right">
                <img src="/img/OrbEventsYellow.png" width="120" alt="" />
              </div>
            </div>

            <form @submit.prevent="registerUser">
              <div class="form-group mb-4">
                <input
                  v-model="userData.name"
                  type="text"
                  class="form-control customInput"
                  id="exampleInputName1"
                  Placeholder="Your name"
                />
              </div>
              <div class="form-group mb-4">
                <input
                  v-model="userData.email"
                  type="email"
                  class="form-control customInput"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  Placeholder="Email address"
                />
              </div>
              <div class="form-group mb-4">
                <input
                  v-model="userData.password"
                  type="password"
                  class="form-control customInput"
                  id="exampleInputPassword1"
                  Placeholder="Enter password"
                />
              </div>

              <div class="row text-center" v-if="error">
                <div class="col-12">
                  <small class="text-danger">{{ error }}</small>
                </div>
              </div>

              <div class="row mb-4">
                <span class="col-11 mx-auto small text-muted">
                  By creating an account you're agreeing with our
                  <a href="" class="text-dark font-weight-bold">Terms of Use </a
                  >,
                  <a href="" class="text-dark font-weight-bold"
                    >Privacy Policy</a
                  >, and
                  <a href="" class="text-dark font-weight-bold"
                    >Email Notifications</a
                  >.
                </span>
              </div>

              <button
                :disabled="registering"
                type="submit"
                class="btn customInputButton"
              >
                <div v-show="!registering">Create account</div>
                <span
                  v-show="registering"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>

              <div class="text-center mt-4 text-muted">
                Already have an account
                <router-link to="login"
                  ><a href="#" class="text-dark">Sign In</a></router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-5 d-none d-md-block" id="redleft"></div>
    </div>
  </div>
</template>

<script>
import { registerUser } from "../helpers/auth";

export default {
  name: "Register",
  data() {
    return {
      userData: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
      registering: false,
    };
  },
  methods: {
    registerUser: function() {
      this.registering = true;
      this.error = null;

      registerUser(this.userData)
        .then((res) => {
          this.error = null;
          this.$store.commit("registerUser", res);
          this.$router.push("/");
        })
        .catch((err) => {
          this.registering = false;
          err.response?.data
            ? (this.error = err.response.data)
            : (this.error = err.message);
        });
    },
  },
};
</script>
