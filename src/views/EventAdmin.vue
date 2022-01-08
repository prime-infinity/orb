<template>
    <div>
      <div class="container d-flex mt-5">
          <div class="mr-auto">
                <h4 class="m-0 font-weight-bold">Name of Event</h4>
                <p class="m-0"><span class="font-weight-bold">Unpublished</span> May, 2012</p>
            </div>

            <div class="ml-auto">
                <a href="" class="btn btn-dark btn-block text-white">
                    <p class="m-0 text-muted">Create</p>
                </a>
            </div>
        </div>

        <div class="container mt-4">
        <div class="row">
            <div class="col-md-9 mb-4">
                <!-- Ticket Graph and Ads -->
                <div class="row">
                    <!-- Ticket -->
                    <div class="col-md-9 mb-4">
                        <div class="ticket-sales-graph">

                        </div>

                        <div class="text-right text-muted flip-button">
                            <a href="" class="small">See Graph</a>
                        </div>
                    </div>
                    <!-- Ads -->
                    <div class="col-md-3 mb-4">
                        <div class="ads p-3">
                            <div class="pt-5">
                                <h5>Advertisment</h5>
                                <p class="small">Lorem ipsum dolor sit, amet consectetur adipisici</p>
                                <a class="btn promote-btn" href="">Promote</a>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <!-- End of Ticket Graph & Ads -->

                <div class="container attendees py-3 mt-4">
                    <div class="py-2 px-2">
                        <div class="row"> 
                            <div class="col-md-6">
                                <label class="sr-only" for="">Search</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="las la-search"></i></div>
                                    </div>
                                    <input type="text" class="form-control event-form-input"  placeholder="Search">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <select class="custom-select form-control" id="" required>
                                    <option selected  value="">1</option>
                                    <option>2</option>
                                </select>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-warning event-form-button btn-block">Search</button>
                            </div>
                        </div>
                    </div>
                  
                    <div class="table-responsive p-3">
                        <table class="table table-striped mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>phone</th>
                                    <th>Ticket</th>
                                    <th>Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  
                </div>
              
            
            </div>
            <!-- Side Section -->
            <div class="col-md-3 mb-4 side-section">
                <div class="missing-info">

                </div>
                <div class="img-edit">

                </div>
            </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'EventAdmin',
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
    .side-section{
        background-color: rgb(252, 252, 252);
        border-radius: 12px;
    }
    .side-section div{
        margin-top: 24px;
        height: 160px;
        border-radius: 12px;
        background-color: white;
    }
    .ticket-sales-graph{
        height: 280px;
        width: 100%;
        background-color: lightgray;
        border-radius: 12px;
    }
    .ads{
        height: 100%;
        width: 100%;
        background-color: #FEE3B8;
        border-radius: 12px;
    }
    .promote-btn{
        border-radius: 12px;
        background-color: #FDD086;
    }
    .attendees{
        border-radius: 12px;
        background-color: rgb(252, 252, 252);
    }
    .flip-button{
        margin-top: -32px;
        margin-right: 8px;
    }
    .flip-button a{
        padding: 4px;
        border-radius: 4px;
        background-color: #FEE3B8;
        color: black;
        font-style: italic;
    }
    tr{
        border: none;
        /* border-top-left-radius: 24px; */
        padding-top: 8px;
    }
    td{
        border: none;
    }
    thead tr th{
        font-size: 12px;
        font-weight: 700;
    }
    tbody tr td{
        font-weight: 400;
        font-size: 14px;
        color: lightslategray;
        background-color: transparent !important;
    }
    .table-striped tbody tr:nth-of-type(odd) {
        /* box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; */
        border: none;
        /* border: solid red 1px; */
    }
    .input-group-text{
        background: white;
        font-size: 1.2em;
        border-right:none;
    }
    .event-form-input{
        border-left: none;
    }
    .form-control:hover,.form-control:active,.form-control:focus{
        outline: none;
        box-shadow: none;
    }
</style>
