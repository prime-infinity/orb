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
                    <h6 class="m-0 font-weight-bold">Add Account</h6>
                    <p class="m-0 text-muted">Add new payout account</p>
                </a>
            </div>

        </div>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6  mt-3">
                    <div class="p-3 card">
                        <i class="float-right">i</i>
                        <h5 class="font-weight-bold"> <i> i </i> Zenith Bank</h5>
                        <p class="text-muted m-0 p-0">****9878</p>
                        <p class="font-weight-bold m-0 p-0">Osagie Edosa</p>
                    </div>
                </div>

                <div class="col-12 col-md-6  mt-3">
                    <div class="p-3 card">
                        <i class="float-right">i</i>
                        <h5 class="font-weight-bold"> <i> i </i> Zenith Bank</h5>
                        <p class="text-muted m-0 p-0">****9878</p>
                        <p class="font-weight-bold m-0 p-0">Osagie Edosa</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'PayoutMethod',
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
    .card{
        background-color: rgb(250, 250, 250);
        border-radius: 12px;
        border: none;
    }
</style>