<template>
    <div>
       
        <!-- div for basic info -->
        <div class="row mt-3 pt-5 justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <!--Basic Form-->
                <div class="form-input mb-3">

                    <!-- form icon for large view -->
                    <div class="d-none d-md-block large-icon-layout">
                        <i class="las la-info"></i>
                    </div>

                        <!--form icon for mobile view-->
                    <div class="d-md-none text-left small-icon-layout">
                        <i class="las la-info"></i>
                    </div>
                    <!--  -->

                    <h4 class="mt-2" id="redHeadings">Basic Info</h4>
                    <p>Start by telling us basic Information about your event.</p>
                    <div class="form-row">
                        <div class="form-group col-12 col-md-6">
                            <label for="eventName" class="">Event name or title <span class="text-danger">*</span> </label>
                            <input v-model="createMainForm.name" class="form-control customInput" id="eventName">
                            <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
                        </div>

                        <div class="form-group col-12 col-md-6 ">
                            <label for="eventTags" class="">Add Tags <span class="text-danger">*</span></label>
                            <input v-model="createMainForm.tags" class="form-control customInput" id="eventTags">
                            <small v-if="errors.tags" class="text-danger">{{ errors.tags[0] }}</small>
                        </div>

                    </div>


                    <div class="form-row">

                        <div class="form-group col-12 col-md-6 ">
                            <label for="eventType" class="">Event Type <span class="text-danger">*</span></label>
                            <select v-model="createMainForm.type" id="eventType" class="customInput form-control select-label" required>
                                <option value="" selected disabled>Please select option</option>
                                <option  value="0"> Appearance </option>
                                <option  value="1"> Camp, Trip or Retreat </option>
                                <option  value="2"> Competition or Game </option>
                                <option  value="3"> Concert or Performance </option>
                                <option  value="4"> Conference or Convention </option>
                                <option  value="5"> Dinner or Gala </option>
                                <option  value="6"> Festival or Fair </option>
                                <option  value="7"> Meeting or Networking Event </option>
                                <option  value="8"> Others </option>
                                <option  value="9"> Party or Social Gathering </option>
                                <option  value="10"> Race or Endurance Event </option>
                                <option  value="11"> Rally </option>
                                <option  value="12"> Screening </option>
                                <option  value="13"> Seminar </option>
                                <option  value="14"> Tour </option>
                                <option  value="15"> Tournament </option>
                                <option  value="16"> Tradeshow or Expo </option>
                            </select>
                            <small v-if="errors.type" class="text-danger">{{ errors.type[0] }}</small>
                        </div>

                        <div class="form-group col-12 col-md-6  mb-5">
                            <label for="eventCategory" class="">Event Category <span class="text-danger">*</span></label>
                            <select v-model="createMainForm.cat" name="category" id="eventCategory" class="form-control customInput" required>
                                <option value="" selected disabled>Please select option</option>
                                <option value="0">Auto, Boat & Air </option>
                                <option value="1">Business & Professional </option>
                                <option value="2">Causes & Charities</option>
                                <option value="3">Community & Culture</option>
                                <option value="4">Family & Education</option>
                                <option value="5">Fashion & Beauty </option>
                                <option value="6">Film, Media & Entertainment </option>
                                <option value="7">Food & Drink </option>
                                <option value="8">Government & Politics </option>
                                <option value="9">Health & Wellness </option>
                                <option value="10">Home & Lifestyle </option>
                                <option value="11">Music </option>
                                <option value="12">Performing & Visual Arts </option>
                                <option value="13">Religion & Spiritually </option>
                                <option value="14">School Activities </option>
                                <option value="15">STEM </option>
                                <option value="16">Seasonal </option>
                                <option value="17">Sports & Fitness </option>
                                <option value="18">Travel & Outdoor </option>
                            </select>
                            <small v-if="errors.category" class="text-danger">{{ errors.category[0] }}</small>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <!--div for other option -->
        <div class="row mb-5 justify-content-center">
            

            <div class="col-12 col-md-8 col-lg-6 mt-5">

                <div class="form-input mb-3">

                    <!-- form icon for large view -->
                    <div class="d-none d-md-block large-icon-layout">
                        <i class="las la-wrench"></i>
                    </div>

                        <!--form icon for mobile view-->
                    <div class="d-md-none text-left small-icon-layout">
                        <i class="las la-wrench"></i>
                    </div>

                    <h4 class="mt-2" id="redHeadings">Additional Information</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic</p>
                    <div class="form-row">
                        
                        <div class="form-group col-12 col-md-6 ">
                            <label for="idRequirement" class="">Identification Requirement <span class="text-danger">*</span></label>
                            <select v-model="createMainForm.idReq" id="idRequirement" class="customInput form-control select-label" required>

                                <option value="" selected disabled>Please select option</option>
                                <option value="0"> yes </option>
                                <option value="1"> no </option>

                            </select>
                            <small v-if="errors.id" class="text-danger">{{ errors.id[0] }}</small>
                        </div>

                        <div class="form-group col-12 col-md-6 ">
                            <label for="ageRequirement" class="">Age Requirement <span class="text-danger">*</span></label>
                            <select v-model="createMainForm.ageReq" id="ageRequirement" class="customInput form-control select-label" required>

                                <option value="" selected disabled>Please select option</option>
                                <option value="0"> All </option>
                                <option value="1"> 0-10 </option>
                                <option value="2"> 10-16 </option>
                                <option value="3"> 10-18 </option>
                                <option value="4"> 18-above </option>

                            </select>
                            <small v-if="errors.age" class="text-danger">{{ errors.age[0] }}</small>
                        </div>

                    </div>

                </div>

            </div>

        </div>

        <!-- for location -->
        <div class="row mb-5 pb-4 justify-content-center">
            
            <div class="col-12 col-md-8 col-lg-6 mt-3">
                    <!-- form icon for large view -->
                    <div class="d-none d-md-block large-icon-layout">
                        <i class="las la-map-pin"></i>
                    </div>

                        <!--form icon for mobile view-->
                    <div class="d-md-none text-left small-icon-layout">
                        <i class="las la-map-pin"></i>
                    </div>

                    <h4 class="mt-2" id="redHeadings">Location</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic</p>

                <div class="form-row">
                    <div class="form-group col-12">
                        <label for="eventlocation" class="">Event location <span class="text-danger">*</span> </label>
                        <input v-model="createMainForm.location" class="form-control customInput" id="eventlocation">
                        <small v-if="errors.location" class="text-danger">{{ errors.location[0] }}</small>
                    </div>
                </div>

            </div>

        </div>

        <div class=" form-button p-2  row justify-content-center border-top fixed-bottom bg-white shadow-sm">
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
            
        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'createEvent1',
        data(){
            return{
                savingFieldFromCreatEvent:false,
                errors:{},
                createMainForm:{
                    name:'',
                    tags:'',
                    type:'',
                    cat:'',
                    idReq:'',
                    ageReq:'',
                    location:'',
                }
            }  
        },          
        computed:{

             ...mapState({
                createEventErrors:'createEventErrors',
                createEventCount:'createEventCount',
                user:'auth',
            }),
        },
        watch:{
            createEventErrors(e){

                this.errors = e
                
            },
            createEventCount(e){
                if(e == 1 || e == 2 || e == 3 || e == 4 || e == 5){
                    this.errors = {}
                }
            },
        }, 
        methods: {

            saveFieldFrom:function(){
                this.savingFieldFromCreatEvent = true
            }, 
           saveFieldFromCreateEvent:function(){
                this.savingFieldFromCreatEvent = true
                this.errors = {}
                var fromReally = this.createMainForm

                let self = this
                gottcha()
                
                function gottcha(){
                    
                    async function createEventMain(){
                        try {
                            console.log(fromReally)
                            /*const dataFromCreateEvM = await axios.post('/web/createEventMain',{
                                name:fromReally.name,
                                tags:fromReally.tags,
                                type:fromReally.type,
                                category:fromReally.cat,
                                id:fromReally.idReq,
                                age:fromReally.ageReq,
                                location:fromReally.location,
                            })
                            if(dataFromCreateEvM.data == 1){
                                self.$store.commit("incrementEventCounter",dataFromCreateEvM.data)
                            }*/
                            
                        } catch (error) {
                            self.$store.commit("errorInEvent",error.response.data.errors)
                        }
                        self.savingFieldFromCreatEvent = false
                        
                    }

                    createEventMain()

                }

           },
           
        },   
        mounted(){
            /*if(this.user === null){
                    this.$router.push({path:'login'})
            }*/
        }
    }
</script>

