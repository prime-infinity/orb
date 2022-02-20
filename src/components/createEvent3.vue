<template>

    <div>

        <div class="row mt-3 pt-5 justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">

                <!--icon concerning description for large view -->
                <div class="d-none d-md-block large-icon-layout">
                    <i class="las la-image"></i>
                </div>

                <!--icon concerning description for mobile view-->
                <div class="d-md-none text-left small-icon-layout">
                    <i class="las la-image"></i>
                </div>

                <h4 class="mt-2 mb-0" id="redHeadings">Event Images</h4>
                <p class="mt-0 mb-3 text-muted">Upload Event Images that will show your event.</p>

                <div class="row">
                    <div class="col-12">
                    
                        <div class="custom-file-container" data-upload-id="myFirstImage">

                            <label><a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image"></a></label>

                            <label class="custom-file-container__custom-file">
                                <input type="file" class="custom-file-container__custom-file__custom-file-input" accept="image/*" multiple>
                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                <span class="custom-file-container__custom-file__custom-file-control"></span>
                            </label>

                            <div class="custom-file-container__image-preview"></div>

                        </div>
                    
                        <!--<button @click="check">Check Current Status</button>-->
                    </div>
                </div>

            </div>
        </div>


        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <div v-if="isTextSelected" class="mb-5  pb-5">
                    
                    <!--icon concerning description for large view -->
                <div class="d-none d-md-block large-icon-layout">
                    <i class="las la-scroll"></i>
                </div>

                <!--icon concerning description for mobile view-->
                <div class="d-md-none text-left small-icon-layout">
                    <i class="las la-scroll"></i>
                </div>

                    <h4 class="mt-2 mb-0" id="redHeadings">Description</h4>
                    <p class="mt-0 mb-3 text-muted">Tell your audience stuff about your event.</p>

                    <div class="row justify-content-center">
                        
                        <div class="col-12">
                            <label for="organiserName" class="font-weight-bold">Event Description</label>
                            <input v-model="event.description" type="text" class="form-control customInput" id="organiserName">
                        </div>

                    </div>

                </div>


            </div>
        </div>

          <!-- Footer Button -->
        <div class=" form-button p-2  row justify-content-center border-top fixed-bottom bg-white shadow-sm">
            <div class="col-11 col-md-6 ">
                <div class="row">
                    <div class="col-6 mt-1 mb-1">
                        <!-- Cancel Button -->
                        <button type="submit" class="btn customInputButton customInputButtonTwo">
                            <div v-show="!savingFieldFromCreatEvent3" >Cancel</div>
                            <!-- <span  class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> -->
                        </button>
                    </div>
                    <div class="col-6 mt-1 mb-1">
                       <button :disabled="cannotContinue" type="submit" class="btn customInputButton">
                            <div @click="getData">Save and continue</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /footer Button -->


      
    </div>

</template>

<script>
    import FileUploadWithPreview from "file-upload-with-preview";
    import "file-upload-with-preview/dist/file-upload-with-preview.min.css";


    export default {
        name: 'createEvent3',
        data(){
            return{
                dataSelection:0,
                event:{
                    description:''
                },
                upload: null,
            }  
        },
        components: {
            
        },
        computed:{
            isTextSelected:function(){
                if(this.dataSelection == 0){
                    return true;
                }else{
                    return false
                }
            },

            cannotContinue:function(){
                return true
            },
        },
        watch:{
           
 
        },
        methods:{
            /*fileUploadWithPreview:function(e){
                console.log(e.detail)
            },*/
            imageUploaded:function(e){
                console.log(e.detail.files.size)
                console.log(e.detail.addedFilesCount)//this does mot work very well
            },
            check () {
               console.log(this.upload.cachedFileArray)
            },
            selText:function(){
                this.dataSelection = 0
            },
            selImage:function(){
                this.dataSelection = 1
            },
            getData:function(){
                console.log(this.event.description)
            },
        },
        mounted(){
            window.addEventListener("fileUploadWithPreview:imagesAdded", this.imageUploaded)
            this.upload = new FileUploadWithPreview('myFirstImage',{
                maxFileCount:6,
            })
        }
        
    }
</script>
<style scoped>

</style>
