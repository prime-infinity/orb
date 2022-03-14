<template>
  <div class="pre-event">
    <div class="row mt-1 pt-5">
      <div class="col-10 offset-1 col-md-6 offset-md-3 mt-5 text-center">
        <div>
          <img
            src="img/illustrations/music file2-08.svg"
            class="create-av"
            alt=""
          />
        </div>

        <a class="btn text-center mx-auto">
          <h4 class="m-0 p-0 font-weight-bold mt-2">Become an organiser</h4>
          <p class="m-0 p-0 text-muted" @click="initCreate">
            Get Started <span><i class="las la-arrow-right"></i></span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            voluptatibus molestias recusandae molestiae quibusdam ea sapiente,
            commodi illum ipsum reprehenderit hic aperiam est. Sequi esse
            veniam, reiciendis porro omnis iste.
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InitOrganiser",
  methods: {
    initCreate: function() {
      this.$emit("inited");
    },
  },
};
</script>
<style scoped></style>
