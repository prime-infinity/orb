<template>
  <div>
    <div class="header"></div>
    <div class="profile-img-layout d-flex align-items-center">
      <!-- C:\xampp\htdocs\orb\public\img\davido.jpg -->
      <img src="img/davido.jpg" alt="" class="profile-img mx-auto  " />
    </div>

    <!--  -->
    <div class="container mt-4">
      <div class="row justify-content-center text-center">
        <div class="col-md-8">
          <h3 class="font-weight-bold">John Doe</h3>
          <p>This is the organsire blurb or something</p>

          <div class="d-flex text-center align-items-center">
            <div class="d-flex mx-auto">
              <span class="org-cont">
                <i class="las la-phone"></i>
              </span>
              <span class="org-cont">
                <i class="las la-envelope"></i>
              </span>
              <span class="org-cont">
                <i class="lab la-twitter"></i>
              </span>
              <span class="org-cont">
                <i class="lab la-instagram"></i>
              </span>
            </div>
          </div>

          <div class="text-content text-left text-muted mt-3">
            <p>
              There are no limits on who can become a great entrepreneur. You
              don’t necessarily need a college degree, a bunch of money in the
              bank to start something that could become the next major success.
              <br /><br />
              However, you do need a strong plan and the drive to see it
              through.
              <br /><br />
              Business success is not based on luck, it’s based on hard work and
              determination, once you set your mind at something and you learn
              how to succeed at it, then you will surely succeed.
              <br /><br />
              Many businesses failed because they don’t have adequate knowledge
              about Entrepreneurship, it’s not enough to have the perfect idea,
              it’s essential to learn how to execute your idea with little or no
              risk and grow your business into becoming a multinational brand.
              <br /><br />
              This Entrepreneurship Course will teach you the key elements
              required to startup and manage a business to become a household
              name.
            </p>

            <p>
              No matter where you are in your business journey. You are most
              likely to fall into any of the following categories:
            </p>
            <ul>
              <li>
                Have an idea, but you’re not sure how to start up a business.
              </li>

              <li>Have no idea, but know you want to start up a business.</li>

              <li>
                Have already started your business and you need to expand your
                business.
              </li>
            </ul>

            <p>
              In whichever category you fall into, you’re at the right place and
              we look forward to helping you! Don’t be the one to live with the
              regret of not starting, it’s time to take actions. Join this class
              and become crystal clear with your business idea, turn the idea in
              your head into a profitable reality, develop your product or
              service, convert your target audience into ideal customers while
              you market your business effectively. Learn about different ways
              to make your business stand out and walk away with a complete
              business-plan and business profile write up guide! Learning about
              your startup is the first step to start a new business and this
              course is here to help you get started in a profitable way.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "organiserProfile",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.header {
  height: 280px;
  background-color: #14213d;
  margin-left: -15px;
  margin-right: -15px;
}
.profile-img {
  width: 200px;
  height: 200px;
  background-color: #f3a13b;
  border-radius: 100%;
  margin-top: -80px;
  object-fit: cover;
}
.org-cont {
  width: 40px;
  height: 40px;
  background: #fee3b8;
  border-radius: 12px;
  margin: 4px;
}
.org-cont i {
  font-size: 24px;
  padding-top: 8px;
  color: #f3a13b;
}
</style>
