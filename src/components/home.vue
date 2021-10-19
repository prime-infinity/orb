<template>
    <div>
        <header class="">
            <div class="">
            </div>
        </header>

        <!-- Alert or Notification -->
        <div class="bd-callout bd-callout-warning">
            <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
            <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.sr-only</code> class.</p>
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
            <div class="row">
                <!-- Cards -->
                <div class="col-md-3">
                    <div class="card shadow-sm p-2">
                        <div class="row no-gutters">
                            <div class="col-5 col-lg-12">
                                <img src="img/davido.jpg" class="card-img my-img-card">
                            </div>
                            <div class="col-7 col-lg-12">
                                <div class="card-details p-2">
                                    <h5 class="font-weight-bold m-0 m-1">Single & Mingle Midnight Party</h5>
                                    <p class="text-muted m-1 p-0">133 Blekker Street, Lagos. Nigeria</p>
                                    <p class="m-1 p-0">Sat, 14th June, 12PM WAT</p>
                                    <p class="text-muted m-1 p-0">Davido Music World</p>
                                </div>
                                <!-- <div class="row mt-2 mb-1">
                                    <div class="col-6">
                                        <button class="btn btn-dark btn-block"> Share</button>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-dark btn-block"> Like</button>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                       
                    </div>
                    <br>
                    <br>
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
        height:480px;
    }

    .notification{
        border-radius: 5px 2px 2px 5px;
        border-left: solid 3px red;
    }

    .bd-callout{padding:1.25rem;margin-top:1.25rem;margin-bottom:1.25rem;border:1px solid #eee;border-left-width:.25rem;border-radius:.25rem}.bd-callout h4{margin-top:0;margin-bottom:.25rem}.bd-callout p:last-child{margin-bottom:0}.bd-callout code{border-radius:.25rem}.bd-callout+.bd-callout{margin-top:-.25rem}.bd-callout-info{border-left-color:#5bc0de}.bd-callout-info h4{color:#5bc0de}.bd-callout-warning{border-left-color:#f0ad4e}.bd-callout-warning h4{color:#f0ad4e}.bd-callout-danger{border-left-color:#d9534f}.bd-callout-danger h4{color:#d9534f}

    .my-img-card{
        height:200px;
        width:100%;
        object-fit:cover;
    }

    .sps--blw {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    background-color: #003666;
    color: #fff !important;
    position:fixed;
    top:0px;
    left:0px;
    margin-top:60px;
    width:100%;
    z-index:4090;

}
</style>
