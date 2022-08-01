<template>
  <div class="email-verify" v-if="user">
        <div class="content-wrapper" :class="{'arabic-content':local=='ar'}">
            <div class="back-icon d-flex justify-content-center align-items-center mb-3">
              <router-link :to="{name:'login'}">
                <i :class="lang[local].icon"  style="fontSize: 2rem"></i>
              </router-link>
              </div>
            <h2>{{lang[local].title}}</h2>
            <h4>{{lang[local].subTitle}}</h4>
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
import Button from 'primevue/button';
import axios from "axios";
export default {
  mixins:[emailVerifyLang],
  components: {
        Button,
  },
  data() {
    return {
      local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
      remainingTime:15,
      user:''
    }
  },
  beforeRouteEnter(to, from, next) {
      if(!localStorage.getItem('foundedUser')){
      next({name:"findAccount"})
      return;
      }
      let user=JSON.parse(localStorage.getItem('foundedUser')); 
      if(!user.email || !user.firstName || !user.secondName || !user.nationalNumber){
          localStorage.removeItem('foundedUser');
          next({name:"findAccount"});
          return;
      }
      next();
  },
  created(){
      // create axios instance
      this.myAxios =axios.create({
          baseURL: `${this.backendBaseUrl}`,
      });
    this.user=JSON.parse(localStorage.getItem('foundedUser'))
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
        if(this.user.email || this.user.nationalNumber){
                  this.myAxios
                  .post("/reset-password-verification-email",{phoneOrEmail:this.user.email})
                  .then(res=>{
                      console.log(res.data.success)
                  })
                  .catch((err) => {   
                    console.log(err)
                  })
        }
        else
        this.$router.push({name:'findAccount'})
      },
      resend(){
          if(this.remainingTime==0){
            this.sendEmail();
            this.setRemainTime();
          }
      },
  },
};
</script>
<style lang="scss" scoped>
.email-verify{
    .content-wrapper{
            .back-icon{
                width:40px;
                height:40px;
                border-radius: 50%;
                background-image: linear-gradient(160deg,$gradient-color-2,$gradient-color-1);
                i{
                  color: white;
                }
                
            }
            .remaining-time-wrapper{
                .time{
                    color:$secondary-color-2;
                }
            }
    }
}

</style>
