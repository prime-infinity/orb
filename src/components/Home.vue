<template>
    <div>
        <header>

        </header>

        <!-- Header One -->
        <div class="container mt-5">
            <h2>Header One</h2>
            <div class="row flex-row flex-nowrap pb-3" style="overflow-x: auto;">

                <div v-for="n in parseInt(numberr)" :key="n" class="col-md-4 col-12 p-2">
                    <div class="index-event-card bg-dark">

                    </div>
                    <div class="index-event-card-footer text-white text-center p-3">
                        <h6 class="font-weight-bold m-0 p-0">This is an event</h6>
                        <p class="m-0 p-0">Organiser name</p>
                    </div>
                </div>

            </div>
        </div>
        
        <!-- Header Two -->
        <div class="container mt-5">
            <h2>Header Two</h2>
            <div class="row flex-row flex-nowrap pb-3" style="overflow-x: auto;">

                <div v-for="n in parseInt(numberr)" :key="n" class="col-md-2 col-6 p-1">
                    <div class="bg-dark smallest-event">

                    </div>
                </div>

            </div>
        </div>

        <!-- Header Three -->
        <div class="container mt-5">
            <hr>
            <h2>Header Three</h2>
            <div class="row">

                <div v-for="n in parseInt(numberr) - 2" :key="n" class="col-md-3 col-12 p-2">
                    <div class="bg-dark small-event">

                    </div>
                </div>
                
            </div>
            <hr>
        </div>

        <!-- Header Four -->
        <div class="container mt-5">
            <h2>Header Four</h2>
            <div class="row flex-row flex-nowrap pb-3" style="overflow-x: auto;">

                <div v-for="n in parseInt(numberr) - 6 " :key="n" class="col-md-4 col-12 p-2">
                        <div class="index-event-card bg-dark">
    
                        </div>
                        <div class="index-event-card-footer text-white text-center p-3">
                            <h6 class="font-weight-bold m-0 p-0">This is an event</h6>
                            <p class="m-0 p-0">Organiser name</p>
                        </div>
                </div>

            </div>
        </div>

        <!--  -->
        
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data(){
            return{
                numberr:10,
            }  
        },    
        computed:{

           
        }, 
        methods: {
            
        },  
    }
</script>

<style scoped>
    header{
        /* margin-top: 36px; */
        height: 480px;
        background: #fca2115e;
        margin-left: -15px;
        margin-right: -15px;
    }
    .index-event-card{
        height: 400px;
        border-radius: 12px;
    }

    .index-event-card-footer{
        background-color: rgba(0, 0, 0, 0.356);
        height: 72px;
        margin-top: -72px;
        z-index: inherit;
        border-radius: 0px 0px 12px 12px;
    }
    .smallest-event{
        height: 200px;
        border-radius: 12px;
    }
    .small-event{
        height: 300px;
        border-radius: 12px;
    }
/**
any styles you use here are only going to be used by this view
*/
</style>