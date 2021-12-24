<template>
    <div class="">
        
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