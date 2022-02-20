<template>
    <div>
        <div class="container mt-5">
            <h2 class="my-5">Likes & Following</h2>
            <div class="row">

                <div class="col-md-8">
                    <div class="event-card">
                        <div class="row">
                            <div class="col-lg-4 col-5">
                                <img src="img/davido.jpg" class="event-card-img" alt="">
                            </div>
                            <div class="col-lg-8 col-7">
                                <h5 class="m-0 mt-3"> Name of Event </h5>
                                <p class="m-0"> Eastwood Lagos Nigeria  </p>
                                <p class="m-0 text-muted"></p>
                                <p class="m-0 mb-2 text-muted">Sat, March 20th</p>
                                <span class="mt-2">
                                    <button class="btn btn-light bg-one">See more</button>
                                    <button class="btn btn-light ml-2">Unlike</button>
                                </span>
                            </div>
                        </div>
                        <hr>
                    </div>

                     <div class="event-card">
                        <div class="row">
                            <div class="col-lg-4 col-5">
                                <img src="img/davido.jpg" class="event-card-img" alt="">
                            </div>
                            <div class="col-lg-8 col-7">
                                <h5 class="m-0 mt-3"> Name of Event </h5>
                                <p class="m-0"> Eastwood Lagos Nigeria  </p>
                                <p class="m-0 text-muted"></p>
                                <p class="m-0 mb-2 text-muted">Sat, March 20th</p>
                                <span class="mt-2">
                                    <button class="btn btn-light bg-one">See more</button>
                                    <button class="btn btn-light ml-2">Unlike</button>
                                </span>
                            </div>
                        </div>
                        <hr>
                    </div>

                    
                   
                </div>

                <div class="col-md-4">

                    <div class="organiser-card p-2">
                        <div class="row">
                            <div class="col-4">
                                <img src="img/davido.jpg" class="organiser-card-img" alt="">
                            </div>
                            <div class="col-8">
                                <h6 class="m-0">Name of Organiser</h6>
                                <p class="m-0 mb-2 text-muted">1120 following</p>
                                <span class="mt-2">
                                    <button class="btn btn-sm btn-light bg-one">View</button>
                                    <button class="btn btn-sm btn-light ml-2">Unfollow</button>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div class="organiser-card p-2">
                    <div class="row">
                        <div class="col-4">
                            <img src="img/davido.jpg" class="organiser-card-img" alt="">
                        </div>
                        <div class="col-8">
                            <h6 class="m-0">Name of Organiser</h6>
                            <p class="m-0 mb-2 text-muted">1120 following</p>
                            <span class="mt-2">
                                <button class="btn btn-sm btn-light bg-one">View</button>
                                <button class="btn btn-sm btn-light ml-2">Unfollow</button>
                            </span>
                        </div>
                    </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pg1',
        data(){
            return{
   
            }  
        },    
        computed:{

           
        }, 
        methods: {
            
        },  
    }
</script>

<style scoped>
    .bg-one{
        background-color: #F3A13B;
    }
   .event-card-img{
        width: 100%;
        height: 160px;
        object-fit: cover;
        border-radius: 16px;
    }

    .organiser-card{
        background-color: rgb(250, 250, 250);
        margin-top: 12px;
        border-radius: 12px;
    }
    .organiser-card-img{
        width: 100%;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
    }


</style>
