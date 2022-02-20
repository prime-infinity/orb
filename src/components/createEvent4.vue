<template>

    <div>
        <!-- Add Tickett Form -->
        <div class="row mt-3 pt-5 justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                
                <!-- date icon for large view -->
                <div class="d-none d-md-block large-icon-layout">
                    <i class="las la-ticket-alt"></i>
                </div>

                <!--date icon for mobile view-->
                <div class="d-md-none text-left small-icon-layout">
                    <i class="las la-ticket-alt"></i>
                </div>

                <h4 class="mt-2" id="redHeadings">Add Ticket</h4>
                <p>Tell your Attendees about your date and time schedule. <a href="">Learn More</a> </p>
                
                <!-- Tab -->
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item mr-2" @click="selSingle">
                        <a class="nav-link dates-button pt-3 pb-3 font-weight-bold" :class="{ dateSelected:isSingleSelected }">Paid</a>
                    </li>

                    <li class="nav-item mr-2" @click="selMultiple">
                        <a class="nav-link dates-button pt-3 pb-3 font-weight-bold" :class="{ dateSelected:isMultipleSelected }" >Free</a>
                    </li>

                </ul>
                <!-- End Tab -->

                <div class="form-row mt-3">
                    <div class="form-group col-12">
                        <label for="eventName" class="">Ticket Name<span class="text-danger">*</span> </label>
                        <input class="form-control customInput" id="">
                        <small  class="text-danger"></small>
                    </div>

                    <div class="form-group col-6 col-md-3 ">
                        <label for="eventName" class="">Avaliability<span class="text-danger">*</span> </label>
                        <input class="form-control customInput" placeholder="Avaliabilty Quantity" id="">
                        <small  class="text-danger"></small>
                    </div>
                     <div class="form-group col-6 col-md-3 ">
                        <label for="eventName" class="">Price<span class="text-danger">*</span> </label>
                        <input class="form-control customInput" id="" placeholder="$5.00">
                        <small  class="text-danger"></small>
                    </div>

                     <div class="form-group col-12 col-md-6 ">
                         <label for="eventName" class="">When it Starts <span class="text-danger">*</span> </label>
                        <select  id="eventType" class="customInput form-control select-label" required>
                            <option value="" selected disabled>Please select option</option>
                            <option  value="0"> On Start Date </option>
                            <option  value="1"> When  <b>Regular Ticket</b> Ends </option>
                            
                        </select>
                        <small  class="text-danger"></small>
                    </div>

                     <div class="form-group col-md-6">
                        <label for="eventName" class="">Start sales of Ticket<span class="text-danger">*</span> </label>
                        <input class="form-control customInput" placeholder="26th Sept 1994" id="">
                        <small  class="text-danger"></small>
                    </div>
                     <div class="form-group col-md-6">
                        <label for="eventName" class="">End sales of Ticket<span class="text-danger">*</span> </label>
                        <input class="form-control customInput" id="" placeholder="9th Sept 1996">
                        <small  class="text-danger"></small>
                    </div>

                </div>


            </div>
        </div>
        <!-- End Ticket Form -->

        <!-- Ticket List -->
        <div class="row mt-3 mb-5 pt-5 justify-content-center">
            <div class="col-12 col-md-8 col-lg-6 list-group list-group-flush">
                
                <div class="list-group-item d-flex ">
                    <span class="mr-auto">
                        <h5 class="font-weight-bold m-0">Regular</h5>
                        <p class="m-0">$400.00</p>
                        <p class="m-0 text-muted small">Starts Selling Sept 9th 1996</p>
                    </span>

                    <span class="ml-auto">
                        <button class="btn btn-light rounded mr-2"><i class="las la-edit"></i></button>
                        <button class="btn btn-light rounded"><i class="las la-trash"></i></button>
                    </span>
                </div>

                <div class="list-group-item d-flex ">
                    <span class="mr-auto">
                        <h5 class="font-weight-bold m-0">Regular</h5>
                        <p class="m-0">$400.00</p>
                        <p class="m-0 text-muted small">Starts Selling Sept 9th 1996</p>
                    </span>

                    <span class="ml-auto">
                        <button class="btn btn-light rounded mr-2"><i class="las la-edit"></i></button>
                        <button class="btn btn-light rounded"><i class="las la-trash"></i></button>
                    </span>
                </div>

            </div>
        </div>
        <!-- End of List -->
        <br>
        <br>
        <!-- Footer Button -->
        <div class=" form-button p-2 mt-5 row justify-content-center border-top fixed-bottom bg-white shadow-sm">
            <div class="col-11 col-md-6 ">
                <div class="row">
                    <div class="col-6 mt-1 mb-1">
                        <!-- Cancel Button -->
                        <button :disabled="savingFieldFromCreatEvent" type="submit" class="btn customInputButton customInputButtonTwo">
                            <div @click="saveFieldFromCreateEvent" v-show="!savingFieldFromCreatEvent">Cancel</div>
                            <span v-show="savingFieldFromCreatEvent" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="col-6 mt-1 mb-1">
                        <button :disabled="savingFieldFromCreatEvent" type="submit" class="btn customInputButton">
                            <div @click="saveFieldFromCreateEvent" v-show="!savingFieldFromCreatEvent">Continue</div>
                            <span v-show="savingFieldFromCreatEvent" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- /footer Button -->
            
        </div>
        <!-- /Footer Button -->
    </div>

</template>

<script>

    export default {
        name: 'createEvent4',
        data(){
            return{
                
            }  
        },
        computed:{
              
        },
        methods:{
         
        },
        mounted(){
            
        }
        
    }
</script>
<style scoped>

</style>
