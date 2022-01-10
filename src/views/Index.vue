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
    import Home from '../components/Home.vue'

    export default {
        name: 'index',
          components: {
            mainHeader,
            createEvent,
            organiserProfile,
            Home,
        },
        computed:{

            component:function(){
                if(this.$route.path === "/"){
                    return "Home"
                }
                if(this.$route.path === "/createevent"){
                    return "createEvent"
                }
                if(this.$route.path === "/forganiserprofile"){
                    return "organiserProfile"
                }
                return false
            }
           
        },
        mounted(){
    
        }
    }

</script>