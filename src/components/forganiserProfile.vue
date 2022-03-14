<template>
  <div>
    <InitOrganiser v-on:inited="initCreate" v-if="user.isOrganiser === false" />
    <!--<div
      v-if="isLoadingOrganProfile"
      class="d-flex justify-content-center mt-5 pt-5"
    >
      <div
        class="spinner-border mt-5"
        style="width: 6rem; height: 6rem;"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>-->
    <div v-if="!isLoadingOrganProfile">
      <div v-if="hasOrganProfile" class="row mt-1 pt-5 justify-content-center">
        <div class="col-11 col-md-8 col-lg-6">
          <h2 id="redHeadings">About Organiser</h2>
          <h6>Let Attendees Know About Who is Hosting Events.</h6>

          <div class="form-input mb-5">
            <div
              class="col-12 pt-4 mb-5 text-center"
              id="organImageDiv"
              style="background-color:#EBF2F2;"
            >
              <label
                role="button"
                style="display:block;"
                v-if="
                  organisersProfile[0].organ_picture == 'profileplaceholder.svg'
                "
                for="fileInputUser"
                ><img src="icons/edit.svg" class="img-fluid" alt="image"
              /></label>
              <label
                role="button"
                style="display:block;"
                v-if="
                  organisersProfile[0].organ_picture !==
                    'profileplaceholder.svg'
                "
                for="fileInputUser"
                ><img
                  class="img-fluid"
                  :src="
                    `/storage/userdata/profile/${organisersProfile[0].organ_picture}`
                  "
                  alt="image"
              /></label>
              <small class="text-primary">Click on your image to Update</small>
              <input
                type="file"
                @change="isChooseProfilePic"
                ref="inputUser"
                id="fileInputUser"
                accept="image/*"
              />

              <!--The part that houses the cropping -->
              <div class="img-cropper" v-if="buttonToCropOrCancel">
                <vue-cropper ref="ucropper" :src="profileSrc" />
              </div>

              <!--The button that pops up when changeing profile pic -->
              <transition
                enter-active-class="animate__animated animate__bounceInLeft"
                leave-active-class="animate__animated animate__bounceOutLeft"
              >
                <div v-if="buttonToCropOrCancel" class="mt-2 mb-2">
                  <button
                    @click="hasCropImage"
                    :disabled="isCropping"
                    type="submit"
                    class="btn customInputButton"
                  >
                    <div v-show="!isCropping">Crop and Update</div>
                    <span
                      v-show="isCropping"
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </button>
                  <br />
                  <span class="btn btn-link" @click="hasCanceledCroping"
                    >Cancel</span
                  >
                  <br />
                </div>
              </transition>
              <ul style="padding-left:0;">
                <li
                  style="list-style-type:none;"
                  v-for="eee in imageErrors"
                  :key="eee.message"
                  class="text-danger"
                >
                  {{ eee[0] }}
                </li>
              </ul>
            </div>

            <div class=" mb-4">
              <label for="organiserName" class="font-weight-bold"
                >Organiser Name</label
              >
              <input
                v-model="organisersProfile[0].organ_name"
                :placeholder="`${organisersProfile[0].organ_name}`"
                type="text"
                class="form-control customInput"
                id="organiserName"
              />
              <small v-if="errors.name" class="text-danger">{{
                errors.name[0]
              }}</small>
            </div>

            <div class="mb-4">
              <label for="organiserName" class="font-weight-bold"
                >Short Description</label
              >
              <textarea
                v-model="organisersProfile[0].organ_desc"
                :placeholder="`${organisersProfile[0].organ_desc}`"
                class="form-control customInput"
                id="organiserName"
                cols="30"
                rows="10"
              ></textarea>
              <small v-if="errors.description" class="text-danger">{{
                errors.description[0]
              }}</small>
            </div>

            <h2 class="mt-5" id="redHeadings">Contact And Social Media</h2>

            <div class="form-row">
              <div class="form-group col-12 col-md-6">
                <label for="organiserNum" class="font-weight-bold"
                  >Phone Number</label
                >
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text" id="theAt">+234</div>
                  </div>
                  <input
                    v-model="organisersProfile[0].organ_num"
                    :placeholder="`${organisersProfile[0].organ_num}`"
                    type="text"
                    class="form-control customInput"
                    id="organiserNum"
                  />
                </div>
                <small v-if="errors.number" class="text-danger">{{
                  errors.number[0]
                }}</small>
              </div>

              <div class="form-group col-12 col-md-6 ">
                <label for="organiserMail" class="font-weight-bold"
                  >Email address</label
                >
                <input
                  v-model="organisersProfile[0].organ_email"
                  :placeholder="`${organisersProfile[0].organ_email}`"
                  type="email"
                  class="form-control customInput"
                  id="organiserMail"
                  aria-describedby="emailHelp"
                />
                <small v-if="errors.email" class="text-danger">{{
                  errors.email[0]
                }}</small>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-12 col-md-6 ">
                <label for="organiserInsta" class="font-weight-bold"
                  >Instagram</label
                >
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text" id="theAt">@</div>
                  </div>
                  <input
                    v-model="organisersProfile[0].organ_insta"
                    :placeholder="`${organisersProfile[0].organ_insta}`"
                    type="text"
                    class="form-control customInput"
                    id="organiserInsta"
                  />
                </div>
                <small v-if="errors.instagram" class="text-danger">{{
                  errors.instagram[0]
                }}</small>
              </div>

              <div class="form-group col-12 col-md-6  mb-5">
                <label for="organiserTwitter" class="font-weight-bold"
                  >Twitter</label
                >
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text" id="theAt">@</div>
                  </div>
                  <input
                    v-model="organisersProfile[0].organ_twitter"
                    :placeholder="`${organisersProfile[0].organ_twitter}`"
                    type="text"
                    class="form-control customInput"
                    id="organiserTwitter"
                  />
                </div>
                <small v-if="errors.twitter" class="text-danger">{{
                  errors.twitter[0]
                }}</small>
              </div>
            </div>
          </div>

          <div
            class="form-button row justify-content-center fixed-bottom bg-white shadow-sm"
          >
            <div class="col-10 col-lg-6 col-md-8 col-sm-8 mt-1 mb-1">
              <button
                :disabled="savingOrganInfo"
                type="submit"
                class="btn customInputButton"
              >
                <div @click="saveOrganInfo" v-show="!savingOrganInfo">Save</div>
                <span
                  v-show="savingOrganInfo"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import Compressor from "compressorjs";
import InitOrganiser from "./ui/InitOrganiser.vue";

export default {
  name: "organiserProfile",
  data() {
    return {
      savingOrganInfo: false,
      isLoadingOrganProfile: true,
      errors: {},
      imageErrors: {},
      userProfileImageType: "",
      userProfileImageName: "",
      profileSrc: "",
      buttonToCropOrCancel: false,
      isCropping: false,
    };
  },
  components: {
    VueCropper,
    InitOrganiser,
  },
  computed: {
    ...mapState({
      user: "auth",
      organisersProfile: "organisersProfile",
      newOrganImage: "newOrganImage",
    }),

    hasOrganProfile() {
      //if array is empty no profile
      //if array is not empty, there is profile
      if (this.organisersProfile.length < 1) {
        return false;
      }
      if (this.organisersProfile.length > 0) {
        return true;
      }
      return false;
    },
  },
  watch: {
    organisersProfile() {
      this.isLoadingOrganProfile = false;
    },
    user() {
      if (this.user !== null) {
        this.$store.dispatch("organProfile");
      }
    },
    newOrganImage(e) {
      if (typeof e === "string" || e instanceof String) {
        this.organisersProfile[0].organ_picture = e;
        this.imageErrors = {};
      } else {
        //there is error
        this.imageErrors = e;
      }
      this.isCropping = false;
      this.buttonToCropOrCancel = false;
    },
  },
  methods: {
    initCreate: function() {
      console.log("inited");
    },
    hasCropImage: function() {
      this.isCropping = true;
      let storex = this.$store;
      this.cropImgTwo = this.$refs.ucropper
        .getCroppedCanvas()
        .toBlob((blob) => {
          var blobToFile = new File([blob], this.userProfileImageName, {
            type: this.userProfileImageType,
            lastModified: Date.now(),
          });
          var Data = new FormData();

          /*var settings = { headers:{
                        'content-type':'multipart/form-data'}
                    }*/

          new Compressor(blobToFile, {
            quality: 0.5,
            success(result) {
              var type = result.type;
              var realTypeR = type.split("/");
              var name = "image." + realTypeR[1];
              var realFile = new File([result], name, {
                type: type,
                lastModified: Date.now(),
              });

              Data.append("file", realFile);

              async function Uploadpic() {
                try {
                  /*const dataFromAsync = await axios.post('/web/changeOrgainProfilePic',Data,settings)
                                    storex.commit("changeOrgainImage",dataFromAsync.data);*/
                } catch (error) {
                  //console.log(error.response.data.errors);
                  storex.commit(
                    "changeOrgainImage",
                    error.response.data.errors
                  );
                }
              }

              Uploadpic();
            },
            error(err) {
              console.log(err.message);
              alert(
                "There was an error processing your image, This does not happen often,Try checking your image or send us a feedback if it continues"
              );
            },
          });
        }, "image/jpeg");
    },
    hasCanceledCroping: function() {
      this.buttonToCropOrCancel = false;
    },
    isChooseProfilePic: function(e) {
      const file = e.target.files[0];

      this.userProfileImageType = file.type;
      this.userProfileImageName = file.name;

      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.profileSrc = event.target.result;
          this.$refs.ucropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
        this.buttonToCropOrCancel = true;
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    createOrganProfile: function() {
      /*var organProfileCreatingData = {
        user_id: this.user.id,
        organ_name: this.user.name,
        organ_email: this.user.email,
        organ_picture: "profileplaceholder.svg",
        organ_desc: null,
        organ_num: null,
        organ_insta: null,
        organ_twitter: null,
      };*/

      console.log("is creating");
    },
    saveOrganInfo: function() {
      this.savingOrganInfo = true;
      this.errors = {}
        /*axios.post('/web/saveOrgainInfor',{
                    name : this.organisersProfile[0].organ_name,
                    description : this.organisersProfile[0].organ_desc,
                    number : this.organisersProfile[0].organ_num,
                    email : this.organisersProfile[0].organ_email,
                    instagram: this.organisersProfile[0].organ_insta,
                    twitter: this.organisersProfile[0].organ_twitter,
                })*/
        .then((res) => {
          this.savingOrganInfo = false;
          this.errors = {};
          console.log(res);
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
          this.savingOrganInfo = false;
        });
    },
  },
  mounted() {},
};
</script>
<style scoped>
#organImageDiv {
  border-radius: 5px;
}
#organImageDiv > img {
  object-fit: cover;
}
#chImg {
  border-top: 1px solid silver;
}
#theAt {
  background: #ebf2f2;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 1.2em;
  font-weight: bold;
  width: 64px;
  text-align: center;
}
#fileInputUser {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.shareModal {
  height: 700px;
  overflow-y: scroll;
  padding-top: 10%;
}
@media screen and (min-width: 768px) {
  .shareModal {
    height: 600px;
  }
}
.form-button {
  padding: 0.5em;
}
</style>
