<template>
  <div>
    <div class="row mt-1 pt-5 justify-content-center">
      <div class="col-11 col-md-8 col-lg-6">
        <h2>About Organiser</h2>
        <h6>Let Attendees Know About Who is Hosting Events.</h6>

        <div class="form-input mb-5">
          <!-- organiser name -->
          <div class=" mb-4">
            <label for="organiserName" class="font-weight-bold"
              >Organiser Name</label
            >
            <input
              v-model="formData.name"
              :placeholder="`${formData.name}`"
              type="text"
              class="form-control customInput"
              id="organiserName"
            />
          </div>

          <!-- description -->
          <div class="mb-4">
            <label for="organiserName" class="font-weight-bold"
              >Short Description</label
            >
            <textarea
              v-model="formData.description"
              :placeholder="`${formData.description}`"
              class="form-control customInput"
              id="organiserName"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <h2 class="mt-5">Contact And Social Media</h2>

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
                  v-model="formData.phone"
                  :placeholder="`${formData.phone}`"
                  type="text"
                  class="form-control customInput"
                  id="organiserNum"
                />
              </div>
            </div>

            <div class="form-group col-12 col-md-6 ">
              <label for="organiserMail" class="font-weight-bold"
                >Email address</label
              >
              <input
                v-model="formData.email"
                :placeholder="`${formData.email}`"
                type="email"
                class="form-control customInput"
                id="organiserMail"
                aria-describedby="emailHelp"
              />
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
                  v-model="formData.instagram"
                  :placeholder="`${formData.instagram}`"
                  type="text"
                  class="form-control customInput"
                  id="organiserInsta"
                />
              </div>
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
                  v-model="formData.twitter"
                  :placeholder="`${formData.twitter}`"
                  type="text"
                  class="form-control customInput"
                  id="organiserTwitter"
                />
              </div>
            </div>
          </div>

          <div class="row text-center" v-if="error">
            <div class="col-12">
              <small class="text-danger">{{ error }}</small>
            </div>
          </div>

          <div
            class="form-button row justify-content-center fixed-bottom bg-white shadow-sm"
          >
            <div class="col-10 col-lg-6 col-md-8 col-sm-8 mt-1 mb-1">
              <button
                :disabled="saving"
                type="submit"
                class="btn customInputButton"
              >
                <div @click="save" v-show="!saving">Save</div>
                <span
                  v-show="saving"
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
import { submitOrgan } from "../../helpers/auth";

export default {
  name: "OrganiserForm",
  data() {
    return {
      saving: false,
      error: null,
      formData: {
        name: "",
        description: "",
        phone: "",
        email: "",
        instagram: "",
        twitter: "",
      },
    };
  },
  computed: {
    ...mapState({
      user: "auth",
    }),
  },
  methods: {
    save: function() {
      this.saving = true;
      this.error = null;

      submitOrgan(this.formData, this.user.token)
        .then((res) => {
          this.saving = false;
          console.log("done saing organ form", res);
        })
        .catch((err) => {
          this.loggin = false;
          err.response?.data
            ? (this.error = err.response.data)
            : (this.error = err.message);
        });
    },
  },
};
</script>
