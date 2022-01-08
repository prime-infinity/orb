<template>
    <div>
      <div class="container d-flex mt-5">
            <div class="mr-auto">
                <h4 class="m-0 font-weight-bold">Manage Event</h4>
                <p class="m-0">Table showing all payout activities.</p>
            </div>

            <div class="ml-auto">
                <a href="" class="btn btn-dark btn-block text-white">
                    <p class="m-0 text-muted">Create Event</p>
                </a>
            </div>
        </div>

        <div class="container mt-5">
            <div class="row no-gutters"> 
                <div class="col-md-5">
                    <!-- <input type="text" class="form-control event-form-input"> -->
                    <label class="sr-only" for="">Search</label>
                    <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="las la-search"></i></div>
                        </div>
                        <input type="text" class="form-control event-form-input"  placeholder="Search">
                    </div>
                </div>
                <div class="col-md-5">
                    <select class="custom-select" id="" required>
                        <option selected  value="">1</option>
                        <option>2</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <button class="event-form-button btn-block">Search events</button>
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6 p-3 event-card">
                    <div class="row">
                        <div class="col-2 text-right">
                            <p class="small m-0 p-0">Sept</p>
                            <h5 class="font-weight-bold m-0 p-0 date-text">21</h5>
                            <p class="m-0 p-0">FRI</p>
                            <p class="m-0 p-0 text-muted">0730</p>
                        </div>
                        <div class="col-10">
                            <h5 class="font-weight-bold m-0 p-0">Wizkid Live in Lagos</h5>
                            <p class="m-0 p-0">Location Address</p>
                            <p class="m-0 p-0 text-muted">Art & Entertainment</p>
                            <p class="m-0 p-0 small">Unpublished</p>
                        </div>
                    </div>
                    
                    <span class="float-right" style="margin-top:-24px;">
                        <i class="las la-ellipsis-h"></i>
                    </span>
                </div>
            </div>
            
        </div>

      

    </div>
</template>

<script>
    export default {
        name: 'Event',
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
.event-form-input{
    height: 56px;
    border-radius: 0px !important;
}
.event-form-button{
    height: 56px;
    border-radius: 0px !important;
}
.event-form-input:hover,.event-form-input:focus,.event-form-input:active{
    box-shadow: none !important;
    outline: none;
}
.event-form-button:hover,.event-form-button:focus.event-form-button:active{
    box-shadow: none;
    outline: none;
}
.custom-select{
    height:56px;
    border-radius: 0px;
}
.btn:focus,.btn:active,.btn:hover,.custom-select:focus,.custom-select:active,.custom-select:hover{
    outline: none;
    box-shadow:none;
}
.event-card{
    border-top: solid 1px white;
    border-bottom: solid 1px white;
}
.event-card:hover{
    border-top: solid 1px lightgray;
    border-bottom: solid 1px lightgray;
    /* background-color: #f6f6f6; */
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.date-text{
    color:#FCA311;
    margin-top: -12px;
    margin-bottom: -12px;
}
 /*  */
    .input-group-text{
        background: white;
        font-size: 1.4em;
        border-right:none;
    }
    .form-control{
        border-left: none;
    }
</style>
