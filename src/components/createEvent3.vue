<template>

    <div>

        <div class="row mt-3 pt-5 justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">

                <!--icon concerning description for large view -->
                <div class="d-none d-md-block large-icon-layout">
                    <i class="las la-info"></i>
                </div>

                <!--icon concerning description for mobile view-->
                <div class="d-md-none text-left small-icon-layout">
                    <i class="las la-info"></i>
                </div>

                <h2 class="mt-2" id="redHeadings">Event Header Image</h2>
                <p>Upload Event Header Image that will show your event.</p>
                
                <div class="row">
                    <div class="col-12 pt-4 mb-5 text-center" id="organImageDiv" style="background-color:#EBF2F2;">   
                        <label role="button" style="display:block;" for="fileInputUser"><img src="/icons/edit.svg" class="img-fluid" alt="image"></label>
                        <input type="file" @change="isChooseProfilePic" ref="inputUser" id="fileInputUser" accept="image/*"/>

                        <!--The part that houses the cropping -->
                        <div class="img-cropper" v-if="buttonToCropOrCancel">
                            <vue-cropper ref="ucropper" :src="profileSrc"/>
                        </div>

                        <!--The button that pops up when changeing profile pic -->
                        <transition enter-active-class="animate__animated animate__bounceInLeft" leave-active-class="animate__animated animate__bounceOutLeft">
                            <div v-if="buttonToCropOrCancel" class="mt-2 mb-2">
                                <button @click="hasCropImage" :disabled="isCropping" type="submit" class="btn customInputButton">
                                    <div v-show="!isCropping">Crop and Update</div>
                                    <span v-show="isCropping" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                </button>
                                <br>
                                <span class="btn btn-link" @click="hasCanceledCroping">Cancel</span> <br>
                            </div>
                        </transition> 
                        <ul style="padding-left:0;">
                            <li style="list-style-type:none;" v-for="eee in imageErrors" :key="eee.message" class="text-danger">
                                {{ eee[0] }}
                            </li>
                        </ul>
                    </div>
                </div>
            
            </div>
        </div>

        <div class="row pt-3 justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">

                <ul class="nav nav-pills nav-fill mb-2 pb-2">
                    <li class="nav-item mr-2" @click="selText">
                        <a class="nav-link dates-button pt-3 pb-3 font-weight-bold" :class="{ dateSelected:isTextSelected }">Add Text</a>
                    </li>

                    <li class="nav-item mr-2" @click="selImage">
                        <a class="nav-link dates-button pt-3 pb-3 font-weight-bold" :class="{ dateSelected:isImageSelected }" >Add Image</a>
                    </li>

                    <li class="nav-item mr-2" @click="selVideo">
                        <a class="nav-link dates-button pt-3 pb-3 font-weight-bold" :class="{ dateSelected:isVideoSelected }" >Add Video</a>
                    </li>

                </ul>

            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <div v-if="isTextSelected" class="mb-5 pb-5">
                    
                    <h2 class="mt-2" id="redHeadings">Description</h2>
                    <p>Tell your audience stuff about your event.</p>

                    <div class="row justify-content-center">
                        
                        <div class="col-12">
                            <label for="organiserName" class="font-weight-bold">Event Blur</label>
                            <input type="text" class="form-control customInput" id="organiserName">
                        </div>

                    </div>

                </div>


                <div class="form-button row justify-content-center fixed-bottom bg-white shadow-sm">
                    <div class="col-10 col-lg-6 col-md-8 col-sm-8 mt-1 mb-1">
                        <button :disabled="cannotContinue" type="submit" class="btn customInputButton">
                            <div @click="getData">Save and continue</div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
      
    </div>

</template>

<script>
    import VueCropper from 'vue-cropperjs';
    import 'cropperjs/dist/cropper.css';
    import Compressor from 'compressorjs';
    export default {
        name: 'createEvent3',
        data(){
            return{
                profileSrc:'',
                buttonToCropOrCancel:false,
                isCropping:false,
                imageErrors:{},
                userProfileImageType : '',
                userProfileImageName : '',
                dataSelection:0,
            }  
        },
        components: {
            VueCropper,
        },
        computed:{
            isTextSelected:function(){
                if(this.dataSelection == 0){
                    return true;
                }else{
                    return false
                }
            },
            isImageSelected:function(){
                if(this.dataSelection == 1){
                    return true;
                }else{
                    return false
                }
            },
            isVideoSelected:function(){
                if(this.dataSelection == 2){
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
            selText:function(){
                this.dataSelection = 0
            },
            selImage:function(){
                this.dataSelection = 1
            },
            selVideo:function(){
                this.dataSelection = 2
            },
            getData:function(){
                console.log('content-type')
            },
            hasCropImage:function(){
                this.isCropping = true
                //let storex = this.$store;
                this.cropImgTwo = this.$refs.ucropper.getCroppedCanvas().toBlob((blob) => {
                    var blobToFile = new File([blob], this.userProfileImageName, {type: this.userProfileImageType, lastModified: Date.now()});
                    var Data = new FormData();

                    /*var settings = { headers:{
                        'content-type':'multipart/form-data'}
                    }*/

                    new Compressor(blobToFile, {
                        quality: 0.5,
                        success(result){

                            var type = result.type
                            var realTypeR = type.split("/");
                            var name = "image."+realTypeR[1];
                            var realFile = new File([result], name, {type: type, lastModified: Date.now()});

                            Data.append('file', realFile);

                            async function Uploadpic(){
                                try {

                                    //const dataFromAsync = await axios.post('/web/changeOrgainProfilePic',Data,settings)
                                    /*storex.commit("changeOrgainImage",dataFromAsync.data);*/
                            
                                } catch (error) {
                                    //console.log(error.response.data.errors);
                                    /*storex.commit("changeOrgainImage",error.response.data.errors);*/
                                }
                            }

                            Uploadpic()

                        },
                        error(err) {
                            console.log(err.message);
                            alert("There was an error processing your image, This does not happen often,Try checking your image or send us a feedback if it continues");
                        },
                            
                    });

                }, 'image/jpeg' );
            },
           hasCanceledCroping:function(){
                this.buttonToCropOrCancel = false
            },
            isChooseProfilePic:function(e){
                const file = e.target.files[0];

                this.userProfileImageType = file.type;
                this.userProfileImageName = file.name;

                if (file.type.indexOf('image/') === -1) {
                    alert('Please select an image file');
                    return;
                }
                if (typeof FileReader === 'function') {
                    const reader = new FileReader();
                        reader.onload = (event) => {
                      
                        this.profileSrc = event.target.result;
                        this.$refs.ucropper.replace(event.target.result);

                    };
                    reader.readAsDataURL(file);
                    this.buttonToCropOrCancel = true
                } else {
                    alert('Sorry, FileReader API not supported');
                }

            },
        },
        mounted(){
            
        }
        
    }
</script>
<style scoped>
    #organImageDiv{
       border-radius: 5px;
    }
    #fileInputUser{
        width:0.1px;
        height:0.1px;
        opacity:0;
        overflow:hidden;
        position:absolute;
        z-index:-1;
    }
</style>
