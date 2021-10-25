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
                
                    <div v-for="n in parseInt(numberr)" :key="n" class="col-sm-12 col-md-4 col-lg-3 mb-4">

                        <div class="event-card shadow">
                            <!-- Event Organiser -->
                            <div class="d-flex px-2 py-3">
                                <span class="event-organiser-img"></span>
                                <span class="px-2">
                                    <h6 class="font-weight-bold p-0 m-0 small">Davido Music Worldwide</h6>
                                    <p class="p-0 m-0 small">1003 followings</p>
                                </span>
                            </div>
                            <!-- Event Image -->
                            <div class="event-card-img ">
                            
                            </div>
                            <!-- Event Date -->
                            <div class="event-card-date m-0 p-0 shadow-sm ml-2 ">
                                <span class="date-day pl-2">14</span>
                                <h6 class="date-month pl-2">Oct</h6>
                                <span class="date-weekday pl-2 text-muted">Sat</span>
                            </div>
                            <!-- Event Details -->
                            <div class="event-details mt-4 px-2 py-2">
                                <span class="event-feature small">Featured</span>
                                <h5 class="event-text-header mt-2">Single and Mingle Midnight Party Thor & Dr Jones Sheldon.e & Mingle Midnight Party Thor & Dr Jones Sheldon.</h5>
                                <p class="event-location text-muted mb-3">Eastwest, Lagos Nigeria</p>

                                <span class="event-love-icon"><i class="la las love">:)</i></span>
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
        name: 'home',
        data(){
            return{
                numberr:10,
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
    .event-card{
        border-radius: 10px;
        border: solid 1px white;
        height: 380px;
        
    }
    .event-card-img{
        height: 120px;
        background-color: lightsalmon;
    }
    .event-text-header{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 18px;
        /* font-weight: bold; */
    }
    .event-organiser-img{
        height: 30px;
        width: 30px;
        background-color: lightgray;
        border-radius: 7px;
    }
    .event-card-date{
        height: 50px;
        width: 50px;
        position: absolute;
        border-radius: 7px;
        margin-top: -28px !important;
        background-color: white;
    }
    .event-feature{
        padding:0.2em 0.5em 0.2em 0.5em;
        border-radius: 5px;
        background-color: #bf41362a;
    }
    .event-love-icon{
        padding: 0.5em;
        border-radius: 25px;
        background-color: rgba(255, 160, 122, 0.329);
    }
    .event-love-icon i{
       color: lightsalmon;
    }
    .event-text-header{
        margin:0px;
    }
    .event-location{
        margin: 0px;
    }
    .date-day{
        font-size: 14px;
    }
    .date-month{
        margin: 0px;
        font-size: 16px;
        font-weight: bold;
        margin-top: -8px;
        margin-bottom: -8px;
        color: lightsalmon;
    }
    .date-weekday{
        /* margin-top: -8px; */
        font-size: 14px;
    }

    .bd-callout{padding:1.25rem;margin-top:1.25rem;margin-bottom:1.25rem;border:1px solid #eee;border-left-width:.25rem;border-radius:.25rem}.bd-callout h4{margin-top:0;margin-bottom:.25rem}.bd-callout p:last-child{margin-bottom:0}.bd-callout code{border-radius:.25rem}.bd-callout+.bd-callout{margin-top:-.25rem}.bd-callout-info{border-left-color:#5bc0de}.bd-callout-info h4{color:#5bc0de}.bd-callout-warning{border-left-color:#f0ad4e}.bd-callout-warning h4{color:#f0ad4e}.bd-callout-danger{border-left-color:#d9534f}.bd-callout-danger h4{color:#d9534f}

    
    @media (min-width: 0.98px) and (max-width: 992px) {
        .my-card{
            height: 180px;
        }
        .card-header-text{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
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
