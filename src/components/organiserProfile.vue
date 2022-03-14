<template>
  <div>
    <!-- the first componet will show when user has not inited organ profile, the secons will show on the contuary -->
    <InitOrganiser v-on:inited="initCreate" v-if="user.isOrganiser === false" />
    <OrganiserForm v-if="user.isOrganiser === true" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import InitOrganiser from "./ui/InitOrganiser.vue";
import OrganiserForm from "./ui/OrganiserForm.vue";

export default {
  name: "organiserProfile",
  data() {
    return {};
  },
  components: {
    InitOrganiser,
    OrganiserForm,
  },
  computed: {
    ...mapState({
      user: "auth",
    }),
  },
  watch: {},
  methods: {
    initCreate: function() {
      this.$store.commit("initOrganProfile");
    },
  },
  mounted() {},
};
</script>
