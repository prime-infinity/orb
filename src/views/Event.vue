<template>
    <div>
      <div class="container d-flex mt-5">
            <div class="mr-auto">
                <h3 class="m-0 font-weight-bold">Manage Event</h3>
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
                    <input type="text" class="form-control event-form-input">
                </div>
                <div class="col-md-5">
                    <input type="text" class="form-control event-form-input">
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
                            <p class="m-0 p-0">SEPT</p>
                            <h5 class="font-weight-bold m-0 p-0 date-text">21</h5>
                            <p class="m-0 p-0 font-weight-bold">FRI</p>
                            <p class="m-0 p-0 text-muted">0730</p>
                        </div>
                        <div class="col-10">
                            <h4 class="font-weight-bold m-0 p-0">Wizkid Live in Lagos</h4>
                            <p class="m-0 p-0">Location Address</p>
                            <p class="m-0 p-0 text-muted">Art & Entertainment</p>
                            <p class="m-0 p-0 small">Unpublished</p>
                        </div>
                    </div>
                    
                        <span class="float-right" style="margin-top:-24px;">
                            <i>jhscsjh</i>
                        </span>
                </div>
                  <div class="col-md-6 p-3 event-card">
                    <div class="row">
                        <div class="col-2 text-right">
                            <p class="m-0 p-0">SEPT</p>
                            <h5 class="font-weight-bold m-0 p-0 date-text">21</h5>
                            <p class="m-0 p-0 font-weight-bold">FRI</p>
                            <p class="m-0 p-0 text-muted">0730</p>
                        </div>
                        <div class="col-10">
                            <h4 class="font-weight-bold m-0 p-0">Wizkid Live in Lagos</h4>
                            <p class="m-0 p-0">Location Address</p>
                            <p class="m-0 p-0 text-muted">Art & Entertainment</p>
                            <p class="m-0 p-0 small">Unpublished</p>
                        </div>
                    </div>
                    
                        <span class="float-right" style="margin-top:-24px;">
                            <i>jhscsjh</i>
                        </span>
                </div>
                  <div class="col-md-6 p-3 event-card">
                    <div class="row">
                        <div class="col-2 text-right">
                            <p class="m-0 p-0">SEPT</p>
                            <h5 class="font-weight-bold m-0 p-0 date-text">21</h5>
                            <p class="m-0 p-0 font-weight-bold">FRI</p>
                            <p class="m-0 p-0 text-muted">0730</p>
                        </div>
                        <div class="col-10">
                            <h4 class="font-weight-bold m-0 p-0">Wizkid Live in Lagos</h4>
                            <p class="m-0 p-0">Location Address</p>
                            <p class="m-0 p-0 text-muted">Art & Entertainment</p>
                            <p class="m-0 p-0 small">Unpublished</p>
                        </div>
                    </div>
                    
                        <span class="float-right" style="margin-top:-24px;">
                            <i>jhscsjh</i>
                        </span>
                </div>
                  <div class="col-md-6 p-3 event-card">
                    <div class="row">
                        <div class="col-2 text-right">
                            <p class="m-0 p-0">SEPT</p>
                            <h5 class="font-weight-bold m-0 p-0 date-text">21</h5>
                            <p class="m-0 p-0 font-weight-bold">FRI</p>
                            <p class="m-0 p-0 text-muted">0730</p>
                        </div>
                        <div class="col-10">
                            <h4 class="font-weight-bold m-0 p-0">Wizkid Live in Lagos</h4>
                            <p class="m-0 p-0">Location Address</p>
                            <p class="m-0 p-0 text-muted">Art & Entertainment</p>
                            <p class="m-0 p-0 small">Unpublished</p>
                        </div>
                    </div>
                    
                        <span class="float-right" style="margin-top:-24px;">
                            <i>jhscsjh</i>
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
body{
    background: red !important;;
}
.event-form-input{
    height: 56px;
    border-radius: 0px !important;
}
.event-form-button{
    height: 56px;
    border-radius: 0px !important;
}
.event-card:hover{
    border-top: solid 1px lightgray;
    border-bottom: solid 1px lightgray;
    background-color: #f6f6f6;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.date-text{
    color:#FCA311;
}
</style>
