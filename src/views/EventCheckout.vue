<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                 
                    <h4 class="text-center mt-4 mb-3">Checkout</h4>
                    <!-- <img src="" alt="" style="height:200px; width:100%; object-fit:cover;" class="bg-light"> -->
                

                    <div class="mt-5">
                        <h3>Contact Information</h3>
                        <p>Logged in as <span class="font-weight-bold">edosaosagieevans@gmail.com</span> Not You</p>

                        <div class="form-row">
                            <div class="col-md-6">
                                <input type="text" class="form-control customInput">
                            </div>

                            <div class="col-md-6">
                                <input type="text" class="form-control customInput">
                            </div>
                        </div>
                    </div>


                     <div class="mt-5">
                        <h3>Payment Method</h3>
                        <p>Logged in as <span class="font-weight-bold">edosaosagieevans@gmail.com</span> Not You</p>
                    </div>
                   
                       <div class="small bg-light p-3">
                        <p class="m-0 p-0">By clicking "Place Order", I accept the <a href="">Terms of Service</a> and have read the <a href="">Privacy Policy</a>. I agree that may <a href="">share my information</a> with the event organizer</p>
                    </div>

                </div>
            </div>
            
        </div>
    
    <footer class="fixed-bottom shadow p-3">
        <div class="d-flex">
            <span class="mr-auto">
                <h6 class="font-weight-bold m-0">Total</h6>
                <p class="m-0">$40,000</p>
            </span>

            <span class="ml-auto">
                <button type="button" class="btn  customInputButton">Place Order</button>
            </span>
        </div>
        
        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
    </footer>
     
    </div>
</template>

<script>
    export default {
        name: 'EventCheckout',
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


</style>
