<template>
  <div class="reset-password">
        <div class="content-wrapper" :class="{'arabic-content':local=='ar'}">
            <div class="back-icon d-flex justify-content-center align-items-center mb-3">
              <router-link :to="{name:'login'}">
                <i :class="lang[local].icon"  style="fontSize: 2rem"></i>
              </router-link>
              </div>
            <h2>{{lang[local].title}}</h2>
            <h5 class="my-2">{{lang[local].txt}}</h5>
            <div class="password my-2 ">
                <label>{{lang[local].form.password.label}}</label>
                <Password 
                    :toggleMask="true" 
                    :placeholder="lang[local].form.password.placeholder"
                    :class="{'border-error':$v.password.$invalid && $v.password.$customDirty}"
                    v-model.trim="password"
                    @change="$v.password.$touch()" 
                >
                </Password>
                <div class="errors">
                    <small class="text-error" v-if="$v.password.$customDirty && !$v.password.required">
                        {{errors.requiredErorr(lang[local].form.password.placeholder)}}
                    </small>
                    <small class="text-error" v-else-if="$v.password.$customDirty && !$v.password.minlen">
                        {{errors.minLengthError(lang[local].form.password.placeholder,$v.password.$params.minlen.min)}}
                    </small>
                    <small class="text-error" v-else-if="$v.password.$customDirty && !$v.password.maxlen">
                        {{errors.maxLengthError(lang[local].form.password.placeholder,$v.password.$params.maxlen.max)}}
                    </small>
                </div>
            </div>
            <div class="confirm-password my-2">
                <label>{{lang[local].form.confirmPassword.label}}</label>
                <Password 
                :toggleMask="true" 
                :feedback="false"
                :placeholder="lang[local].form.confirmPassword.placeholder"
                :class="{'border-error':$v.confirmPassword.$invalid && $v.confirmPassword.$customDirty}"
                v-model.trim="confirmPassword"
                @change="$v.confirmPassword.$touch()" 
                >
                </Password>
                <div class="errors">
                    <small class="text-error" v-if="$v.confirmPassword.$customDirty && !$v.confirmPassword.required">
                        {{errors.requiredErorr(lang[local].form.password.placeholder)}}
                    </small>
                    <small class="text-error" v-else-if="$v.confirmPassword.$customDirty && !$v.confirmPassword.passwordMatched">
                        {{errors.sameAsError(lang[local].form.password.placeholder)}}
                    </small>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <Button :label="lang[local].doneBtn" @click.prevent="resetPassword" :disabled="$v.$invalid" class="p-button-rounded primary-btn-gradient mx-2"  />
                <Button :label="lang[local].cancelBtn" class="p-button-rounded form-btn-delete" />
            </div>
        </div>
  </div>
</template>

<script>
import resetPasswordLang from '../../../mixins/authentication/resetPasswordLang.js';
import {required,minLength,maxLength,sameAs} from "vuelidate/lib/validators";
import {requiredErorr,minLengthError,maxLengthError,sameAsError}from "../../helpers/errors.js";
import backendDomains from '../../helpers/backendDomains.js';
import axios from "axios";
import Password from 'primevue/password';
import Button from 'primevue/button';
export default {
  name: "login",
  mixins:[resetPasswordLang,backendDomains],
  components: {
      Password,
      Button,
  },
  data() {
    return {
      local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
      password:'',
      confirmPassword:'',
      errors:{
        requiredErorr,
        minLengthError,
        maxLengthError,
        sameAsError,
      }
    }
  },
  validations:{
      /**************************************************/
      password: {
          required,
          minlen: minLength(8),
          maxlen: maxLength(68),
      },
      /**************************************************/
      confirmPassword: {
          required,
          passwordMatched: sameAs("password"),
      },
  },
  watch:{
        password(){
            this.$v.password.$customDirty=true;
        },
        confirmPassword(){
            this.$v.confirmPassword.$customDirty=true;
        },
  },
  beforeRouteEnter(to, from, next) {
    const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      let token = urlParams.get('token')
      let uuid = urlParams.get('uuid')

      if((!token || !uuid) && (!localStorage.getItem('validCodeToken'))){
        next({name:"findAccount"})
        return;
      }
      next();
      
  },
  created(){
      // create axios instance
      this.myAxios =axios.create({
          baseURL: `${this.backendBaseUrl}`,
      });
  },
  methods:{
    resetPassword(){
      if(!this.$v.$invalid){
        if(localStorage.getItem('verificationType')=='email'){
          let data = {
              password:this.password,
              token:this.$route.query.token,
              uuid:this.$route.query.uuid
          }
            this.myAxios
            .post("/reset-password-by-email",data)
            .then(res=>{
                  if(res.data.success)
                    this.$router.push({name:"login"})
            })
            .catch((err) => {   
                console.log(err)
                if(err.response.data.token_expired)
                  this.$router.push({name:'verificationType'})
                else if(err.response.data.not_valid_token)
                  this.$router.push({name:'login'})
            })
        }
        else if(localStorage.getItem('verificationType')=='phone'){
          let data = {
              password:this.password,
              validCodeToken:localStorage.getItem('validCodeToken'),
          }
            this.myAxios
            .post("/reset-password-by-phone",data)
            .then(res=>{
                  if(res.data.success)
                    this.$router.push({name:"login"})
            })
            .catch((err) => {   
                console.log(err)
                if(err.response.data.token_expired)
                  this.$router.push({name:'verificationType'})
                else if(err.response.data.not_valid_token)
                  this.$router.push({name:'login'})
            })
        }
      }
      else 
        console.log("Fuck You Bitch")
    },
  }

};
</script>
<style lang="scss" scoped>
.reset-password{
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
    }
}

</style>
