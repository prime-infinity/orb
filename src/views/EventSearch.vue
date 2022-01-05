<template>
    <div>
           <!-- Modal -->
        <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-body">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <!-- <button type="button" class="close mb-4" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> -->
                            <!-- <h3 class="text-center mt-4 mb-3">Title of the Event</h3> -->


                        </div>
                    </div>
                    
                </div>
               
            </div>
            <div class="modal-footer shadow">
                <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-warning main-color">Apply</button>
            </div>
            </div>
        </div>
        </div>
        <!-- End of Modal -->

        <header class="header p-3">
            <div class="container">
                <div class="row justify-content-center py-4">
                    <div class="col-md-8">

                        <div class="row">
                            <div class="col-9">
                                <!-- <input type="text" class="form-control "> -->
                                <label class="sr-only" for="">Search</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="las la-search"></i></div>
                                    </div>
                                    <input type="text" class="form-control"  placeholder="Search">
                                </div>
                            </div>
                            <div class="col-3">
                                <button class="search-button btn btn-block btn-yellow d-none d-md-block" data-toggle="modal" data-target="#exampleModal">Advanced Search</button>
                                <button class="search-button btn btn-block btn-yellow d-block d-md-none" data-toggle="modal" data-target="#exampleModal"> <i class="la las-search"></i></button>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </header>

        <div class="container mt-5">
            <!-- Nav List -->
            <div class="row flex-row flex-nowrap no-scroll-bar" style="overflow-x: auto;">
                <div class="col-5 col-md-2 text-center my-auto border mr-4 pt-2 pb-2">
                    <span>All</span>
                </div>
                <div class="col-5 col-md-2 text-center my-auto border mr-4 pt-2 pb-2">
                    <span>New</span>
                </div>
                <div class="col-5 col-md-2 text-center my-auto border mr-4 pt-2 pb-2">
                    <span>Art & Culture</span>
                </div>
                <div class="col-5 col-md-2 text-center my-auto border mr-4 pt-2 pb-2">
                    <span>Entertainment</span>
                </div>
                <div class="col-6 col-md-2 text-center my-auto border mr-4 pt-2 pb-2">
                    <span>Charity & Fundraiser</span>
                </div>
                <div class="col-5 col-md-2 text-center my-auto border mr-4 pt-2 pb-2">
                    <span>Politics</span>
                </div>

            </div>

            <!-- Events -->
            <div class="row mt-5">

                <div class="col-md-3 mb-4">
                    <div class="card">
                        <div class="organiser-info p-2">
                            <div class="d-flex">
                                <span>
                                    <img src="" alt="" class="organiser-img">
                                </span>
                                <span>
                                    <h6 class="small font-weight-bold m-0">Davido</h6>
                                    <p class="small m-0">2020 Followers</p>
                                </span>

                            </div>
                        </div>
                        <div class="event-image">
                            <img src="" alt="">
                        </div>
                        
                        <div class="event-info container">

                            <div class="event-date shadow-sm pl-2 pt-1">
                                <p class="p-0">24</p>
                                <h5 class="p-0 font-weight-bold yellow-color" style="margin-top:-24px;">Oct</h5>
                                <p class="p-0 font-weight-bold text-muted" style="margin-top:-16px;">Sat</p>
                            </div>

                            <span class="d-flex mt-2">
                                <span class="mr-auto"> 
                                    <p class="event-tag">Art & Culture</p>
                                </span>

                                <span class="ml-auto">
                                    <p class="font-weight-bold event-price small">Free</p>
                                </span>
                            </span>

                            <div class="event-text m-0">
                                <h5 class="m-0">Single and Mingle Life Party Thor and Dr Sheldon</h5>
                            </div>


                            <p  style="margin-top:-8px;" class="text-muted"><span class="yellow-color">Eastwood </span>Lagos Nigeria</p>


                            <span class="d-flex mb-2">
                                <span class="mr-auto">
                                    <button class="btn btn-light"> <i class="la las-share">t</i> </button>
                                </span>
                                
                                <span class="ml-auto">
                                    <button class="btn btn-yellow"> <i class="la las-love"></i> Save </button>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 mb-4">
                    <div class="card">
                        <div class="organiser-info p-2">
                            <div class="d-flex">
                                <span>
                                    <img src="" alt="" class="organiser-img">
                                </span>
                                <span>
                                    <h6 class="small font-weight-bold m-0">Davido</h6>
                                    <p class="small m-0">2020 Followers</p>
                                </span>

                            </div>
                        </div>
                        <div class="event-image">
                            <img src="" alt="">
                        </div>
                        
                        <div class="event-info container">

                            <div class="event-date shadow-sm pl-2 pt-1">
                                <p class="p-0">24</p>
                                <h5 class="p-0 font-weight-bold yellow-color" style="margin-top:-24px;">Oct</h5>
                                <p class="p-0 font-weight-bold text-muted" style="margin-top:-16px;">Sat</p>
                            </div>

                            <span class="d-flex mt-2">
                                <span class="mr-auto"> 
                                    <p class="event-tag">Art & Culture</p>
                                </span>

                                <span class="ml-auto">
                                    <p class="font-weight-bold event-price small">Free</p>
                                </span>
                            </span>

                            <div class="event-text m-0">
                                <h5 class="m-0">Single and Mingle Life Party Thor and Dr Sheldon</h5>
                            </div>


                            <p  style="margin-top:-8px;" class="text-muted"><span class="yellow-color">Eastwood </span>Lagos Nigeria</p>


                            <span class="d-flex mb-2">
                                <span class="mr-auto">
                                    <button class="btn btn-light"> <i class="la las-share">t</i> </button>
                                </span>
                                
                                <span class="ml-auto">
                                    <button class="btn btn-yellow"> <i class="la las-love"></i> Save </button>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 mb-4">
                    <div class="card">
                        <div class="organiser-info p-2">
                            <div class="d-flex">
                                <span>
                                    <img src="" alt="" class="organiser-img">
                                </span>
                                <span>
                                    <h6 class="small font-weight-bold m-0">Davido</h6>
                                    <p class="small m-0">2020 Followers</p>
                                </span>

                            </div>
                        </div>
                        <div class="event-image">
                            <img src="" alt="">
                        </div>
                        
                        <div class="event-info container">

                            <div class="event-date shadow-sm pl-2 pt-1">
                                <p class="p-0">24</p>
                                <h5 class="p-0 font-weight-bold yellow-color" style="margin-top:-24px;">Oct</h5>
                                <p class="p-0 font-weight-bold text-muted" style="margin-top:-16px;">Sat</p>
                            </div>

                            <span class="d-flex mt-2">
                                <span class="mr-auto"> 
                                    <p class="event-tag">Art & Culture</p>
                                </span>

                                <span class="ml-auto">
                                    <p class="font-weight-bold event-price small">Free</p>
                                </span>
                            </span>

                            <div class="event-text m-0">
                                <h5 class="m-0">Single and Mingle Life Party Thor and Dr Sheldon</h5>
                            </div>


                            <p  style="margin-top:-8px;" class="text-muted"><span class="yellow-color">Eastwood </span>Lagos Nigeria</p>


                            <span class="d-flex mb-2">
                                <span class="mr-auto">
                                    <button class="btn btn-light"> <i class="la las-share">t</i> </button>
                                </span>
                                
                                <span class="ml-auto">
                                    <button class="btn btn-yellow"> <i class="la las-love"></i> Save </button>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 mb-4">
                    <div class="card">
                        <div class="organiser-info p-2">
                            <div class="d-flex">
                                <span>
                                    <img src="" alt="" class="organiser-img">
                                </span>
                                <span>
                                    <h6 class="small font-weight-bold m-0">Davido</h6>
                                    <p class="small m-0">2020 Followers</p>
                                </span>

                            </div>
                        </div>
                        <div class="event-image">
                            <img src="" alt="">
                        </div>
                        
                        <div class="event-info container">

                            <div class="event-date shadow-sm pl-2 pt-1">
                                <p class="p-0">24</p>
                                <h5 class="p-0 font-weight-bold yellow-color" style="margin-top:-24px;">Oct</h5>
                                <p class="p-0 font-weight-bold text-muted" style="margin-top:-16px;">Sat</p>
                            </div>

                            <span class="d-flex mt-2">
                                <span class="mr-auto"> 
                                    <p class="event-tag">Art & Culture</p>
                                </span>

                                <span class="ml-auto">
                                    <p class="font-weight-bold event-price small">Free</p>
                                </span>
                            </span>

                            <div class="event-text m-0">
                                <h5 class="m-0">Single and Mingle Life Party Thor and Dr Sheldon</h5>
                            </div>


                            <p  style="margin-top:-8px;" class="text-muted"><span class="yellow-color">Eastwood </span>Lagos Nigeria</p>


                            <span class="d-flex mb-2">
                                <span class="mr-auto">
                                    <button class="btn btn-light"> <i class="la las-share">t</i> </button>
                                </span>
                                
                                <span class="ml-auto">
                                    <button class="btn btn-yellow"> <i class="la las-love"></i> Save </button>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                
            </div>
           

        </div>

        <div class="container mt-5">
            <div class="row">
                <div class="col-md-2 col-6 p-1">
                    <div class="smallest-event">
                    </div>
                </div>
                <div class="col-md-2 col-6 p-1">
                    <div class="smallest-event">
                    </div>
                </div>
                <div class="col-md-2 col-6 p-1">
                    <div class="smallest-event">
                    </div>
                </div>
                <div class="col-md-2 col-6 p-1">
                    <div class="smallest-event">
                    </div>
                </div>
                <div class="col-md-2 col-6 p-1">
                    <div class="smallest-event">
                    </div>
                </div>
                <div class="col-md-2 col-6 p-1">
                    <div class="smallest-event">
                    </div>
                </div>
            </div>
        </div>

         <div class="container mt-5">
            <!-- Events -->
            <div class="row mt-5">

                <div class="col-md-3 mb-4">
                    <div class="card">
                        <div class="organiser-info p-2">
                            <div class="d-flex">
                                <span>
                                    <img src="" alt="" class="organiser-img">
                                </span>
                                <span>
                                    <h6 class="small font-weight-bold m-0">Davido</h6>
                                    <p class="small m-0">2020 Followers</p>
                                </span>

                            </div>
                        </div>
                        <div class="event-image">
                            <img src="" alt="">
                        </div>
                        
                        <div class="event-info container">

                            <div class="event-date shadow-sm pl-2 pt-1">
                                <p class="p-0">24</p>
                                <h5 class="p-0 font-weight-bold yellow-color" style="margin-top:-24px;">Oct</h5>
                                <p class="p-0 font-weight-bold text-muted" style="margin-top:-16px;">Sat</p>
                            </div>

                            <span class="d-flex mt-2">
                                <span class="mr-auto"> 
                                    <p class="event-tag">Art & Culture</p>
                                </span>

                                <span class="ml-auto">
                                    <p class="font-weight-bold event-price small">Free</p>
                                </span>
                            </span>

                            <div class="event-text m-0">
                                <h5 class="m-0">Single and Mingle Life Party Thor and Dr Sheldon</h5>
                            </div>


                            <p  style="margin-top:-8px;" class="text-muted"><span class="yellow-color">Eastwood </span>Lagos Nigeria</p>


                            <span class="d-flex mb-2">
                                <span class="mr-auto">
                                    <button class="btn btn-light"> <i class="la las-share">t</i> </button>
                                </span>
                                
                                <span class="ml-auto">
                                    <button class="btn btn-yellow"> <i class="la las-love"></i> Save </button>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 mb-4">
                    <div class="card">
                        <div class="organiser-info p-2">
                            <div class="d-flex">
                                <span>
                                    <img src="" alt="" class="organiser-img">
                                </span>
                                <span>
                                    <h6 class="small font-weight-bold m-0">Davido</h6>
                                    <p class="small m-0">2020 Followers</p>
                                </span>

                            </div>
                        </div>
                        <div class="event-image">
                            <img src="" alt="">
                        </div>
                        
                        <div class="event-info container">

                            <div class="event-date shadow-sm pl-2 pt-1">
                                <p class="p-0">24</p>
                                <h5 class="p-0 font-weight-bold yellow-color" style="margin-top:-24px;">Oct</h5>
                                <p class="p-0 font-weight-bold text-muted" style="margin-top:-16px;">Sat</p>
                            </div>

                            <span class="d-flex mt-2">
                                <span class="mr-auto"> 
                                    <p class="event-tag">Art & Culture</p>
                                </span>

                                <span class="ml-auto">
                                    <p class="font-weight-bold event-price small">Free</p>
                                </span>
                            </span>

                            <div class="event-text m-0">
                                <h5 class="m-0">Single and Mingle Life Party Thor and Dr Sheldon</h5>
                            </div>


                            <p  style="margin-top:-8px;" class="text-muted"><span class="yellow-color">Eastwood </span>Lagos Nigeria</p>


                            <span class="d-flex mb-2">
                                <span class="mr-auto">
                                    <button class="btn btn-light"> <i class="la las-share">t</i> </button>
                                </span>
                                
                                <span class="ml-auto">
                                    <button class="btn btn-yellow"> <i class="la las-love"></i> Save </button>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 mb-4">
                    <div class="card">
                        <div class="organiser-info p-2">
                            <div class="d-flex">
                                <span>
                                    <img src="" alt="" class="organiser-img">
                                </span>
                                <span>
                                    <h6 class="small font-weight-bold m-0">Davido</h6>
                                    <p class="small m-0">2020 Followers</p>
                                </span>

                            </div>
                        </div>
                        <div class="event-image">
                            <img src="" alt="">
                        </div>
                        
                        <div class="event-info container">

                            <div class="event-date shadow-sm pl-2 pt-1">
                                <p class="p-0">24</p>
                                <h5 class="p-0 font-weight-bold yellow-color" style="margin-top:-24px;">Oct</h5>
                                <p class="p-0 font-weight-bold text-muted" style="margin-top:-16px;">Sat</p>
                            </div>

                            <span class="d-flex mt-2">
                                <span class="mr-auto"> 
                                    <p class="event-tag">Art & Culture</p>
                                </span>

                                <span class="ml-auto">
                                    <p class="font-weight-bold event-price small">Free</p>
                                </span>
                            </span>

                            <div class="event-text m-0">
                                <h5 class="m-0">Single and Mingle Life Party Thor and Dr Sheldon</h5>
                            </div>


                            <p  style="margin-top:-8px;" class="text-muted"><span class="yellow-color">Eastwood </span>Lagos Nigeria</p>


                            <span class="d-flex mb-2">
                                <span class="mr-auto">
                                    <button class="btn btn-light"> <i class="la las-share">t</i> </button>
                                </span>
                                
                                <span class="ml-auto">
                                    <button class="btn btn-yellow"> <i class="la las-love"></i> Save </button>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 mb-4">
                    <div class="card">
                        <div class="organiser-info p-2">
                            <div class="d-flex">
                                <span>
                                    <img src="" alt="" class="organiser-img">
                                </span>
                                <span>
                                    <h6 class="small font-weight-bold m-0">Davido</h6>
                                    <p class="small m-0">2020 Followers</p>
                                </span>

                            </div>
                        </div>
                        <div class="event-image">
                            <img src="" alt="">
                        </div>
                        
                        <div class="event-info container">

                            <div class="event-date shadow-sm pl-2 pt-1">
                                <p class="p-0">24</p>
                                <h5 class="p-0 font-weight-bold yellow-color" style="margin-top:-24px;">Oct</h5>
                                <p class="p-0 font-weight-bold text-muted" style="margin-top:-16px;">Sat</p>
                            </div>

                            <span class="d-flex mt-2">
                                <span class="mr-auto"> 
                                    <p class="event-tag">Art & Culture</p>
                                </span>

                                <span class="ml-auto">
                                    <p class="font-weight-bold event-price small">Free</p>
                                </span>
                            </span>

                            <div class="event-text m-0">
                                <h5 class="m-0">Single and Mingle Life Party Thor and Dr Sheldon</h5>
                            </div>


                            <p  style="margin-top:-8px;" class="text-muted"><span class="yellow-color">Eastwood </span>Lagos Nigeria</p>


                            <span class="d-flex mb-2">
                                <span class="mr-auto">
                                    <button class="btn btn-light"> <i class="la las-share">t</i> </button>
                                </span>
                                
                                <span class="ml-auto">
                                    <button class="btn btn-yellow"> <i class="la las-love"></i> Save </button>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                
            </div>
           

        </div>

        
        
        
    </div>
</template>

<script>
    export default {
        
        name: 'EventSearch',
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
    .yellow-color{
        color:#FCA311;
    }
    .btn-yellow{
        background-color: #FCA311 !important;
    }
    .organiser-img{
        width: 32px;
        height: 32px;
        object-fit: cover;
        background-color: #FCA311;
        margin-right: 4px;
        border-radius: 8px;
    }
    .header{
        height:160px;
        background-color: #14213D;
        margin: auto -15px;
    }
    input,.search-button{
        height: 56px;
        margin:0px !important;
    }
    .nav-list{
        padding: 8px 16px;
        margin: auto 4px;
        background-color: lightgray;
        border-radius: 4px;   
    }
    .nav-list.active{
        background-color: #FCA311;
    }

  .modal-dialog {
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    .modal-content {
    height: auto;
    height: 100vh;
    border-radius: 0;
    }

    .modal-body {
    overflow-y: auto; }
    /* Event */
    .event-image{
        height: 160px;
        background-color: #14213D;
    }
    .event-image img{
        height: 160px;
        width:100%;
        object-fit: cover;
    }
    .event-date{
        font-size: 16px;
        width:64px;
        height: 64px;
        border-radius: 8px;
        background-color: white;
        margin-top: -36px;
    }
    .event-tag{
        /* margin-top: 12px; */
        padding:2px 4px;
        border-radius: 4px;
        font-size: 12px;
        background-color: #FEE3B8;
    }
    .event-price{
        font-style: italic;
    }
    .event-text{
        margin-top: -12px;
        height: 54px;
        /* background-color: lightgray; */
    }
    .event-text>h5{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    
    .card{
        border:none;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    }
    .card:hover{
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }

    /*  */
    .smallest-event{
        height: 200px;
        border-radius: 12px;
        background-color: lightgray;
    }

    /*  */
    .input-group-text{
        background: white;
        font-size: 1.4em;
        border:none;
    }
    .form-control{
        border: none;
    }
    .form-control:active,.form-control:focus,.form-control:hover{
        outline: none;
        box-shadow: none;
    }
</style>