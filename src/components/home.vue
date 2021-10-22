<template>
    <div>
        <header class="">
            <div class="">
            </div>
        </header>

        <!-- Alert or Notification -->
        <div class="bd-callout bd-callout-warning">
            <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
            <p>Using color to add meaning only provides a visual indication, which will<code>.sr-only</code> class.</p>
        </div>
        
        <div>
            <!-- Navbar & Showing -->
            <div class="">
                <div class="">
                    <h3>Showing In </h3>
                </div>

               
            </div>

            <!-- Nav -->
            <ul class="nav py-2 sps sps--abv">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            
            <!-- Row and Cards  -->
            <div class=container>
                <div class="row">
                    <!-- Cards -->
                    <div class="col-md-6 col-lg-3">
                        <div class="my-card shadow-sm p-2">
                            <div class="row no-gutters">
                                <div class="col-4 col-md-4 col-lg-12">
                                    <img src="img/davido.jpg" class="card-img my-img-card">
                                    <div class="row no-gutters p-2" style="margin-top:-54px;">
                                        <div class="col-6">
                                            <button class="btn btn-block btn-danger">s</button>
                                        </div>
                                        <div class="col-6">
                                            <button class="btn btn-block btn-danger">s</button>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-8 col-md-8 col-lg-12">
                                    <div class="card-details p-2">

                                        <span class="card-feature small mt-1">Featured</span>

                                        <h5 class="font-weight-bold p-0 m-0 mt-2 card-header-text">Single & Mingle Midnight Party Thor & Dr Jones Sheldon.e & Mingle Midnight Party Thor & Dr Jones Sheldon..</h5>

                                        <p class="text-muted small m-0 p-0">Davido Music World</p>

                                        <p class="text-muted m-0 mt-1 p-0 font-weight-bold card-location">133 Blekker Street, Lagos.</p>

                                        <p class="m-0 mt-0 p-0 card-time">Sat, 14th June, 12PM WAT</p>

                                    </div>

                                </div>
                            </div>
                           
                        </div>
                        <br>
                        <br>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
        

    </div>
</template>

<script>
    export default {
        name: 'home',
        data(){
            return{
                
            }  
        },     
        methods: {
           
        },  
    }
</script>

<style scoped>
    *{
        /* border: solid 1px red; */
    }
    header{
        background:lightgray;
        margin:64px -15px 0px -15px;
        padding: 0px -15px;
        height:400px;
    }

    .notification{
        border-radius: 5px 2px 2px 5px;
        border-left: solid 3px red;
    }

    .bd-callout{padding:1.25rem;margin-top:1.25rem;margin-bottom:1.25rem;border:1px solid #eee;border-left-width:.25rem;border-radius:.25rem}.bd-callout h4{margin-top:0;margin-bottom:.25rem}.bd-callout p:last-child{margin-bottom:0}.bd-callout code{border-radius:.25rem}.bd-callout+.bd-callout{margin-top:-.25rem}.bd-callout-info{border-left-color:#5bc0de}.bd-callout-info h4{color:#5bc0de}.bd-callout-warning{border-left-color:#f0ad4e}.bd-callout-warning h4{color:#f0ad4e}.bd-callout-danger{border-left-color:#d9534f}.bd-callout-danger h4{color:#d9534f}

    .my-card{
        height: 440px;
        background-color: white;
        /* border: solid 2px #BF4136; */
        border: solid 1px #EBF2F2;
        border-radius: 7px;
    }
    .my-img-card{
        border-radius: 7px;
        height:160px;
        width:100%;
        object-fit:cover;
    }
    .card-header-text{
        overflow: hidden;
        /* white-space: nowrap; */
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 18px;
    }
    .card-feature{
        padding:0.2em 1em 0.4em 1em;
        border-radius: 5px;
        background-color: #bf41362a;
    }
    .card-location{
        color: #BF4136 !important;
        font-size: 14px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .card-time{
        font-size: 14px;
    }

    @media (min-width: 0.98px) and (max-width: 992px) {
        .my-card{
            height: 180px;
        }
        .card-header-text{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 16px;
        }
        .card-location{
        color: #BF4136 !important;
        font-size: 14px;
        }
        .card-time{
            font-size: 14px;
        }
    }
    

    .sps--blw {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    background-color: #BF4136;
    color: #fff !important;
    position:fixed;
    top:0px;
    left:0px;
    margin-top:60px;
    width:100%;
    z-index:4090;
    }

   
</style>
