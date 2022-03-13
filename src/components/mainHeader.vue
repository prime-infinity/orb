<template>
  <div>
    <nav
      class="navbar navbar-expand-lg shadow-sm navbar-light pt-1 pb-1 pl-4 pr-4 bg-white "
    >
      <router-link to="/"
        ><a class="navbar-brand" href=""
          ><img src="img/OrbEventsBlue.png" class="img-fluid" alt=""/></a
      ></router-link>

      <transition
        enter-active-class="animate__animated animate__bounceIn"
        leave-active-class="animate__animated animate__bounceOut"
      >
        <span class="d-block d-lg-none" @click="toggleMobileMenu">
          <span class="navbar-toggler-icon-native"></span>
        </span>
      </transition>

      <!-- mobile slide in menu -->
      <div
        id="menuFloat"
        class="d-none fixed-top"
        :class="[
          mobileMenu ? 'animate__animated animate__bounceInLeft d-block' : '',
        ]"
      >
        <!-- if in home -->
        <div class="col-12 text-left">
          <ul class="navbar-nav ml-auto">
            <!-- if user has signed in -->
            <li v-if="user !== null" class="nav-item mt-4 pt-1 dropdown">
              <a
                id="navbarDropdown"
                class="nav-link profiledropdown dropdown-toggle text-dark"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="icon align-middle">
                  <i class="las la-user"></i>
                </span>
                <span class="link align-middle"> {{ user.email }} </span>
              </a>

              <div
                class="dropdown-menu dropdown-menu-right float-dropdown"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item mb-5" @click="routeToOrganProfile">
                  Organiser Profile
                </a>

                <a class="dropdown-item">
                  Logout
                </a>
              </div>
            </li>

            <!-- if user has not signed in -->
            <li v-if="user === null" class="nav-item mt-2 pt-2">
              <router-link to="login"
                ><a class="nav-link text-dark" href="#">Login</a></router-link
              >
            </li>
            <li v-if="user === null" class="nav-item mt-2 pt-2">
              <router-link to="register"
                ><a class="nav-link text-dark" href="#"
                  >Register</a
                ></router-link
              >
            </li>

            <li v-if="user !== null" class="nav-item mt-2 pt-2">
              <router-link to="">
                <a class="nav-link text-dark" href="#">
                  <span class="icon align-middle">
                    <i class="las la-compass"></i>
                  </span>
                  <span class="link align-middle"> Explore </span>
                </a>
              </router-link>
            </li>

            <li v-if="user !== null" class="nav-item mt-2 pt-2">
              <router-link to="">
                <a class="nav-link text-dark" href="#">
                  <span class="icon align-middle">
                    <i class="las la-bookmark"></i>
                  </span>
                  <span class="link align-middle">Likes & Following</span>
                </a>
              </router-link>
            </li>

            <div v-if="!isInEventCreation">
              <button
                @click="createEvent"
                class="btn customInputButton bg-dark"
              >
                Create Event
              </button>
            </div>
          </ul>
        </div>
      </div>

      <!-- lap menu -->
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto">
          <li v-if="user !== null" class="nav-item">
            <router-link to=""><a class="nav-link">Explore</a></router-link>
          </li>

          <li v-if="user !== null" class="nav-item">
            <router-link to=""
              ><a class="nav-link">Likes & Following</a></router-link
            >
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li v-if="user === null" class="nav-item active">
            <router-link to="login"
              ><a class="nav-link" href="#"
                >Login <span class="sr-only">(current)</span></a
              ></router-link
            >
          </li>
          <li v-if="user === null" class="nav-item">
            <router-link to="register"
              ><a class="nav-link" href="#">Register</a></router-link
            >
          </li>

          <li v-if="user !== null" class="nav-item dropdown">
            <a
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ user.email }}
            </a>

            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item mb-5" @click="routeToOrganProfile">
                Organiser Profile
              </a>

              <a class="dropdown-item">
                Logout
              </a>
            </div>
          </li>

          <li class="nav-item mt-4 mt-md-0 pt-2" v-if="!isInEventCreation">
            <button
              @click="createEvent"
              class="btn text-white pt-2 pb-2 bg-dark pr-3 pl-3"
            >
              Create events
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "mainHeader",
  data() {
    return {
      mobileMenu: false,
    };
  },
  computed: {
    ...mapState({
      user: "auth",
    }),

    isInEventCreation: function() {
      if (this.$route.path === "/createevent") {
        return true;
      }
      return false;
    },
  },
  methods: {
    routeToOrganProfile: function() {
      this.mobileMenu = false;
      this.$router.push("organiserprofile");
    },
    //v-if="$route.path !== '/organiserprofile'"
    createEvent: function() {
      this.user ? this.$router.push("createevent") : this.$router.push("login");
      this.mobileMenu = false;
    },
    toggleMobileMenu: function() {
      this.mobileMenu ? (this.mobileMenu = false) : (this.mobileMenu = true);
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 60px;
}
.navbar-toggler-icon-native {
  background-image: url("https://raw.githubusercontent.com/prime-infinity/orb/main/public/icons/mendem.svg");
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-size: 100% 100%;
}
.navbar-brand img {
  height: 18px;
}
.organiser-nav {
  padding: 0.4rem;
  background-color: white;
  z-index: 9;
  margin-top: 64px;
}
.navbar-toggler {
  border: none;
  color: #262421;
}
#organProfile {
  position: absolute;
}
.profiledropdown {
  background: #f7f7f7;
  padding: 1.2em 0.8em;
  border-radius: 5px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.profiledropdown::after {
  display: none;
}

.la-user {
  padding: 0.2em;
  border-radius: 5px;
  background: #bf4136;
  color: white;
}

.nav-link {
  padding: 1em 0.8em;
}
.nav-link .icon {
  font-size: 1.6em;
}

.nav-link .link {
  padding-left: 9px;
}

.navbar-border {
  padding: 0px !important;
  margin: 2em 0em 0em 0em !important;
  border: solid 1px #f8f8f8;
}
.float-dropdown {
  position: absolute;
  width: 100%;
}
</style>
