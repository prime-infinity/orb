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
    import organiserProfile from '../components/organiserProfile.vue'
    import home from '../components/home.vue'

    export default {
        name: 'index',
          components: {
            mainHeader,
            createEvent,
            organiserProfile,
            home,
        },
        computed:{

            component:function(){
                if(this.$route.path === "/"){
                    return "home"
                }
                if(this.$route.path === "/createevent"){
                    return "createEvent"
                }
                if(this.$route.path === "/organiserprofile"){
                    return "organiserProfile"
                }
                return false
            }
           
        },
        mounted(){

        }
    }

</script>