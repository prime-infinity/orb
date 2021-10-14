<template>
    <div>
        
        <mainHeader />

        <keep-alive>
            <component v-bind:is="component" />
        </keep-alive>

    </div>
</template>

<script>
    import mainHeader from '../components/mainHeader.vue'
    import createEvent from '../components/createEvent.vue'

    export default {
        name: 'index',
          components: {
            mainHeader,
            createEvent,
        },
        computed:{

            component:function(){
         
                if(this.$route.path === "/createevent"){
                    return "createEvent"
                }
                return false
            }
           
        },
        mounted(){

        }
    }

</script>