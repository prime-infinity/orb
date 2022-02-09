<template>
    <div>
         <div class="container d-flex pt-5">
            <div class="mr-auto">
                <h3 class="m-0 font-weight-bold">Account Information</h3>
                <p class="m-0">Page Blurb.</p>
            </div>

            <div class="ml-auto">
                <a href="" class="text-right" data-toggle="modal" data-target="#exampleModal">
                    <h6 class="m-0 font-weight-bold">Change Password</h6>
                    <!-- <p class="m-0 text-muted">edosa@gmail.com</p> -->
                </a>
            </div>

        </div>
        <div class="container">
            <div class="row mt-5">

                <div class="col-md-4">
                    <div class="image-layout">

                    </div>
                </div>

                <div class="col-md-8">
                    <div class="container mt-5">
                        <div class="form-row mb-3">
                            
                            <div class="form-group col-12 col-md-2 ">
                                <label for="" class="">Prefix <span class="text-danger">*</span></label>
                                <select id="" class="customInput form-control select-label" required>

                                    <option value="" selected disabled>Please select option</option>
                                    <option value="Mr"> Mr. </option>
                                    <option value="Mrs"> Mrs. </option>
                                    <option value="Ms"> Ms. </option>
                                    <option value="Miss">. Miss. </option>
                                    <option value="Mx"> Mx </option>
                                    <option value="Dr"> Dr. </option>
                                    <option value="Prof"> Prof. </option>
                                    <option value="Rev"> Rev. </option>

                                </select>
                                <small class="text-danger"></small>
                            </div>

                            <div class="form-group col-12 col-md-5">
                                <label for="idRequirement" class="">First Name <span class="text-danger">*</span></label>
                                <input type="text" class="customInput form-control">
                                
                                <small class="text-danger"></small>
                            </div>

                            <div class="form-group col-12 col-md-5">
                                <label for="idRequirement" class="">Last Name <span class="text-danger">*</span></label>
                                <input type="text" class="customInput form-control">
                                
                                <small class="text-danger"></small>
                            </div>

                            <div class="form-group col-12 col-md-6">
                                <label for="idRequirement" class=""> Email <span class="text-danger">*</span></label>
                                <input type="email" class="customInput form-control">
                            
                                <small class="text-danger"></small>
                            </div>

                            <div class="form-group col-12 col-md-6 ">
                                <label for="ageRequirement" class="">Phone  <span class="text-danger"></span></label>
                            <input type="text" class="customInput form-control" placeholder="">
                                <small class="text-danger"></small>
                            </div>

                            <div class="form-group col-12 col-md-6">
                                <label for="idRequirement" class=""> Job Title <span class="text-danger"></span></label>
                                <input type="text" class="customInput form-control">
                            
                                <small class="text-danger"></small>
                            </div>

                            <div class="form-group col-12 col-md-6 ">
                                <label for="ageRequirement" class="">Company Name <span class="text-danger"></span></label>
                            <input type="text" class="customInput form-control" placeholder="">
                                <small class="text-danger"></small>
                            </div>

                            <div class="form-group col-12 col-md-6 ">
                                <label for="ageRequirement" class="">Blog/Website <span class="text-danger"></span></label>
                            <input type="text" class="customInput form-control" placeholder="">
                                <small class="text-danger"></small>
                            </div>

                        </div>


                        <!-- <hr> -->


                        <h3 class="mt-3">Home Address</h3>
                        <div class="form-row">
                            <div class="form-group col-12 col-md-6 ">
                                <label for="ageRequirement" class="">Address 1 <span class="text-danger">*</span></label>
                                <input type="text" class="customInput form-control" placeholder="">
                                <small class="text-danger"></small>
                            </div>

                            <div class="form-group col-12 col-md-6 ">
                                <label for="ageRequirement" class="">Addrress 2 <span class="text-danger">*</span></label>
                                <input type="text" class="customInput form-control" placeholder="">
                                <small class="text-danger"></small>
                            </div>

                            <div class="form-group col-12 col-md-6 ">
                                <label for="ageRequirement" class="">City <span class="text-danger">*</span></label>
                                <input type="text" class="customInput form-control" placeholder="">
                                <small class="text-danger"></small>
                            </div>


                            <div class="form-group col-12 col-md-6 ">
                                <label for="" class="">Country <span class="text-danger">*</span></label>
                                <select id="" class="customInput form-control select-label" required>

                                    <option value="" selected disabled>Please select option</option>
                                    <option value="Mr"> Mr. </option>
                                    <option value="Mrs"> Mrs. </option>
                                    <option value="Ms"> Ms. </option>
                                    <option value="Miss">. Miss. </option>
                                    <option value="Mx"> Mx </option>
                                    <option value="Dr"> Dr. </option>
                                    <option value="Prof"> Prof. </option>
                                    <option value="Rev"> Rev. </option>

                                </select>
                                <small class="text-danger"></small>
                            </div>
                        </div>
                    </div>
                
                </div>

            </div>
        </div>
        
        <!-- Modal -->
        <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <!-- <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div> -->
                    <div class="modal-body">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-8">
                                    <button type="button" class="close mb-4" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h3 class="text-center mt-4 mb-3">Change Password</h3>

                                     <div class="form-row">
                                        <div class="col-md-6">
                                            <input type="text" class="form-control customInput">
                                        </div>

                                        <div class="col-md-6">
                                            <input type="text" class="form-control customInput">
                                        </div>
                                    </div>

                                    

                                </div>
                            </div>
                            
                        </div>
                    
                    </div>
                  
                </div>
            </div>
        </div>
        <!-- End of Modal -->


    </div>
</template>

<script>
    export default {
        name: 'pg3',
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
    .image-layout{
        width: 100%;
        height: 240px;
        background-color: rgb(250, 250, 250);
    }


    .modal-dialog {
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    .modal-content {
    height: auto;
    height: 100vh;
    border-radius: 0;
    }

    .modal-body {
    overflow-y: auto; 
    }

</style>
