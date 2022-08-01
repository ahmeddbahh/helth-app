<template>
  <div class="register-email-verify" v-if="show">
        <div class="content-wrapper" :class="{'arabic-content':local=='ar'}">
            <h3>{{lang[local].subTitle}}</h3>
            <h5 class="my-2">{{lang[local].txt}}</h5>
            <div class="remaining-time-wrapper d-flex justify-content-between mt-4">
                <div class="d-flex justify-content-center align-items-center">
                    <h5>{{lang[local].remain}} <span class="time">{{remainingTime}} {{lang[local].seconds}}</span></h5>
                </div>
                <Button :disabled="remainingTime !=0" @click.prevent="resend" :label="lang[local].resendBtn" class="p-button-rounded form-btn-submit" />
            </div>
        </div>
  </div>
</template>

<script>
import emailVerifyLang from '../../../mixins/authentication/emailVerifyLang.js';
import backendDomains from '../../helpers/backendDomains.js';
import Button from 'primevue/button';
import axios from "axios";
export default {
  mixins:[emailVerifyLang,backendDomains],
  components: {
        Button,
  },
  data() {
    return {
      local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
      remainingTime:15,
      myAxios:'',
      user:'',
      show:false,
    }
  },
  beforeRouteEnter(to, from, next) {
      if(!localStorage.getItem('user')){
        next({name:"register"})
        return;
      }
      let user=JSON.parse(localStorage.getItem('user')); 
      if(!user.email){
        localStorage.removeItem('user');
        next({name:"register"});
        return;
      }
    next();
  },
  created(){
        this.myAxios =axios.create({
            baseURL: `${this.backendBaseUrl}`,
        });
        this.user=JSON.parse(localStorage.getItem('user'));
        this.checkEmailVerified(); 
  },
  mounted(){
      this.setRemainTime();
  },
  methods:{
      setRemainTime(){
          this.remainingTime = 15 ; 
           let counter =setInterval(()=>{
               if(this.remainingTime >0)
                   this.remainingTime -=1 ;
                if(this.remainingTime ==0){
                    clearInterval(counter);
                }
          },1000);
      },
      sendEmail(){
      this.myAxios
                .post(`${this.backendBaseUrl}/resend-verify-email`,{email:this.user.email})
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                  // console.log(err)
                  this.httpErrorCodesHandling(err);
                })
      },
      resend(){
          if(this.remainingTime==0){
            if(this.user.email){
              this.sendEmail();
            }
            this.setRemainTime();
          }
      },
      checkEmailVerified(){
          this.show=false;
            this.myAxios
            .post(`${this.backendBaseUrl}/check-email-verified`,{email:this.user.email})
            .then(res=>{
                // console.log(res.data.phone_verified)
                if(res.data.email_verified){
                    this.$router.push({name:'registerPhoneVerify'})
                }
                this.show=true;
            })
            .catch(err=>{
                // console.log(err.response)
                this.httpErrorCodesHandling(err);
            })
      },
  },
};
</script>
<style lang="scss" scoped>
.register-email-verify{
    .content-wrapper{
            .remaining-time-wrapper{
                .time{
                    color:$secondary-color-2;
                }
            }
    }
}

</style>
