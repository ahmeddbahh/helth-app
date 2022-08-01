<template>
  <div class="phone-verify">
        <div class="content-wrapper" :class="{'arabic-content':local=='ar'}">
            <div class="back-icon d-flex justify-content-center align-items-center mb-3">
              <router-link :to="{name:'login'}">
                <i :class="lang[local].icon"  style="fontSize: 2rem"></i>
              </router-link>
              </div>
            <h2>{{lang[local].title}}</h2>
            <h4>{{lang[local].subTitle}}</h4>
            <h5 class="my-2">{{lang[local].txt}}</h5>
            <div class="my-2 w-75">
                <InputText 
                    v-model.trim="code"
                    @input="valid=true"
                    type="number" 
                    :placeholder="lang[local].codePlaceholder"
                    :class="{ 'border-error': $v.code.$invalid && $v.code.$dirty }"
                    @change="$v.code.$touch()"
                ></InputText>
                <div class="errors">
                    <small class="text-error" v-if="$v.code.$dirty && !$v.code.required">{{errors.requiredErorr(lang[local].code)}}</small>
                    <small class="text-error" v-if="$v.code.$dirty && !$v.code.numeric">{{errors.numericError(lang[local].code)}}</small>
                    <small class="text-error" v-if="!$v.code.valid">{{errors.inputError(lang[local].code)}}</small>
                </div>
            </div>
            <div class="remaining-time-wrapper my-4">
                <h5>{{lang[local].remain}} <span class="time">{{remainingTime}} {{lang[local].seconds}} </span></h5>
            </div>
            <div class="d-flex justify-content-between">
                <Button :label="lang[local].doneBtn" @click.prevent="done" :disabled="$v.$invalid" class="p-button-rounded primary-btn-gradient px-5" />
                <Button :disabled="remainingTime !=0" @click.prevent="resend" :label="lang[local].resendBtn"
                 class="p-button-rounded form-btn-submit px-5" 
                />
            </div>
        </div>
  </div>
</template>

<script>
import phoneVerifyLang from '../../../mixins/authentication/phoneVerifyLang.js';
import backendDomains from '../../helpers/backendDomains.js';
import {required,numeric} from "vuelidate/lib/validators";
import {requiredErorr,numericError,inputError}from "../../helpers/errors.js";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import axios from "axios";
export default {
  name: "login",
  mixins:[phoneVerifyLang,backendDomains],
  components: {
      InputText,
      Button,
  },
  data() {
    return {
      local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
      remainingTime:15,
      code:'',
      myAxios:'',
      user:'',
      valid:true,
      errors:{
          requiredErorr,
          numericError,
          inputError
      },
      lang:{
          en:{
              code:"Verfication Code"
          },
          ar:{
              code:"كود التفعيل"
          }
      },
      show:false,
    }
  },
  validations:{
      code:{
          required,
          numeric,
          valid(value,vm){
            if(!value)
                return true;
            return vm.valid
          }
      }
  },
  beforeRouteEnter(to, from, next) {
      if(!localStorage.getItem('foundedUser') || !localStorage.getItem('restPasswordCodeToken')){
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
        this.myAxios =axios.create({
            baseURL: `${this.backendBaseUrl}`,
        });
        this.user=JSON.parse(localStorage.getItem('foundedUser'));
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
      getCode(){
                this.myAxios
                .post("/reset-password-verification-phone",{phoneOrEmail:this.user.nationalNumber})
                .then(res=>{
                  if(res.data.restPasswordCodeToken){
                    localStorage.setItem('restPasswordCodeToken',res.data.restPasswordCodeToken)
                  }
                })
                .catch((err) => {   
                  console.log(err)
                })
      },
      resend(){
          if(this.remainingTime==0){
            this.getCode();
            this.setRemainTime();
          }
      },
      done(){
          if(!this.$v.$invalid){
              if(localStorage.getItem('restPasswordCodeToken')){
                  let data ={
                        restPasswordCodeToken:localStorage.getItem('restPasswordCodeToken'),
                        code:this.code
                    }
                  this.myAxios
                  .post("/reset-password-by-phone-check",data)
                  .then(res=>{
                      console.log(res)
                    if(res.data.validCodeToken){
                      localStorage.setItem('validCodeToken',res.data.validCodeToken)
                      this.$router.push({name:'resetPassword'})
                    }
                  })
                  .catch((err) => {   
                    console.log(err)
                    if(err.response.data.token_expired)
                        console.log("Display expire error")
                    if(err.response.data.not_valid_code)
                        this.valid=false;
                  })
              }
          }
          else
            console.log("Fuck You Bitch")
      },

  },
};
</script>
<style lang="scss" scoped>
.phone-verify{
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
            .remaining-time-wrapper{
                .time{
                    color:$secondary-color-2;
                }
            }
    }
}

</style>
