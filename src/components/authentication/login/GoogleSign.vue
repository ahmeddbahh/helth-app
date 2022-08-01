<template>
  <div class="sigin-in-with-google">
    <GoogleLogin
      ref="googlelogin"
      :params="params"
      :onSuccess="onSuccess"
    ></GoogleLogin>
    <span class="icon"
      ><i class="fa fa-google" aria-hidden="true" @click="loginWithGoogle"></i>
    </span>
  </div>
</template>
<script>
import GoogleLogin from "vue-google-login";
import axios from "axios";
export default {
  name: "GoogleSign",
  components: { GoogleLogin },
  data() {
    return {
      params: {
        clientId:
          "83723923186-vgv7ipm9sgaqmejt8qjubbnqf2eq5rns.apps.googleusercontent.com",
        //   clientSecret: "oyRKAY5vdTL0QyZWXpW2Epn3",
      },
      // only needed if you want to render the button with the google ui
      // renderParams: {
      //   width: 250,
      //   height: 50,
      //   longtitle: true,
      // },
    };
  },
  mounted() {
    this.$refs.googlelogin.$el.style.display="none";
  },
  methods: {
    loginWithGoogle() {
      this.$refs.googlelogin.$el.click();
    },
    onSuccess(googleUser) {
      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
      var profile = googleUser.getBasicProfile();
      //==============
      console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log("Name: " + profile.getName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
      //==============
      // The ID token you need to pass to your backend:
      var id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token: " + id_token);
      axios
        .post("/social_auth/google/", { auth_token: id_token })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.icon {
  cursor: pointer;
  color: white;
  width: 30px;
  height:30px;
  border-radius:5px;
  padding: 5px;
  background-color: #db4437;
  text-align: center;
}
</style>
