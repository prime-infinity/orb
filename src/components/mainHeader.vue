<template>
    <div>

        <nav class="navbar fixed-top navbar-expand-lg shadow-sm navbar-light pt-3 pb-3 pl-4 pr-4 bg-white">
            <router-link to="/"><a class="navbar-brand" href="">Logo</a></router-link>

            <transition enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut">
                <span v-if="$route.path !== '/organiserprofile'" class="d-block d-lg-none" @click="toggleMobileMenu">
                    <span class="navbar-toggler-icon-native"></span>
                </span>
            </transition>

            

            <!-- mobile slide in menu -->
            <div id="menuFloat" class="d-none fixed-top" :class="[mobileMenu ? 'animate__animated animate__bounceInLeft d-block':'', ]">

                <!-- if in home -->
                <div v-if="$route.path !== '/organiserprofile'" class="col-12 text-left" >
                    <ul class="navbar-nav ml-auto">

                        <!-- if user has signed in -->
                        <li v-if="user !== null" class="nav-item mt-4 pt-1 dropdown">
                            <a id="navbarDropdown" class="nav-link profiledropdown dropdown-toggle text-dark" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="icon align-middle">
                                    <i class="las la-user"></i>
                                </span>
                                <span class="link align-middle"> {{ user.email }} </span>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <router-link to="organiserprofile">
                                    <a class="dropdown-item">
                                        Organiser Profile
                                    </a>
                                </router-link>

                                <a class="dropdown-item">
                                    Logout
                                </a>
                                
                            </div>
                        </li>

                        <li v-if="user !== null" class="navbar-border"></li>

                        <!-- if user has not signed in -->

                        <li v-if="user === null" class="nav-item mt-2 pt-2">
                            <router-link to="login"><a class="nav-link text-dark" href="#">Login</a></router-link>
                        </li>
                        <li v-if="user === null" class="nav-item mt-2 pt-2">
                            <router-link to="register"><a class="nav-link text-dark" href="#">Register</a></router-link>
                        </li>
                        
                        <li v-if="user !== null" class="nav-item mt-2 pt-2">
                            <router-link to="">
                                <a class="nav-link text-dark"  href="#">
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

                        <li v-if="user !== null" class="nav-item mt-2 pt-2">
                            <router-link to="">
                                <a class="nav-link text-dark" href="#">
                                 <span class="icon align-middle">
                                    <i class="las la-paperclip"></i>
                                </span>
                                <span class="link align-middle"> My Event</span>
                                </a>
                            </router-link>
                        </li>
                        
                        <button @click="createEvent" class="btn customInputButton bg-dark">Create Event</button>
                        
                    </ul>
                </div>

            </div>

            <!-- lap menu -->
            <div v-if="$route.path !== '/organiserprofile'" class="collapse navbar-collapse" id="navbarNavDropdown" >
                
                <ul class="navbar-nav mr-auto">
                    <li v-if="user !== null" class="nav-item">
                            <router-link to=""><a class="nav-link" href="#">Explore</a></router-link>
                    </li>
                    <li v-if="user !== null" class="nav-item">
                        <router-link to=""><a class="nav-link" href="#">Likes & Following</a></router-link>
                    </li>
                    <li v-if="user !== null" class="nav-item">
                        <router-link to=""><a class="nav-link" href="#">My Event</a></router-link>
                    </li>
                </ul>
                
                <ul class="navbar-nav ml-auto">

                    <li v-if="user === null" class="nav-item active">
                        <router-link to="login"><a class="nav-link" href="#">Login <span class="sr-only">(current)</span></a></router-link>
                    </li>
                    <li v-if="user === null" class="nav-item">
                        <router-link to="register"><a class="nav-link" href="#">Register</a></router-link>
                    </li>
                    
                    <li v-if="user !== null" class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ user.email }}
                        </a>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <router-link to="organiserprofile">
                                <a class="dropdown-item">
                                    Organiser Profile
                                </a>
                            </router-link>

                            <a class="dropdown-item">
                                Logout
                            </a>
                            
                        </div>

                    </li>

                    
                    <li class="nav-item mt-4 mt-md-0 pt-2">
                        <button @click="createEvent" class="btn text-white pt-2 pb-2 bg-dark pr-5 pl-5">Create events</button>
                    </li>
                    
                </ul>

            </div>
            
        </nav>

        <transition enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut">
            <nav v-if="$route.path === '/organiserprofile'" class="navbar fixed-top navbar-expand-lg navbar-light shadow-sm organiser-nav">
                <div class="div">

                </div>
                <button class="navbar-toggler" type="button" @click="toggleMobileMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link">Organiser Info</a>  
                        <a class="nav-item nav-link">Events</a>
                        <a class="nav-item nav-link">Payout</a>
                        <a class="nav-item nav-link">Settings</a>
                        <a class="nav-item nav-link">Help & FAQ</a>
                    </div>
                </div>
            </nav>
        </transition>

    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'mainHeader',
        data(){
            return{
                mobileMenu:false,    
            }  
        }, 
        computed:{
            ...mapState({
                user:'auth',
            }),
        },
        methods:{
            createEvent:function(){
                if(this.user === null){
                    this.$router.push({path:'login'})
                }
                if(this.user !== null){
                    this.$router.push({path:'createevent'})
                }
            },
            toggleMobileMenu:function(){
                this.mobileMenu ? this.mobileMenu = false : this.mobileMenu = true
            },
        }
    
    }
</script>

<style scoped>
    .navbar-toggler-icon-native{
       background-image: url("/icons/mendem.svg");
       display: inline-block;
        width: 1.5em;
        height: 1.5em;
        vertical-align: middle;
        background-size: 100% 100%;
    }
    .organiser-nav{
        padding: 0.4rem;
        background-color:white;
        z-index:9; 
        margin-top:64px;
    }
    .navbar-toggler{
        border:none;
        color:#262421;
    }
    #organProfile{
        position: absolute;
    }
    .profiledropdown{
        background: #f7f7f7;
        padding:1.2em 0.8em;
        border-radius: 5px;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    }
    .profiledropdown::after {
        display: none;
    }

    .la-user{
        padding:0.2em;
        border-radius:5px;
        background:#BF4136;
        color:white;
    }

    .nav-link{
        padding: 1em 0.8em;
    }
    .nav-link .icon{
        font-size:1.6em;
    }
    
    .nav-link .link{
        padding-left:9px;
    }

    .navbar-border{
        padding: 0px!important;
        margin:2em 0em 0em 0em!important;
        border:solid 1px #f8f8f8;
    }
   
</style>