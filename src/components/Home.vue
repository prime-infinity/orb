<template>
    <div>

        <Wrapper />
        
        <!-- Header One -->
        <div class="container mt-5">
            <h2 class="font-weight-bold">Top Trending</h2>
            <div class="row flex-row flex-nowrap pb-3 no-scroll-bar" style="overflow-x: auto;">

                <div v-for="n in parseInt(numberr)" :key="n" class="col-md-5 col-11 p-2">
                   
                    <div class="index-event-card bg-dark">
                        <img src="https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="">
                    </div>

                     <div class="index-event-card-footer text-white text-center p-3">
                        <h5 class="font-weight-bold m-0 p-0">This is an event</h5>
                        <p class="m-0 p-0">Organiser name</p>
                    </div>
                    
                </div>

            </div>
        </div>
        
        <!-- Header Two -->
        <div class="container mt-5">
            <h3 class="font-weight-bold">Event You Might Like</h3>
            <div class="row flex-row flex-nowrap pb-3 no-scroll-bar" style="overflow-x: auto;">

                <div v-for="n in parseInt(numberr)" :key="n" class="col-md-3 mr-4 col-7 p-1">
                    <div class="bg-dark smallest-event mb-5">
                        <img src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="">
                        <h6 class="text-dark font-weight-bold mt-1">Lorem ipsum dolor sit amet consect etur, adipisicing elit.</h6>
                    </div>
                </div>

            </div>
        </div>

        <!-- Header Three -->
        <div class="container mt-5">
            <hr>
            <h2>Header Three</h2>
            <div class="row">

                <div v-for="n in parseInt(numberr) - 2" :key="n" class="col-md-3 col-12 p-2">
                    <div class="bg-dark small-event">

                    </div>
                </div>
                
            </div>
            <hr>
        </div>

        <!-- Header Four -->
        <div class="container mt-5">
            <h2>New In</h2>
            <div class="row flex-row flex-nowrap pb-3 no-scroll-bar" style="overflow-x: auto;">

                <div v-for="n in parseInt(numberr) - 6 " :key="n" class="col-md-5 col-11 p-2">
                          <div class="index-event-card bg-dark">
                        <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="">
                    </div>

                     <div class="index-event-card-footer text-white text-center p-3">
                        <h5 class="font-weight-bold m-0 p-0">This is an event</h5>
                        <p class="m-0 p-0">Organiser name</p>
                    </div>
                </div>

            </div>
        </div>

        <!--  -->
         <div class="container">
              <footer class="pt-4 my-md-5 pt-md-5 border-top">
                    <div class="row">
                    <div class="col-12 col-md">
                        <img class="mb-2" src="" alt="" width="24" height="24">
                        <small class="d-block mb-3 text-muted">&copy; 2017-2018</small>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Features</h5>
                        <ul class="list-unstyled text-small">
                        <li><a class="text-muted" href="#">Cool stuff</a></li>
                        <li><a class="text-muted" href="#">Random feature</a></li>
                        <li><a class="text-muted" href="#">Team feature</a></li>
                        <li><a class="text-muted" href="#">Stuff for developers</a></li>
                        <li><a class="text-muted" href="#">Another one</a></li>
                        <li><a class="text-muted" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                        <li><a class="text-muted" href="#">Resource</a></li>
                        <li><a class="text-muted" href="#">Resource name</a></li>
                        <li><a class="text-muted" href="#">Another resource</a></li>
                        <li><a class="text-muted" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>About</h5>
                        <ul class="list-unstyled text-small">
                        <li><a class="text-muted" href="#">Team</a></li>
                        <li><a class="text-muted" href="#">Locations</a></li>
                        <li><a class="text-muted" href="#">Privacy</a></li>
                        <li><a class="text-muted" href="#">Terms</a></li>
                        </ul>
                    </div>
                    </div>
                </footer>
        </div>
    </div>
</template>

<script>

    import Wrapper from '../components/ui/Wrapper.vue'

    export default {
        name: 'Home',
        components: {
            Wrapper
        },
        data(){
            return{
                numberr:10,
            }  
        },    
        computed:{

           
        }, 
        methods: {
            
        },  
    }
</script>

<style scoped>
    header{
        /* margin-top: 36px; */
        height: 520px;
        /* background: #fca2115e; */
        background-color: black;
        margin-left: -15px;
        margin-right: -15px;
    }
    .header-img{
        height: 520px;
        width: 100%;
        object-fit: cover;
        object-position: top ;
        opacity: 80%;
        padding: 0px;
        margin: 0px;
    }
    .header-details{
        margin-top: -360px;
        margin-left: 0px;
        margin-right: 0px;
    }
    .header-text{
        font-weight: 800;
        font-size: 48px;
        color: white;
    }
    .header-cta{
        background-color: #F3A13B;
        color: white;
    }
    .index-event-card{
        height: 400px;
        border-radius: 12px;
        z-index: 0;
    }
    .index-event-card img{
        height: 400px;
        border-radius: 12px;
        object-fit: cover;
        width: 100%;
    }
    .index-event-card-footer{
        position: sticky;
        z-index: 999 !important;
        background-color: rgba(0, 0, 0, 0.582);
        height: 72px;
        border-radius: 0px 0px 12px 12px;
        margin-top: -72px;
        width: 100%;
    }
    .smallest-event{
        height: 200px;
        border-radius: 12px;
    }
    .smallest-event img{
        height: 200px;
        width: 100%;
        object-fit: cover;
        border-radius: 12px;
    }
    .small-event{
        height: 300px;
        border-radius: 12px;
    }

/**
any styles you use here are only going to be used by this view
*/
</style>