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
                                <button class="search-button btn btn-block btn-yellow d-none d-md-block" >Search</button>
                                <button class="search-button btn btn-block btn-yellow d-block d-md-none" > <i class="la las-search"></i></button>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </header>

        <div class="container mt-5">
            <!-- Filter Key -->
            <div class="row">
                <div class="mr-auto mb-4">
                    <select name="" class=" form-control bg-light" id="">
                        <option value="">Category</option>
                    </select>
                </div>
                <div class="ml-auto mb-4">
                    <button class="mb-4 btn btn-light" data-toggle="modal" data-target="#exampleModal">Filter</button>
                </div>
            </div>
            <!-- Nav List -->
            <div class="row flex-row flex-nowrap no-scroll-bar justify-content-center" style="overflow-x: auto;">
                <div class="tags small text-center my-auto  py-2 px-4 mx-2">
                    <span>All</span>
                </div>
                <div class="tags small text-center my-auto py-2 px-4 mx-2">
                    <span>New</span>
                </div>
                <div class="tags small text-center my-auto py-2 px-4 mx-2">
                    <span>Art&Culture</span>
                </div>
                <div class="tags small text-center my-auto py-2 px-4 mx-2">
                    <span>Entertainment</span>
                </div>
                <div class="tags small text-center my-auto py-2 px-4 mx-2">
                    <span>Charity&Fundraiser</span>
                </div>
                <div class="tags small text-center my-auto py-2 px-4 mx-2">
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
                                    <img src="https://images.unsplash.com/photo-1644789430200-f8d8578eacf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" class="organiser-img">
                                </span>
                                <span>
                                    <h6 class="small font-weight-bold m-0">Whogohost Fire</h6>
                                    <p class="small m-0">2020 Followers</p>
                                </span>

                            </div>
                        </div>
                        <div class="event-image">
                            <img src="https://images.unsplash.com/photo-1644783009893-328f6cf43016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
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


                            <span class="d-flex mb-2 event-icon">
                                <span class="mr-auto">
                                    <button class="btn btn-light"> <i class="las la-share"></i> </button>
                                </span>
                                
                                <span class="ml-auto text-white">
                                    <button class="btn btn-yellow text-white"> <i class="las la-bookmark text-white"></i> Save </button>
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
                                    <img src="https://images.unsplash.com/photo-1644785035688-acf0cb61e41a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" class="organiser-img">
                                </span>
                                <span>
                                    <h6 class="small font-weight-bold m-0">Niki Wath</h6>
                                    <p class="small m-0">2020 Followers</p>
                                </span>

                            </div>
                        </div>
                        <div class="event-image">
                            <img src="https://images.unsplash.com/photo-1640622333314-05b7986f1b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
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
                                    <p class="font-weight-bold event-price small">$56,00</p>
                                </span>
                            </span>

                            <div class="event-text m-0">
                                <h5 class="m-0">Single and Mingle Life Party Thor and Dr Sheldon</h5>
                            </div>


                            <p  style="margin-top:-8px;" class="text-muted"><span class="yellow-color">Eastwood </span>Lagos Nigeria</p>


                            <span class="d-flex mb-2 event-icon">
                                <span class="mr-auto">
                                    <button class="btn btn-light"> <i class="las la-share"></i> </button>
                                </span>
                                
                                <span class="ml-auto text-white">
                                    <button class="btn btn-yellow text-white"> <i class="las la-bookmark text-white"></i> Save </button>
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
                                    <img src="https://images.unsplash.com/photo-1644424235234-65dc0c0c98c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" class="organiser-img">
                                </span>
                                <span>
                                    <h6 class="small font-weight-bold m-0">Marvin Group</h6>
                                    <p class="small m-0">2020 Followers</p>
                                </span>

                            </div>
                        </div>
                        <div class="event-image">
                            <img src="https://images.unsplash.com/photo-1644577524390-acb708587c7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80" alt="">
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
                                    <p class="font-weight-bold event-price small">$565,00</p>
                                </span>
                            </span>

                            <div class="event-text m-0">
                                <h5 class="m-0">Single and Mingle Life Party Thor and Dr Sheldon</h5>
                            </div>


                            <p  style="margin-top:-8px;" class="text-muted"><span class="yellow-color">Eastwood </span>Lagos Nigeria</p>


                            <span class="d-flex mb-2 event-icon">
                                <span class="mr-auto">
                                    <button class="btn btn-light"> <i class="las la-share"></i> </button>
                                </span>
                                
                                <span class="ml-auto text-white">
                                    <button class="btn btn-yellow text-white"> <i class="las la-bookmark text-white"></i> Save </button>
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
                                    <img src="https://images.unsplash.com/photo-1644424235234-65dc0c0c98c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" class="organiser-img">
                                </span>
                                <span>
                                    <h6 class="small font-weight-bold m-0">Sultan Ent</h6>
                                    <p class="small m-0">2020 Followers</p>
                                </span>

                            </div>
                        </div>
                        <div class="event-image">
                            <img src="https://images.unsplash.com/photo-1644661847825-56b30afd7f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
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
                                    <p class="font-weight-bold event-price small">$565,00</p>
                                </span>
                            </span>

                            <div class="event-text m-0">
                                <h5 class="m-0">Single and Mingle Life Party Thor and Dr Sheldon</h5>
                            </div>


                            <p  style="margin-top:-8px;" class="text-muted"><span class="yellow-color">Eastwood </span>Lagos Nigeria</p>


                            <span class="d-flex mb-2 event-icon">
                                <span class="mr-auto">
                                    <button class="btn btn-light"> <i class="las la-share"></i> </button>
                                </span>
                                
                                <span class="ml-auto text-white">
                                    <button class="btn btn-yellow text-white"> <i class="las la-bookmark text-white"></i> Save </button>
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
        color:#F3A13B;
    }
    .btn-yellow{
        background-color: #F3A13B !important;
    }
    .organiser-img{
        width: 32px;
        height: 32px;
        object-fit: cover;
        background-color: #F3A13B;
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
        background-color: #F3A13B;
    }
    .tags{
        background: #fafafa;
        border-radius: 4px;
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

    .event-icon i{
        font-size: 20px;
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