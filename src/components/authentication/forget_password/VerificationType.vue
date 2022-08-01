<template>
  <div class="verification-type">
        <div class="content-wrapper" :class="{'arabic-content':local=='ar'}">
            <div class="back-icon d-flex justify-content-center align-items-center mb-3">
              <router-link :to="{name:'isYou'}">
                <i :class="lang[local].icon"  style="fontSize: 2rem"></i>
              </router-link>
              </div>
            <h2>{{lang[local].title}}</h2>
            <h5 class="my-2">{{lang[local].txt}}</h5>
            <div class="account-info">
                    <h5 class="my-2">
                      <Checkbox v-model="emailChecked" value="" :binary="true" class="circle" />
                      <span class="mx-1">{{encrypteEmail(user.email)}}</span>
                    </h5>
                    <h5 class="my-2">
                      <Checkbox v-model="phoneChecked" :binary="true" class="circle" />
                      <span class="mx-1">{{encryptePhone(user.nationalNumber)}}</span>
                    </h5>
            </div>
            <div class="create-btn d-flex justify-content-end">
                <div class="mt-4">
                    <Button :label="lang[local].sendBtn" :disabled="!emailChecked && !phoneChecked" @click="goNext" class="p-button-rounded primary-btn-gradient mx-3" />
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import verificationTypeLang from '../../../mixins/authentication/verificationTypeLang.js';
import backendDomains from '../../helpers/backendDomains.js';
import axios from "axios";
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
export default {
  mixins:[verificationTypeLang,backendDomains],
  components: {
        Button,
        Checkbox
  },
  data() {
    return {
      local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
      emailChecked:false,
      phoneChecked:false,
      user:'',
    };
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
  watch:{
    emailChecked(){
      if(this.emailChecked)
            this.phoneChecked=false;
      },
      phoneChecked(){
        if(this.phoneChecked)
             this.emailChecked=false;
      },
  },
  methods:{
    encrypteEmail(email){
      let term1 = email.split('@')[0]
      term1=term1.slice(0, 3) + term1.slice(3).replace(/.(?=..)/g, '*')
      let term2 =email.split('@')[1]
      return `${term1}@${term2}`

    },
    encryptePhone(phone){
      return phone= phone.slice(0, 4) + phone.slice(4).replace(/.(?=..)/g, '*');
    },
    goNext(){
      if(this.user.email || this.user.nationalNumber){
         if(this.emailChecked){
                this.myAxios
                .post("/reset-password-verification-email",{phoneOrEmail:this.user.email})
                .then(res=>{
                    if(res.data.success){
                      localStorage.setItem('verificationType','email')
                      this.$router.push({name:"emailVerify"})
                    }
                })
                .catch((err) => {   
                  console.log(err)
                })
         }
         else if(this.phoneChecked){
                this.myAxios
                .post("/reset-password-verification-phone",{phoneOrEmail:this.user.nationalNumber})
                .then(res=>{
                  if(res.data.restPasswordCodeToken){
                    localStorage.setItem('verificationType','phone')
                    localStorage.setItem('restPasswordCodeToken',res.data.restPasswordCodeToken);
                    this.$router.push({name:"phoneVerify"})
                  }
                })
                .catch((err) => {   
                  console.log(err)
                })
         }
      }
      else
      this.$router.push({name:'findAccount'})
    },
  },
};
</script>
<style lang="scss" scoped>
.verification-type{
    .content-wrapper{
            .back-icon{
                width:40px;
                height:40px;
                border-radius: 50%;
                background-image: linear-gradient(160deg,$gradient-color-2,$gradient-color-1);
                i{
                  color: white !important;
                }
                
            }
            .account-info{
                .p-checkbox{
                    display: inline-block !important;
                }
                .p-checkbox.p-checkbox-box{
                    border-radius: 50% !important;
                }
            }
    }
}

</style>
