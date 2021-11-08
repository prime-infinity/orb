(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d35"],{"73cf":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row pt-4 pt-md-0"},[e("div",{staticClass:"col-12 col-md-7 pt-4"},[e("div",{staticClass:"row pt-4"},[e("div",{staticClass:"col-11 col-md-8 col-lg-6 mx-auto"},[t._m(0),e("form",{on:{submit:function(s){return s.preventDefault(),t.registerUser.apply(null,arguments)}}},[e("div",{staticClass:"form-group mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.name,expression:"userData.name"}],staticClass:"form-control customInput",attrs:{type:"text",id:"exampleInputName1",Placeholder:"Your name"},domProps:{value:t.userData.name},on:{input:function(s){s.target.composing||t.$set(t.userData,"name",s.target.value)}}}),t.errors.name?e("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.name[0]))]):t._e()]),e("div",{staticClass:"form-group mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.email,expression:"userData.email"}],staticClass:"form-control customInput",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",Placeholder:"Email address"},domProps:{value:t.userData.email},on:{input:function(s){s.target.composing||t.$set(t.userData,"email",s.target.value)}}}),t.errors.email?e("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.email[0]))]):t._e()]),e("div",{staticClass:"form-group mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.password,expression:"userData.password"}],staticClass:"form-control customInput",attrs:{type:"password",id:"exampleInputPassword1",Placeholder:"Enter password"},domProps:{value:t.userData.password},on:{input:function(s){s.target.composing||t.$set(t.userData,"password",s.target.value)}}}),t.errors.password?e("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.password[0]))]):t._e()]),e("div",{staticClass:"form-group mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.password_confirmation,expression:"userData.password_confirmation"}],staticClass:"form-control customInput",attrs:{type:"password",id:"exampleInputPasswordConfirm1",Placeholder:"Confirm password"},domProps:{value:t.userData.password_confirmation},on:{input:function(s){s.target.composing||t.$set(t.userData,"password_confirmation",s.target.value)}}})]),t._m(1),e("button",{staticClass:"btn customInputButton",attrs:{disabled:t.registering,type:"submit"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.registering,expression:"!registering"}]},[t._v("Create account")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.registering,expression:"registering"}],staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}})]),e("hr",{staticClass:"divider"}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-9"},[e("button",{staticClass:"btn customInputButton bg-dark",attrs:{disabled:t.registering,type:"submit"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.registering,expression:"!registering"}]},[t._v("Sign up with Google")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.registering,expression:"registering"}],staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}})])]),e("div",{staticClass:"col-3"},[e("button",{staticClass:"btn customInputButton bg-light text-dark",attrs:{disabled:t.registering,type:"submit"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.registering,expression:"!registering"}]},[e("i",{staticClass:"lab la-facebook-f"})]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.registering,expression:"registering"}],staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}})])])]),e("div",{staticClass:"text-center mt-4"},[t._v(" Already have an account "),e("router-link",{attrs:{to:"login"}},[e("a",{attrs:{href:"#"}},[t._v("Sign In")])])],1)])])])]),e("div",{staticClass:"col-12 col-md-5 d-none d-md-block",attrs:{id:"redleft"}})])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"auth-header"},[e("h2",{staticClass:"font-weight-bold  float-left"},[t._v("Sign Up")]),e("h2",{staticClass:"font-weight-bold float-right text-danger"},[t._v("Logo")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row mb-4"},[e("span",{staticClass:"col-11 mx-auto small"},[t._v(" By creating an account you're agreeing with our "),e("a",{staticClass:"text-dark font-weight-bold",attrs:{href:""}},[t._v("Terms of Use ")]),t._v(", "),e("a",{staticClass:"text-dark font-weight-bold",attrs:{href:""}},[t._v("Privacy Policy")]),t._v(", and "),e("a",{staticClass:"text-dark font-weight-bold",attrs:{href:""}},[t._v("Email Notifications")]),t._v(". ")])])}],i=e("5530"),o=e("2f62"),n={name:"register",data:function(){return{userData:{name:"",email:"",password:"",password_confirmation:""},errors:{},registering:!1}},computed:Object(i["a"])({},Object(o["b"])({backendhost:"backendhost"})),methods:{registerUser:function(){var t=this;this.registering=!0,this.$http.post(this.backendhost+"/register",this.userData).then((function(s){console.log(s),t.$store.commit("registerUser",t.userData),t.$router.push("/"),t.registering=!1})).catch((function(s){t.errors=s.response.data.errors,t.registering=!1}))}}},l=n,c=e("2877"),d=Object(c["a"])(l,a,r,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d6d35.c5ef21b8.js.map