<template>
  <div class="container-fluid">
    <div class="row pt-4 pt-md-0">
      <div class="col-12 col-md-7 pt-4">
        <div class="row pt-5">
          <div class="col-11 col-md-8 col-lg-6 mx-auto">
            <div class="auth-header">
              <h3 class="font-weight-bold  float-left">Sign In</h3>
              <div class="float-right">
                <img src="/img/OrbEventsYellow.png" width="120" alt="" />
              </div>
            </div>

            <form @submit.prevent="loginUser">
              <div class="form-group mb-4">
                <input
                  v-model="userData.email"
                  type="email"
                  class="form-control customInput"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email Address"
                />
              </div>

              <div class="form-group mb-4">
                <input
                  v-model="userData.password"
                  type="password"
                  class="form-control customInput"
                  placeholder="Enter Password"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="row text-center" v-if="error">
                <div className="col-12">
                  <small className="text-danger">{{ error }}</small>
                </div>
              </div>

              <button
                :disabled="loggin"
                type="submit"
                class="btn customInputButton"
              >
                <div v-show="!loggin">Sign in</div>
                <span
                  v-show="loggin"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>

              <div class="mt-3 ">
                <a href="#" class="text-muted"><p>Forgot Password?</p></a>
              </div>

              <!-- <hr class="divider"> -->

              <!-- <div class="row">
                            <div class="col-9">
                                 <button :disabled="loggin" type="submit" class="btn customInputButton bg-dark">
                                    <div v-show="!loggin">Sign in with Google</div>
                                    <span v-show="loggin" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                </button>
                            </div>

                            <div class="col-3">
                                 <button :disabled="loggin" type="submit" class="btn customInputButton bg-light text-dark">
                                    <div v-show="!loggin"><i class="lab la-facebook-f"></i></div>
                                    <span v-show="loggin" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                </button>
                            </div>
                        </div> -->

              <div class="text-center text-muted mt-5 pt-5">
                Not yet a member
                <router-link to="register"
                  ><a href="#" class="text-dark"
                    >Create an account</a
                  ></router-link
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
import { login } from "../helpers/auth";

export default {
  name: "Login",
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
      error: null,
      loggin: false,
    };
  },
  methods: {
    loginUser: function() {
      this.loggin = true;
      this.error = null;

      login(this.userData)
        .then((res) => {
          this.loggin = false;
          this.$store.commit("registerUser", res);
          this.$router.push("/");
        })
        .catch((err) => {
          this.loggin = false;
          err.response?.data
            ? (this.error = err.response.data)
            : (this.error = err.message);
        });
    },
  },
};
</script>
