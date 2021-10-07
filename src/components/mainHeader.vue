<template>
    <div>

        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark pt-2 pb-2 pl-4">
            <router-link to="/"><a class="navbar-brand" href="">Logo</a></router-link>

            
        </nav>

    </div>
</template>

<script>
    export default {
        name: 'mainHeader',
        data(){
            return{
                mobileMenu:false,    
            }  
        }, 
    
    }
</script>

<style scoped>

</style>