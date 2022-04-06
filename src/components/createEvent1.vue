<template>
  <div>
    <!-- div for basic info -->
    <div class="row mt-3 pt-5 justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <!--Basic Form-->
        <div class=" ">
          <!-- form icon for large view -->
          <div class="d-none d-md-block large-icon-layout">
            <i class="las la-info"></i>
          </div>

          <!--form icon for mobile view-->
          <div class="d-md-none text-left small-icon-layout">
            <i class="las la-info"></i>
          </div>
          <!--  -->

          <h4 class="mt-2 mb-0" id="redHeadings">Basic Info</h4>
          <p class="mt-0 mb-3 text-muted small">
            Start by telling us basic Information about your event.
          </p>
          <div class="form-row">
            <div class="form-group col-12">
              <label for="eventName" class=""
                >Event name or title <span class="text-danger">*</span>
              </label>
              <input
                v-model="formData.name"
                class="form-control customInput"
                id="eventName"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-12 col-md-6 ">
              <label for="eventType" class=""
                >Event Type <span class="text-danger">*</span></label
              >
              <select
                v-model="formData.type"
                id="eventType"
                class="customInput form-control select-label"
                required
              >
                <option value="" selected disabled>Please select option</option>
                <option value="Appearance"> Appearance </option>
                <option value="Camp, Trip or Retreat">
                  Camp, Trip or Retreat
                </option>
                <option value="Competition or Game">
                  Competition or Game
                </option>
                <option value="Concert or Performance">
                  Concert or Performance
                </option>
                <option value="Conference or Convention">
                  Conference or Convention
                </option>
                <option value="Dinner or Gala"> Dinner or Gala </option>
                <option value="Festival or Fair"> Festival or Fair </option>
                <option value="Meeting or Networking Event">
                  Meeting or Networking Event
                </option>
                <option value="Others"> Others </option>
                <option value="Party or Social Gathering">
                  Party or Social Gathering
                </option>
                <option value="Race or Endurance Event">
                  Race or Endurance Event
                </option>
                <option value="Rally"> Rally </option>
                <option value="Screening"> Screening </option>
                <option value="Seminar"> Seminar </option>
                <option value="Tour"> Tour </option>
                <option value="Tournament"> Tournament </option>
                <option value="Tradeshow or Expo"> Tradeshow or Expo </option>
              </select>
            </div>

            <div class="form-group col-12 col-md-6  mb-5">
              <label for="eventCategory" class=""
                >Event Category <span class="text-danger">*</span></label
              >
              <select
                v-model="formData.category"
                name="category"
                id="eventCategory"
                class="form-control customInput"
                required
              >
                <option value="" selected disabled>Please select option</option>
                <option value="Auto, Boat & Air">Auto, Boat & Air </option>
                <option value="Business & Professional"
                  >Business & Professional
                </option>
                <option value="Causes & Charities">Causes & Charities</option>
                <option value="Community & Culture">Community & Culture</option>
                <option value="Family & Education">Family & Education</option>
                <option value="Fashion & Beauty">Fashion & Beauty </option>
                <option value="film, Media & Entertainment"
                  >Film, Media & Entertainment
                </option>
                <option value="Food & Drink">Food & Drink </option>
                <option value="Government & Politics"
                  >Government & Politics
                </option>
                <option value="Health & Wellness">Health & Wellness </option>
                <option value="Home & Lifestyle">Home & Lifestyle </option>
                <option value="Music">Music </option>
                <option value="Performing & Visual Arts"
                  >Performing & Visual Arts
                </option>
                <option value="Religion & Spiritually"
                  >Religion & Spiritually
                </option>
                <option value="School Activities">School Activities </option>
                <option value="STEM">STEM </option>
                <option value="Seasonal">Seasonal </option>
                <option value="Sports & Fitness">Sports & Fitness </option>
                <option value="Travel & Outdoor">Travel & Outdoor </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--div for other option -->
    <div class="row justify-content-center">
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

          <h4 class="mt-2 mb-0" id="redHeadings">Additional Information</h4>
          <p class="mt-0 mb-3 text-muted small">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
          </p>
          <div class="form-row">
            <div class="form-group col-12 col-md-6 ">
              <label for="idRequirement" class=""
                >Identification Requirement
                <span class="text-danger">*</span></label
              >
              <select
                v-model="formData.id"
                id="idRequirement"
                class="customInput form-control select-label"
                required
              >
                <option value="" selected disabled>Please select option</option>
                <option value="yes"> yes </option>
                <option value="no"> no </option>
              </select>
            </div>

            <div class="form-group col-12 col-md-6 ">
              <label for="ageRequirement" class=""
                >Age Requirement <span class="text-danger">*</span></label
              >
              <select
                v-model="formData.age"
                id="ageRequirement"
                class="customInput form-control select-label"
                required
              >
                <option value="" selected disabled>Please select option</option>
                <option value="All"> All </option>
                <option value="0-10"> 0-10 </option>
                <option value="10-16"> 10-16 </option>
                <option value="10-18"> 10-18 </option>
                <option value="18-above"> 18-above </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- for location -->
    <div class="row mb-5 pb-5 justify-content-center">
      <div class="col-12 col-md-8 col-lg-6 mt-3 mb-5 pb-5">
        <!-- form icon for large view -->
        <div class="d-none d-md-block large-icon-layout">
          <i class="las la-map-pin"></i>
        </div>

        <!--form icon for mobile view-->
        <div class="d-md-none text-left small-icon-layout">
          <i class="las la-map-pin"></i>
        </div>

        <h4 class="mt-2 mb-0" id="redHeadings">Location</h4>
        <p class="mt-0 mb-3 text-muted">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
        </p>

        <div class="form-row">
          <div class="form-group col-12">
            <label for="eventlocation" class=""
              >Event location <span class="text-danger">*</span>
            </label>
            <input
              v-model="formData.location"
              class="form-control customInput"
              id="eventlocation"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Button -->
    <div
      class=" form-button p-2 mt-5 row justify-content-center border-top fixed-bottom bg-white shadow-sm"
    >
      <div class="col-11 col-md-6 ">
        <div class="row justify-content-center my-2" v-if="errors">
          <div class="col-10 text-center">
            <small class="text-danger">{{ errors }}</small>
          </div>
        </div>
        <div class="row">
          <!--<div class="col-6 mt-1 mb-1">
            
            <button
              :disabled="saving"
              type="submit"
              class="btn customInputButton customInputButtonTwo"
            >
              <div @click="savingForm" v-show="!saving">
                Cancel
              </div>
              <span
                v-show="saving"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          </div>-->
          <div class="col-12 mt-1 mb-1">
            <button
              :disabled="saving"
              type="submit"
              class="btn customInputButton"
            >
              <div @click="savingForm" v-show="!saving">
                Continue
              </div>
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
      <!-- /footer Button -->
    </div>
    <!-- /Footer Button -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { createEventOne } from "../helpers/auth";
export default {
  name: "createEvent1",
  data() {
    return {
      saving: false,
      errors: null,
      formData: {
        name: "",
        type: "",
        category: "",
        id: "",
        age: "",
        location: "",
      },
    };
  },
  computed: {
    ...mapState({
      user: "auth",
    }),
  },
  watch: {},
  methods: {
    savingForm: function() {
      this.saving = true;
      this.errors = null;

      createEventOne(this.formData, this.user.token)
        .then((res) => {
          console.log(res);
          this.$store.commit("incrementEventCounter", 1);
        })
        .catch((err) => {
          this.saving = false;
          this.errors = err;
          console.log(err);
        });
    },
  },
  mounted() {},
};
</script>
