<template>
    <div class="">
        
        <!-- Payout Activities -->
        <div class="container d-flex mt-5">
            <div class="mr-auto">
                <h3 class="m-0 font-weight-bold">Payout Activities</h3>
                <p class="m-0">Table showing all payout activities.</p>
            </div>

            <div class="ml-auto">
                <a href="" class="text-right">
                    <h6 class="m-0 font-weight-bold">Request Payout</h6>
                    <p class="m-0 text-muted">Bal: NGN 200,000</p>
                </a>
            </div>
        </div>
        <div class="container mt-5">
            <div class="d-flex">
                <div class="mr-auto">
                    <form action="">
                        <input type="text" class="form-control" placeholder="Search activities">
                    </form>
                </div>

                <div class="ml-auto d-flex">
                    <p>Show: All</p>
                    <p class="ml-3">Date</p>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Ref No.</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amout</th>
                        <th scope="col">Status</th>
                        <th scope="col">Bank</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="shadow-sm my-0">
                        <td class="text-muted">03AH345</td>
                        <td>
                            <h6 class="m-0 p-0">3 Jul, 2019</h6>
                            <p class="m-0 p-0 text-muted">4:00pm</p>
                        </td>
                        <td>
                            <h6 class="m-0 p-0">10,000</h6>
                            <p class="m-0 p-0 text-muted">Naira</p>
                        </td>
                        <td>Pending</td>
                        <td>
                            <h6 class="m-0 p-0">KudaBank</h6>
                            <p class="m-0 p-0 text-muted">*****0909</p>
                        </td>
                        <td>Pending</td>
                    </tr>

                    <tr class="shadow-sm my-0">
                        <td class="text-muted">03AH345</td>
                        <td>
                            <h6 class="m-0 p-0">3 Jul, 2019</h6>
                            <p class="m-0 p-0 text-muted">4:00pm</p>
                        </td>
                        <td>
                            <h6 class="m-0 p-0">10,000</h6>
                            <p class="m-0 p-0 text-muted">Naira</p>
                        </td>
                        <td>Pending</td>
                        <td>
                            <h6 class="m-0 p-0">KudaBank</h6>
                            <p class="m-0 p-0 text-muted">*****0909</p>
                        </td>
                        <td>Pending</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>

        <!-- Payout Activities -->
        <div class="container mt-5">
            
            <div class="row justify-content-center mt-5">
                
                <div class="col-12 col-md-8">
                    <div class="mb-5">
                        <h3 class="m-0 font-weight-bold">Request Payout</h3>
                        <p class="m-0">Table showing all payout activities.</p>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-12 col-md-6">
                            <input  class="form-control customInput">
                            <!-- <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small> -->
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <button class="btn btn-block customInputButton btn-dark">Request</button>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
    export default {
        name: 'PayoutActivities',
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
