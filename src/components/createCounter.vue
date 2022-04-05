<template>
  <div class="row justify-content-center counter-main mt-5 pt-5">
    <div class="col-1 mr-1 ml-1 mr-md-0 ml-md-0 text-center">
      <span class="counts" :class="[isInFirst ? 'is-in-here' : '']">1</span>
    </div>

    <div class="col-1 mr-1 ml-1 mr-md-0 ml-md-0 text-center">
      <span class="counts" :class="[isInSecond ? 'is-in-here' : '']">2</span>
    </div>

    <div class="col-1 mr-1 ml-1 mr-md-0 ml-md-0 text-center">
      <span class="counts" :class="[isInThird ? 'is-in-here' : '']">3</span>
    </div>

    <div class="col-1 mr-1 ml-1 mr-md-0 ml-md-0 text-center">
      <span class="counts" :class="[isInFourth ? 'is-in-here' : '']">4</span>
    </div>

    <div class="col-1 mr-1 ml-1 mr-md-0 ml-md-0 text-center">
      <span class="counts" :class="[isInFifth ? 'is-in-here' : '']">5</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "createCounter",
  computed: {
    ...mapState({
      createEventCount: "createEventCount",
    }),

    isInFirst() {
      if (this.createEventCount == 0) {
        return true;
      } else {
        return false;
      }
    },

    isInSecond() {
      if (this.createEventCount == 1) {
        return true;
      } else {
        return false;
      }
    },

    isInThird() {
      if (this.createEventCount == 2) {
        return true;
      } else {
        return false;
      }
    },

    isInFourth() {
      if (this.createEventCount == 3) {
        return true;
      } else {
        return false;
      }
    },

    isInFifth() {
      if (this.createEventCount == 4) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {},
};
</script>

<style scoped>
.counts {
  background-color: #ebf2f2;
  color: #bdc4c4;
  padding: 8px 12px;
  border: 1px solid silver;
  /* margin:7px; */
  font-weight: bold;
  opacity: 0.3;
}
.counts:hover {
  opacity: 1;
  cursor: pointer;
}
.is-in-here {
  background-color: #bf4136;
  color: white;
  opacity: 1;
}
.counter-main > .col-1 {
  padding: 0px !important;
}
</style>
