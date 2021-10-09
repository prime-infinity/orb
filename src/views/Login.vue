<template>
    <div class="row pt-4 pt-md-0">

        <div class="col-12 col-md-7 pt-4">

            <div class="row pt-4">
                <div class="col-10 col-md-8 col-lg-6 mx-auto">

                    <div class="auth-header">
                        <h2 class="font-weight-bold  float-left">Sign In</h2>
                        <h2 class="font-weight-bold float-right text-danger">Logo</h2>
                    </div>

                    <form @submit.prevent="loginUser">
                    
                        <div class="form-group mb-4">
                            <input v-model="userData.email" type="email" class="form-control customInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Address">
                            <small v-if="errors.email" class="text-danger">{{ errors.email[0] }}</small>
                        </div>

                        <div class="form-group mb-4">
                            <input v-model="userData.password" type="password" class="form-control customInput" placeholder="Enter Password" id="exampleInputPassword1">
                            <small v-if="errors.password" class="text-danger">{{ errors.password[0] }}</small>
                        </div>

                        <button :disabled="loggin" type="submit" class="btn customInputButton">
                            <div v-show="!loggin">Sign in</div>
                            <span v-show="loggin" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        </button>

                        <div class="mt-3 ">
                            <a href="#"><p class="font-weight-bold">Forgot Password?</p></a>
                        </div>
                        
                        <hr class="divider">

                        <div class="row">
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
                        </div>
                        
                        <div class="text-center mt-4">
                            Not yet a member <router-link to="register"><a href="#">Create an account</a></router-link>
                        </div>
  
                    </form>
                </div>
            </div>
            
        </div>

        <div class="col-12 col-md-5 d-none d-md-block" id="redleft">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return{
                userData:{
                    email:'',
                    password:'',
                },
                errors:{},
                loggin:false,
            }  
        },     
        methods: {
            loginUser:function(){
                this.loggin = true

                setTimeout(() => {
                    this.loggin = false
                }, 1500);
               
                /*axios.post('/login',this.userData)
                .then((res) =>{
                    this.$router.push("/")
                    this.loggin = false
                })
                .catch((err) => {
                   this.errors = err.response.data.errors
                   this.loggin = false
                })*/
            },
        },  
    }
</script>
