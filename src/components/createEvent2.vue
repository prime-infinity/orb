<template>

    
    <div>

        <!-- multiple date modal -->
        <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content" style="border-radius:15px;">
                   
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row justify-content-center">

                                <div class="col-12 mt-4 mb-4">
                                    <h5>Event Date</h5>
                                    <vueDatePickCustom v-model="date" :hasInputElement="true"></vueDatePickCustom>
                                </div>

                                <div class="col-6 mt-4">
                                    <h5>Event Start Time</h5>
                                    <vue-timepicker format="hh:mm A" v-model="openingTime" close-on-complete></vue-timepicker>
                                </div>

                                <div class="col-6 mt-4">
                                    <h5>Event End Time</h5>
                                    <vue-timepicker format="hh:mm A" v-model="closingTime" close-on-complete></vue-timepicker>
                                </div>

                                <div class="col-6 mb-4">
                                    <button :disabled="cannotAddDate" class="btn customInputButton mt-5" @click="addDateAndTimeMul" data-dismiss="modal">Add</button>
                                </div>

                                <div class="col-6 mb-4">
                                    <button class="btn customInputButton mt-5 bg-white" style="color:red;border:1px solid red;" data-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div> 

        <div class="row mt-3 pt-5 justify-content-center">
            
            <div class="col-12 col-md-8 col-lg-6">
                
                <!-- date icon for large view -->
                <div class="d-none d-md-block large-icon-layout">
                    <i class="las la-info"></i>
                </div>

                <!--date icon for mobile view-->
                <div class="d-md-none text-left small-icon-layout">
                    <i class="las la-info"></i>
                </div>

                <h2 class="mt-2" id="redHeadings">Date & Time</h2>
                <p>Tell your Attendees about your date and time schedule, so they can plan to attend.</p>
                
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item mr-2" @click="selSingle">
                        <a class="nav-link dates-button pt-3 pb-3 font-weight-bold" :class="{ dateSelected:isSingleSelected }">Single</a>
                    </li>

                    <li class="nav-item mr-2" @click="selMultiple">
                        <a class="nav-link dates-button pt-3 pb-3 font-weight-bold" :class="{ dateSelected:isMultipleSelected }" >Multiple</a>
                    </li>

                </ul>

            </div>
        </div>

        <div class="row pt-3 pb-5 justify-content-center">

            <div class="col-12 col-md-8 col-lg-6 pb-5">
                
                <div v-if="isSingleSelected" class="mb-5 pb-5">
                    
                    <p>Explantion For single date</p>
                    
                    <div class="row justify-content-center">

                        <div class="col-12">
                            
                            <!-- Copied from Modal -->
                            <div class="row justify-content-center">

                                <div class="col-12 mt-4">
                                    <h5>Event Date</h5>
                                    <vueDatePickCustom v-model="date" :hasInputElement="true"></vueDatePickCustom>
                                </div>

                                <div class="col-md-6 mt-3">
                                    <h5>Event Start Time</h5>
                                    <vue-timepicker format="hh:mm A" v-model="openingTime" close-on-complete></vue-timepicker>
                                </div>

                                <div class="col-md-6 mt-3">
                                    <h5>Event End Time</h5>
                                    <vue-timepicker format="hh:mm A" v-model="closingTime" close-on-complete></vue-timepicker>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div v-if="isMultipleSelected" class="mb-5 pb-5">

                    <p>Multiple dates events occur sporacically with their time</p>
                    

                    <div class="row justify-content-center">

                        <div v-if="!tooMuchMultipleDates" class="col-12 mb-4 text-right pt-2 pb-2" style="color:silver; cursor:pointer;" data-toggle="modal" data-target="#Modal">
                            <span>+</span> <span>Add Date and assign time</span>
                        </div>

                        <div v-if="tooMuchMultipleDates" class="col-12 mb-4 text-right pt-2 pb-2 text-danger">
                            <span>You have added too much dates, 5 maximum</span>
                        </div>

                        <div class="col-12" v-if="mDates.length < 1">
                            <span class="customInput pt-3 form-control text-center bg-white">
                                You have not added any dates
                            </span>
                        </div>

                        <div class="col-12 border pt-2 pb-2 mb-2" v-for="(date, index) in mDates" :key="date.index">
                            <div class="row">
                                <div class="col-12">
                                    <span class="font-weight-bold">Day {{ index+1  }}</span>
                                </div>
                                <div class="col-12">
                                    <span>Date:</span><span>{{ date.date }}</span>
                                </div>
                                <div class="col-12">
                                    <span>Opening Time:</span><span>{{ date.openingTime.hh +':' +  date.openingTime.mm +' ' + date.openingTime.A}}</span>
                                </div>
                                <div class="col-12">
                                    <span>Closing Time:</span><span>{{ date.closingTime.hh +':' +  date.closingTime.mm +' ' + date.closingTime.A}}</span>
                                </div>
                                <div class="col-2 col-md-1 float-date-remove p-2" @click="removeDate(index)">
                                    <img src="icons/trash.svg" class="img-fluid p-2" alt="removedate">
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>

                <div  v-if="!tooMuchMultipleDates" class="form-button row justify-content-center fixed-bottom bg-white shadow-sm">
                    <div class="col-10 col-lg-6 col-md-8 col-sm-8 mt-1 mb-1">
                        <button :disabled="cannotAddDate" type="submit" class="btn customInputButton">
                            <div @click="getPropOfSing">Save and continue</div>
                        </button>
                    </div>
                </div>

                <div v-if="tooMuchMultipleDates" class="form-button row justify-content-center fixed-bottom bg-white shadow-sm">
                    <div class="col-10 col-lg-6 col-md-8 col-sm-8 mt-1 mb-1 text-danger">
                        <span>You have added too much dates, 5 maximum</span>
                    </div>
                </div>

            </div>
            
        </div>
        
    </div>

</template>

<script>

    //import 'vue-date-pick/dist/vueDatePick.css';
    import '../ui/vueDatePick.css'

    import VueTimepicker from '../ui/vue-timepicker'

    import vueDatePickCustom from '../ui/vueDatePickCustom'
    //import $ from 'jquery'

    export default {
        name: 'createEvent2',
        components: {
            VueTimepicker,
            vueDatePickCustom,
        },
        data(){
            return{
                dataSelection:0,
                date: '',
                openingTime:{
                    hh: '',
                    mm: '',
                    a: ''
                },
                closingTime:{
                    hh: '',
                    mm: '',
                    a: ''
                },
                mDates:[],

            }  
        },  
        computed:{
            cannotAddDate:function(){
                if(this.date.length === 0 || !this.date.trim()){
                    return true
                }
                if(!this.openingTime.hh.trim()){
                    return true
                }
                if(!this.openingTime.mm.trim()){
                    return true
                }
                if(!this.openingTime.A.trim()){
                    return true
                }
                if(!this.closingTime.hh.trim()){
                    return true
                }
                if( !this.closingTime.mm.trim()){
                    return true
                }
                if( !this.closingTime.A.trim()){
                    return true
                }
                else{
                    return false
                }
            },
            tooMuchMultipleDates:function(){
                if(this.mDates.length > 4){
                    return true
                }else{
                    return false
                }
            },
            isSingleSelected:function(){
                if(this.dataSelection == 0){
                    return true;
                }else{
                    return false
                }
            },
            isMultipleSelected:function(){
                if(this.dataSelection == 1){
                    return true;
                }else{
                    return false
                }
            },

        },   
        methods: {
            removeDate:function(e){
                this.mDates.splice(e,1)
            },
            clearDateAndTimeInputs:function(){
                this.date = ''
                this.openingTime.hh = ''
                this.openingTime.mm = ''
                this.openingTime.A = ''
                this.closingTime.hh = ''
                this.closingTime.mm = ''
                this.closingTime.A = ''
            },
            addDateAndTimeMul:function(){
                
                let newDate = {
                    date:this.date,
                    openingTime:this.openingTime,
                    closingTime:this.closingTime
                }

                this.mDates.push(newDate)
                
                //$('#Modal').modal('hide')
                console.log(this.mDates[0])
                //this.date = ''
            },
            selSingle:function(){
                this.dataSelection = 0
                this.clearDateAndTimeInputs()
            },
            selMultiple:function(){
                this.dataSelection = 1
                this.clearDateAndTimeInputs()
            },
           getPropOfSing:function(){
               console.log(this.date)
               console.log(this.openingTime)
               console.log(this.closingTime)

                console.log(this.openingTime.hh)
                console.log(this.openingTime.mm)
                console.log(this.openingTime.A)
                console.log(this.closingTime.hh)
                console.log(this.closingTime.mm)
                console.log(this.closingTime.A)

           },

        },  
    }
</script>
