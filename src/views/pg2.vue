<template>
    <div>
        <div class="container mt-5">
            <!-- <h2 class="my-5">My Page</h2> -->
            <div class="container d-flex pt-5">
                <div class="mr-auto">
                    <h3 class="m-0 font-weight-bold">Page Name</h3>
                    <p class="m-0">Page Blurb.</p>
                </div>

                <div class="ml-auto">
                    <a href="" class="text-right">
                        <h6 class="m-0 font-weight-bold">Edit Profile</h6>
                        <p class="m-0 text-muted">edosa@gmail.com</p>
                    </a>
                </div>

            </div>

            <div class="row">

                <div class="col-md-4 mt-3">
                    <div class="card p-3">
                        <h3 class="font-weight-bold m-0 p-0">1</h3>
                        <p class="text-muted m-0 p-0">Orders</p>
                    </div>
                </div>

                <div class="col-md-4 mt-3">
                    <div class="card p-3">
                        <h3 class="font-weight-bold m-0 p-0">1</h3>
                        <p class="text-muted m-0 p-0">Likes</p>
                    </div>
                </div>

                <div class="col-md-4 mt-3">
                    <div class="card p-3">
                        <h3 class="font-weight-bold m-0 p-0">1</h3>
                        <p class="text-muted m-0 p-0">Following</p>
                    </div>
                </div>

            </div>


            <div class="order mt-5">
                <h4>Orders</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div class="mx-auto align-items-center text-center mb-5">
                    <div class="icon mx-auto">
                        <i class="">t</i>
                    </div>

                    <p class="text-muted font-weight-bold mt-4">No incoming orders</p>

                    <p>
                        <a class="btn btn-light" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Past Orders
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="table-responsive">
                            <table class="table table-striped text-left">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Organiser</th>
                                        <th scope="col">Ticket</th>
                                        <th scope="col">Date & Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                        <img src="" alt="" class="pstOrdImg">  
                                        </th>
                                        <th scope="row">
                                            WIzkid is sitting in city of lagos
                                            <p class="text-muted">Lagos, Nigeria</p>    
                                        </th>
                                        <td><a href="">Joe Boy ENt</a></td>
                                        <td>
                                            <p class="font-weight-bold m-0 p-0">Regular</p>
                                            <p class="text-muted m-0 p-0">4,000</p>
                                        </td>
                                        <td>
                                            <p class="m-0 p-0">Wed Dec 2021</p>
                                            <p class="m-0 p-0 text-muted">1700</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            <hr>
            </div>

            
           
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pg2',
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
    .icon{
        background-color: rgb(250, 250, 250);
        width: 80px;
        height: 80px;
        border-radius: 25% ;
    }
    .icon i{
        font-size: 48px;
        margin: 0px;
        padding: 16px;
    }

    .pstOrdImg{
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background-color: black;
        object-fit: cover;
    }

    .card{
        background-color: rgb(250, 250, 250);
        border-radius: 12px;
        border: none;
    }

</style>
