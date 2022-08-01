<template>
  <div class="phone-verify" v-if="show">
        <div class="content-wrapper" :class="{'arabic-content':local=='ar'}">
            <h3>{{lang[local].subTitle}}</h3>
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
                <Button :label="lang[local].doneBtn" @click.prevent="verifyPhone" :disabled="$v.$invalid" class="p-button-rounded primary-btn-gradient px-5" />
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
import httpErrorCodesHandling from '../../../mixins/httpErrors/httpErrorCodesHandling.js';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import axios from "axios";
export default {
  mixins:[phoneVerifyLang,backendDomains,httpErrorCodesHandling],
  components: {
        Button,
        InputText
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
        if(!localStorage.getItem('user')){
        next({name:"register"})
        return;
        }
        let user=JSON.parse(localStorage.getItem('user')); 
        if(!user.nationalNumber){
            localStorage.removeItem('user');
            localStorage.removeItem('codeSent')
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
        this.checkPhoneVerified();
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
      sendCode(){
      this.myAxios
                .post(`${this.backendBaseUrl}/send-verify-phone`,{phoneNumber:this.user.nationalNumber})
                .then(res=>{
                    console.log(res)
                    if(!localStorage.getItem('codeSent'))
                        localStorage.setItem('codeSent',true)
                    this.code='';
                    this.$v.$reset();
                })
                .catch(err=>{
                    //   console.log(err)
                    this.httpErrorCodesHandling(err);
                })
      },
      resend(){
          if(this.remainingTime==0){
            this.sendCode();
            this.setRemainTime();
          }
      },
      verifyPhone(){
        this.valid=true;
        this.myAxios
            .post(`${this.backendBaseUrl}/verify-phone`,{code:this.code,phoneNumber:this.user.nationalNumber})
            .then(res=>{
                console.log(res)
                localStorage.removeItem('user')
                localStorage.removeItem('codeSent')
                this.$router.push({name:'login'})
            })
            .catch(err=>{
                // console.log(err.response)
                if(err.response.status==401||err.response.data.not_valid_code)
                    this.valid=false;
                else
                    this.httpErrorCodesHandling(err);
            })
      },
      checkPhoneVerified(){
          this.show=false;
            this.myAxios
            .post(`${this.backendBaseUrl}/check-phone-verified`,{phoneNumber:this.user.nationalNumber})
            .then(res=>{
                // console.log(res.data.phone_verified)
                if(!res.data.email_verified){
                    this.$router.push({name:'registerEmailVerify'})
                }
                else if(res.data.phone_verified){
                    localStorage.removeItem('user');
                    localStorage.removeItem('codeSent');
                    this.$router.push({name:'login'})
                }
                else{
                    if(!localStorage.getItem('codeSent'))
                        this.sendCode()
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
.phone-verify{
    .content-wrapper{
            .remaining-time-wrapper{
                .time{
                    color:$secondary-color-2;
                }
            }
    }
}

</style>
