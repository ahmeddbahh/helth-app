<template>
  <div class="find-account">
        <div class="form-wrapper" :class="{'arabic-content':local=='ar'}">
            <div class="back-icon d-flex justify-content-center align-items-center mb-3">
              <router-link :to="{name:'login'}" tag="div" class="d-flex justify-content-center align-items-center w-100 h-100">
                <i :class="lang[local].icon"></i>
              </router-link>
            </div>
            <h2>{{lang[local].title}}</h2>
            <h5 class="my-2">{{lang[local].txt}}</h5>
            <div class="email my-2">
                <label >{{lang[local].form.email.label}}</label>
                    <InputText 
                        type="text"  
                        :placeholder="lang[local].form.email.placeholder" 
                        :class="{'border-error': $v.data.phoneOrEmail.$invalid && $v.data.phoneOrEmail.$dirty }"
                        v-model.trim="data.phoneOrEmail"
                        @change="$v.data.phoneOrEmail.$touch()"
                    ></InputText>
                <div class="errors">
                    <small class="text-error" v-if="$v.data.phoneOrEmail.$dirty && !$v.data.phoneOrEmail.required">{{errors.requiredErorr(lang[local].form.email.label)}}</small>
                    <small class="text-error"  v-else-if="$v.data.phoneOrEmail.$dirty && !$v.data.phoneOrEmail.valid">{{errors.inputError(lang[local].form.email.label)}}</small>
                    <small class="text-error" v-if="notExist"> {{errors.notFoundError(lang[local].form.email.label)}}</small>
                </div>
            </div>
            <div class="create-btn d-flex justify-content-end">
                <div><Button :label="lang[local].nextBtn" :disabled="$v.$invalid" @click="findUser" class="p-button-rounded primary-btn-gradient" /></div>
            </div>
        </div>
  </div>
</template>

<script>
import findAccountLang from '../../../mixins/authentication/findAccountLang.js';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import {required} from "vuelidate/lib/validators";
import {requiredErorr,inputError,notFoundError}from "../../helpers/errors.js";
import backendDomains from '../../helpers/backendDomains.js';
import axios from "axios";
export default {
  mixins:[findAccountLang,backendDomains],
  components: {
        InputText,
        Button,
  },
    data() {
    return {
        data:{
            phoneOrEmail: '',
        },
        myAxios:"",
        notExist:false,
        local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
        errors:{
            requiredErorr,
            inputError,
            notFoundError
        }
    };
    },
    validations:{
        data:{
            phoneOrEmail:{
            required,
            valid(value){
                if(!value)
                    return true
                else if (value.search( /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}/g) != -1)
                    return true
                else if (value.search( /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/gi) != -1)
                    return true
                else
                    return false
                },
            },

        }
    },
    created(){
        // create axios instance
        this.myAxios =axios.create({
            baseURL: `${this.backendBaseUrl}`,
        });
    },
    methods:{
        findUser(){
            if(!this.$v.$invalid){
                this.myAxios
                .post("/find-user",this.data)
                .then(res=>{
                    let user = res.data.user;
                    localStorage.setItem('foundedUser',JSON.stringify(user))
                    this.$router.push({name:"isYou"})
                })
                .catch((err) => {   
                    this.notExist = false ;
                    if(err.response.data.not_exist || err.respose.status==404){
                        this.notExist = true ;
                    }
                })
            }
            else{
                console.log("fuck u bitch")
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.find-account {
    .form-wrapper{
            .back-icon{
                width:40px;
                height:40px;
                border-radius: 50%;
                background-image: linear-gradient(160deg,$gradient-color-2,$gradient-color-1);
                i{
                  color: white !important;
                  font-size: 35px;
                }
                
            }
    }
}

</style>
