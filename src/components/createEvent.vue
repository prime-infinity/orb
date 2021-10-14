<template>
    <div>
       
       <div v-if="!isStarted" class="pre-event">
           <div class="row mt-1 pt-5">
                <div class="col-10 offset-1 col-md-6 offset-md-3 mt-5">
                <button @click="startEventCreation" class="btn customInputButton bg-dark">Create Event</button>
            </div>
           </div>
       </div>

        <div v-if="isStarted" class="container">  

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

    .large-icon-layout{
        margin-left:-100px;
        margin-bottom:-80px;
        
    }
    .large-icon-layout i{
        border:1px solid silver;
        border-radius: 20px;
        background: #EBF2F2;
        padding: 0.6em;
        font-size: 2em;
    }

    .small-icon-layout i{
        border:1px solid silver;
        border-radius: 16px;
        background: #EBF2F2;
        padding: 0.5em;
        font-size: 1.8em;
    }
    
   
</style>