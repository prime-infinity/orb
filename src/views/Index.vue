<template>
    <div>
        
        <mainHeader />

    </div>
</template>

<script>
    import mainHeader from '../components/mainHeader.vue'

    export default {
        name: 'index',
          components: {
            mainHeader,

        },
        computed:{

            component:function(){
                return false
            }
           
        },
        mounted(){

        }
    }

</script>