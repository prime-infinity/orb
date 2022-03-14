<template>
  <div>
    <InitOrganiser v-on:inited="initCreate" v-if="user.isOrganiser === false" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import InitOrganiser from "./ui/InitOrganiser.vue";

export default {
  name: "organiserProfile",
  data() {
    return {};
  },
  components: {
    InitOrganiser,
  },
  computed: {
    ...mapState({
      user: "auth",
    }),
  },
  watch: {},
  methods: {
    initCreate: function() {
      console.log("inited");
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
