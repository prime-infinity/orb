<template>
    <div class="">
        <!-- Payout Method -->
        <div class="container d-flex pt-5">
            <div class="mr-auto">
                <h3 class="m-0 font-weight-bold">Payout Method</h3>
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
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 card shadow-sm mt-3">
                    <div class="p-3">
                        <i class="float-right">i</i>
                        <h5 class="font-weight-bold"> <i> i </i> Zenith Bank</h5>
                        <p class="text-muted m-0 p-0">****9878</p>
                        <p class="font-weight-bold m-0 p-0">Osagie Edosa</p>
                    </div>
                </div>

                <div class="col-12 col-md-6 card shadow-sm mt-3">
                    <div class="p-3">
                        <i class="float-right">i</i>
                        <h5 class="font-weight-bold"> <i> i </i> Zenith Bank</h5>
                        <p class="text-muted m-0 p-0">****9878</p>
                        <p class="font-weight-bold m-0 p-0">Osagie Edosa</p>
                    </div>
                </div>
            </div>
            <p class="smal">Add New method.</p>
        </div>

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

        <!-- Add Bank -->
        <div class="container mt-5">
            

            <div class="row justify-content-center mt-5">
                 <div class="col-12 col-md-8">

                    <div class="mb-5">
                        <h3 class="m-0 font-weight-bold">Add Bank</h3>
                        <p class="m-0">Table showing all payout activities.</p>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-12 col-md-6">
                            <label for="eventName" class="">Bank Name<span class="text-danger">*</span> </label>
                            <input  class="form-control customInput">
                        </div>

                       <div class="form-group col-12 col-md-6">
                           <label for="eventName" class="">Account Number <span class="text-danger">*</span> </label>
                            <input  class="form-control customInput">
                        </div>
                    </div>

                </div>
            </div>
            
        </div>

        <!-- Pay TO -->
        <div class="container mt-5">
            <div class="row justify-content-center mt-5">
                 <div class="col-12 col-md-8">

                    <div class="mb-5">
                        <h3 class="m-0 font-weight-bold">Pay To</h3>
                        <p class="m-0">Select the account you want to a make transaction to.</p>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-12">
                            <div class="form-check bg-light p-3 pt-4">
                                <input type="radio" name="" class="form-check-input mx-3" id="">
                                <label for="eventName" class="ml-5"> ****8998  Zenith Bank </label>
                            </div>

                            <p href="" class="bg-light p-3 mt-2">Add Another account</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        
        <!-- Pay Summary -->
        <div class="container mt-5">
            <div class="row justify-content-center mt-5">
                 <div class="col-12 col-md-8">

                    <div class="mb-5">
                        <h3 class="m-0 font-weight-bold">Payout Summary</h3>
                        <p class="m-0">Select the account you want to a make transaction to.</p>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-12">

                            <div class="d-flex bg-light px-5 py-3">
                                <p class="mr-auto">Add Another account</p>
                                <div class="ml-auto text-right">
                                    <h6 class="font-weight-bold m-0">100,000</h6>
                                    <p class="m-0 small">Naira</p>
                                </div>
                            </div>

                            <div class="d-flex bg-white px-5 py-3">
                                <p class="mr-auto">To</p>
                                <div class="ml-auto text-right">
                                    <h6 class="font-weight-bold m-0">****1507</h6>
                                    <p class="m-0 small">Zenith Bank</p>
                                </div>
                            </div>

                            <div class="d-flex bg-light px-5 py-3">
                                <p class="mr-auto">Date</p>
                                <div class="ml-auto text-right">
                                    <h6 class="font-weight-bold m-0">11 April, 2020</h6>
                                    <p class="m-0 small">15:00</p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        

        <!-- <hr class="divider"> -->
        
    </div>

    
</template>

<script>
    export default {
        name: 'Payout',
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
/**
any styles you use here are only going to be used by this view
*/
</style>