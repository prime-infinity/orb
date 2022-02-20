<template>
    <div>
       
       <div v-if="!isStarted" class="pre-event">
           <div class="row mt-1 pt-5">
                <div class="col-10 offset-1 col-md-6 offset-md-3 mt-5 text-center">
                    <div>
                        <img src="img/create event.png" class="create-av" alt="">
                    </div>

                    <a @click="startEventCreation" class="btn text-center mx-auto">
                        <h4 class="m-0 p-0 font-weight-bold mt-2">Create Event</h4>
                        <p class="m-0 p-0 text-muted">Get Started <span><i class="las la-arrow-right"></i></span></p>
                    </a>
                </div>
           </div>
       </div>

        <div v-if="isStarted" class="container pt-5">  

            <!--create event counter -->
             <createCounter />

            <!-- where all the create event steps are being rendered -->
            <keep-alive>
                <component v-bind:is="component" />
            </keep-alive>

        </div>
        
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import createCounter from './createCounter.vue'
    import createEvent1 from './createEvent1.vue'
    import createEvent2 from './createEvent2.vue'
    import createEvent3 from './createEvent3.vue'
    import createEvent4 from './createEvent4.vue'

    export default {
        name: 'createEvent',
        data(){
            return{
                isStarted:false,
            }
        },
        components:{
            createCounter,
            createEvent1,
            createEvent2,
            createEvent3,
            createEvent4,
        },
        computed:{

            component:function(){

                if(this.createEventCount === 0){
                    return "createEvent1"
                }
                if(this.createEventCount === 1){
                    return "createEvent2"
                }
                if(this.createEventCount === 2){
                    return "createEvent3"
                }
                if(this.createEventCount === 3){
                    return "createEvent4"
                }
                return false
            },
            ...mapState({
                createEventCount:'createEventCount',
            }),

        },
        methods:{
            startEventCreation:function(){
               this.isStarted = true;
           },
        },
        
    }
</script>
<style>
     .pre-event{
        height: 100vh;
        width:100%;
        padding: 0px;
        margin-left: -15px;
        /* margin-right: -25px; */
        z-index: 9999!important;
        position: fixed;
        background-color: white;
    }

    .create-av{
        width: 100%;
        height: 360px;
        object-fit: contain;
    }

    .large-icon-layout{
        margin-left:-100px;
        margin-bottom:-80px;
        
    }
    .large-icon-layout i{
        border:1px solid #F3A13B;
        border-radius: 20px;
        background: #F3A13B;
        color: white;
        padding: 0.6em;
        font-size: 2em;
    }

    .small-icon-layout i{
        border:1px solid #F3A13B;
        border-radius: 16px;
        background: #F3A13B;
        color: white;
        padding: 0.5em;
        font-size: 1.8em;
    }
    
   
</style>