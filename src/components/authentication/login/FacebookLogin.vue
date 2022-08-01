<template>
  <div class="facebook-login-btn">
    <facebook-login
      ref="loginfacebook"
      app-id="305053441472361"
      class="face-btn"
      loginLabel="with facebook"
      @sdk-loaded="sdkLoaded"
      @login="onlogin"
    ></facebook-login>
    <div class="icon" @click.prevent="logInWithFacebook"><img src="../../../UI/icons/authentication/facebook.svg" alt="facebook"></div>
  </div>
</template>
<script>
import facebookLogin from "facebook-login-vuejs";
export default {
  mounted() {
    this.$refs.loginfacebook.$el.style.display = "none";
  },
  data() {
    return {
      FB: undefined,
      isconnect: false,
    };
  },
  components: {
    facebookLogin,
  },
  methods: {
    logInWithFacebook() {
      this.$refs.loginfacebook.$el.children[0].click();
    },
    getUserData() {
      this.FB.api("/me?fields=first_name,last_name,id,middle_name,name,picture,email,birthday,gender,location", "GET", { fields: "first_name,last_name,id,middle_name,name,picture,email,birthday,gender,location" }, (user) => {
        // this.personalID = user.id;
        // this.email = user.email;
        // this.name = user.name;
        // this.picture = user.picture.data.url;
        console.log(user);
        // this.$router.push("/about");
      });
    },
    sdkLoaded(payload) {
      this.FB = payload.FB;
      this.isconnect = payload.isConnected;
      if (this.isConnected) this.getUserData();
    },
    onlogin() {
      this.isconnect = true;
      this.getUserData();
    },
  },
};
</script>
<style lang="scss" scoped>
.facebook-login-btn{
.icon{
        width:40px;
        height:40px;
        img{
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
    }
}


</style>
