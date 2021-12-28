<template>
    <div>
        <div class="container mt-5">
            <div class="row mb-5">
                <div class="col-md-6">
                    <div class="header-image mb-3">
                        <img src="" alt="">
                    </div>

                    

                </div>

                <div class="col-md-6 shadow">
                    <span class="event-tag">Art & Culture</span>
                    <h4 class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis adipisci distinctio eius aliquam, ex impedit fugiat illo. Aut delectus</h4>
                    <p  style="margin-top:-8px;" class="text-muted"><span class="yellow-color">Eastwood </span>Lagos Nigeria</p>

                </div>

                <!-- <div class="col-md-12">
                    <div class="other-images d-flex">
                        <div class="other-image m-1">
                            <img src="" alt="">
                        </div>

                         <div class="other-image m-1">
                            <img src="" alt="">
                        </div>

                         <div class="other-image m-1">
                            <img src="" alt="">
                        </div>

                         <div class="other-image m-1">
                            <img src="" alt="">
                        </div>

                    </div>
                </div> -->
            </div>
        </div>

        <div class="shadow-lg footer fixed-bottom mt-5">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'EventView',
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
    
    .header-image{
        background-color: #14213D;
        height: 480px;
    }

    .other-image{
        background-color: #14213D;
        height: 120px;
        width: 120px;
    }


    .footer{
        margin-top:72px;
        height: 72px;
        background-color: white;
    }

    /*  */
    .event-tag{
        /* margin-top: 12px; */
        padding:4px 8px;
        border-radius: 4px;
        font-size: 12px;
        background-color: #FEE3B8;
    }

</style>
